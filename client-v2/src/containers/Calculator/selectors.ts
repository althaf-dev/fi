/**
 * @file Calculator containers selectors
 */

import { createSelector } from 'reselect';
import { CALCULATORS_KEY } from './constants';
import { RootState } from '@/rtk/store';

export const selectAllCalculators = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY].allCalculators,
    (subState) => subState,
);

export const selectSingleCalculator = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY].singleCalculator,
    (subState) => subState,
);

export const selectCalculatorInfo = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.singleCalculator?.calculator_info,
    (subState) => subState,
);

export const selectCalculatorCtaInfo = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.singleCalculator?.banner_details,
    (subState) => subState,
);

export const selectCalculatorInputFields = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.singleCalculator?.input_fields,
    (subState) => subState,
);

export const selectCalculatorAdditionalInfo = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.singleCalculator?.additional_information,
    (subState) => subState,
);

export const selectCalculatorFaqsInfo = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.singleCalculator?.faqs_information,
    (subState) => subState,
);

export const selectCalculatorOutputResult = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.outputResult,
    (subState) => subState,
);

// Note: If the 1st element in visuals is not graphData then this will break
export const selectCalculatorGraphData = () => createSelector(
    (state:RootState) => state[CALCULATORS_KEY]?.outputResult?.visuals[0]?.data?.graphData,
    (subState) => subState,
);
