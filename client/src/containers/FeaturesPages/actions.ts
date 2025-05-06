/**
 * @file Feature Page Actions
 *
 * @summary This file contains actions and action creators related to US stock details.
 */

import {
    GET_US_STOCKS_DETAILS, UPDATE_US_STOCKS_DETAILS, GET_US_STOCKS_COLLECTION_LIST, UPDATE_US_STOCKS_COLLECTION_LIST,
    GET_US_STOCKS_COLLECTION_DETAILS, UPDATE_US_STOCKS_COLLECTION_DETAILS, UPDATE_COLLECTION_CACHE,
} from './constants';

interface IGetDataWithoutPayload {
    type: typeof GET_US_STOCKS_COLLECTION_LIST;
    payload?: any;
}

interface IGetDataWithPayload {
    type: typeof GET_US_STOCKS_DETAILS
        | typeof UPDATE_US_STOCKS_DETAILS
        | typeof UPDATE_US_STOCKS_COLLECTION_LIST
        | typeof GET_US_STOCKS_COLLECTION_DETAILS
        | typeof UPDATE_US_STOCKS_COLLECTION_DETAILS
        | typeof UPDATE_COLLECTION_CACHE;
    payload: any;
}

type USStockRootActions = IGetDataWithoutPayload | IGetDataWithPayload;

interface IGetUSStocksDetailsPayload {
    collectionId: string;
}

const getUSStocksDetailsAction = (payload: IGetUSStocksDetailsPayload): USStockRootActions => ({
    type: GET_US_STOCKS_DETAILS,
    payload,
});

const getUSStocksCollectionListAction = (): USStockRootActions => ({
    type: GET_US_STOCKS_COLLECTION_LIST,
});

const getUSStocksCollectionDetailsAction = (payload: IGetUSStocksDetailsPayload): USStockRootActions => ({
    type: GET_US_STOCKS_COLLECTION_DETAILS,
    payload,
});

export {
    // Root Action Type
    USStockRootActions,
    // Action Name
    getUSStocksDetailsAction,
    getUSStocksCollectionListAction,
    getUSStocksCollectionDetailsAction,
};
