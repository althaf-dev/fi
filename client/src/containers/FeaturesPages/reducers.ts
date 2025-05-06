/**
 * @file Feature Page Reducer
 */
import produce from 'immer';

import {
    GET_US_STOCKS_DETAILS,
    UPDATE_US_STOCKS_DETAILS,
    GET_US_STOCKS_COLLECTION_LIST,
    UPDATE_US_STOCKS_COLLECTION_LIST,
    GET_US_STOCKS_COLLECTION_DETAILS,
    UPDATE_US_STOCKS_COLLECTION_DETAILS,
    UPDATE_COLLECTION_CACHE,
    COLLECTION_IDS,
} from './constants';
import { USStockRootActions } from './actions';

interface IUSStockReducer {
    isLoading: boolean;
    usStocksData: Record<COLLECTION_IDS, Array<Object>>;
    hasUSStocksData: Record<COLLECTION_IDS, boolean>;
    hasCollections: boolean;
    collections: Array<Object>;
    hasCollectionDetails: boolean;
    collectionDetails: Array<Object>;
    isCollectionDetailsLoading: boolean;
    collectionId?: string;
    collectionCache?: Record<string, any>;
}

const initialState: IUSStockReducer = {
    isLoading: true,
    usStocksData: {
        [COLLECTION_IDS.WEB_COLLECTION]: [],
        [COLLECTION_IDS.ALL_STOCKS]: [],
        [COLLECTION_IDS.MOST_POPULAR]: [],
    },
    hasUSStocksData: {
        [COLLECTION_IDS.WEB_COLLECTION]: false,
        [COLLECTION_IDS.ALL_STOCKS]: false,
        [COLLECTION_IDS.MOST_POPULAR]: false,
    },
    hasCollections: false,
    collections: [],
    hasCollectionDetails: false,
    collectionDetails: [],
    isCollectionDetailsLoading: false,
    collectionId: '',
    collectionCache: {},
};

const usStockReducer = (
    state = initialState,
    action: USStockRootActions,
): IUSStockReducer => produce(state, (draftState) => {
    switch (action.type) {
        case GET_US_STOCKS_DETAILS:
        case GET_US_STOCKS_COLLECTION_LIST:
            draftState.isLoading = true;

            break;

        case UPDATE_US_STOCKS_DETAILS: {
            const { details_section: detailsSection = {}, collectionId } = action.payload;
            const { stocks } = detailsSection || {};

            if (stocks?.length) {
                draftState.hasUSStocksData[collectionId] = true;
                draftState.usStocksData[collectionId] = stocks;
            }

            draftState.isLoading = false;

            break;
        }

        case UPDATE_US_STOCKS_COLLECTION_LIST: {
            const { collections = [] } = action.payload;

            draftState.hasCollections = collections.length > 0;
            draftState.collections = collections;
            draftState.isLoading = false;

            break;
        }

        case GET_US_STOCKS_COLLECTION_DETAILS: {
            draftState.isCollectionDetailsLoading = true;

            break;
        }

        case UPDATE_US_STOCKS_COLLECTION_DETAILS: {
            const { details_section: detailsSection = {}, collectionId } = action.payload;
            const { stocks } = detailsSection || {};

            draftState.hasCollectionDetails = stocks?.length > 0;
            draftState.collectionDetails = stocks;
            draftState.collectionId = collectionId;
            draftState.isCollectionDetailsLoading = false;

            break;
        }

        case UPDATE_COLLECTION_CACHE: {
            const { key, value } = action.payload;

            draftState.collectionCache[key] = value;

            break;
        }

        default:
            break;
    }
});

export default usStockReducer;
