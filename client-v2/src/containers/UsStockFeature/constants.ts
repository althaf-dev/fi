/**
 * @file FeaturePage constants
 */

// eslint-disable-next-line no-shadow, import/prefer-default-export
export enum OrientationType {
    LeftRight = 'left-right',
    TopBottom = 'top-bottom',
    Full = 'full',
    Container = 'container',
}

// ActionNames Enum
export enum ActionNames {
    GET_US_STOCKS_COLLECTION_DETAILS_ACTION = 'GET_US_STOCKS_COLLECTION_DETAILS',
}

// Component key
export const US_STOCKS_KEY = 'USStocks';

// Actions
export const GET_US_STOCKS_DETAILS = `app/${US_STOCKS_KEY}/GET_US_STOCKS_DETAILS`;
export const GET_US_STOCKS_COLLECTION_LIST = `app/${US_STOCKS_KEY}/GET_US_STOCKS_COLLECTION_LIST`;
export const GET_US_STOCKS_COLLECTION_DETAILS = `app/${US_STOCKS_KEY}/GET_US_STOCKS_COLLECTION_DETAILS`;

// US Stocks Collection ids
export enum COLLECTION_IDS {
    WEB_COLLECTION = 'WEB_COLLECTION',
    ALL_STOCKS = 'ALL_STOCKS',
    MOST_POPULAR = 'MOST_POPULAR',
}
