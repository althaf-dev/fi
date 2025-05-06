/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
/**
* @file FinMultiChart: Multi Line chart for financial views
*/

import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, LineWidth } from 'lightweight-charts';
import styled from 'styled-components';

import Colors from '../../../Themes/Colors';
import { DeepPartial } from '../../../testing/test-utils';
import { ClientPlatform } from '../../../interfaces/mobile';

import { removeEscapeCharacter, retrieveTooltipInnerHTML, triggerMobileEvents } from '../utils';
import ErrorHandler from '../ErrorHandler';
import { ERROR, US_STOCKS_EVENTS } from '../constants';

import './style.scss';
import { createRatioChartTooltip, handleRatioChartSingleTap } from '../tooltip';
import { OutlineNone, UserSelectNone } from '../../../components/styled';

const ParentContainer = styled(OutlineNone)<{ bgColor: any }>`
    ${UserSelectNone}
    background-color: ${(props) => props.bgColor};
    font-family: 'Gilroy';
    height: 100vh; 
`;

const ChartContainer = styled(OutlineNone)`
    right: 0px;
    top: 0;
    pointer-events: none;
    ${UserSelectNone}
`;

const Container = styled(OutlineNone)`
    width: 100%;
    height: 100vh;
`;

// eslint-disable-next-line no-var
declare var window: any;

const rightPriceScaleConfig = (showYAxis) => ({
    entireTextOnly: true, borderVisible: false, drawTicks: false, visible: showYAxis,
});

const gridConfig = (showHorizontalLines) => ({
    vertLines: { visible: false },
    horzLines: { visible: showHorizontalLines, color: Colors.CATSKILL_WHITE },
});

const crosshairConfig = {
    vertLine: { labelVisible: false, style: 0, visible: false },
    horzLine: { visible: false, labelVisible: false },
};

const localizationConfig = {
    priceFormatter: (p) => `${p.toFixed(2)}`,
};

const timeScaleConfig = (firstChartData, secondChartData) => ({
    timeVisible: true,
    secondsVisible: false,
    borderColor: Colors.CATSKILL_WHITE,
    tickMarkFormatter: (time) => {
        const chartDataFirstIndex = firstChartData.data.findIndex((d) => d.time === time);

        if (chartDataFirstIndex < 0) {
            const secondChartDataIndex = secondChartData.data.findIndex((d) => d.time === time);
            if (secondChartDataIndex >= 0) {
                return secondChartData.data[secondChartDataIndex].xAxisValue;
            }

            return null;
        }

        return firstChartData.data[chartDataFirstIndex].xAxisValue;
    },
});

