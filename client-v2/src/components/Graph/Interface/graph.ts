/**
 * @file All interfaces and types related to graph data and configurations.
 */

import { ChartData, ChartOptions } from 'chart.js';

/**
 * Interface representing graph data.
 */
export interface IGraphData {
    topTag: string; // The top tag associated with the graph
    description?: string; // Optional description for the graph
    details: IGraphDetail[]; // Array of graph details
}

/**
 * Interface representing a graph detail.
 */
export interface IGraphDetail {
    bottomTag: string; // The bottom tag associated with the graph
    visuals: IGraphVisuals; // The visuals data for the graph
}

/**
 * Interface representing graph visuals.
 */
export interface IGraphVisuals {
    graphType: string; // The type of the graph
    graphData: ChartData; // The data for the graph (using Chart.js ChartData type)
    graphOptions: ChartOptions; // The options for the graph (using Chart.js ChartOptions type)
    labels?: IGraphLabel[]; // Optional array of labels for the graph
}

/**
 * Interface representing a graph label
 */
export interface IGraphLabel {
    bulletColor: string; // The color of the bullet for the label
    labelName: string; // The name of the label
}

/**
 * Interface for configuring the datasets in a graph
 */
export interface GraphDatasetsArgs {
    data: { x: number, y: number }[];
    borderColor: string;
    backgroundColor: string;
    label?: boolean;
    fill?: boolean;
    borderWidth?: number;
    tension?: number;
    pointRadius?: number;
    borderRadius?: number;
}

/**
 * Interface which represents the the result of graph datasets
 */
export interface GraphDatasetsResult {
    label: boolean;
    data: { x: number; y: number }[];
    fill: boolean;
    borderColor: string;
    borderWidth: number;
    backgroundColor: string;
    tension: number;
    pointRadius: number;
    borderRadius?: number;
}

/**
 * Interface for configuring the scales in a graph
 */
export interface GraphScalesDataArgs {
    titleText?: string;
    titleColor?: string;
    ticksColor?: string;
    gridDisplay?: boolean;
    titleDisplay?: boolean;
    maxRotation?: number;
    maxTicksLimit?: number;
    borderColor?: string;
    position?: string;
}

/**
 * Interface which represents the result of graph scales
 */
export interface GraphScalesResult {
    position: string;
    grid: {
      display: boolean;
      borderColor?: string;
    };
    title: {
      display: boolean;
      text?: string;
      color?: string;
    };
    ticks: {
      maxRotation: number;
      maxTicksLimit: number;
      color?: string;
    };
}

/**
 * Interface for configuring the options of a graph
 */
export interface GraphOptionsArgs {
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    cutoutPercentage?: number;
    legendDisplay?: boolean;
}

/**
 * Interface which represents the the result of graph options
 */
export interface GraphOptionsResult {
    responsive: boolean;
    maintainAspectRatio: boolean;
    cutoutPercentage: number;
    plugins?: PluginsOptions;
    hover: HoverOptions;
}

/**
 * Interface for configuring the options of a graph Tooltip
 */
export interface TooltipGraphOptionsArgs {
    hoverBackgroundColor?: string;
    boxPadding?: number;
    padding?: number;
    size?: number;
    mode?: string;
    intersect?: boolean;
}

/**
 * Interface which represents the the result of graph Tooltip options
 */
export interface TooltipGraphOptionsResult {
    hoverBackgroundColor: string;
    hover: {
      mode: string;
      intersect: boolean;
    };
    plugins: {
      tooltip: {
        bodyFont: {
          size: number;
        };
        titleFont: {
          size: number;
        };
        boxPadding: number;
        padding: number;
      };
    };
}

/**
 * Interface for configuring the oplugin options for graph options
 */
export interface PluginsOptions {
    legend?: LegendOptions;
}

/**
 * Interface for configuring the legend options for graph options
 */
export interface LegendOptions {
    display?: boolean;
}

/**
 * Interface for configuring the hover options for graph options.
 */
export interface HoverOptions {
    mode: null;
}
