/**
 * @file chartJsCommonFunctions
 * A collection of utility functions for configuring graphs.
 */
import {
    GraphDatasetsArgs, GraphScalesDataArgs, GraphOptionsArgs, GraphDatasetsResult, GraphScalesResult,
    GraphOptionsResult, TooltipGraphOptionsArgs, TooltipGraphOptionsResult,
} from '@/interfaces/graph';

/**
 * Constructs the datasets configuration for a graph.
 */
const getGraphDatasets = (args: GraphDatasetsArgs): GraphDatasetsResult => {
    const {
        data, borderColor, backgroundColor, label = false, fill = true, borderWidth = 1, tension = 0.1, pointRadius = 0, borderRadius,
    } = args;

    return {
        label,
        data,
        fill,
        borderColor,
        borderWidth,
        backgroundColor,
        tension,
        pointRadius,
        borderRadius,
    };
};

/**
 * Constructs the scales configuration for a graph.
 */
const getGraphScalesData = (args: GraphScalesDataArgs): GraphScalesResult => {
    const {
        titleText, titleColor = '#A4A4A4', ticksColor = '#A4A4A4', gridDisplay = false, titleDisplay = true, maxRotation = 0, maxTicksLimit = 11,
        borderColor, position = 'left',
    } = args;

    return {
        position,
        grid: { display: gridDisplay, borderColor },
        title: {
            display: titleDisplay,
            text: titleText,
            color: titleColor,
        },
        ticks: {
            maxRotation,
            maxTicksLimit,
            color: ticksColor,
        },
    };
};

/**
 * Constructs the options configuration for a graph.
 */
const getGraphOptions = (args?: GraphOptionsArgs): GraphOptionsResult => {
    const {
        responsive = true, maintainAspectRatio = false, cutoutPercentage = 80, legendDisplay = false,
    } = args || {};

    return {
        responsive,
        maintainAspectRatio,
        cutoutPercentage,
        plugins: {
            legend: { display: legendDisplay },
        },
        hover: {
            mode: null,
        },
    };
};
/**
 * Tooltip Configuration for Graphs
 */
const getTooltipGraphOptions = (args?: TooltipGraphOptionsArgs): TooltipGraphOptionsResult => {
    const {
        hoverBackgroundColor = '#003366',
        boxPadding = 3,
        padding = 10,
        size = 12,
        mode = 'nearest',
        intersect = false,
    } = args || {};

    return {
        hoverBackgroundColor,
        hover: {
            mode,
            intersect,
        },
        plugins: {
            tooltip: {
                bodyFont: {
                    size,
                },
                titleFont: {
                    size,
                },
                boxPadding,
                padding,
            },
        },
    };
};

export {
    getGraphDatasets,
    getGraphScalesData,
    getGraphOptions,
    getTooltipGraphOptions,
};
