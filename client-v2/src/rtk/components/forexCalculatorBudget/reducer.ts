import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { getForexExchangeRate, getFaqData } from './saga';
import { snakeToCamelProperties } from '@/rtk/util';

interface forexCalculatorData {
    convertedAmount: Money;
    forexSavingsAmount: Money;
    cardOffersAmount: Money;
}

interface ForexCalculator {
    loading: boolean;
    error: ErrorConstructor | string | Error;
    fromAmount: number;
    convertedAmount: number;
    forexSavingsAmount: number;
    cardOffersAmount: number;
    faqCategory: any;
}

interface Money {
    units: number;
    currencyCode: string;
    nanos: number;
}

const initialState: ForexCalculator = {
    loading: false,
    error: '',
    fromAmount: 0,
    convertedAmount: 0,
    forexSavingsAmount: 0,
    cardOffersAmount: 0,
    faqCategory: {},
};

const forexCalculatorSlice: Slice<ForexCalculator> = createSlice({
    name: 'forexCalculator',
    initialState,
    reducers: {
        setLoading: (state: ForexCalculator, action: PayloadAction<any>) => {
            const { loading } = action.payload;
            return {
                ...state,
                loading,
            };
        },
        setErrorMessage: (state: ForexCalculator, action: PayloadAction<any>) => {
            const { error } = action.payload;
            return {
                ...state,
                error,
            };
        },
    },
    extraReducers: (builder) => {
        builder && builder
            .addCase(getForexExchangeRate?.pending, (state) => {
                state.loading = true;
            })
            .addCase(getForexExchangeRate?.fulfilled, (state, action) => {
                state.loading = false;
                const forexExchangeData = snakeToCamelProperties(action.payload) as forexCalculatorData;
                const { convertedAmount, forexSavingsAmount, cardOffersAmount } = forexExchangeData;
                state.convertedAmount = Number(convertedAmount?.units) + Number(convertedAmount?.nanos * (10 ** (-9))) || 0;
                state.forexSavingsAmount = forexSavingsAmount?.units || 0;
                state.cardOffersAmount = cardOffersAmount?.units || 0;
            })
            .addCase(getForexExchangeRate?.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch forex exchange rate';
            })
            .addCase(getFaqData?.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFaqData?.fulfilled, (state, action) => {
                state.loading = false;
                state.faqCategory = action.payload;
            })
            .addCase(getFaqData?.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch FAQ data';
            });
    }
});

export const { setErrorMessage, setLoading, } = forexCalculatorSlice.actions;

export default forexCalculatorSlice.reducer;
