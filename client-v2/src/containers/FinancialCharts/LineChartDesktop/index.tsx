/**
 * @file FinLineChart: Line chart for dekstop views
 */

/**
 * TODO: [ANKIT] [MONORAIL - https://monorail.pointz.in/p/fi-app/issues/detail?id=52105] Need to refactor this component code
 * Currently in this component we are keeping most of the duplicate code that is already presents in LineChat Component.
 * The existing FinLineChart Component has most of the code related to the mobile app, due to this, the graph tooltip does
 * not work as expected on desktop screens.
 * To fix this we created another component that contains all the code from FinLineChart component
 * and on the top of this we created the new Tooltip required for the desktop use case.
 */

import React, { memo, useEffect, useRef, useState } from 'react';
import {
    createChart, ColorType, LineWidth, LastPriceAnimationMode,
} from 'lightweight-charts';
import styled from 'styled-components';

import { convertEpochToDateYearFormat, convertEpochToDatetime } from '../../../utils/time';
import { convertDateStringToFormat } from '../../../utils/date';
import Colors from '../../../Themes/Colors';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { DeepPartial } from '@/interfaces/graph';
import { ClientPlatform } from '@/interfaces/mobile';
import { OutlineNone, UserSelectNone } from '../../../components/styled';

import { useWindowDimensions } from '../../../hooks';

import { convertDataToParsedJson } from '../utils';
import { DATE, TIME_PERIOD, crosshairConfig, gridConfig } from '../constants';
import { createTooltip, handleSingleTap } from '../tooltip';
import { createXAxis, removeXAxis } from '../axis';

import './style.scss';

// Styles
const ParentContainer = styled(OutlineNone)<{ hasChartJsCommand?: boolean }>`
    background-color: ${(props) => props.theme.color.SHARK};
    font-family: 'Gilroy';
    height: ${((props) => (props.hasChartJsCommand ? 'auto' : '100vh'))};
`;

const ChartContainer = styled(OutlineNone)`
    margin: 0px 18px;
    ${UserSelectNone}
`;