const FinMultiChart = (props) => {
    /**
    * MultiChart shows 2 line series.
    * firstChartData - Binds line 1 data to the chart.
    * secondChartData - Binds 2nd line data to the chart.
    */

    const { clientPlatform } = props;

    const [firstChartData, setFirstChartData] = useState({ graphLineColor: Colors.WHITE, data: [] });
    const [secondChartData, setSecondChartData] = useState({ graphLineColor: Colors.WHITE, data: [] });
    const [chartError, setChartError] = useState(null);

    const [chartProperties, setChartProperties] = useState({
        chartBgColor: Colors.WHITE,
        showHorizontalLines: true,
        showYAxis: true,
        clientPlatform: ClientPlatform.WEB,
    });
    const backgroundColor = chartProperties.chartBgColor;
    const color = Colors.PUCE;
    const lineWidth = 2.5;
    const textColor = Colors.BOMBAY_GREY;

    const chartContainerRef = useRef<HTMLInputElement>();
    const pageRef = (node) => {
        if (node) chartContainerRef.current = node;
    };

    const setData = (receivedData, fnName) => {
        setChartError(null);
        setFirstChartData({ graphLineColor: Colors.WHITE, data: [] });
        setSecondChartData({ graphLineColor: Colors.WHITE, data: [] });
        const { newChartData1, newChartData2 } = receivedData;
        console.log('Data received: ', JSON.stringify(receivedData));

        try {
            const modifiedData = removeEscapeCharacter(newChartData1);
            const parsedJSON = JSON.parse(modifiedData);
            setFirstChartData(parsedJSON);
        } catch (error) {
            console.log(`${fnName} ~ error in receivedData`, JSON.stringify(error));
            setChartError(error.message);
        }

        if (newChartData2) {
            try {
                const modifiedData2 = removeEscapeCharacter(newChartData2);
                const parsedJSON2 = JSON.parse(modifiedData2);
                setSecondChartData(parsedJSON2);
            } catch (error) {
                console.log(`${fnName} ~ error in receivedData`, JSON.stringify(error));
                setChartError(error.message);
            }
        }
    };

    const setMultiChartData = (receivedData) => {
        setData(receivedData, 'setMultiChartData');
    };

    const setFreshChartData = (receivedData) => {
        setData(receivedData, 'setFreshChartData');
    };

    // Set Initial properties - chart background color, show horizontal lines, show Y axis, client platform
    const setInitialProperties = (properties) => {
        setChartProperties({
            chartBgColor: properties.chartBgColor,
            showHorizontalLines: properties.showHorizontalLines,
            showYAxis: properties.showYAxis,
            clientPlatform: properties.clientPlatform,
        });
    };

    useEffect(() => {
        const triggerMultiChartPageLoad = triggerMobileEvents(US_STOCKS_EVENTS.multiChartReady, clientPlatform);

        window.addEventListener('load', triggerMultiChartPageLoad);
        return () => window.removeEventListener('load', triggerMultiChartPageLoad);
    }, []);

    useEffect(() => {
        window.setFreshChartData = setFreshChartData;
        window.setMultiChartData = setMultiChartData;
        window.setInitialProperties = setInitialProperties;
        // They need to be registered to window object only 1 time hence have not kept in dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        createRatioChartTooltip(chartContainerRef, chartProperties.chartBgColor, firstChartData.graphLineColor, secondChartData?.graphLineColor);

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
                fontFamily: 'Gilroy',
                fontSize: 10,
            },
            width: chartContainerRef.current.clientWidth,
            handleScale: false,
            handleScroll: false,
            trackingMode: { exitMode: 1 },
            rightPriceScale: rightPriceScaleConfig(chartProperties.showYAxis),
            grid: gridConfig(chartProperties.showHorizontalLines),
            crosshair: crosshairConfig,
            localization: localizationConfig,
            timeScale: timeScaleConfig(firstChartData, secondChartData),
        });
        chart.timeScale().fitContent();

        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
        };

        // USE FOR LINE CHART
        const newSeries = chart.addLineSeries({
            color: firstChartData.graphLineColor, lineWidth: lineWidth as DeepPartial<LineWidth>, priceLineVisible: false, lastValueVisible: false,
        });

        const secondNewSeries = secondChartData.data.length > 0 ? chart.addLineSeries({
            color: secondChartData.graphLineColor, lineWidth: lineWidth as DeepPartial<LineWidth>, priceLineVisible: false, lastValueVisible: false,
        }) : null;

        try {
            newSeries.setData(firstChartData.data);
            secondChartData.data.length > 0 && secondNewSeries.setData(secondChartData.data);
        } catch (error) {
            console.log('Multi Chart ~ error', JSON.stringify(error.message));
            setChartError(error.message);
        }

        /**
         * Handler for touch events.
         */
        const handeTouchEvent = (e) => {
            handleRatioChartSingleTap(e, chart, firstChartData, newSeries, secondChartData, secondNewSeries, chartContainerRef?.current?.clientWidth);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('touchstart', handeTouchEvent);
        window.addEventListener('touchmove', handeTouchEvent);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('touchstart', handeTouchEvent);
            window.removeEventListener('touchmove', handeTouchEvent);

            chart.remove();
        };
    },
    [firstChartData, secondChartData, backgroundColor, textColor, color, lineWidth, chartProperties]);

    const errorHandleSection = (
        <ErrorHandler
            message={ERROR.message}
            onClick={() => triggerMobileEvents(US_STOCKS_EVENTS.reloadLineChart, clientPlatform)}
        />
    );

    const containerSection = (
        <ChartContainer><Container ref={pageRef} /></ChartContainer>
    );

    return (
        <ParentContainer bgColor={chartProperties.chartBgColor}>
            {chartError ? errorHandleSection : containerSection}
        </ParentContainer>
    );
};

export default FinMultiChart;
