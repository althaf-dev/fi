/**
 * @file app component reducers and actions are exported from this file
 */

import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { getDestinations, getTravelBudget } from './saga';
import { snakeToCamelProperties } from '@/rtk/util';

interface Image {
    webImageUrl?: string;
    mobileImageUrl?: string;
}

interface DailyExpense {
    expenseImage?: Image;
    amount?: number;
    type?: string;
}

interface TravelOffer {
    offerImages: Image[];
    description: string;
}

export interface Country {
    name: string;
    flag: string;
}

interface TravelBudget {
    dailyExpenses?: DailyExpense[];
    travelOffers?: TravelOffer[];
    country?: Country;
    unitTotalEstimateExpenseAmount?: number;
    currencyConversionRate?: number;
    destinationNativeCurrency?: string;
    countryImage?: Image;
    startDate?: string;
    endDate?: string;
    peopleCount?: number | null;
    travelStyle?: {
        label: string;
        value: string;
    } | null;
    cta?: {
        title: string;
        base64DeeplinkString: string;
    };
    travelDays?: number;
    cardOffersSavingsAmount?: number;
    nativeCurrencySymbol?: string;
    totalSavingsAmount?: number;
    zeroMarkupSavingsAmount?: number;
}

interface TravelBudgetReducer {
    loading: boolean;
    error: ErrorConstructor | string | Error;
    country?: Country;
    travelStyle?: {
        label?: string;
        value?: string;
    } | null;
    dates: {
        arrival?: string;
        departure?: string;
    } | null;
    peopleCount?: number | null;
    travelDestinations?: {
        countries?: Country[];
        popularTravelDestinations?: any[];
    } | null;
    budget: TravelBudget | null;
}

const initialState: TravelBudgetReducer = {
    loading: false,
    error: '',
    country: undefined,
    travelStyle: null,
    dates: null,
    peopleCount: null,
    travelDestinations: null,
    budget: null,
};

const travelBudgetSlice: Slice<TravelBudgetReducer> = createSlice({
    name: 'TravelBudget',
    initialState,
    reducers: {
        setCountry: (state: TravelBudgetReducer, action: PayloadAction<any>) => {
            const { country } = action.payload;
            return {
                ...state,
                country,
            };
        },
        setTravelStyle: (state: TravelBudgetReducer, action: PayloadAction<any>) => {
            const { travelStyle } = action.payload;
            return {
                ...state,
                travelStyle,
            };
        },
        setDates: (state: TravelBudgetReducer, action: PayloadAction<any>) => {
            const { dates } = action.payload;
            return {
                ...state,
                dates,
            };
        },
        setPeopleCount: (state: TravelBudgetReducer, action: PayloadAction<any>) => {
            const { peopleCount } = action.payload;
            return {
                ...state,
                peopleCount,
            };
        },
        setErrorMessage: (state: TravelBudgetReducer, action: PayloadAction<any>) => {
            const { error } = action.payload;
            return {
                ...state,
                error,
            };
        },
        setLoading: (state: TravelBudgetReducer, action: PayloadAction<any>) => {
            const { loading } = action.payload;
            return {
                ...state,
                loading,
            };
        }
    },
    extraReducers: (builder) => {
        builder && builder
            .addCase(getDestinations?.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDestinations?.fulfilled, (state, action) => {
                state.loading = false;
                const travelDestinations: {
                    destinations?: Country[];
                    popularDestinations?: any[];
                } = snakeToCamelProperties(action.payload);
                const { destinations, popularDestinations } = travelDestinations || {};
                state.travelDestinations = {
                    countries: destinations,
                    popularTravelDestinations: popularDestinations,
                };
            })
            .addCase(getDestinations?.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch travel destinations';
            })
            .addCase(getTravelBudget?.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTravelBudget?.fulfilled, (state, action) => {
                state.loading = false;
                const budget: TravelBudget = snakeToCamelProperties(action.payload);
                const {
                    travelStyle, country, peopleCount, startDate, endDate
                } = budget || {};
                state.budget = budget;
                state.travelStyle = travelStyle;
                state.country = country;
                state.peopleCount = peopleCount;
                state.dates = { arrival: startDate, departure: endDate };
            })
            .addCase(getTravelBudget?.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch travel destinations';
            });
    }
});

export const {
    setCountry, setTravelStyle, setDates, setPeopleCount, setErrorMessage, setLoading,
} = travelBudgetSlice.actions;

export default travelBudgetSlice.reducer;
