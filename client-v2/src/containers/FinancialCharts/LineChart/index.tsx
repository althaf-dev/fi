/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable, @typescript-eslint/no-unused-vars, react/prop-types */
/**
 * @file FinLineChart: Line chart for financial views
 */

import React, { useEffect, useRef, useState } from 'react';
import {
    createChart, ColorType, LineWidth, LastPriceAnimationMode,
} from 'lightweight-charts';
import styled from 'styled-components';

import Colors from '../../../Themes/Colors';
import { ClientPlatform } from '@/interfaces/mobile';
import { OutlineNone, UserSelectNone } from '../../../components/styled';
import { convertDateStringToFormat } from '../../../utils/date';
import { DeepPartial } from '@/interfaces/graph';
import { convertDataToParsedJson, triggerMobileEvents } from '../utils';
import ErrorHandler from '../ErrorHandler';
import {
    DATE, ERROR, US_STOCKS_EVENTS, crosshairConfig, gridConfig,
} from '../constants';
import { createTooltip, handleSingleTap, tooltipInitializationFromMaxValue } from '../tooltip';
import { createXAxis, removeXAxis } from '../axis';

import './style.scss';

// Styles
const ParentContainer = styled(OutlineNone)`
    font-family: 'Gilroy';
    height: 100vh;
`;

const ChartContainer = styled(OutlineNone)`
    margin: 0px 18px;
    ${UserSelectNone}
`;

const Container = styled(OutlineNone)`
    width: 100%;
    height: 78vh;
`;

const DashedLine = styled.div`
    background-image: linear-gradient(to right, ${(props) => props.theme.color.LIGHT_GREY} 2px, ${(props) => props.theme.color.YELLOW} 0%);
    background-position: top;
    background-size: 6px 1px;
    background-repeat: repeat-x;
    height: 10px;
    width: 100%;
`;

// eslint-disable-next-line no-var
declare var window: any;

