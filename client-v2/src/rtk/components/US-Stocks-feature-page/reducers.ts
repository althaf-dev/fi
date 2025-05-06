import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ClientAPIWrapper from '@/utils/clientAPIWrapper';
import {
    USS_DETAILS_ENDPOINT,
    USS_COLLECTIONS_ENDPOINT,
} from '@/Api/ApiRoutes';
import {
    GET_US_STOCKS_DETAILS,
    GET_US_STOCKS_COLLECTION_LIST,
    GET_US_STOCKS_COLLECTION_DETAILS,
    COLLECTION_IDS,
} from '@/containers/UsStockFeature/constants';

interface IUSStockReducer {
  isLoading: boolean;
  usStocksData: Record<COLLECTION_IDS, any[]>;
  hasUSStocksData: Record<COLLECTION_IDS, boolean>;
  hasCollections: boolean;
  collections: Array<unknown>;
  hasCollectionDetails: boolean;
  collectionDetails: Array<unknown>;
  isCollectionDetailsLoading: boolean;
  errorMessage?: string | null;
  collectionId?: string;
  collectionCache?: { [key: string]: any };
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
    errorMessage: '',
};

export const fetchUSStocksDetails = createAsyncThunk(
    GET_US_STOCKS_DETAILS,
    async (collectionId: string, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.get(
                `${USS_DETAILS_ENDPOINT}?collectionId=${encodeURIComponent(collectionId)}`
            );
            return thunkAPI.fulfillWithValue({ data: response.data, collectionId });
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ errorMessage: error.message });
        }
    }
);

export const fetchUSStocksCollectionList = createAsyncThunk(
    GET_US_STOCKS_COLLECTION_LIST,
    async (_, thunkAPI) => {
        try {
            const response = await ClientAPIWrapper.get(USS_COLLECTIONS_ENDPOINT);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ errorMessage: error.message });
        }
    }
);

export const fetchUSStocksCollectionDetails = createAsyncThunk(
    GET_US_STOCKS_COLLECTION_DETAILS,
    async (collectionId: string, { getState, dispatch, rejectWithValue }) => {
        try {
            const state = getState() as { usStocks: IUSStockReducer };
            const cache = state.usStocks.collectionCache;
            const cacheKey = `${USS_DETAILS_ENDPOINT}?collectionId=${encodeURIComponent(collectionId)}`;
            let response = cache && cache[cacheKey];

            if (!response) {
                response = await ClientAPIWrapper.get(
                    `${USS_DETAILS_ENDPOINT}?collectionId=${encodeURIComponent(collectionId)}`
                );

                dispatch(
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    usStocks.actions.updateCollectionCache({
                        key: cacheKey,
                        value: response.data,
                    })
                );

                return { data: response.data, collectionId };
            }

            return { data: response, collectionId };
        } catch (error) {
            return rejectWithValue('Failed to fetch US stocks collection details.');
        }
    }
);

const usStocks = createSlice({
    name: 'usStocks',
    initialState,
    reducers: {
        updateCollectionDetails: (state, action) => {
            const { collectionId } = action.payload;
            state.collectionId = collectionId;
        },
        updateCollectionCache: (state, action) => {
            const { key, value } = action.payload;
            state.collectionCache && (state.collectionCache[key] = value);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUSStocksDetails.pending, (state) => {
                state.errorMessage = '';
                state.isLoading = true;
            })
            .addCase(fetchUSStocksDetails.fulfilled, (state, action) => {
                const { data, collectionId } = action.payload;
                state.usStocksData[collectionId as keyof typeof state.usStocksData] = data;
                state.hasUSStocksData[collectionId as keyof typeof state.usStocksData] = true;
                state.isLoading = false;
            })
            .addCase(fetchUSStocksDetails.rejected, (state, action) => {
                state.errorMessage = (action.payload as { errorMessage?: string })?.errorMessage
          || 'Error fetching details';
                state.isLoading = false;
            })
            .addCase(fetchUSStocksCollectionList.pending, (state) => {
                state.errorMessage = '';
                state.isLoading = true;
            })
            .addCase(fetchUSStocksCollectionList.fulfilled, (state, action) => {
                state.collections = action.payload;
                state.hasCollections = true;
                state.isLoading = false;
                state.collectionId = action.payload.collections[0]?.collection_id;
            })
            .addCase(fetchUSStocksCollectionList.rejected, (state, action) => {
                state.errorMessage = (action.payload as { errorMessage?: string })?.errorMessage
          || 'Error fetching collection list';
                state.isLoading = false;
            })
            .addCase(fetchUSStocksCollectionDetails.pending, (state) => {
                state.errorMessage = '';
                state.isCollectionDetailsLoading = true;
            })
            .addCase(fetchUSStocksCollectionDetails.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.collectionDetails = data;
                state.hasCollectionDetails = true;
                state.isCollectionDetailsLoading = false;
            })
            .addCase(fetchUSStocksCollectionDetails.rejected, (state, action) => {
                state.errorMessage = (action.payload as { errorMessage?: string })?.errorMessage
          || 'Error fetching collection details';
                state.isCollectionDetailsLoading = false;
            });
    },
});

export const { updateCollectionDetails } = usStocks.actions;
export default usStocks.reducer;
