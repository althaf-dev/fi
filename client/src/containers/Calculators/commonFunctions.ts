import { FV } from './excel-funcs';

type EpfInvestmentArgs = {
    age: number;
    retirementAge: number;
    monthlySalary: number;
    currentEpfBalance: number;
    salaryGrowth: number;
    expectedReturn: number;
}

// Common Function to calculate EpfInvestment
const calculateEPFInvestment = (args: EpfInvestmentArgs) => {
    const {
        age, retirementAge, monthlySalary, currentEpfBalance, salaryGrowth, expectedReturn,
    } = args;

    let employeeShare = (monthlySalary * 12) / 100;
    let employerShare = (monthlySalary * 3.67) / 100;
    let totalEmployeeShare = 0;
    let totalEmployerShare = 0;
    let sumOfOneYearInterestBearingBalance = 0;
    let totalInterestEarned = 0;
    let closingBalance;

    const workingMonth = (retirementAge - age) * 12;

    const getEpfDepositValue = (counter) => {
        if (counter <= workingMonth) {
            return true;
        }
        return false;
    };

    const getEmployeeShare = (counter, epfDeposit) => {
        if (epfDeposit && counter > 1 && (counter - 1) % 12 === 0) {
            employeeShare *= (1 + salaryGrowth);
        }
        return employeeShare;
    };

    const getTotalEmployeeShare = (employeeShareValue) => totalEmployeeShare + employeeShareValue;

    const getEmployerShare = (counter, epfDeposit) => {
        if (epfDeposit && counter > 1 && (counter - 1) % 12 === 0) {
            return employerShare * (1 + salaryGrowth);
        }
        return employerShare;
    };

    const getTotalEmployerShare = (employerShareValue) => totalEmployerShare + employerShareValue;

    const getInterestBearingBalance = (counter, epfDeposit) => {
        if (epfDeposit) {
            if (counter === 1) {
                return currentEpfBalance;
            }
            return closingBalance;
        }
        return 0;
    };

    const getSumOfOneYearInterestBearingBalance = (interestBearingBalance) => sumOfOneYearInterestBearingBalance + interestBearingBalance;

    const getInterest = (counter) => {
        if (counter % 12 === 0) {
            const interestValue = ((sumOfOneYearInterestBearingBalance * expectedReturn) / 12);
            sumOfOneYearInterestBearingBalance = 0;
            return interestValue;
        }
        return 0;
    };

    const getTotalInterestEarned = (interestValue) => totalInterestEarned + interestValue;

    return {
        updateEPFInvestmentValues: (counter) => {
            const epfDeposit = getEpfDepositValue(counter);

            employeeShare = getEmployeeShare(counter, epfDeposit);
            totalEmployeeShare = getTotalEmployeeShare(employeeShare);

            employerShare = getEmployerShare(counter, epfDeposit);
            totalEmployerShare = getTotalEmployerShare(employerShare);

            const interestBearingBalance = getInterestBearingBalance(counter, epfDeposit);
            sumOfOneYearInterestBearingBalance = getSumOfOneYearInterestBearingBalance(interestBearingBalance);

            const interest = getInterest(counter);
            totalInterestEarned = getTotalInterestEarned(interest);

            closingBalance = (employeeShare + employerShare + interestBearingBalance + interest);
        },
        getExtraDetails: () => ({
            totalEmployeeShare,
            totalEmployerShare,
            closingBalance,
            totalInterestEarned,
            workingMonth,
        }),
    };
};

type SIPInvestmentArgs = {
    sipAmount: number;
    sipFrequency: number;
    annualSIPIncrement: number;
    investmentDuration: number;
    expectedReturn: number;
    currentCorpusExpf?: number;
}