const FinLineChart = (props: any) => {
    const { clientPlatform } = props;

    const [chartData, setChartData] = useState([]);
    const [chartError, setChartError] = useState(null);
    const [chartProperties, setChartProperties] = useState({
        chartLineColor: Colors.OLIVINE,
        chartBgColor: Colors.SHARK,
        dataStartTime: DATE.startTime,
        dataEndTime: DATE.endTime,
        clientPlatform: ClientPlatform.WEB,
        shouldUpdateRealTime: true,
        timePeriod: '1D',
    });
    const backgroundColor = chartProperties.chartBgColor;
    const color = chartProperties.chartLineColor;
    const lineWidth = 1.5;
    const textColor = Colors.SUVA_GREY;

    const chartContainerRef = useRef<HTMLInputElement>();
    const pageRef = (node: any) => {
        if (node) chartContainerRef.current = node;
    };

    useEffect(() => {
        createTooltip(chartContainerRef, chartProperties);

        /**
         * Logic to calculate width of screen other than chart in 1 day. Calculate the progress with the help of chart data last item
         * and then calculate the right offset for the chart. Right offset will be reduced from total width and we will get chart width.
         */
        let rightOffset = 0;
        if (chartData.length > 0) {
            const formattedStartDate = convertDateStringToFormat(chartProperties.dataStartTime);
            const formattedEndDate = convertDateStringToFormat(chartProperties.dataEndTime);

            const totalTime = Date.parse(formattedEndDate) / 1000 - Date.parse(formattedStartDate) / 1000;
            const completedTime = (chartData as { time: number }[])[(chartData as { time: number }[]).length - 1].time
             - Date.parse(formattedStartDate) / 1000;

            const progress = completedTime / (totalTime / 100);
            if (chartContainerRef.current) {
                rightOffset = ((chartContainerRef.current.clientWidth / 100) * (100 - progress));
            }
        }

        /**
         * Create chart and define the options.
         */
        const chart = createChart(chartContainerRef?.current || '', {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
                fontFamily: 'Gilroy',
                fontSize: 10,
            },
            width: chartContainerRef.current && chartContainerRef.current.clientWidth - rightOffset,
            handleScale: false,
            handleScroll: false,
            trackingMode: { exitMode: 1 }, // ExitMode:1 - tooltip will persist. ExitMode:0 - tooltip will be removed once finger is removed from screen. Ref -https://tradingview.github.io/lightweight-charts/docs/api/enums/TrackingModeExitMode
            rightPriceScale: { entireTextOnly: true, visible: false },
            leftPriceScale: {
                visible: false,
            },
            grid: gridConfig,
            crosshair: crosshairConfig,
            timeScale: {
                visible: false,
                // If real time data is shown than add offset to the chart so that animation is visible properly.
                rightOffset: chartProperties.shouldUpdateRealTime ? 15 : 0,
            },
        });

        chart.timeScale().fitContent();

        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current && (chartContainerRef.current.clientWidth - rightOffset) });
        };

        // USE FOR LINE CHART
        const newSeries = chart.addLineSeries({
            color,
            lineWidth: lineWidth as DeepPartial<LineWidth>,
            priceLineVisible: false,
            lastValueVisible: true,
            visible: true,
            lastPriceAnimation: chartProperties.shouldUpdateRealTime ? LastPriceAnimationMode.Continuous : LastPriceAnimationMode.Disabled,
        });

        try {
            newSeries.setData(chartData);
        } catch (error: any) {
            setChartError(error.message);
        }

        /**
         * Create x axis  for chart.
         */
        setTimeout(() => {
            createXAxis(chartData, chartProperties, chart);
        }, 100);

        /**
         * Handler for touch events.
         */
        const handeTouchEvent = (e: any) => {
            handleSingleTap(e, chart, chartData, chartContainerRef, newSeries, chartProperties);
        };

        /**
         * Initialize chart tooltip from the latest chart data point.
         */
        tooltipInitializationFromMaxValue(chart, chartData, chartContainerRef, newSeries, chartProperties);

        window.addEventListener('resize', handleResize);
        window.addEventListener('touchstart', handeTouchEvent);
        window.addEventListener('touchmove', handeTouchEvent);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('touchstart', handeTouchEvent);
            window.removeEventListener('touchmove', handeTouchEvent);

            chart.remove();
        };
    }, [chartData, backgroundColor, textColor, color, lineWidth, chartProperties]);

    // Function to set chart data
    const setData = (receivedData: any, fnName: any) => {
        setChartError(null);
        try {
            const parsedJSON = convertDataToParsedJson(receivedData);
            setChartData(parsedJSON);
            const xAxisElement = document.getElementById('xAxis');
            removeXAxis(xAxisElement);
        } catch (error: any) {
            setChartError(error.message);
            console.error(`${fnName} ~ error in receivedData`, JSON.stringify(error));
        }
    };

    // Function to set chart data - added for backward compatibilty
    const setFreshData = (receivedData:NonNullable<unknown>) => {
        setData(receivedData, 'setFreshData');
    };

    // Function to set line chart data
    const setLineChartData = (receivedData:NonNullable<unknown>) => {
        setData(receivedData, 'setLineChartData');
    };

    // Function to update the chart values
    const updateNewData = (stringifiedNewData: NonNullable<unknown>) => {
        setChartError(null);
        try {
            const newData = convertDataToParsedJson(stringifiedNewData);
            setChartData((prevChartData: any) => {
                // Check if the newData's time already exists in the prevChartData
                const isTimeAlreadyExists = prevChartData.some((item: any) => item.time === newData.time);

                // If the time already exists, return the previous chart data without making any changes
                if (isTimeAlreadyExists) return prevChartData;

                // If the time doesn't exist, add the newData to the previous chart data and return the updated chart data
                return [...prevChartData, newData];
            });
        } catch (error: any) {
            setChartError(error.message);
            console.error('updateNewData ~ error in receivedData', JSON.stringify(error));
        }
    };

    // Set Initial properties - chart line color, background color, start datetime, end dateTime, client platform
    const setInitialProperties = (properties: any) => {
        setChartProperties({
            chartLineColor: properties.chartLineColor,
            chartBgColor: properties.chartBgColor,
            dataStartTime: properties.dataStartTime,
            dataEndTime: properties.dataEndTime,
            clientPlatform: properties.clientPlatform,
            shouldUpdateRealTime: properties.shouldUpdateRealTime,
            timePeriod: properties.timePeriod,
        });
    };

    useEffect(() => {
        const triggerLineChartPageLoad = triggerMobileEvents(US_STOCKS_EVENTS.lineChartReady, clientPlatform);

        window.addEventListener('load', triggerLineChartPageLoad);
        return () => window.removeEventListener('load', triggerLineChartPageLoad);
    }, []);

    useEffect(() => {
        window.setFreshData = setFreshData;
        window.setLineChartData = setLineChartData;
        window.updateNewData = updateNewData;
        window.setInitialProperties = setInitialProperties;
        // They need to be registered to window object only 1 time hence have not kept in dependency array
    }, []);

    const errorHandleSection = (
        <ErrorHandler
            message={ERROR.message}
            onClick={() => triggerMobileEvents(US_STOCKS_EVENTS.reloadLineChart, clientPlatform)}
        />
    );

    const containerSection = (
        <ChartContainer>
            <div id='overlay' className='line-chart-overlay'>
                <Container ref={pageRef} />
                <>
                    <DashedLine />
                    <div id='xAxis' />
                </>
            </div>
        </ChartContainer>
    );

    return (
        <ParentContainer style={{ backgroundColor: chartProperties.chartBgColor }}>
            {chartError ? errorHandleSection : containerSection}
        </ParentContainer>
    );
};

export default FinLineChart;
