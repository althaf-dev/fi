/**
 * @file Calculation logic for different calculators
 */

import { ICONS_URL_MAP, LOGOS_URL_MAP } from '../../constants/AssetConstants';
import Colors from '../../Themes/Colors';
import { IColorOptions } from '../../interfaces/elements';

import {
    getDifferenceBetweenTwoDates, getMonthNameFromDate, getMiliSecondPerDay, formatCurrencyValue, formatTextColorBasedOnTheCondititon,
} from '../../utils';

import { ONE_CRORE, ONE_LAKH } from './constants';
import {
    CUMIPMT, FV, PMT,
    // PV,
} from './excel-funcs';
import {
    calculateEPFInvestment, calculateSIPInvestment, getGraphDatasets, getGraphScalesData, getGraphOptions,
} from './commonFunctions';

/**
 * Convert number amount to money denominated string
 * Ex:
 * 100000 will be converted to 1L
 * 10000000 will be converted to 1Cr
 *
 * @param {number} amount The amount which needs to be converted to a string
 * @returns {string} The amount suffixed with the required money denomination
 */
const getAmountWithMoneySuffix = (amount) => {
    if (typeof amount !== 'number') return '';

    const absAmount = Math.abs(amount);
    const numberSign = amount < 0 ? '-' : '';

    let formattedAmt = `${absAmount}`;
    // If amount is less than 1 lakh return as it is with comma separated values
    if (absAmount < ONE_LAKH) {
        formattedAmt = Math.round(absAmount).toLocaleString('en-IN');
    } else if (absAmount >= ONE_LAKH && absAmount < ONE_CRORE) {
        const amtInLakhs = (absAmount / ONE_LAKH).toFixed(2);
        formattedAmt = `${amtInLakhs}L`;
    } else {
        const amtInCrores = (absAmount / ONE_CRORE).toFixed(2);
        formattedAmt = `${amtInCrores}Cr`;
    }

    return `${numberSign}${formattedAmt}`;
};

/**
 * Check if all the input fields are valid. Valid means that the values are within the min and max range
 *
 * @param inputFields The input values given by the user
 * @returns True if all inputs are valid else false
 */
const checkIfValidInput = (inputFields) => {
    // returns the item object if value is not within min-max limits or undefined if all items are valid
    const invalidInput = inputFields.find((item) => {
        // need to check item.value is empty or not
        if (!item.value && item.value !== 0) return true;

        // Need to check only for components with numeric value. These components will always have item.value as not an object
        if (typeof item.value !== 'object' && (item.value < item?.min_value?.value || item.value > item?.max_value?.value)) {
            return true;
        }

        // Need to Check only for components where item.value is present as an object
        if (typeof item.value === 'object' && (item.value.valueOne < item?.min_value?.value || item.value.valueTwo > item?.max_value?.value || (item.value.valueTwo - item.value.valueOne) < item.min_gap_between_two_inputs)) {
            return true;
        }

        return false;
    });

    /**
     * If all the inputs are valid we get invalidInput = undefined. Hence negate this value to send true
     * If any 1 input is invalid then we get invalidInput = item. Hence negate this value to send false
     */
    return !invalidInput;
};

/**
 * Formula - P(1 + r/n)nt
 * Link - https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
 */
const calculateFutureValue = (principalAmount, interestRate, compoundingFrequency, timePeriod) => {
    const futureValue = principalAmount * (1 + interestRate / compoundingFrequency) ** (compoundingFrequency * timePeriod);
    return futureValue;
};

const calculateFDReturns = (inputFields) => {
    // Input values
    const {
        principalAmount, interestRate, timePeriod, compoundingFrequency,
    } = inputFields;

    // Calculate returns
    const futureValue = calculateFutureValue(principalAmount, interestRate, compoundingFrequency, timePeriod);
    const interestEarnedBeforeTax = Math.round(futureValue - principalAmount);
    const finalInHandBeforeTax = interestEarnedBeforeTax + principalAmount;

    return finalInHandBeforeTax;
};

