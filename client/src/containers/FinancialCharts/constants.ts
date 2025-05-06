import { CrosshairMode } from 'lightweight-charts';

export const ERROR = {
    message: 'Uh-oh! We faced a server error while loading this page. Please try again.',
};

export const DATE = {
    startTime: '2023-01-30T20:00',
    endTime: '2023-01-31T04:00',
};

export const US_STOCKS_EVENTS = {
    reloadLineChart: {
        eventName: 'Reload Line Chart',
        eventCode: 'USS01',
        data: {},
    },
    reloadMultiChart: {
        eventName: 'Reload Multi Chart',
        eventCode: 'USS02',
        data: {},
    },
    lineChartReady: {
        eventName: 'Line Chart Ready',
        eventCode: 'USS03',
        data: {},
    },
    multiChartReady: {
        eventName: 'Multi Chart Ready',
        eventCode: 'USS04',
        data: {},
    },
};

export const OFFSET_VALUES = {
    RIGHT_CHART: 18,
    DASH_LINE: 14,
    CIRCLE_LEFT: 13,
    TOP: 3,
    AXIS_MARGIN: 10,
    WIDTH_MARGIN: 15,
};

export const TIME_PERIOD = {
    ONE_DAY: '1D',
    ONE_WEEK: '1W',
    ONE_MONTH: '1M',
    ONE_YEAR: '1Y',
    FIVE_YEAR: '5Y',
};

export const AXIS_LABEL_COUNT = 6;

/**
 * DIVISIBLE_PORTIONS: for 1W, 1Y, 1M and 5Y charts,
 * we are diving the total number of datapoints into 5 portions that we are getting from the backend.
 * This is using the logic -> datapoints / 5 = 5 dates to render on the x-axis
 * A final value is added on the x-axis, which is the last value on the array,
 * which is not calculated using this constant.
 */
export const DIVISIBLE_PORTIONS = 5;

export const US_STOCKS_MOBILE_FN_NAME = 'usStocksMobileCallback';

// Grid config for chart
export const gridConfig = {
    vertLines: { visible: false },
    horzLines: { visible: false },
};

// Crosshair config for chart
export const crosshairConfig = {
    mode: CrosshairMode.Magnet,
    vertLine: { labelVisible: false, visible: false },
    horzLine: { labelVisible: false, visible: false },
};
