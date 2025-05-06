/* eslint-disable consistent-return */
const INSIGHT_DATA = 'INSIGHT_DATA';

declare let window: any;

const stringifyData = (key: string, data: any) => {
    if (typeof window !== 'undefined') {
        if (key && data) {
            window.localStorage?.setItem(key, JSON.stringify(data));
        }
    }
};

const getParsedData = (key: string) => {
    if (typeof window !== 'undefined') {
        return JSON.parse(window.localStorage?.getItem(key));
    }

    return {};
};

const getInsightActiveState: any = () => {
    try {
        const insightData = getParsedData(INSIGHT_DATA);

        if (insightData && insightData.activeState) {
            if (!Number.isNaN(+insightData.activeState)) {
                return +insightData.activeState;
            }
        }
    } catch (error) {
        console.error('getInsightActiveState: ', error);
    }
};

const setInsightActiveState = (activeState: number) => {
    const insightData = getParsedData(INSIGHT_DATA);

    if (insightData) {
        const storeData = { ...insightData, activeState };
        stringifyData(INSIGHT_DATA, storeData);
    } else {
        stringifyData(INSIGHT_DATA, { activeState });
    }
};

const getInsightQuizState = (): number => {
    try {
        const insightData = getParsedData(INSIGHT_DATA);

        if (insightData && insightData.quizState) {
            return +insightData.quizState;
        }
    } catch (error) {
        console.error('getInsightExpandRevealStatus: ', error);
        return 0;
    }
};

const setInsightQuizState = (quizState: number) => {
    const insightData = getParsedData(INSIGHT_DATA);

    if (insightData) {
        const storeData = { ...insightData, quizState };
        stringifyData(INSIGHT_DATA, storeData);
    } else {
        stringifyData(INSIGHT_DATA, { quizState });
    }
};

const getParcelOpenStatus = (): boolean => {
    try {
        const insightData = getParsedData(INSIGHT_DATA);

        if (insightData && insightData.parcelState === 'true') {
            return true;
        }

        return false;
    } catch (error) {
        console.error('getParcelOpenStatus: ', error);
        return false;
    }
};

const setParcelOpenStatus = (parcelState: boolean) => {
    const insightData = getParsedData(INSIGHT_DATA);

    if (insightData) {
        const storeData = { ...insightData, parcelState };
        stringifyData(INSIGHT_DATA, storeData);
    } else {
        stringifyData(INSIGHT_DATA, { parcelState });
    }
};

const setUserPhoneNumber = (phoneNumber: string) => {
    const insightData = getParsedData(INSIGHT_DATA);

    if (insightData && insightData.phoneNumber && insightData.phoneNumber !== phoneNumber) {
        const storeData = { ...insightData, phoneNumber, quizState: 0 };
        stringifyData(INSIGHT_DATA, storeData);
    } else {
        const storeData = { ...insightData, phoneNumber };
        stringifyData(INSIGHT_DATA, storeData);
    }
};

const resetQuizState = () => {
    const insightData = getParsedData(INSIGHT_DATA);

    if (insightData && insightData.quizState) {
        const storeData = { ...insightData, quizState: 0 };
        stringifyData(INSIGHT_DATA, storeData);
    } else {
        stringifyData(INSIGHT_DATA, { quizState: 0 });
    }
};

export {
    stringifyData,
    getInsightActiveState,
    setInsightActiveState,
    getInsightQuizState,
    setInsightQuizState,
    getParcelOpenStatus,
    setParcelOpenStatus,
    setUserPhoneNumber,
    resetQuizState,
};