// TODO: Add common graph objects in constant and reuse
const getFDGraph = (inputFields) => {
    const { totalInvestment, maturityAmount, percentageReturns } = inputFields;

    let remainingPercentage;

    if (percentageReturns <= 100) {
        remainingPercentage = 100 - percentageReturns;
    } else {
        remainingPercentage = 0;
    }

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#DEEEF2',
                    labelName: 'TOTAL INVESTMENT',
                    labelValue: `₹${totalInvestment}`,
                },
                {
                    bulletColor: '#7FBECE',
                    labelName: 'TOTAL RETURNS',
                    labelValue: `₹${maturityAmount}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [percentageReturns, remainingPercentage],
                    backgroundColor: [
                        '#7FBECE',
                        '#DEEEF2',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyFDOutput = () => {
    const graphInfo = getFDGraph({ totalInvestment: 0, maturityAmount: 0, percentageReturns: 0 });

    return {
        visuals: [graphInfo],
        // TODO: Store color in constants file and use
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateFDOutput = (inputFields) => {
    // Input values
    const principalAmount = parseFloat(inputFields.find((item) => item.label === 'Principal Amount').value);
    const interestRate = parseFloat(inputFields.find((item) => item.label === 'Interest Rate').value) / 100;
    const timePeriod = parseFloat(inputFields.find((item) => item.label === 'Time Period').value) / 12;
    const compoundingFrequency = parseFloat(inputFields.find((item) => item.label === 'Compounding Frequency').value.value);

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyFDOutput();
    }

    const totalReturns = calculateFDReturns({
        principalAmount, interestRate, timePeriod, compoundingFrequency,
    });

    const totalInvestment = principalAmount.toLocaleString('en-IN');
    const maturityAmount = totalReturns.toLocaleString('en-IN');
    const percentageReturns = Math.round(((totalReturns - principalAmount) / totalReturns) * 100);

    const graphInfo = getFDGraph({ totalInvestment, maturityAmount, percentageReturns });

    const visuals = [graphInfo];

    return {
        visuals,
        outputSentence: `<div>Maturity amount will be <span style="color: #7FBECE">₹${maturityAmount}</span></div>`,
    };
};

const getMutualFundGoalGraph = (inputFields) => {
    const { amtInvested, profitEarned, investmentGoalAmount } = inputFields;

    const amtInvestedValue = getAmountWithMoneySuffix(amtInvested);
    const profitEarnedValue = getAmountWithMoneySuffix(profitEarned);

    const amtInvestedPercentage = (amtInvested / investmentGoalAmount) * 100;
    const profitEarnedPercentage = (profitEarned / investmentGoalAmount) * 100;

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#D9F2CC',
                    labelName: 'Invested Amount',
                    labelValue: `₹${profitEarned === 0 ? 0 : amtInvestedValue}`,
                },
                {
                    bulletColor: '#87BA6B',
                    labelName: 'Profit Earned',
                    labelValue: `₹${profitEarnedValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [profitEarnedPercentage, amtInvestedPercentage],
                    backgroundColor: [
                        '#87BA6B',
                        '#D9F2CC',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyMutualFundGoalOutput = () => {
    const graphInfo = getMutualFundGoalGraph({ amtInvested: 100, profitEarned: 0, investmentGoalAmount: 100 });

    return {
        visuals: [graphInfo],
        // eslint-disable-next-line max-len
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateMutualFundGoalOutput = (inputFields) => {
    // Input values
    const investmentGoalAmount = parseFloat(inputFields.find((item) => item.label === 'Investment goal amount').value);
    const investmentDuration = parseFloat(inputFields.find((item) => item.label === 'Investment duration').value);
    const expectedReturn = parseFloat(inputFields.find((item) => item.label === 'Expected return').value) / 100;
    const investingFrequency = parseFloat(inputFields.find((item) => item.label === 'Investing frequency').value.value);
    const investingFrequencyLabel = inputFields.find((item) => item.label === 'Investing frequency').value.label;

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyMutualFundGoalOutput();
    }

    // calculations
    // TODO: Add explanation for calculations in detail
    const periodicInterestRate = expectedReturn / investingFrequency;
    const periodicInvestmentAmt = PMT(periodicInterestRate, investmentDuration * investingFrequency, 0, -investmentGoalAmount, 1);
    const amtInvested = periodicInvestmentAmt * investmentDuration * investingFrequency;
    const profitEarned = investmentGoalAmount - amtInvested;

    const graphInfo = getMutualFundGoalGraph({ amtInvested, profitEarned, investmentGoalAmount });

    const visuals = [graphInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `<div>You need to invest about <span style="color: #87BA6B">₹${getAmountWithMoneySuffix(periodicInvestmentAmt)} ${investingFrequencyLabel}</span> to achieve your goal in ${investmentDuration} years.</div>`,
    };
};

const getSipGraph = (inputFields) => {
    const { investedAmount, profitEarned } = inputFields;

    const investedAmountValue = getAmountWithMoneySuffix(investedAmount);
    const profitEarnedValue = getAmountWithMoneySuffix(profitEarned);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#D1DAF1',
                    labelName: 'Invested Amount',
                    labelValue: `₹${profitEarned === 0 ? 0 : investedAmountValue}`,
                },
                {
                    bulletColor: '#879EDB',
                    labelName: 'Profit Earned',
                    labelValue: `₹${profitEarnedValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [profitEarned, investedAmount],
                    backgroundColor: [
                        '#879EDB',
                        '#D1DAF1',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptySipOutput = () => {
    const graphInfo = getSipGraph({ investedAmount: 100, profitEarned: 0 });

    return {
        visuals: [graphInfo],
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateSipOutput = (inputFields) => {
    // Input values
    const sipAmount = parseFloat(inputFields.find((item) => item.label === 'SIP amount').value);
    const annualSIPIncrement = parseFloat(inputFields.find((item) => item.label === 'Annual SIP increment').value) / 100;
    const expectedReturn = parseFloat(inputFields.find((item) => item.label === 'Expected return').value) / 100;
    const investmentDuration = parseFloat(inputFields.find((item) => item.label === 'Investment duration').value);
    const sipFrequency = parseFloat(inputFields.find((item) => item.label === 'SIP frequency').value.value);
    const sipFrequencyLabel = inputFields.find((item) => item.label === 'SIP frequency').value.label;

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptySipOutput();
    }

    const values = calculateSIPInvestment({
        sipAmount, sipFrequency, annualSIPIncrement, expectedReturn, investmentDuration,
    });

    const { updateSIPInvestmentValues, getExtraDetails } = values;

    const { counterLimit } = getExtraDetails();

    for (let counter = 1; counter <= counterLimit; counter += 1) {
        updateSIPInvestmentValues(counter);
    }

    const { sumOfInvestedAmount, portfolioValue } = getExtraDetails();

    const investedAmount = sumOfInvestedAmount;
    const valueOfInvestment = portfolioValue;
    const profitEarned = valueOfInvestment - investedAmount;

    const graphInfo = getSipGraph({ investedAmount, profitEarned });

    const visuals = [graphInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `<div>By investing in a ${sipFrequencyLabel.toLowerCase()} SIP, your investment is likely to grow to <span style="color: #879EDB">₹${getAmountWithMoneySuffix(valueOfInvestment)}</span> after ${investmentDuration} years.</div>`,
    };
};

const getPPFGraph = (inputFields) => {
    const { investedAmount, profitEarned } = inputFields;

    const investedAmountValue = getAmountWithMoneySuffix(investedAmount);
    const profitEarnedValue = getAmountWithMoneySuffix(profitEarned);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#F4E7BF',
                    labelName: 'Invested Amount',
                    labelValue: `₹${profitEarned === 0 ? 0 : investedAmountValue}`,
                },
                {
                    bulletColor: '#D3B250',
                    labelName: 'Profit Earned',
                    labelValue: `₹${profitEarnedValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [investedAmount, profitEarned],
                    backgroundColor: [
                        '#F4E7BF',
                        '#D3B250',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyPPFOutput = () => {
    const graphInfo = getPPFGraph({ investedAmount: 100, profitEarned: 0 });

    return {
        visuals: [graphInfo],
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculatePPFOutput = (inputFields) => {
    // Input values
    /**
     * we keep monthlyInvestmentAmount and currentPPFBalance step_value 500 instead of 1000
     * because if the step_value is 1000 slider is not move to its maxValue
     */
    const monthlyInvestmentAmount = parseFloat(inputFields.find((item) => item.label === 'Annual investment amount').value);
    const investmentDuration = parseFloat(inputFields.find((item) => item.label === 'Investment duration').value);
    const rateOfInterest = parseFloat(inputFields.find((item) => item.label === 'Rate of interest').value) / 100;

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyPPFOutput();
    }

    // calculations
    const valueOfInvestment = FV(rateOfInterest, investmentDuration, -monthlyInvestmentAmount, 0, 1);
    const investedAmount = monthlyInvestmentAmount * investmentDuration;
    const profitEarned = valueOfInvestment - investedAmount;

    const graphInfo = getPPFGraph({ investedAmount, profitEarned });

    const visuals = [graphInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `<div>The total amount available to you at maturity is <span style="color: #D3B250">₹${getAmountWithMoneySuffix(valueOfInvestment)}</span></div>`,
    };
};

const getEmiGraph = (inputFields) => {
    const { totalInterest, totalAmountPayable } = inputFields;

    const totalInterestValue = getAmountWithMoneySuffix(totalInterest);
    const totalAmountPayableValue = getAmountWithMoneySuffix(totalAmountPayable);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#FAD0D0',
                    labelName: 'Total Interest',
                    labelValue: `₹${totalAmountPayable === 0 ? 0 : totalInterestValue}`,
                },
                {
                    bulletColor: '#CF8888',
                    labelName: 'Total Amount Payable',
                    labelValue: `₹${totalAmountPayableValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [totalInterest, totalAmountPayable],
                    backgroundColor: [
                        '#F8D0D0',
                        '#CF8888',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyEmiGraph = () => {
    const graphInfo = getEmiGraph({ totalInterest: 100, totalAmountPayable: 0 });

    return {
        visuals: [graphInfo],
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateEmiOutput = (inputFields) => {
    // Input values
    const loanAmount = parseFloat(inputFields.find((item) => item.label === 'Your loan amount').value);
    const loanTenure = parseFloat(inputFields.find((item) => item.label === 'Loan tenure').value);
    const interestRate = parseFloat(inputFields.find((item) => item.label === 'Interest on loan taken').value) / 100;

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyEmiGraph();
    }

    // calculations
    const emi = PMT(interestRate / 12, loanTenure * 12, -loanAmount, 0, 0);
    const totalInterest = -CUMIPMT(interestRate / 12, loanTenure * 12, loanAmount, 1, loanTenure * 12, 0);
    const totalAmountPayable = totalInterest + loanAmount;

    const graphInfo = getEmiGraph({ totalInterest, totalAmountPayable });

    const visuals = [graphInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `Your EMIs will come out to <span style="color: #CF8888">₹${getAmountWithMoneySuffix(emi)}</span> per month`,
    };
};

/**
 * Creates the required object for rendering the NPS calculator table
 *
 * @param {object} outputValues The output values to be shown in the table
 * @returns {object} The required object to render the table
 */
const getNpsTable = (outputValues) => {
    const {
        lumpSum, likelyMonthlyPension, howMuchIsThisWorthToday, taxSavedPa, annuity,
        // profitEarned, contributionAmount, retirementCorpus, annuity
    } = outputValues;

    return {
        type: 'table',
        label: 'Table',
        data: {
            values: [
                // {
                //     id: 1,
                //     label: 'Profit earned',
                //     value: `₹${getAmountWithMoneySuffix(profitEarned)}`,
                //     moreInfo: 'The amount you’ve gained on your total NPS contributions',
                // },
                // {
                //     id: 2,
                //     label: 'Total contributions',
                //     value: `₹${getAmountWithMoneySuffix(contributionAmount)}`,
                //     moreInfo: 'The sum total of your monthly NPS contributions',
                // },
                // {
                //     id: 3,
                //     label: 'Total retirement corpus',
                //     value: `₹${getAmountWithMoneySuffix(retirementCorpus)}`,
                //     moreInfo: 'The entire amount available to you upon exiting NPS',
                // },
                {
                    id: 8,
                    label: 'Annual tax savings',
                    value: `₹${getAmountWithMoneySuffix(taxSavedPa)}`,
                    moreInfo: 'The amount you could save up to in taxable income using 80C (max ₹1.5 lakh p.a) and 80CCB (max ₹50,000 p.a)',
                },
                {
                    id: 4,
                    label: 'Lump sum withdrawal amount',
                    value: `₹${getAmountWithMoneySuffix(lumpSum)}`,
                    moreInfo: 'You can withdraw up to 60% of your total retirement corpus as a lump sum amount when you exit NPS',
                },
                {
                    id: 5,
                    label: 'Amount invested in annuity',
                    value: `₹${getAmountWithMoneySuffix(annuity)}`,
                    moreInfo: 'This is assuming you’ve invested 40% of your total retirement corpus in annuities and withdraw the rest as a lump sum. PFRDA requires that at least 40% of the retirement corpus is used to purchase an annuity.',
                },
                {
                    id: 6,
                    label: 'Monthly pension amount after 60',
                    value: `₹${getAmountWithMoneySuffix(likelyMonthlyPension)}`,
                    moreInfo: 'The monthly pension you will get from your annuity investment',
                },
                {
                    id: 7,
                    label: 'Present value of monthly pension',
                    value: `₹${getAmountWithMoneySuffix(howMuchIsThisWorthToday)}`,
                    // eslint-disable-next-line max-len
                    moreInfo: `This means if your monthly pension after 60 is ₹${getAmountWithMoneySuffix(likelyMonthlyPension)} that would only be worth ₹${getAmountWithMoneySuffix(howMuchIsThisWorthToday)} today`,
                },
            ],
        },
    };
};

const getNpsGraph = (inputFields) => {
    const { profitEarned, investedAmount } = inputFields;

    const profitEarnedValue = getAmountWithMoneySuffix(profitEarned);
    const investmentAmountValue = getAmountWithMoneySuffix(investedAmount);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#CDC6E8',
                    labelName: 'PROFIT EARNED',
                    labelValue: `₹${investedAmount === 0 ? 0 : profitEarnedValue}`,
                },
                {
                    bulletColor: '#9287BD',
                    labelName: 'INVESTED AMOUNT',
                    labelValue: `₹${investmentAmountValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [profitEarned, investedAmount],
                    backgroundColor: [
                        '#CDC6E8',
                        '#9287BD',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyNpsGraph = () => {
    const graphInfo = getNpsGraph({ profitEarned: 100, investedAmount: 0 });

    return {
        visuals: [graphInfo],
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateNpsOutput = (inputFields) => {
    // Input values
    const age = parseFloat(inputFields.find((item) => item.label === 'Age').value);
    const monthlyInvestment = parseFloat(inputFields.find((item) => item.label === 'Monthly investment').value);
    const expectedReturn = parseFloat(inputFields.find((item) => item.label === 'Expected return').value) / 100;
    const expectedAnnuityRate = parseFloat(inputFields.find((item) => item.label === 'Expected annuity return').value) / 100;

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyNpsGraph();
    }

    // calculations
    const contributionAmount = monthlyInvestment * (60 - age) * 12;
    const retirementCorpus = -FV(expectedReturn / 12, (60 - age) * 12, monthlyInvestment, 0, 1);
    const profitEarned = retirementCorpus - contributionAmount;

    const lumpSum = 0.6 * retirementCorpus;
    const annuity = retirementCorpus - lumpSum;
    const likelyMonthlyPension = (annuity * expectedAnnuityRate) / 12;
    const howMuchIsThisWorthToday = likelyMonthlyPension / (1.06 ** 60 - age);
    const taxSavedPa = Math.min(monthlyInvestment * 12, 200000) * 0.33;

    const investedAmount = retirementCorpus - profitEarned;
    const outputValue = profitEarned + investedAmount;

    const outputValues = {
        profitEarned,
        contributionAmount,
        retirementCorpus,
        lumpSum,
        annuity,
        likelyMonthlyPension,
        howMuchIsThisWorthToday,
        taxSavedPa,
    };

    const graphInfo = getNpsGraph({ profitEarned, investedAmount });
    const tableInfo = getNpsTable(outputValues);

    const visuals = [graphInfo, tableInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `Your total retirement corpus at 60 will be <span style="color: #9287BD">₹${getAmountWithMoneySuffix(outputValue)}</span>`,
    };
};

const getHraGraph = (inputFields) => {
    const { exemptHra, taxableHra } = inputFields;

    const exemptHraValue = getAmountWithMoneySuffix(exemptHra);
    const taxableHraValue = getAmountWithMoneySuffix(taxableHra);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#DEEEF2',
                    labelName: 'exempted HRA ',
                    labelValue: `₹${taxableHra === 0 ? 0 : exemptHraValue}`,
                },
                {
                    bulletColor: '#7FBECE',
                    labelName: 'taxable HRA ',
                    labelValue: `₹${taxableHraValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [exemptHra, taxableHra],
                    backgroundColor: [
                        '#DEEEF2',
                        '#7FBECE',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyHraGraph = () => {
    const graphInfo = getHraGraph({ exemptHra: 100, taxableHra: 0 });

    return {
        visuals: [graphInfo],
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateHraOutput = (inputFields) => {
    // Input values
    const annualSalaryBasicComponent = parseFloat(inputFields.find((item) => item.name === 'annual salary component').value);
    const hraComponentOfSalary = parseFloat(inputFields.find((item) => item.name === 'hra salary component').value);
    const totalRentPaidByYouAnnually = parseFloat(inputFields.find((item) => item.name === 'rent paid annually').value);
    const livedInMetroCity = inputFields.find((item) => item.name === 'current city').value.value;

    // if input is not withing min and max range and if input value is empty, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyHraGraph();
    }

    let multiplier;

    // calculations
    if (livedInMetroCity) {
        multiplier = 0.5;
    } else {
        multiplier = 0.4;
    }

    let adjustedTotalRentPaid = totalRentPaidByYouAnnually - (0.1 * annualSalaryBasicComponent);
    adjustedTotalRentPaid = adjustedTotalRentPaid < 0 ? 0 : adjustedTotalRentPaid;
    const hraCalculationAccordingToCity = annualSalaryBasicComponent * multiplier;

    // eslint-disable-next-line max-len
    const exemptHra = Math.min(adjustedTotalRentPaid, hraComponentOfSalary, hraCalculationAccordingToCity);
    const taxableHra = hraComponentOfSalary - exemptHra;

    const graphInfo = getHraGraph({ exemptHra, taxableHra });

    const visuals = [graphInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `Your exempted HRA component is <span style="color: #7FBECE">₹${getAmountWithMoneySuffix(exemptHra)}</span> and your taxable HRA component is <span style="color: #7FBECE">₹${getAmountWithMoneySuffix(taxableHra)}</span>`,
    };
};

const getEmptyGratuityOutput = (currentCompanyTenure, minimumCurrentCompanyTenure) => {
    let outputSentence;

    if (currentCompanyTenure < minimumCurrentCompanyTenure) {
        // eslint-disable-next-line max-len
        outputSentence = `<div style="color: #FF7B31">You are not eligible for any gratuity as you’ve not yet finished ${minimumCurrentCompanyTenure} years in this job.</div>`;
    } else {
        outputSentence = '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>';
    }

    return {
        visuals: [],
        outputSentence,
    };
};

const calculateGratuityOutput = (inputFields) => {
    // Input values
    const salaryComponent = parseFloat(inputFields.find((item) => item.name === 'salary component').value);
    const currentCompanyTenure = parseFloat(inputFields.find((item) => item.name === 'current company tenure').value);
    const minimumCurrentCompanyTenure = parseFloat(inputFields.find((item) => item.name === 'current company tenure').min_value.value);

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyGratuityOutput(currentCompanyTenure, minimumCurrentCompanyTenure);
    }

    // calculations
    const gratuityAmount = (currentCompanyTenure * salaryComponent * 15) / 26;
    const visuals = [];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `<div style="text-align: center"><div>You are eligible for</div><div style="color: #879EDB; margin-top: 8px;">₹${getAmountWithMoneySuffix(gratuityAmount)}</div></div><div style="text-align: center; margin-top: 10px;"><div>as gratuity at the end of your</div><div style="color: #879EDB; margin-top: 8px;">${currentCompanyTenure} years</div></div>`,
    };
};

const getEpfGraph = (inputFields) => {
    const { investedAmount, totalInterestEarned } = inputFields;

    const investedAmountValue = getAmountWithMoneySuffix(investedAmount);
    const totalInterestEarnedValue = getAmountWithMoneySuffix(totalInterestEarned);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            type: 'doughnut',
            labels: [
                {
                    bulletColor: '#FAD0D0',
                    labelName: 'TOTAL INVESTMENT AMOUNT',
                    labelValue: `₹${totalInterestEarned === 0 ? 0 : investedAmountValue}`,
                },
                {
                    bulletColor: '#CF8888',
                    labelName: 'TOTAL INTEREST EARNED',
                    labelValue: `₹${totalInterestEarnedValue}`,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0,
                    },
                },
                tooltips: { enabled: false },
                hover: { mode: null },
            },
            backgroundColor: '#F7F9FA',
            graphData: {
                datasets: [{
                    data: [investedAmount, totalInterestEarned],
                    backgroundColor: [
                        '#FAD0D0',
                        '#CF8888',
                    ],
                    cutout: '80%',
                }],
            },
        },
    };
};

const getEmptyEpfGraph = () => {
    const graphInfo = getEpfGraph({ investedAmount: 100, totalInterestEarned: 0 });

    return {
        visuals: [graphInfo],
        outputSentence: '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>',
    };
};

const calculateEpfOutput = (inputFields) => {
    // Input values
    const age = parseFloat(inputFields.find((item) => item.name === 'your age').value);
    const retirementAge = parseFloat(inputFields.find((item) => item.name === 'retirement age').value);
    const monthlySalary = parseFloat(inputFields.find((item) => item.name === 'monthly salary').value);
    const currentEpfBalance = parseFloat(inputFields.find((item) => item.name === 'current epf balance').value);
    const salaryGrowth = parseFloat(inputFields.find((item) => item.name === 'salary growth').value) / 100;
    const expectedReturn = parseFloat(inputFields.find((item) => item.name === 'expected return').value) / 100;

    // if input is not withing min and max range and if input value is empty, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyEpfGraph();
    }

    const values = calculateEPFInvestment({
        age, retirementAge, monthlySalary, currentEpfBalance, salaryGrowth, expectedReturn,
    });

    const {
        updateEPFInvestmentValues, getExtraDetails,
    } = values;

    const { workingMonth } = getExtraDetails();

    for (let counter = 1; counter <= workingMonth; counter += 1) {
        updateEPFInvestmentValues(counter);
    }

    const {
        totalEmployeeShare, totalEmployerShare, totalInterestEarned,
    } = getExtraDetails();

    const investedAmount = totalEmployeeShare + totalEmployerShare;

    const profit = investedAmount + totalInterestEarned;

    const graphInfo = getEpfGraph({ investedAmount, totalInterestEarned });

    const visuals = [graphInfo];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `The total retirement corpus available to you will be <span style="color: #CF8888">₹${getAmountWithMoneySuffix(profit)}</span>`,
    };
};

/**
 * Calculate the how much EMI the user needs to pau for the home loan
 *
 * @param inputValues The input values given by the user
 * @returns The terminal / monthly EMI
 */
const getTerminalEMI = (inputValues) => {
    const {
        homePrice, downPayment, loanInterestRate, loanTenure,
    } = inputValues;

    if (downPayment === homePrice) return 0;

    const differenceSurplus = homePrice - downPayment;
    const eachMonthsEMI = PMT(loanInterestRate / 12, loanTenure * 12, -(differenceSurplus), 0, 0);

    return eachMonthsEMI <= 0 ? 0 : eachMonthsEMI;
};

/**
 * Calculate the cost the user will be paying for taking a home loan
 * This includes the interest payment costs & the loan processing fee
 *
 * @param inputValues The input values given by the user
 * @returns The total cost of taking a home loan
 */
/* NOTE: Not used in current calculation, was used previously. May be useful later on.
const getFinancingCostOfHomeLoan = (inputValues) => {
    const {
        homePrice, downPayment, loanInterestRate, loanTenure,
    } = inputValues;

    if (downPayment === homePrice) return 0;

    const loanProcessingFee = 0.005 * (homePrice - downPayment);
    const differenceSurplus = homePrice - downPayment;
    const interestPayments = -CUMIPMT(loanInterestRate / 12, loanTenure * 12, differenceSurplus, 1, loanTenure * 12, 0);

    const financingCost = interestPayments + loanProcessingFee;

    return financingCost <= 0 ? 0 : financingCost;
};
*/

/**
 * Calculate the rate at which the home price will grow over the tenure
 * It takes the city's return rate and standard deviation
 * It multiple the users city optimism value which can be a value anywhere from -2 to +2 with the standard deviation
 * Add the above value to the city return rate
 * If the final value is less than 0 then do not take that. Take 0 as the least value
 *
 * @param inputValues The input values given by the user
 * @returns The rate at which the property price will grow
 */
const getModCityReturnRate = (inputValues) => {
    const {
        cityInfo, cityOptimism,
    } = inputValues;

    let { city_return: cityReturn, city_std_dev: cityStdDev } = cityInfo;
    cityReturn = parseFloat(cityReturn);
    cityStdDev = parseFloat(cityStdDev);

    const modDeviation = cityOptimism * cityStdDev;
    const updatedCityRate = cityReturn + modDeviation;

    // keep 0 as the minimum value, should not become negative
    let modCityReturn = updatedCityRate < 0 ? 0 : updatedCityRate;
    modCityReturn /= 100;

    return modCityReturn;
};

/**
 * Calculates the graph of the future value of the home & future value of the investment for the given time period
 * The last value of the graph is the future value of home & investment
 * Following are the steps to calculate the future values:
 *
 * 1. Calculate the mod city return by taking into account city optimism
 * 2. Calculate the terminal EMI for the home loan
 * 3. Calculate the diminishing annuity of home value & investment value:
 * Starting from the 0th month till the last month calculate the following:
 * a. Calculate current months Future value of home
 * b. Calculate the investable surplus that you can invest
 * c. Calculate current months Future value of investment
 * d. At the month where the current investment becomes greater than current house value,
 *    it will be that month where the user can buy the entire house with cash
 * e. After every 12 months increase the rent by rate of rent renewal
 *
 * @param {object} inputValues The input values given by the user
 * @returns {object} {
 *     homeGraphArr, // The values of fv of home from 0th month till last month of the tenure
 *     investmentGraphArr, // The values of fv of investment from 0th month till last month of the tenure
 *     buyHouseInFullCashMonth, // The month at which user can buy the whole house with current investment cash
 * }
 */
const calculateRentVsBuyFutureValues = (inputValues) => {
    const {
        homePrice, downPayment, loanTenure, startingRentAmt, rentIncRate, investmentReturnRate,
    } = inputValues;

    // Home calculations
    const modCityReturn = getModCityReturnRate(inputValues);
    const eachMonthsEMI = getTerminalEMI(inputValues);
    // const interestExpenseOnHomeLoan = getFinancingCostOfHomeLoan(inputValues);
    // const houseCostAdjustmentPerMonth = interestExpenseOnHomeLoan / (loanTenure * 12);
    const monthlyModInvestmentReturnRate = parseFloat((((1 + investmentReturnRate) ** (1 / 12)) - 1).toFixed(10));

    // Initialize variables
    let curMonth = 0;
    let curRentAmt = startingRentAmt;
    let curHomePrice = homePrice;
    let investableSurplus = eachMonthsEMI - curRentAmt;
    let curInvestmentVal = investableSurplus;
    let fvOfInvestmentForHome = 0;
    let totalRentPaid = 0;

    // Output variables
    const homeGraphArr = [];
    const investmentGraphArr = [];
    let buyHouseInFullCashMonth = 0;
    let storedBuyHouseInFullCashMonth = false;

    /* Diminishing calc starts */
    // calculate for the whole loanTenure
    while ((curMonth < loanTenure * 12)) {
        // Keep rent constant for every 12 month
        for (let i = 0; i < 11; i += 1) {
            if (curMonth >= loanTenure * 12) break;

            // Calculate new home FV
            const monthlyModCityReturnRate = parseFloat((((1 + modCityReturn) ** (1 / 12)) - 1).toFixed(10));
            curHomePrice = parseFloat((FV(monthlyModCityReturnRate, 1, 0, -curHomePrice, 1)).toFixed(4));
            // const homeDecisionNetWorth = curHomePrice - (houseCostAdjustmentPerMonth * (curMonth + 1));

            // If the rent becomes more than the EMI, then we have rent - EMI amount as a surplus that we can invest
            const surplusWhileBuyingHouse = curRentAmt - eachMonthsEMI;

            if (surplusWhileBuyingHouse > 0) {
                const curInvestableValue = fvOfInvestmentForHome + surplusWhileBuyingHouse;

                fvOfInvestmentForHome = parseFloat((
                    FV(monthlyModInvestmentReturnRate, 1, 0, -curInvestableValue, 1))
                    .toFixed(4));
            }
            const homeDecisionNetWorth = curHomePrice + fvOfInvestmentForHome;

            // Store current iteration home FV (Future Value)
            homeGraphArr.push({
                month: curMonth,
                value: homeDecisionNetWorth,
            });

            investableSurplus = eachMonthsEMI - curRentAmt;
            let monthlyInvestmentContribution = investableSurplus;
            // For the 1st month OR if the value of current months rent becomes more than the EMI, monthlyInvestmentContribution will be 0
            if (curMonth === 0 || investableSurplus < 0) monthlyInvestmentContribution = 0;

            let finalCurMonthContribution = curInvestmentVal + monthlyInvestmentContribution;
            // Only for the 1st month add the down payment value to the finalCurMonthContribution
            if (curMonth === 0) finalCurMonthContribution += downPayment;

            // Calculate new investment FV
            curInvestmentVal = parseFloat((
                FV(monthlyModInvestmentReturnRate, 1, 0, -finalCurMonthContribution, 1))
                .toFixed(4));

            // Store current iteration investment FV
            investmentGraphArr.push({
                month: curMonth,
                value: curInvestmentVal,
            });

            const differenceInCurInvestment = curHomePrice - curInvestmentVal;
            // Find the month in which the current value of the investment becomes more than the current home price
            if (!storedBuyHouseInFullCashMonth && differenceInCurInvestment < 0) {
                buyHouseInFullCashMonth = curMonth + 1;
                storedBuyHouseInFullCashMonth = true;
            }

            // End of 1 months calculation, increment curMonth counter
            curMonth += 1;
            totalRentPaid += curRentAmt;
        }

        // For 12 months the curRentAmt will be the same. After that, calculate the new rent and use it for the next 12 months
        curRentAmt *= (1 + rentIncRate);
    }
    /* Diminishing calc ends */

    return {
        homeGraphArr,
        investmentGraphArr,
        buyHouseInFullCashMonth,
        totalRentPaid,
    };
};

/**
 * Find the rent value after which buying a house is better than renting
 *
 * @param initialFvOfHome The initial value of the home
 * @param initialFvOfInvestment The initial value of the invested amount
 * @param startingRentAmt The rent amount at which the calculation should start
 * @param rentIncAmt By how much should the rent increase in each iteration
 * @param inputValues The input values given by the user
 * @returns The rent amount at which the buying a house becomes better than renting
 */
const iterateRentAmt = (
    initialFvOfHome: number, initialFvOfInvestment: number, startingRentAmt: number, rentIncAmt: number, inputValues: any,
): number => {
    let curIterRent = startingRentAmt;
    let curFvOfHome = initialFvOfHome;
    let curFvOfInvestment = initialFvOfInvestment;

    while (curFvOfHome < curFvOfInvestment) {
        curIterRent += rentIncAmt;
        const { homeGraphArr, investmentGraphArr } = calculateRentVsBuyFutureValues({ ...inputValues, startingRentAmt: curIterRent });
        curFvOfHome = homeGraphArr[homeGraphArr.length - 1].value;
        curFvOfInvestment = investmentGraphArr[investmentGraphArr.length - 1].value;
    }

    return curIterRent;
};

/**
 * Based on the users input, if fv of investment is more than the fv of house after the total tenure then calculate
 * the rent amount till the point where renting is better than buying the house by increasing it by Rs. 10,000 in each iteration
 * Once the fv of home becomes more than fv of investment, the last rent amount is breaking point rent
 *
 * @param {object} inputValues The input values given by the user
 * @param {number} fvOfHome The future value of the home after the whole tenure as per the current input given by the user
 * @param {number} finalFvInvestment The future value of the investment after the whole tenure as per the current input given by the user
 * @returns {number} The maximum rent amount that the user should pay so that investing is a better decision than buying the house
 */
const calculateBreakingPointRent = (inputValues, fvOfHome, finalFvInvestment): any => {
    const { startingRentAmt } = inputValues;

    /**
     * Find the rent at which buying house is better than renting by increasing the rent by Rs.20,000 first
     * After finding at 20k, try with 10k, then with 1k and finally by increasing rent at Rs.500
     */
    const rentAt20kIncRate = iterateRentAmt(fvOfHome, finalFvInvestment, startingRentAmt, 20000, inputValues);
    const rentAt10kIncRate = iterateRentAmt(fvOfHome, finalFvInvestment, rentAt20kIncRate - 20000, 10000, inputValues);
    const rentAt1kIncRate = iterateRentAmt(fvOfHome, finalFvInvestment, rentAt10kIncRate - 10000, 1000, inputValues);
    const rentAt500IncRate = iterateRentAmt(fvOfHome, finalFvInvestment, rentAt1kIncRate - 1000, 500, inputValues);

    // Current rent is Rs. 500 more, subtract by 500
    const finalBreakingPoint = rentAt500IncRate - 500;

    // round off to nearest 1000
    return Math.round(finalBreakingPoint / 1000) * 1000;
};

/**
 * Transform array values in graph compatible values
 *
 * @param graphArr The array of values that need to be transformed into graph values
 * @returns The graph values
 */
const getGraphTransformedArray = (graphArr) => {
    /**
     * graphArr has length of 240 as it has values for all 240 months
     * we only want the values for every year so filter and get only whole year values like 0, 1 ,2, ...20
     */
    const graphWholeYearValues = graphArr.filter((item) => {
        if (item.month === 0) return true;
        return (item.month + 1) % 12 === 0;
    });

    /**
     * for x axis - Add +1 to item.month since it is 0 indexed values. Divide by 12 to get the value in years.
     * for y axis - divide item.value by 1CR to get value in crores
     */
    return graphWholeYearValues.map((item) => ({ x: (item.month + 1) / 12, y: item.value / ONE_CRORE }));
};

/**
 * Create list of objects to be shown above the legend section on the graph for rent v buy calc
 *
 * @param inputValues The input values given by the user
 * @returns The array of objects to be shown above the graph legend
 */
const getGraphExtraInfo = (inputValues) => {
    const { investmentReturnRate } = inputValues;
    const modCityReturn = (getModCityReturnRate(inputValues) * 100).toFixed(1);

    return ([
        {
            id: 1,
            text: `Annual home price appreciation: ${modCityReturn}%`,
        },
        {
            id: 2,
            text: `Annual investment returns: ${investmentReturnRate * 100}.0%`,
        },
    ]);
};

/**
 * Creates the required object for rendering the graph
 *
 * @param inputValues The input values given by the user
 * @param outputGraphs The graph values for fv home & fv investment
 * @returns The required object to render the graph
 */
const getRentVsBuyGraph = (inputValues, outputGraphs) => {
    const { loanTenure } = inputValues;
    const { homeGraphArr, investmentGraphArr } = outputGraphs;

    // transform home values to graph object
    const homeGraphVal = getGraphTransformedArray(homeGraphArr);

    // transform investment values to graph object
    const invGraphVal = getGraphTransformedArray(investmentGraphArr);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            // chart js graph object
            type: 'line',
            backgroundColor: '#F7F9FA',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 80,
                elements: {
                    point: {
                        pointHitRadius: 25,
                    },
                },
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: {
                        grid: { display: false },
                        title: { display: true, text: 'Net Amount (cr)' },
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback(value) { // callback(value, index, ticks) {
                                return `${value}Cr`;
                            },
                        },
                        suggestedMin: 0,
                        suggestedMax: 1,
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        title: { display: true, text: 'No. of years' },
                        ticks: {
                            maxRotation: 0,
                            maxTicksLimit: 11,
                        },
                    },
                },
            },
            graphData: {
                labels: [...Array(loanTenure + 1).keys()], // year duration for x-axis
                datasets: [
                    {
                        label: false,
                        data: homeGraphVal,
                        fill: true,
                        borderColor: 'rgba(127, 190, 206, 1)',
                        borderWidth: 1,
                        backgroundColor: 'rgba(127,  190, 206, 0.4)',
                        tension: 0.1,
                        pointRadius: 0,
                    },
                    {
                        label: false,
                        data: invGraphVal,
                        fill: true,
                        borderColor: 'rgba(135, 186, 107, 1)',
                        borderWidth: 1,
                        backgroundColor: 'rgba(217, 242, 204, 0.7)',
                        tension: 0.1,
                        pointRadius: 0,
                    },
                ],
            },
            // extra additions, not required chart js
            labels: [
                {
                    bulletColor: 'rgba(127, 190, 206, 1)',
                    labelName: 'NET HOME PRICE',
                },
                {
                    bulletColor: 'rgba(135, 186, 107, 1)',
                    labelName: 'INVESTMENT VALUE',
                },
            ],
            extraInfo: getGraphExtraInfo(inputValues),
        },
    };
};

/**
 * Creates the required object for rendering the table
 *
 * @param {object} outputValues The output values to be shown in the table
 * @returns {object} The required object to render the table
 */
const getRentVsBuyTable = (outputValues) => {
    const {
        eachMonthsEMI, finalFvInvestment, fvOfHome,
        // totalRentPaid, loanTenure,
    } = outputValues;

    return {
        type: 'table',
        label: 'Table',
        data: {
            values: [
                {
                    id: 1,
                    label: 'Home loan EMI',
                    value: `₹${getAmountWithMoneySuffix(eachMonthsEMI)}`,
                    moreInfo: 'Monthly EMI payment amount',
                },
                {
                    id: 2,
                    label: 'Your net worth if you buy a house',
                    value: `₹${getAmountWithMoneySuffix(fvOfHome)}`,
                    moreInfo: 'This is a combination of two things - what your house will be worth at the end of this time period. And second, over a period of time when rent amount in the market may increase to be more than your EMI amount, the difference between these two amounts can be invested to create wealth',
                },
                {
                    id: 3,
                    label: 'Your net worth if you rent a house & invested your extra savings',
                    value: `₹${getAmountWithMoneySuffix(finalFvInvestment)}`,
                    moreInfo: 'In case you choose to rent, this is the projected amount of wealth gains you make by investing the difference between the EMI and rent every month',
                },
            ],
        },
    };
};

const getEmptyRentVsBuyOutput = (inputValues) => {
    const emptyInputValues = {
        ...inputValues,
        investmentReturnRate: 0,
        cityInfo: {
            city_return: 0,
            city_std_dev: 0,
        },
        cityOptimism: 0,
    };

    const errorStateGraphValues = [{ month: 0, value: 0 }];
    const graphInfo = getRentVsBuyGraph(
        emptyInputValues, { homeGraphArr: errorStateGraphValues, investmentGraphArr: errorStateGraphValues },
    );

    const tableInfo = getRentVsBuyTable({
        eachMonthsEMI: 0, finalFvInvestment: 0, fvOfHome: 0, interestExpenseOnHomeLoan: 0, loanTenure: 0,
    });

    const visuals = [graphInfo, tableInfo];
    const outputSentence = '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>';

    return {
        visuals,
        outputSentence,
    };
};

const getOutputSentence = (inputValues, outputValues) => {
    const { homePrice } = inputValues;
    const { fvOfHome, finalFvInvestment } = outputValues;

    // Compare future values and make decision
    const decisionRentVBuy = fvOfHome - finalFvInvestment;

    // buying a house is better since fv of home is greater
    if (decisionRentVBuy > 0) {
        // User will almost break even since profit is less than 1 lakh
        if (decisionRentVBuy < ONE_LAKH) {
            return '<div>You may be better off buying your dream house than renting it, because you will <span style="color: #87BA6B">break even</span></div>';
        }

        const moneyGain = getAmountWithMoneySuffix(decisionRentVBuy);
        // Buying a house is better
        // eslint-disable-next-line max-len
        return `<div>You may be better off buying your dream house than renting it, because you will profit by <span style="color: #87BA6B">₹${moneyGain}</span></div>`;
    }

    // Renting is better since fv of investment is greater
    // Since fv of home is negative, tell user it is because of the inputs set by them
    if (fvOfHome < 0) {
        return '<div>Your inputs on home price optimism and purchase terms may lead to a <span style="color: #87BA6B">long term net loss</span> for you</div>';
    }

    let breakingPointRent = calculateBreakingPointRent(inputValues, fvOfHome, finalFvInvestment);
    const rentalYieldPercentage = ((breakingPointRent * 12) / homePrice) * 100;

    // If rental yield is higher than the normal expected range then renting would always be better
    if (rentalYieldPercentage > 8) {
        return '<div>You may always be better off <span style="color: #87BA6B">renting</span> a house, given the property growth trend in your city';
    }

    // Renting is better than buying
    breakingPointRent = breakingPointRent.toLocaleString('en-IN');
    // eslint-disable-next-line max-len
    return `<div>You may be better off renting your dream house for a maximum of <span style="color: #87BA6B">₹${breakingPointRent}</span>, than buying it</div>`;
};

/**
 * Main function to calculate the output of rent vs buy calculator
 * Calculates the graph, table & output sentence based on the users input
 * Google sheet link - https://docs.google.com/spreadsheets/d/1IU-r0SMCSz_dPhIyUq_sDFArX1P_4aAHbGoJAXKkgzg/edit#gid=876358514
 *
 * TODO: Keep all values as objects. label can be an empty string. Discuss pros / cons.
 *
 * @param {object} inputFields The input values given by the user
 * @returns {object} The graph, table & output sentence
 */
const calculateRentVsBuyOutput = (inputFields) => {
    // User input values
    // Convert city return rate csv to json - https://stackoverflow.com/a/51023820
    const cityInfo = inputFields.find((item) => item.name === 'City to buy house').value.value;
    const startingRentAmt = parseFloat(inputFields.find((item) => item.name === 'House rent').value);
    const rentIncRate = parseFloat(inputFields.find((item) => item.name === 'Rate at which rent increases').value) / 100;
    const homePrice = parseFloat(inputFields.find((item) => item.name === 'Cost of house').value) * ONE_CRORE;
    const downPaymentPercentage = parseFloat(inputFields.find((item) => item.name === 'Down payment of house').value) / 100;
    const downPayment = homePrice * downPaymentPercentage;
    const loanInterestRate = parseFloat(inputFields.find((item) => item.name === 'Loan interest').value) / 100;
    const loanTenure = parseFloat(inputFields.find((item) => item.name === 'Loan tenure').value);
    const investmentReturnRate = parseFloat(inputFields.find((item) => item.name === 'Investment return rate').value.value) / 100;
    const cityOptimism = inputFields.find((item) => item.name === 'House growth rate').value / 10;

    const inputValues = {
        cityInfo, startingRentAmt, rentIncRate, homePrice, downPayment, loanInterestRate, loanTenure, investmentReturnRate, cityOptimism,
    };

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyRentVsBuyOutput(inputValues);
    }

    // Calculate output graph
    const { homeGraphArr, investmentGraphArr, totalRentPaid } = calculateRentVsBuyFutureValues(inputValues);

    // Store final fv of home & investment
    const fvOfHome = homeGraphArr[homeGraphArr.length - 1].value;
    const finalFvInvestment = investmentGraphArr[investmentGraphArr.length - 1].value;
    const outputValues = { fvOfHome, finalFvInvestment, totalRentPaid };

    // Get table & graph data
    const graphInfo = getRentVsBuyGraph(inputValues, { homeGraphArr, investmentGraphArr });
    const tableInfo = getRentVsBuyTable({
        eachMonthsEMI: getTerminalEMI(inputValues),
        loanTenure,
        ...outputValues,
    });
    const visuals = [graphInfo, tableInfo];

    // Get output sentence
    const outputSentence = getOutputSentence(inputValues, outputValues);

    return {
        visuals,
        outputSentence,
    };
};

const calcuateCAGROutput = (inputFields) => {
    // Input values
    const initialValue = parseFloat(inputFields.find((item) => item.name === 'initial value').value);
    const finalValue = parseFloat(inputFields.find((item) => item.name === 'final value').value);
    const timePeriod = parseFloat(inputFields.find((item) => item.name === 'time period').value);

    // calculations
    const cagrAmount = ((((finalValue / initialValue)) ** (1 / timePeriod)) - 1) * 100;
    const modifiedCagrAmount = cagrAmount.toFixed(2);
    const visuals = [];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `<div style="text-align: center">Your investment has a CAGR of <div style="color: #879EDB; margin-top: 8px;">${modifiedCagrAmount}%</div></div>`,
    };
};

const calculateInflationRate = (inputFields) => {
    // Input values
    const currentCost = parseFloat(inputFields.find((item) => item.name === 'current cost').value);
    const viewOnInflation = parseFloat(inputFields.find((item) => item.name === 'view on inflation').value) / 2;
    const timePeriod = parseFloat(inputFields.find((item) => item.name === 'time period').value);
    let assumedInflationRate = inputFields.find((item) => item.name === 'assumed inflation rate').value;

    // calculations
    const avgInflation = 0.0599;
    const stdDev = 0.0245;

    assumedInflationRate = avgInflation + (viewOnInflation * stdDev);
    const modifiedInflationRate = (assumedInflationRate * 100).toFixed(2);

    const futureCost = FV(assumedInflationRate, timePeriod, 0, -currentCost, 0);
    const modifiedFutureCost = futureCost.toFixed(0);
    const visuals = [];

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `<div style="text-align: center">At an inflation rate of <span style="color: #879EDB; margin-top: 8px;">${modifiedInflationRate}%</span>, your current cost of <span style="color: #879EDB; margin-top: 8px;">₹${currentCost}</span> will be <span style="color: #879EDB; margin-top: 8px;">₹${modifiedFutureCost}</span> at the end of <span style="color: #879EDB; margin-top: 8px;">${timePeriod}</span> years.</div>`,
    };
};

/**
 * Transform array values in graph compatible values
 *
 * @param graphArr The array of values that need to be transformed into graph values
 * @returns The graph values
 */
const getGraphTransformedArrayForFireCalc = (graphArr) => {
    // Modulus age by 1 to get only that item on which age is integer.
    const filterArray = graphArr.filter((item) => item.age % 1 === 0);

    /**
     * for x axis - showing age
     * for y axis - divide item.value by 1CR to get value in crores
     */
    return filterArray.map((item) => ({ x: item.age, y: item.value / ONE_CRORE }));
};

/**
 * Creates the required object for rendering the graph
 *
 * @param outputGraphs The graph values for investment period array & systematic withdrawl array
 * @returns The required object to render the graph
 */
const getFireGraph = (outputGraphs) => {
    const { investmentPeriodArray, systematicWithdrawlArray } = outputGraphs;

    // transform investment array values to graph object
    const investmentPeriodGrpahValues = getGraphTransformedArrayForFireCalc(investmentPeriodArray);

    // transform systematic withdrawl array values to graph object
    const systematicWithdrawlGraphValues = getGraphTransformedArrayForFireCalc(systematicWithdrawlArray);

    // get label values that need to show in graph in x-axis
    const labelsValue = [...investmentPeriodGrpahValues, ...systematicWithdrawlGraphValues].map((item) => item.x);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            // chart js graph object
            type: 'line',
            backgroundColor: '#383838',
            options: {
                ...getGraphOptions(),
                scales: {
                    y: { ...getGraphScalesData({ titleText: 'Amount (cr)', borderColor: '#E7E7E7' }) },
                    x: { ...getGraphScalesData({ titleText: 'Age', borderColor: '#E7E7E7' }) },
                },
            },
            graphData: {
                labels: labelsValue,
                datasets: [
                    ...[getGraphDatasets({
                        data: investmentPeriodGrpahValues, borderColor: 'rgba(127, 190, 206, 1)', backgroundColor: '#DEEEF2',
                    })],
                    ...[getGraphDatasets({
                        data: systematicWithdrawlGraphValues, borderColor: 'rgba(135, 186, 107, 1)', backgroundColor: '#D9F2CC',
                    })],
                ],
            },
            // extra additions, not required chart js
            labels: [
                {
                    bulletColor: '#DEEEF2',
                    labelName: 'ACCUMATION PHASE',
                },
                {
                    bulletColor: '#D9F2CC',
                    labelName: 'SPENDING PHASE',
                },
            ],
        },
    };
};

/**
 * Render an empty graph
 *
 * @returns The required object to render the graph
 */
const getEmptyFireOutput = () => {
    const errorStateGraphValues = [{ age: 0, value: 0 }];
    const graphInfo = getFireGraph({ investmentPeriodArray: errorStateGraphValues, systematicWithdrawlArray: errorStateGraphValues });

    const visuals = [graphInfo];
    const outputSentence = '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>';

    return {
        visuals,
        outputSentence,
    };
};

/**
 * Calculate closing balance of every month of EPF Investment
 */
const calculateEPFInvestmentForFireCalc = (epfInvestmentValues, counter) => {
    const { updateEPFInvestmentValues, getExtraDetails } = epfInvestmentValues;

    updateEPFInvestmentValues(counter);

    return getExtraDetails().closingBalance;
};

/**
 * Calculate portfolio value of every month of SIP Investment
 */
const calculateSIPInvestmentForFireCalc = (sipInvestmentValues, counter) => {
    const { updateSIPInvestmentValues, getExtraDetails } = sipInvestmentValues;

    updateSIPInvestmentValues(counter);

    return getExtraDetails().portfolioValue;
};

/**
 * Main function to calculate the output of fire calculator
 * Calculates the graph, table & output sentence based on the users input
 *
 * @param {object} inputFields The input values given by the user
 * @returns {object} The graph, table & output sentence
*/
const calculateFireOutput = (inputFields) => {
    // User input values
    const currentAgeAndRetireAge = inputFields.find((item) => item.name === 'Current age and Retire Age').value;
    const monthlySalary = parseFloat(inputFields.find((item) => item.name === 'Monthly salary').value);
    const salaryHike = parseFloat(inputFields.find((item) => item.name === 'Salary hike').value) / 100;
    const monthlyExpenses = parseFloat(inputFields.find((item) => item.name === 'Monthly expenses').value);
    const expenseHike = parseFloat(inputFields.find((item) => item.name === 'Expense hike').value);
    const pfBalance = parseFloat(inputFields.find((item) => item.name === 'Pf balance').value);
    const currentCorpusExpf = parseFloat(inputFields.find((item) => item.name === 'Current corpus expf').value);
    const monthlyContribution = parseFloat(inputFields.find((item) => item.name === 'Monthly contribution').value);
    const expectedReturn = parseFloat(inputFields.find((item) => item.name === 'Risk Profile').value.value) / 100;
    const sipGrowthRate = parseFloat(inputFields.find((item) => item.name === 'Sip growth rate').value) / 100;

    const currentAge = currentAgeAndRetireAge.valueOne;
    const fireAge = currentAgeAndRetireAge.valueTwo;

    // Filter out only those items that contain a maximum and minimum value
    const filterInputFields = inputFields.filter((item) => item.type !== 'text_label_with_icon');

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(filterInputFields)) {
        return getEmptyFireOutput();
    }

    const longtermInflation = 0.06;
    const terminalRateReturn = 0.08;
    const epfCalcExpectedReturn = 0.081;
    const investmentDuration = fireAge - currentAge;
    const investmentPeriodArray = [];
    const systematicWithdrawlArray = [];
    let totalInvestmentValue;

    const monthlyExpensesAtParticularAge = FV(longtermInflation, investmentDuration, 0, -monthlyExpenses, 0) * expenseHike;

    const epfInvestmentValues = calculateEPFInvestment({
        age: currentAge,
        retirementAge: fireAge,
        monthlySalary: (monthlySalary * 0.4),
        currentEpfBalance: pfBalance,
        salaryGrowth: salaryHike,
        expectedReturn: epfCalcExpectedReturn,
    });

    const sipInvestmentValues = calculateSIPInvestment({
        sipAmount: monthlyContribution,
        sipFrequency: 12,
        annualSIPIncrement: sipGrowthRate,
        expectedReturn,
        investmentDuration,
        currentCorpusExpf,
    });

    // Calculating the sum of investment every month done in EPF and SIP
    for (let counter = 1; counter <= investmentDuration * 12; counter += 1) {
        const age = Number((currentAge + (counter / 12)).toFixed(1));

        const closingBalance = calculateEPFInvestmentForFireCalc(epfInvestmentValues, counter);
        const portfolioValue = calculateSIPInvestmentForFireCalc(sipInvestmentValues, counter);

        totalInvestmentValue = Number((closingBalance + portfolioValue).toFixed());

        investmentPeriodArray.push({ age, value: totalInvestmentValue });
    }

    const FINANCIAL_FREEDOM_AGE_LIMIT = 110;

    let hasYearCompleted = false;
    let hasFinancialFreedom = false;
    let month = 1;
    let spend = monthlyExpensesAtParticularAge;
    let remaningBalance = Number((totalInvestmentValue * (1 + (terminalRateReturn / 12)) - spend).toFixed());

    // Calculating how many years we can be financially independent by using the total investment received at retirement age
    while (remaningBalance > 0) {
        const age = Number((fireAge + (month / 12)).toFixed(1));

        if (age >= FINANCIAL_FREEDOM_AGE_LIMIT) {
            hasFinancialFreedom = true;
            break;
        }

        if (hasYearCompleted) {
            spend *= (1 + terminalRateReturn);
            hasYearCompleted = false;
        }

        if (month > 1) {
            remaningBalance = Number((remaningBalance * (1 + (terminalRateReturn / 12)) - spend).toFixed());
        }

        if (month % 12 === 0) {
            hasYearCompleted = true;
        }

        month += 1;

        systematicWithdrawlArray.push({ age, value: remaningBalance });
    }

    if (hasFinancialFreedom) {
        const outputSentence = '<div style="text-align: center">At this rate, you can achieve financial freedom for a lifetime.</div>';
        const visuals = [];

        return {
            visuals,
            outputSentence,
        };
    }

    const numberOfYearsOfFinancialIndependent = Math.floor(month / 12);

    const graphInfo = getFireGraph({ investmentPeriodArray, systematicWithdrawlArray });
    const visuals = [graphInfo];

    // Get output sentence
    const outputSentence = `<div style="text-align: center"><span style="color: #CED2D6">At this rate,
    <br />you can achieve financial independence for
    <br />about<span> <span style="color: #51B89A">${numberOfYearsOfFinancialIndependent}</span> years.</div>`;

    return {
        visuals,
        outputSentence,
    };
};

/**
 * Transform array values in graph compatible values
 * for x axis - showing month
 * for y axis - divide item.value by 1Lakh to get value in lakh
 *
 * @param graphArr The array of values that need to be transformed into graph values
 * @returns The graph values
 */
const getGraphTransformedArrayForCreditCardCalc = (graphArr) => graphArr.map((item) => ({ x: item.month, y: item.value / ONE_LAKH }));

/**
  * Creates the required object for rendering the graph
  *
  * @param outputGraphs The graph values for daily outstanding array & credit card cost array
  * @returns The required object to render the graph
  */
const getCreditCardGraph = (outputGraphs) => {
    const { dailyOutstandingArray, creditCardCostArray } = outputGraphs;

    // transform daily outstanding array values to graph object
    const dailyOutstandingArrayValues = getGraphTransformedArrayForCreditCardCalc(dailyOutstandingArray);

    // transform credit cost array values to graph object
    const creditCardCostArrayValues = getGraphTransformedArrayForCreditCardCalc(creditCardCostArray);

    // get label values that need to show in graph in x-axis
    const labelsValue = dailyOutstandingArrayValues.map((item) => item.x);

    return {
        type: 'graph',
        label: 'Graph',
        data: {
            // chart js graph object
            type: 'line',
            backgroundColor: '#F7F9FA',
            options: {
                ...getGraphOptions(),
                scales: {
                    y: { ...getGraphScalesData({ titleText: 'Amount (lakh)' }) },
                    x: { ...getGraphScalesData({ titleText: 'Months', maxTicksLimit: 5 }) },
                },
            },
            graphData: {
                labels: labelsValue,
                datasets: [
                    ...[getGraphDatasets({
                        data: dailyOutstandingArrayValues, borderColor: 'rgba(127, 190, 206, 1)', backgroundColor: 'rgba(127,  190, 206, 0.4)',
                    })],
                    ...[getGraphDatasets({
                        data: creditCardCostArrayValues, borderColor: 'rgba(135, 186, 107, 1)', backgroundColor: 'rgba(217, 242, 204, 0.7)',
                    })],
                ],
            },
            labels: [
                {
                    bulletColor: 'rgba(127, 190, 206, 1)',
                    labelName: 'DAILY OUTSTANDING',
                },
                {
                    bulletColor: 'rgba(135, 186, 107, 1)',
                    labelName: 'CREDIT COST',
                },
            ],
        },
    };
};

/**
  * Render an empty graph
  *
  * @returns The required object to render the graph
  */
const getEmptyCreditCardOutput = () => {
    const errorStateGraphValues = [{ month: '', value: 0 }];
    const graphInfo = getCreditCardGraph({ dailyOutstandingArray: errorStateGraphValues, creditCardCostArray: errorStateGraphValues });

    const visuals = [graphInfo];
    const outputSentence = '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>';

    return {
        visuals,
        outputSentence,
    };
};

/**
  * Main function to calculate the output of credit card interest rate calculator
  * Calculates the graph & output sentence based on the users input
  *
  * @param {object} inputFields The input values given by the user
  * @returns {object} The graph & output sentence
 */
const calculateCreditCardInterestRateOutput = (inputFields) => {
    // Input values
    const regularExpenses = parseFloat(inputFields.find((item) => item.name === 'Enter regular credit card expenses').value);
    const billToPay = parseFloat(inputFields.find((item) => item.name === 'How much of the bill will you pay').value);

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyCreditCardOutput();
    }

    /**
      * Currently we are caluclating credit card values for 2022 year
      * If we want to change the date then change the value of startDate and endDate variables
      * Date format - YYYY-MM-DD
      */
    const startDate = '2022-01-16';
    const endDate = '2022-12-31';

    const dailyApr = 0.0012;
    const dailyOutstandingArray = [];
    const creditCardCostArray = [];

    let spent: number;
    let paid: number;
    let monthlyInterest: number;
    let billAmount: number = 0;
    let isStatementStartEncountered: boolean = false;
    let isBillGeneratedEncountered: boolean = false;
    let totalSpent: number = 0;
    let totalPaid: number = 0;
    let totalMonthlyInterest: number = 0;
    let sumProductOfDailyOutstandingAndDailyApr: number = 0;
    let totalCreditCost: number = 0;
    let numberOfMonthForFullRepayment: number = 1;

    let differenceBetweenTwoDates = getDifferenceBetweenTwoDates(startDate, endDate);

    let date = new Date(startDate);

    const getMonthlyInterest = (billAmountValue, paidAmountValue, sumProductOfDailyOutstandingAndDailyAprValue) => {
        if (billAmountValue > -(paidAmountValue)) {
            monthlyInterest = sumProductOfDailyOutstandingAndDailyAprValue;
        } else {
            monthlyInterest = 0;
        }

        return monthlyInterest;
    };

    const getPaidAmount = (billAmountValue) => {
        paid = -(Math.min(billAmountValue, billToPay));

        return paid;
    };

    const getPaidAndMontlyInterestValues = (
        dayOfTheMonth, isStatementStartEncounteredValue, isBillGeneratedEncounteredValue, billAmountValue,
        sumProductOfDailyOutstandingAndDailyAprValue,
    ) => {
        if (dayOfTheMonth === 1) {
            if (isStatementStartEncounteredValue) {
                if (isBillGeneratedEncounteredValue) {
                    paid = getPaidAmount(billAmountValue);
                    monthlyInterest = getMonthlyInterest(billAmountValue, paid, sumProductOfDailyOutstandingAndDailyAprValue);
                }
            } else {
                paid = 0;
                monthlyInterest = 0;
            }
        } else {
            paid = 0;
            monthlyInterest = 0;
        }

        return {
            paid,
            monthlyInterest,
        };
    };

    const getSpentAmount = (dayOfTheMonth) => {
        if (dayOfTheMonth === 16) {
            isStatementStartEncountered = true;
            spent = regularExpenses;
        } else {
            spent = 0;
        }

        return spent;
    };

    const getDailyOutstandingValue = (spentAmount, paidAmount, monthlyInterestAmount) => {
        totalSpent += spentAmount;
        totalPaid += paidAmount;
        totalMonthlyInterest += monthlyInterestAmount;

        const dailyOutstandingValue = Math.ceil(totalSpent + totalPaid + totalMonthlyInterest);

        return dailyOutstandingValue;
    };

    const getBillAmount = (dayOfTheMonth, dailyOutstandingValue, monthlyInterestAmount) => {
        if (dayOfTheMonth === 15) {
            isBillGeneratedEncountered = true;

            billAmount = dailyOutstandingValue + monthlyInterestAmount;
        }

        return billAmount;
    };

    const getNumberOfMonthForFullRepayment = (dayOfTheMonth, monthlyInterestAmount) => {
        if (dayOfTheMonth === 1 && monthlyInterestAmount !== 0) {
            numberOfMonthForFullRepayment += 1;
        }

        return numberOfMonthForFullRepayment;
    };

    while (differenceBetweenTwoDates >= 0) {
        const dayOfTheMonth = date.getDate();
        const dateValueInMiliSecond = date.getTime();
        const month = getMonthNameFromDate(date);

        ({ paid, monthlyInterest } = getPaidAndMontlyInterestValues(dayOfTheMonth, isStatementStartEncountered, isBillGeneratedEncountered,
            billAmount, sumProductOfDailyOutstandingAndDailyApr));

        spent = getSpentAmount(dayOfTheMonth);

        const dailyOutstanding = getDailyOutstandingValue(spent, paid, monthlyInterest);

        billAmount = getBillAmount(dayOfTheMonth, dailyOutstanding, monthlyInterest);

        numberOfMonthForFullRepayment = getNumberOfMonthForFullRepayment(dayOfTheMonth, monthlyInterest);

        sumProductOfDailyOutstandingAndDailyApr += dailyOutstanding * dailyApr;

        totalCreditCost += Math.ceil(monthlyInterest);

        dailyOutstandingArray.push({ month, value: dailyOutstanding });
        creditCardCostArray.push({ month, value: totalCreditCost });

        const nextDayDate = new Date(dateValueInMiliSecond + getMiliSecondPerDay());
        date = nextDayDate;

        differenceBetweenTwoDates -= 1;
    }

    const graphInfo = getCreditCardGraph({ dailyOutstandingArray, creditCardCostArray });
    const visuals = [graphInfo];

    // Get output sentence
    const outputSentence = `<div>If you pay <span style="color: #87BA6B">₹${billToPay}
    </span> every month, you will pay off your entire balance in <span style="color: #87BA6B">${numberOfMonthForFullRepayment}</span> months.</div>`;

    return {
        visuals,
        outputSentence,
    };
};

/**
 * Creates the required object for rendering the table
 *
 * @param {object} outputValues The output values to be shown in the table
 * @returns {object} The required object to render the table
 */
const getCCValuebackTable = (outputValues) => {
    const {
        formattedMonthlySpends, formattedWelcomeOffer, formattedAnnualRewardValueFromFiCoins, formattedMilestoneOneThreshold,
        formattedMilestoneTwoThreshold, formattedAvgAnnualBenefits, formattedMilestoneOneValue, formattedMilestoneTwoValue,
        missedMilestoneOneVouchers, missedMilestoneTwoVouchers, formattedAmountOfMissedMilestone, missedMilestoneVoucherStyle,
        showMissedMilestoneVoucherStyle, toolTipImageStyle,
    } = outputValues;

    const milestoneOneTextColorArguments: IColorOptions = {
        condition: missedMilestoneOneVouchers, firstColor: Colors.LIGHT_GREY, secondColor: Colors.WHITE,
    };

    const milestoneTwoTextColorArguments: IColorOptions = {
        condition: missedMilestoneTwoVouchers, firstColor: Colors.LIGHT_GREY, secondColor: Colors.WHITE,
    };

    const tableData = {
        title: '<div>How is valueback calculated?</div>',
        description: `<div>On average monthly spends of ₹${formattedMonthlySpends}, here’s a breakdown of the valueback you get.</div>`,
        headData: [
            {
                name: 'BENEFITS',
            },
            {
                name: 'SPENDS',
            },
            {
                name: 'ANNUAL REWARD VALUE',
            },
        ],
        rowData: [
            [
                {
                    value: 'Welcome vouchers',
                },
                {
                    value: '',
                },
                {
                    value: `₹${formattedWelcomeOffer}`,
                },
            ],
            [
                {
                    value: 'Fi-Coins',
                },
                {
                    value: `₹${formattedMonthlySpends} per month`,
                },
                {
                    value: `₹${formattedAnnualRewardValueFromFiCoins}`,
                },
            ],
            [
                {
                    value: 'Milestone 1 benefits',
                },
                {
                    value: `<div style='color: ${formatTextColorBasedOnTheCondititon(milestoneOneTextColorArguments)}'>
                        ₹${formattedMilestoneOneThreshold} per year</div>`,
                },
                {
                    value: `<div style='color: ${formatTextColorBasedOnTheCondititon(milestoneOneTextColorArguments)}'>
                        ₹${formattedMilestoneOneValue}</div>`,
                },
            ],
            [
                {
                    value: 'Milestone 2 benefits',
                },
                {
                    value: `<div style='color: ${formatTextColorBasedOnTheCondititon(milestoneTwoTextColorArguments)}'>
                        ₹${formattedMilestoneTwoThreshold} per year</div>`,
                },
                {
                    value: `<div style='color: ${formatTextColorBasedOnTheCondititon(milestoneTwoTextColorArguments)}'>
                        ₹${formattedMilestoneTwoValue}</div>`,
                },
            ],
            [
                {
                    value: 'Total',
                },
                {
                    value: `₹${formattedMonthlySpends} per month`,
                },
                {
                    value: `₹${formattedAvgAnnualBenefits} per year`,
                },
            ],
        ],
        moreInfo: `
            <style>${missedMilestoneVoucherStyle} ${showMissedMilestoneVoucherStyle} ${toolTipImageStyle}</style>
            <div>
                <div class="${missedMilestoneOneVouchers || missedMilestoneTwoVouchers ? 'missed-milestone-vouchers show-missed-milestone-vouchers' : 'missed-milestone-vouchers'}">
                    <div class='tooltip-image'>
                        <img src=${ICONS_URL_MAP.TOOLTIP} />
                    </div>
                    <div>You are missing out on a milestone benefits worth ₹${formattedAmountOfMissedMilestone}</div>
                </div>
                <div>
                    Note: Fi-Coins are calculated assuming 80% of monthly spends are on top 3 merchants from the Fi Collection and the remaining
                    20% of monthly spends are from the Fi collection. This is a way to maximise your rewards with this Credit Card.
                </div>
            </div>
        `,
    };

    return tableData;
};

/**
 * Returns an object containing information about a given milestone based on the user's total spend for the year.
 * The object contains the milestone threshold and value, whether the milestone was missed, and the annual reward value.
 *
 * @param {number} totalSpendInYear - The user's total spend for the year.
 * @param {number} milestoneThreshold - The spend threshold for the milestone.
 * @param {number} milestoneValue - The reward value for the milestone.
 * @returns {Object} An object containing milestone information.
 */
const getMilestoneValues = (totalSpendInYear: number, milestoneThreshold: number, milestoneValue: number) => {
    const milestoneMissed = totalSpendInYear < milestoneThreshold;
    const annualRewardValue = milestoneMissed ? 0 : milestoneValue;

    return {
        threshold: milestoneThreshold,
        value: milestoneValue,
        milestoneMissed,
        annualRewardValue,
    };
};

/**
 * Render an empty graph
 *
 * @returns The required object to render the graph
 */
const getEmptyCCValuebackOutput = () => {
    const visuals = [];
    const outputSentence = '<div style="color: #FF7B31">Make sure your input values are within the specified range</div>';

    return {
        visuals,
        outputSentence,
    };
};

/**
 * Main function to calculate the output of credit card valueback
 * Calculates the table & output sentence based on the users input
 *
 * @param {object} inputFields The input values given by the user
 * @returns {object} The table & output sentence
 */
const calculateCCValuebackOutput = (inputFields) => {
    // Input values
    const monthlySpends = parseFloat(inputFields.find((item) => item.name === 'monthly spends').value);

    // if input is not withing min and max range, return empty output
    if (!checkIfValidInput(inputFields)) {
        return getEmptyCCValuebackOutput();
    }

    // Constant values;
    const totalMonthInOneYear = 12;
    const welcomeOffer = 5000;
    const fiveXSpends = 0.8;
    const twoXSpends = 0.2;

    // 5 coins on Rs 5 spent (5 / 5)
    const fiveXCoins = 1;

    // 2 coins on Rs 5 spent (2 / 5)
    const twoXCoins = 0.4;

    const valueOfOneCoin = 0.03;

    const milestoneOneValue = 2500;

    const milestoneOneThreshold = 250000;

    const milestoneTwoValue = 8000;

    const milestoneTwoThreshold = 400000;

    // Calculations start
    const totalRewardPointEarnedInTheYear = (monthlySpends * totalMonthInOneYear * fiveXSpends * fiveXCoins)
        + (monthlySpends * totalMonthInOneYear * twoXSpends * fiveXCoins * twoXCoins);

    const annualRewardValueFromFiCoins = totalRewardPointEarnedInTheYear * valueOfOneCoin;

    const totalSpendInYear = monthlySpends * totalMonthInOneYear;

    const { milestoneMissed: missedMilestoneOneVouchers, annualRewardValue: milestoneOneAnnualRewardValue } = getMilestoneValues(
        totalSpendInYear, milestoneOneThreshold, milestoneOneValue,
    );

    const { milestoneMissed: missedMilestoneTwoVouchers, annualRewardValue: milestoneTwoAnnualRewardValue } = getMilestoneValues(
        totalSpendInYear, milestoneTwoThreshold, milestoneTwoValue,
    );

    const milestoneAnnualRewardTotal: number = (missedMilestoneOneVouchers ? milestoneOneValue : 0)
        + (missedMilestoneTwoVouchers ? milestoneTwoValue : 0);

    const avgAnnualBenefits: number = Math.round(welcomeOffer + annualRewardValueFromFiCoins
        + milestoneOneAnnualRewardValue + milestoneTwoAnnualRewardValue);

    const avgMonthlyBenefits: number = Math.round(avgAnnualBenefits / totalMonthInOneYear);

    const valueBackRatio = avgAnnualBenefits / (monthlySpends * totalMonthInOneYear);
    const valueBackPercentage = Math.round(valueBackRatio * 100);
    // Calculations end

    // formatted currency values
    const formattedAvgAnnualBenefits: string = formatCurrencyValue(avgAnnualBenefits);
    const formattedAvgMonthlyBenefits: string = formatCurrencyValue(avgMonthlyBenefits);
    const formattedMonthlySpends: string = formatCurrencyValue(monthlySpends);
    const formattedWelcomeOffer: string = formatCurrencyValue(welcomeOffer);
    const formattedAnnualRewardValueFromFiCoins: string = formatCurrencyValue(annualRewardValueFromFiCoins);
    const formattedMilestoneOneThreshold: string = formatCurrencyValue(milestoneOneThreshold);
    const formattedMilestoneOneAnnualRewardValue: string = formatCurrencyValue(milestoneOneAnnualRewardValue);
    const formattedMilestoneTwoThreshold: string = formatCurrencyValue(milestoneTwoThreshold);
    const formattedMilestoneTwoAnnualRewardValue: string = formatCurrencyValue(milestoneTwoAnnualRewardValue);
    const formattedMilestoneOneValue: string = formatCurrencyValue(milestoneOneValue);
    const formattedMilestoneTwoValue: string = formatCurrencyValue(milestoneTwoValue);
    const formattedAmountOfMissedMilestone: string = formatCurrencyValue(milestoneAnnualRewardTotal);

    // Output block styles start
    const valuebackTitleStyle = `.valueback-title
        { color: ${Colors.SILVER_2}; font-family: Gilroy; font-size: 12px; font-weight: 600; line-height: 14px; text-transform: uppercase; }
        @media(min-width:768px) {.valueback-title { font-size: 14px; }}
        @media(min-width: 1290px) {.valueback-title { font-size: 16px; }}`;

    const valuebackImgBoxStyle = `.valueback-img-box
        { background: ${Colors.MINE_SHAFT}; padding: 8px 12px; border-radius: 12px; width: 77px; margin: 0px auto; display: flex; margin-top: 8px; }
        @media(min-width:768px){.valueback-img-box { padding: 8px 12px; }}
        @media(min-width: 1290px) {.valueback-img-box { padding: 12px 16px; border-radius: 18px; width: 114px; margin-top: 12px }}`;

    const valuebackImgStyle = `.valueback-img
        { width: 22px; height: 22px; margin-right: 6px }
        @media(min-width: 1290px) {.valueback-img { width: 34px; height: 34px; margin-right: 12px; }}`;

    const valuebackNumberStyle = `.valueback-number
        { color: ${Colors.LIGHT_YELLOW}; font-family: Gilroy; font-weight: 600; font-size: 19px;
        line-height: 24px; } @media(min-width: 1290px) {.valueback-number { font-size: 28px; line-height: 33px; }}`;

    const benefitsSectionStyle = `.benefits-section
        { display: flex; margin-top: 22px; justify-content: center; gap: 22px; }
        @media(min-width: 1290px) {.benefits-section { margin-top: 40px; gap: 32px; }}`;

    const benefitsLabelStyle = `.benefits-label
        { color: ${Colors.SILVER_2}; font-family: Gilroy; font-size: 10px; font-weight: 600;
        line-height: 12px; text-transform: uppercase; margin-bottom: 8px; }
        @media(min-width: 768px) {.benefits-label { font-size: 14px; }}
        @media(min-width: 1290px) {.benefits-label { font-size: 16px; line-height: 19px; margin-bottom: 12px; }}`;

    const benefitsValueStyle = `.benefits-value
        { color: ${Colors.WHITE}; font-family: Gilroy; font-size: 16px; font-weight: 500; line-height: 20px; }
        @media(min-width: 768px) {.benefits-value { font-size: 20px; }}
        @media(min-width: 1290px) {.benefits-value { font-size: 24px; line-height: 29px; }}`;

    const description = `.description
        { color: ${Colors.GREY_3}; font-family: Inter; font-size: 12px; font-weight: 400; line-height: 16px; margin-top: 20px; }
        @media(min-width: 768px) {.description { font-size: 14px; }
        @media(min-width: 1290px) {.description { font-size: 16px; line-height: 19px; margin-top: 24px; }}`;

    const missedMilestoneVoucherStyle = `.missed-milestone-vouchers
        { background: ${Colors.MINE_SHAFT}; padding: 12px; border-radius: 8px; margin-bottom: 16px; display: none; font-family: Inter;
            font-weight: 500; font-size: 12px; line-height: 140%; }
            @media(min-width: 1290px) {.missed-milestone-vouchers { margin-bottom: 40px; border-radius: 12px; font-size: 20px;
                line-height: 120%; padding: 16px 20px; }}`;

    const showMissedMilestoneVoucherStyle = '.show-missed-milestone-vouchers { display: flex; align-items: center; gap: 12px; }';

    const toolTipImageStyle = '.tooltip-image { width: 24px; height: 24px; } @media(min-width: 1290px) {.tooltip-image { width: 28px; height: 28px; }}';
    // Output block styles end

    const visuals = [];

    const outputValues = {
        formattedMonthlySpends,
        formattedWelcomeOffer,
        formattedAnnualRewardValueFromFiCoins,
        formattedMilestoneOneThreshold,
        formattedMilestoneOneAnnualRewardValue,
        formattedMilestoneTwoThreshold,
        formattedMilestoneTwoAnnualRewardValue,
        formattedAvgAnnualBenefits,
        formattedMilestoneOneValue,
        formattedMilestoneTwoValue,
        missedMilestoneOneVouchers,
        missedMilestoneTwoVouchers,
        formattedAmountOfMissedMilestone,
        missedMilestoneVoucherStyle,
        showMissedMilestoneVoucherStyle,
        toolTipImageStyle,
    };

    const tableData = getCCValuebackTable(outputValues);

    return {
        visuals,
        // eslint-disable-next-line max-len
        outputSentence: `
        <style>
            ${valuebackTitleStyle} ${valuebackImgBoxStyle} ${valuebackImgStyle} ${valuebackNumberStyle} ${benefitsSectionStyle}
            ${benefitsLabelStyle} ${benefitsValueStyle} ${description}
        </style>
            <div style='text-align: center'>
                <div class='valueback-title'>Valueback</div>
                <div class='valueback-img-box'>
                    <img class='valueback-img' src=${LOGOS_URL_MAP.VALUEBACK_STAR} />
                    <span class='valueback-number'>${valueBackPercentage}%</span>
                </div>
                <div class='benefits-section'>
                    <div>
                        <div class='benefits-label'>AVG MONTHLY BENEFITS</div>
                        <div class='benefits-value'>₹${formattedAvgMonthlyBenefits}</div>
                    </div>
                    <div style='border: 1px solid #383838;'></div>
                    <div>
                        <div class='benefits-label'>AVG ANNUAL BENEFITS</div>
                        <div class='benefits-value'>₹${formattedAvgAnnualBenefits}</div>
                    </div>
                </div>
                <div class='description'>Get valueback from rewards, milestone benefits, etc.</div>
            </div>
        `,
        tableData,
    };
};

export {
    calculateFDOutput,
    calculateRentVsBuyOutput,
    calculateMutualFundGoalOutput,
    calculateSipOutput,
    calculatePPFOutput,
    calculateEmiOutput,
    calculateNpsOutput,
    calculateHraOutput,
    calculateGratuityOutput,
    calculateEpfOutput,
    calcuateCAGROutput,
    calculateInflationRate,
    calculateFireOutput,
    calculateCreditCardInterestRateOutput,
    calculateCCValuebackOutput,
};
