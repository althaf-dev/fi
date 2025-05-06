/**
 * @file FeaturePage containers selectors
 */

import { createSelector } from 'reselect';
import { US_STOCKS_KEY } from './constants';

export const selectLoader = createSelector(
    (state) => state[US_STOCKS_KEY].isLoading,
    (subState) => subState,
);

export const selectUSStocksData = createSelector(
    (state) => state[US_STOCKS_KEY].usStocksData,
    (subState) => subState,
);

export const selectHasUSStocksData = createSelector(
    (state) => state[US_STOCKS_KEY].hasUSStocksData,
    (subState) => subState,
);

export const selectHasCollections = createSelector(
    (state) => state[US_STOCKS_KEY].hasCollections,
    (subState) => subState,
);

export const selectCollections = createSelector(
    (state) => state[US_STOCKS_KEY].collections,
    (subState) => subState,
);

export const selectHasCollectionDetails = createSelector(
    (state) => state[US_STOCKS_KEY].hasCollectionDetails,
    (subState) => subState,
);

export const selectCollectionDetailsLoader = createSelector(
    (state) => state[US_STOCKS_KEY].isCollectionDetailsLoading,
    (subState) => subState,
);

export const selectCollectionDetails = createSelector(
    (state) => state[US_STOCKS_KEY].collectionDetails,
    (subState) => subState,
);

export const selectCollectionId = createSelector(
    (state) => state[US_STOCKS_KEY].collectionId,
    (subState) => subState,
);

export const selectCollectionCache = createSelector(
    (state) => state[US_STOCKS_KEY].collectionCache,
    (subState) => subState,
);
