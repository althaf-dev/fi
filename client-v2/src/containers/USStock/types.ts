/**
 * @file - Types
 * Defines interfaces or types related to the usstock
 */

import { IApiResponse, IFaqArticle } from '../../interfaces/elements';
import { IGraphData } from '../../interfaces/graph';

export interface ICommonStockData {
    icon: string;
    name: string;
    tagList: ITag[];
    timePeriods: ITimePeriod[];
    faqArticles: IFaqArticle[];
}

export interface ISymbolHistoricalPrices extends ICommonStockData {
    currentPrice: string;
}

export interface IChartDataJsCommand {
    initChartJsCommand?: any;
    setChartDataJsCommand?: string;
    updateChartDataJsCommand?: string| null;
}

export interface ITimePeriod {
    startTime: string;
    endTime: string;
    tabText: any;
    shouldUpdateRealTime: any;
    percentageReturns: {
        icon: string;
        text: string;
    }
    stockPriceChart: IChartDataJsCommand;
}

export interface ITag {
    label: string;
}

export interface IStockStaticData extends ICommonStockData {}

export interface IStockPriceAndChartData {
    currentPrice: string| null;
    percentageReturns: {
        icon: string| null;
        text: string| null;
    }
    chartDataJsCommand: IChartDataJsCommand| null;
}

export interface IComapnyData {
    text: string;
    value: string;
}

export interface ICompanyDetails {
    text: string;
    subText?: string
    description?: string;
    data: IComapnyData[];
}

export interface IActiveTabData {
    tabText: string;
    shouldUpdateRealTime: boolean
}

export interface IFinancialDetail {
    text: string;
    data: IGraphData[];
}

export interface ISymbolDecisionFactors {
    companyDetails: ICompanyDetails;
    financialsDetails: IFinancialDetail[];
}

export interface IStockId {
    stockId: string;
}

export interface ISymbolHistoricalPricesApiResponse extends IApiResponse<ISymbolHistoricalPrices> {}

export interface ISymbolDecisionFactorsApiResponse extends IApiResponse<ISymbolDecisionFactors> {}

export interface IStockIdForSymbolApiResponse extends IApiResponse<IStockId> {}
