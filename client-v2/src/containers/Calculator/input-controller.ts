/**
 *
 * Function for each calculator that runs when any input is changed
 * The function will handle dynamically changing the input parameters like changing min value, max value,
 * transforming the input value into some other value, etc.
 * Each calculator should define only 1 function. Inside that function, multiple inputs can be transformed for that calculator
 *
 */

import { RootState } from "@/rtk/store";

const rentVsBuyInputFn = (draft:any) => {

};

const epfInputFn = (state:RootState, draft:any, updatedInputValues:any, item:any, value:any) => {
    // When the age value changes, change the min value and current value of retirement age as retirement age cannot be less than the current age
    if (item.input_id === '5b1ed889-92b3-4aeb-8e7c-2dd5b0105a25') {
        const retirementAgeItemIndex = draft.singleCalculator.input_fields
            .findIndex((arrayItem:any) => arrayItem.input_id === '527c035b-0157-4eac-be3e-34d0a7f15919');
        draft.singleCalculator.input_fields[retirementAgeItemIndex].min_value = {
            label: `${value + 1}`,
            value: value + 1,
        };

        if (value >= draft.singleCalculator.input_fields[retirementAgeItemIndex].value) {
            draft.singleCalculator.input_fields[retirementAgeItemIndex].value = value + 1;
        }
    }
};

// Lifestyle upgrade multiplier options input id's
const lifestyleUpgradMultiplierInputIds = ['75366000-be53-4d5f-b05e-30cb8ae02e8d', '95574ed1-fae9-4c7c-a323-b37c9f2224cc', 'a841025b-a244-445d-8938-ee73d147292e', '8bdac6a2-8e12-4be6-956f-7027a502dbfd', '7134e1d8-ff17-43f7-902a-06ee40d18cc2', '530e953f-6f42-4b1f-8958-92b17dbe3fd2'];

// Initial Value for LifestyleUpgradeMultiplier calculation
const INITIAL_VALUE = 1;

const fireInputFn = (state:RootState, draft:any, updatedInputValues:any, item:any, value:any) => {
    const calculatorInputFields = draft.singleCalculator.input_fields;

    // When the age value changes, change the min value and current value of fire age as fire age cannot be less than the current age
    if (item.input_id === 'a1d08ee4-6f48-4261-9891-03ecf8bffa04') {
        const fireAgeItemIndex = calculatorInputFields.findIndex((arrayItem:any) => arrayItem.input_id === '35c0391f-35e1-4e8e-a5f1-ff2d93205b7b');
        calculatorInputFields[fireAgeItemIndex].min_value = {
            label: `${value + 1}`,
            value: value + 1,
        };

        if (value >= calculatorInputFields[fireAgeItemIndex].value) {
            calculatorInputFields[fireAgeItemIndex].value = value + 1;
        }
    }

    // Lifestyle upgrade multiplier calculation
    if (lifestyleUpgradMultiplierInputIds.includes(item.input_id)) {
        const lifestyleUpgradeMultiplierItemIndex = calculatorInputFields.findIndex((arrayItem:any) => arrayItem.input_id === 'feb12f28-50c1-4dcf-87c8-0f61b3611891');
        const nestedItemIndex = calculatorInputFields.findIndex((arrayItem:any) => arrayItem.input_id === '8375c4c3-87c3-4a4e-beef-230f773d5b8d');
        const nestedItemObj = calculatorInputFields[nestedItemIndex];
        const expenseItemIndex = nestedItemObj.nested_items.findIndex((arrayItem:any) => arrayItem.input_id === '3a9ad9d7-f285-4a63-8464-7ba3b5f6288e');

        const lifestyleUpgradMultiplierNestedInputItems = calculatorInputFields
            .filter((data:any) => data.nested_items);

        const checkboxItems = lifestyleUpgradMultiplierNestedInputItems[0].nested_items
            .filter((data:any) => (lifestyleUpgradMultiplierInputIds.includes(data.input_id)));

        const lifestyleUpgradeMultiplierUpdatedValue = checkboxItems
            .reduce((accumulator:any, currentItem:any) => accumulator + currentItem.value.value, INITIAL_VALUE);

        calculatorInputFields[lifestyleUpgradeMultiplierItemIndex].value = lifestyleUpgradeMultiplierUpdatedValue;

        calculatorInputFields[nestedItemIndex].nested_items[expenseItemIndex].value = lifestyleUpgradeMultiplierUpdatedValue;
    }

    // untick all checkbox when Lifestyle upgrade multiplier value changed
    if (item.input_id === 'feb12f28-50c1-4dcf-87c8-0f61b3611891') {
        const nestedItemIndex = calculatorInputFields.findIndex((arrayItem:any) => arrayItem.input_id === '8375c4c3-87c3-4a4e-beef-230f773d5b8d');
        const nestedItemObj = calculatorInputFields[nestedItemIndex];
        const expenseItemIndex = nestedItemObj.nested_items.findIndex((arrayItem:any) => arrayItem.input_id === '3a9ad9d7-f285-4a63-8464-7ba3b5f6288e');

        const nestedInputItems = calculatorInputFields
            .filter((data:any) => data.nested_items);

        const updatedNestedCheckboxItems = nestedInputItems[0].nested_items.map((nestedItem:any) => {
            if (nestedItem.value.is_checked) {
                nestedItem.value.is_checked = false;
            }

            return nestedItem;
        });

        calculatorInputFields[nestedItemIndex].nested_items = updatedNestedCheckboxItems;
        calculatorInputFields[nestedItemIndex].nested_items[expenseItemIndex].value = 0;
    }
};

export {
    rentVsBuyInputFn,
    epfInputFn,
    fireInputFn,
};