// Common Function to calculate SIPInvestment
const calculateSIPInvestment = (args: SIPInvestmentArgs) => {
    const {
        sipAmount, sipFrequency, annualSIPIncrement, expectedReturn, investmentDuration, currentCorpusExpf,
    } = args;

    const counterLimit = sipFrequency * investmentDuration;
    let prevIncrement;
    let increment = false;
    let investmentAmount;
    let prevInvestmentAmount;
    let sumOfInvestedAmount = 0;
    let portfolioValue;

    const getIncrementValue = (counter) => {
        prevIncrement = increment;
        if (counter % sipFrequency === 0) {
            return true;
        }
        return false;
    };

    const investedAmountValue = (counter) => {
        if (counter === 1) {
            return sipAmount;
        }

        if (prevIncrement) {
            return investmentAmount * (1 + annualSIPIncrement);
        }
        prevInvestmentAmount = investmentAmount;
        return prevInvestmentAmount;
    };

    const getPortfolioValue = (counter, investmentAmountValue) => {
        if (counter === 1) {
            if (currentCorpusExpf) {
                return FV((expectedReturn / sipFrequency), 1, 0, -investmentAmountValue - currentCorpusExpf, 1);
            }

            return FV((expectedReturn / sipFrequency), 1, 0, -investmentAmountValue, 1);
        }

        return FV((expectedReturn / sipFrequency), 1, 0, -investmentAmountValue - portfolioValue, 1);
    };

    return {
        updateSIPInvestmentValues: (counter) => {
            increment = getIncrementValue(counter);
            investmentAmount = investedAmountValue(counter);
            portfolioValue = getPortfolioValue(counter, investmentAmount);
            sumOfInvestedAmount += investmentAmount;
        },
        getExtraDetails: () => ({
            sumOfInvestedAmount,
            portfolioValue,
            counterLimit,
        }),
    };
};

// TODO: [ANKIT] [https://monorail.pointz.in/p/fi-app/issues/detail?id=51644] Need to remove the common chartJs functions from calculator constants file, because we have move all the chartJs function into the utils folder.
type GraphDatasetsArgs = {
    data: { x: number, y: number }[];
    borderColor: string;
    backgroundColor: string;
    label?: boolean;
    fill?: boolean;
    borderWidth?: number;
    tension?: number;
    pointRadius?: number;
}

const getGraphDatasets = (args: GraphDatasetsArgs) => {
    const {
        data, borderColor, backgroundColor, label = false, fill = true, borderWidth = 1, tension = 0.1, pointRadius = 0,
    } = args;

    return {
        label,
        data,
        fill,
        borderColor,
        borderWidth,
        backgroundColor,
        tension,
        pointRadius,
    };
};

type GraphScalesDataArgs = {
    titleText?: string;
    titleColor?: string;
    ticksColor?: string;
    gridDisplay?: boolean;
    titleDisplay?: boolean;
    maxRotation?: number;
    maxTicksLimit?: number;
    borderColor?: string;
    position?: string;
}

const getGraphScalesData = (args: GraphScalesDataArgs) => {
    const {
        titleText, titleColor = '#A4A4A4', ticksColor = '#A4A4A4', gridDisplay = false, titleDisplay = true, maxRotation = 0, maxTicksLimit = 11,
        borderColor,
    } = args;

    return {
        grid: { display: gridDisplay, borderColor },
        title: { display: titleDisplay, text: titleText, color: titleColor },
        ticks: {
            maxRotation,
            maxTicksLimit,
            color: ticksColor,
        },
    };
};

type GraphOptionsArgs = {
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    cutoutPercentage?: number;
    legendDisplay?: boolean
}

const getGraphOptions = (args?: GraphOptionsArgs) => {
    const {
        responsive = true, maintainAspectRatio = false, cutoutPercentage = 80, legendDisplay = false,
    } = args || {};

    return {
        responsive,
        maintainAspectRatio,
        cutoutPercentage,
        plugins: {
            legend: { display: legendDisplay },
        },
    };
};

export {
    calculateEPFInvestment,
    calculateSIPInvestment,
    getGraphDatasets,
    getGraphScalesData,
    getGraphOptions,
};