const Container = styled(OutlineNone)`
    width: 100%;
    height: 71vh;

    @media ${Device.desktop} {
        height: 600px;
    }
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

const LineChartDesktop = (props: any) => {
    const {
        // eslint-disable-next-line react/prop-types
        initChartJsCommand, setChartDataJsCommand, updateChartDataJsCommand,
    } = props;

    const hasChartJsCommand = initChartJsCommand || setChartDataJsCommand || updateChartDataJsCommand;

    const { width } = useWindowDimensions();

    const [chartData, setChartData] = useState([]);
    const [chartProperties, setChartProperties] = useState({
        chartLineColor: Colors.OLIVINE,
        chartBgColor: Colors.SHARK,
        dataStartTime: DATE.startTime,
        dataEndTime: DATE.endTime,
        clientPlatform: ClientPlatform.WEB,
        shouldUpdateRealTime: true,
        timePeriod: '1D',
    });

    const CHART_BACKGROUND_COLOR = chartProperties.chartBgColor;
    const CHART_LINE_COLOR = chartProperties.chartLineColor;
    const CHART_LINE_WIDTH = 1.5;
    const CHART_TEXT_COLOR = Colors.SUVA_GREY;
    const TOOLTIP_WIDTH = 100;

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
        const chart = chartContainerRef.current && createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: CHART_BACKGROUND_COLOR },
                textColor: CHART_TEXT_COLOR,
                fontFamily: 'Gilroy',
                fontSize: 10,
            },
            width: chartContainerRef.current.clientWidth - rightOffset,
            handleScale: false,
            handleScroll: false,
            trackingMode: { exitMode: 1 }, // ExitMode:1 - tooltip will persist. ExitMode:0 - tooltip will be removed once finger is removed from screen. Ref -https://tradingview.github.io/lightweight-charts/docs/api/enums/TrackingModeExitMode
            rightPriceScale: { entireTextOnly: true, visible: false },
            leftPriceScale: {
                visible: false,
            },
            timeScale: {
                visible: false,
                // If real time data is shown than add offset to the chart so that animation is visible properly.
                rightOffset: chartProperties.shouldUpdateRealTime ? 15 : 0,
            },
        });

        const modifiedCrosshairConfig = {
            ...crosshairConfig,
            vertLine: {
                ...crosshairConfig.vertLine,
                visible: true,
            },
        };

        /**
         * The Trading Library provides a long press event that shows a tooltip line generated by the library itself.
         * In the desktop view, we apply a custom crosshair configuration (`modifiedCrosshairConfig`) to customize the tooltip line for desktop.
         * In the mobile view , we use the default crosshair configuration provided by the Trading Library (`crosshairConfig`)
         * which does not display the tooltip line.
         * The grid configuration (`gridConfig`) is applied, which remains the same for both desktop and mobile.
         */
        if (width && width >= WINDOW_SIZE.DESKTOP) {
            chart?.applyOptions({
                crosshair: modifiedCrosshairConfig,
                grid: gridConfig,
            });
        } else {
            chart?.applyOptions({
                crosshair: crosshairConfig,
                grid: gridConfig,
            });
        }

        chart?.timeScale().fitContent();

        const handleResize = () => {
            chart?.applyOptions({ width: chartContainerRef?.current?.clientWidth && chartContainerRef?.current?.clientWidth - rightOffset });
        };

        // USE FOR LINE CHART
        const newSeries = chart?.addLineSeries({
            color: CHART_LINE_COLOR,
            lineWidth: CHART_LINE_WIDTH as DeepPartial<LineWidth>,
            priceLineVisible: false,
            lastValueVisible: true,
            visible: true,
            lastPriceAnimation: chartProperties.shouldUpdateRealTime ? LastPriceAnimationMode.Continuous : LastPriceAnimationMode.Disabled,
        });

        newSeries?.setData(chartData);

        /**
         * Create x axis  for chart.
         */
        setTimeout(() => {
            createXAxis(chartData, chartProperties, chart);
        }, 100);

        /**
         * Handler for touch events.
         */
        const handleTouchEvent = (e: any) => {
            handleSingleTap(e, chart, chartData, chartContainerRef, newSeries, chartProperties);
        };

        const container = chartContainerRef.current;

        // Create and style the tooltip html element
        const toolTip = document.createElement('div');

        const handleChartCrosshairMove = (param: any) => {
            if (!param.point) {
                toolTip.style.display = 'none';
                return;
            }

            toolTip.className = 'line-chart-tooltip';

            const chartValue = (chartData as { time: number, value: any, label: any }[]).find((data) => data.time === param.time);

            if (!chartValue) {
                toolTip.style.display = 'none';
                return;
            }

            const price = chartValue?.value;
            const timestamp = chartValue?.time;
            const label = chartValue?.label;

            const datetime = chartProperties.timePeriod === TIME_PERIOD.ONE_DAY
              || chartProperties.timePeriod === TIME_PERIOD.ONE_WEEK
              || chartProperties.timePeriod === TIME_PERIOD.ONE_MONTH
                ? convertEpochToDatetime(timestamp)
                : convertEpochToDateYearFormat(timestamp);

            toolTip.innerHTML = `<div class='line-chart-price-text'>${label}${price}</div><div class='line-chart-time-text'>${datetime}</div>`;

            const coordinate = newSeries?.priceToCoordinate(price);
            let shiftedCoordinate = param.point.x - TOOLTIP_WIDTH / 2;

            if (coordinate === null) {
                return;
            }

            container?.clientWidth && (shiftedCoordinate = Math.max(
                0,

                Math.min(container?.clientWidth - TOOLTIP_WIDTH, shiftedCoordinate),
            ));

            toolTip.style.display = 'block';
            toolTip.style.left = `${shiftedCoordinate}px`;
        };

        if (width && width >= WINDOW_SIZE.DESKTOP) {
            chart?.subscribeCrosshairMove(handleChartCrosshairMove);
            container?.appendChild(toolTip);
        }

        window.addEventListener('resize', handleResize);
        container?.addEventListener('touchstart', handleTouchEvent);
        container?.addEventListener('touchmove', handleTouchEvent);

        return () => {
            window.removeEventListener('resize', handleResize);
            container?.removeEventListener('touchstart', handleTouchEvent);
            container?.removeEventListener('touchmove', handleTouchEvent);

            chart?.remove();
        };
    }, [chartData, chartProperties, CHART_BACKGROUND_COLOR, CHART_TEXT_COLOR, CHART_LINE_COLOR]);

    // Function to set chart data
    const setData = (receivedData: any) => {
        const parsedJSON = convertDataToParsedJson(receivedData);
        setChartData(parsedJSON);
        const xAxisElement = document.getElementById('xAxis');
        removeXAxis(xAxisElement);
    };

    // Function to set line chart data
    const setLineChartData = (receivedData:Array<object>) => {
        setData(receivedData);
    };

    // Function to update the chart values
    const updateNewData = (stringifiedNewData: object) => {
        const newData = convertDataToParsedJson(stringifiedNewData);
        setChartData((prevChartData: any) => {
            // Check if the newData's time already exists in the prevChartData
            const isTimeAlreadyExists = prevChartData.some((item: any) => item.time === newData.time);

            // If the time already exists, return the previous chart data without making any changes
            if (isTimeAlreadyExists) return prevChartData;

            // If the time doesn't exist, add the newData to the previous chart data and return the updated chart data
            return [...prevChartData, newData];
        });
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
        window.setLineChartData = setLineChartData;
        window.updateNewData = updateNewData;
        window.setInitialProperties = setInitialProperties;
        // They need to be registered to window object only 1 time hence have not kept in dependency array
    }, []);

    useEffect(() => {
        if (initChartJsCommand) {
            // TODO: [ANKIT] [SECURITY ISSUE] [MONORAIL- https://monorail.pointz.in/p/fi-app/issues/detail?id=51511]: Need to replace 'eval' with a safer alternative to mitigate possible code injection attacks.
            // eslint-disable-next-line no-eval
            eval(initChartJsCommand);
        }

        if (setChartDataJsCommand) {
            // eslint-disable-next-line no-eval
            eval(setChartDataJsCommand);
        }

        if (updateChartDataJsCommand) {
            // eslint-disable-next-line no-eval
            eval(updateChartDataJsCommand);
        }
    }, [initChartJsCommand, setChartDataJsCommand, updateChartDataJsCommand]);

    return (
        <ParentContainer hasChartJsCommand={hasChartJsCommand}>
            <ChartContainer>
                <div id='overlay' className='line-chart-overlay'>
                    <Container ref={pageRef} />
                    <>
                        <DashedLine />
                        <div id='xAxis' />
                    </>
                </div>
            </ChartContainer>
        </ParentContainer>
    );
};

export default memo(LineChartDesktop);
