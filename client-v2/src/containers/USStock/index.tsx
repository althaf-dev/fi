'use client';

/**
 * @file UsStock
 * Render all details realted to a single us stock
 */
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, notFound } from 'next/navigation';

import Error from 'next/error';
import {
    USS_SYMBOL_HISTORICAL_PRICES_ENDPOINT, USS_SYMBOL_UPDATES_ENDPOINT,
    USS_SYMBOL_DECISION_FACTORS_ENDPOINT, USS_SYMBOL_VALIDATION_ENDPOINT
} from '../../Api/ApiRoutes';
import { APP_URLS } from '@/constants/AppConstant';

import { COLLECTION_IDS } from '@/containers/UsStockFeature/constants';

import PosterSection from './PosterSection';
import FinancialsDetails from './FinancialsDetails';
import CompanyDetailsSection from './CompanyDetailsSection';
import { DEFAULT_ACTIVE_TAB } from './constants';
import { extractStockPriceAndChartData, createStreamingDataHandler } from './utils';
import {
    ISymbolHistoricalPricesApiResponse, ISymbolDecisionFactorsApiResponse, ISymbolDecisionFactors,
    IActiveTabData, ITimePeriod, IStockStaticData, IStockPriceAndChartData, IStockIdForSymbolApiResponse,
} from './types';
import {
    SectionTitle, USStockPosterContainer, Wrapper, SectionContainer, ButtonHolder
} from './styled';
import Loader from '@/components/Loader';
import { StyledContainer, StyledLanding } from '@/components/StyledContainer';
import { PrimaryButton } from '@/components';
import CarouselVariantOne from '@/components/CarouselVariantOne';
import { clientApiWrapper, createStreamingConnection } from '@/utils';
import { transformDataAccordingFeaturePageCarousel, transfromSymbolDesisionFactorsRpcResponse } from '@/utils/transformation';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import SecureMoneySection from '@/components/SecureMoneySection';
import FAQs from '@/components/FAQs';
import { fetchUSStocksDetails } from '@/rtk/components/US-Stocks-feature-page/reducers';

interface ParamsObject {
    [key: string]: any
}

const USStock = () => {
    const params: ParamsObject = useParams();

    const { symbol: usStockSymbol } = params;

    const dispatch = useAppDispatch();

    const cancelStreamingRequestRef = useRef<any>(null);
    const triggerStreamingRequestRef = useRef(false);

    const details: any = useAppSelector((state) => state.usStocks);

    const mostPopularUSStocksData = details?.usStocksData?.MOST_POPULAR?.details_section?.stocks;

    const hasMostPopularUSStocksData = details?.hasUSStocksData.MOST_POPULAR;

    const [loading, setLoading] = useState<boolean>(true);
    const [activeTabData, setActiveTabData] = useState<IActiveTabData | null>(null);
    const [stockStaticData, setStockStaticData] = useState<IStockStaticData | null>(null);
    const [stockPriceAndChartData, setStockPriceAndChartData] = useState<IStockPriceAndChartData | null>(null);
    const [symbolDecisionFactors, setSymbolDecisionFactors] = useState<ISymbolDecisionFactors | null>();
    const [stockId, setStockId] = useState<string | null>(null);
    const [error, setError] = useState(null);

    const popularStocksCarouselData = useMemo(() => {
        const transformedData = transformDataAccordingFeaturePageCarousel(mostPopularUSStocksData);

        return {
            list: transformedData,
            navigationUrl: APP_URLS.US_STOCKS,
        };
    }, [mostPopularUSStocksData]);

    /**
     * The stockId variable contains the value like this 'USS230105twKaLDEiT7+1zeEuz+7FJw==', which is a query parameter value.
     * Plus sign (+) is a reserved character in URLs and is interpreted as a space
     * It needs to be URL encoded before using it in the API call.
     */
    const encodedStockId = useMemo(() => {
        if (stockId !== null) {
            return encodeURIComponent(stockId);
        }
        return null;
    }, [stockId]);

    const hasFaqArticles = stockStaticData?.faqArticles?.length;

    const onTabClick = (timePeriod: ITimePeriod) => {
        const {
            shouldUpdateRealTime, tabText,
        } = timePeriod;

        let data;

        if (stockPriceAndChartData) {
            data = stockPriceAndChartData?.currentPrice && extractStockPriceAndChartData(timePeriod, stockPriceAndChartData?.currentPrice);
        }

        if (shouldUpdateRealTime) {
            triggerStreamingRequestRef.current = true;
        }

        setActiveTabData({
            tabText,
            shouldUpdateRealTime,
        });
        if (data) {
            setStockPriceAndChartData(data);
        }
    };

    /**
     * Retrieves and handles streaming data for the given stock.
     *
     * @param {IActiveTabData} values - The active tab data.
     * @param {string} id - The stock ID.
     * @returns {void}
     */
    const getStreamingData = (values: IActiveTabData, id: string) => {
        const paylaod = [id];
        const serializedPayload = JSON.stringify(paylaod);

        if (!values?.shouldUpdateRealTime) {
            cancelStreamingRequestRef?.current?.close();
            return;
        }

        const streamingDataHandler = createStreamingDataHandler();

        const onDataReceived = (data: any) => {
            const { stock_price_updates_map: stockPriceUpdatesMap } = data || {};
            let streamingStockPrice;
            if (stockId !== null) {
                streamingStockPrice = stockPriceUpdatesMap[stockId];
            }

            const streamingStockPriceData = streamingDataHandler(streamingStockPrice);

            setStockPriceAndChartData((prevState) => {
                const { initChartJsCommand } = (prevState?.chartDataJsCommand || {}) as { initChartJsCommand?: any };

                const updatedChartDataJsCommand = {
                    initChartJsCommand,
                    ...streamingStockPriceData.chartDataJsCommand,
                };

                return {
                    ...streamingStockPriceData,
                    chartDataJsCommand: updatedChartDataJsCommand,
                };
            });
        };

        cancelStreamingRequestRef.current = createStreamingConnection(
            USS_SYMBOL_UPDATES_ENDPOINT,
            serializedPayload,
            onDataReceived,
        );
    };

    /**
     * Fetches symbol decision factors and updates the component state.
     *
     * @returns {Promise<void>} A promise that resolves when symbol decision factors are fetched and updated.
     */
    const fetchSymbolDecisionFactors = async () => {
        try {
            const response: ISymbolDecisionFactorsApiResponse = await clientApiWrapper.get(
                `${USS_SYMBOL_DECISION_FACTORS_ENDPOINT}?stockId=${encodedStockId}`,
            );

            if (!response?.success) {
                throw new Error<any>('Failed to fetch symbol decision factors');
            }

            const { data } = response || {};

            if (!data) {
                throw new Error<any>('No Data Available');
            }

            const transformSymbolDecisionFactorsData = transfromSymbolDesisionFactorsRpcResponse(data);

            setSymbolDecisionFactors(transformSymbolDecisionFactorsData);
        } catch (errorMessage: any) {
            // Catching the error and rethrowing it to propagate the error to the calling function (fetchData)
            throw new Error(errorMessage);
        }
    };

    /**
     * Fetches symbol historical prices and updates the component state.
     *
     * @returns {Promise<void>} A promise that resolves when symbol historical prices are fetched and updated.
     */
    const fetchSymbolHistoricalPrices = async () => {
        try {
            const response: ISymbolHistoricalPricesApiResponse = await clientApiWrapper.get(
                `${USS_SYMBOL_HISTORICAL_PRICES_ENDPOINT}?stockId=${encodedStockId}`,
            );

            if (!response?.success) {
                throw new Error<any>('Failed to fetch symbol historical prices');
            }

            const { data } = response || {};

            if (!data) {
                throw new Error<any>('No Data Available');
            }

            const {
                icon, name, tagList, timePeriods, currentPrice, faqArticles,
            } = data || {};

            const defaultActiveTimePeriod: ITimePeriod | undefined = timePeriods?.find((timePeriod: any) => timePeriod?.tabText
             === DEFAULT_ACTIVE_TAB);

            const { shouldUpdateRealTime, tabText } = defaultActiveTimePeriod || {};

            const priceAndGraphData = defaultActiveTimePeriod && extractStockPriceAndChartData(defaultActiveTimePeriod, currentPrice);

            const staticData = {
                name,
                icon,
                tagList,
                timePeriods,
                faqArticles,
            };

            if (shouldUpdateRealTime) {
                triggerStreamingRequestRef.current = true;
            }

            setStockStaticData(staticData);
            priceAndGraphData && setStockPriceAndChartData(priceAndGraphData);

            setActiveTabData({
                tabText,
                shouldUpdateRealTime,
            });
        } catch (errorMessage: any) {
            // Catching the error and rethrowing it to propagate the error to the calling function (fetchData)
            throw new Error(errorMessage);
        }
    };

    /**
     * Fetches the stock ID for a usStockSymbol
     */
    const fetchStockIdForSymbol = async () => {
        try {
            const response: IStockIdForSymbolApiResponse = await clientApiWrapper.get(
                `${USS_SYMBOL_VALIDATION_ENDPOINT}?symbol=${usStockSymbol}`,
            );

            if (!response?.success) {
                throw new Error<any>('Could not find the requested stock data');
            }

            const { data } = response || {};

            const { stockId: _stockId } = data || {};

            if (!_stockId) {
                throw new Error<any>('Invalid Stock Symbol');
            }

            setStockId(_stockId);
        } catch (errorMessage: any) {
            setError(errorMessage);
        }
    };

    useEffect(() => {
        fetchStockIdForSymbol();
    }, [usStockSymbol]);

    useEffect(() => {
        if (stockId && !hasMostPopularUSStocksData) {
            dispatch(fetchUSStocksDetails(COLLECTION_IDS.MOST_POPULAR));
        }
    }, [stockId]);

    /**
     * Fetches symbol decision factors and symbol historical prices when the stockId changes.
     * Sets the fetched data in the component state and manages the loading state.
     */
    useEffect(() => {
        const fetchData = async () => {
            if (stockId) {
                setLoading(true);

                try {
                    await Promise.all([
                        fetchSymbolDecisionFactors(),
                        fetchSymbolHistoricalPrices(),
                    ]);
                } catch (errorMessage: any) {
                    setError(errorMessage);
                } finally {
                    /**
                     * Using setTimeout to add delay before updating the loading state to false.
                     * This ensures that the loading animation is shown before rendering the UI.
                     */
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                }
            }
        };

        fetchData();
    }, [stockId]);

    useEffect(() => {
        if (triggerStreamingRequestRef.current) {
            activeTabData && encodedStockId && getStreamingData(activeTabData, encodedStockId);
        }
    }, [activeTabData]);

    if (error) {
        return notFound();
    }

    if (loading) {
        return <Loader isLoading={loading} />;
    }

    return (
        <StyledContainer>
            <USStockPosterContainer>
                {
                    stockStaticData && activeTabData && onTabClick && (
                        <PosterSection
                            staticData={stockStaticData}
                            stockPriceAndChartData={stockPriceAndChartData}
                            activeTabData={activeTabData}
                            onTabClick={onTabClick}
                        />
                    )
                }

            </USStockPosterContainer>
            <StyledLanding>
                <Wrapper>
                    {
                        symbolDecisionFactors?.companyDetails && <CompanyDetailsSection details={symbolDecisionFactors.companyDetails} />

                    }
                    {symbolDecisionFactors?.financialsDetails?.map((item) => (
                        <React.Fragment key={item?.text}>
                            <FinancialsDetails details={item} />
                        </React.Fragment>
                    ))}
                    <ButtonHolder>
                        <a
                            href='https://fi.onelink.me/GvZH/grrfu0kt'
                            className='onelink-common-url'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <PrimaryButton
                                label='BUY NOW'
                                fontVariant='buttonVariantTwo'
                                disableFontColor=''
                                bgcolor='GREEN'
                            />
                        </a>
                    </ButtonHolder>
                    {hasMostPopularUSStocksData ? (
                        <SectionContainer>
                            <SectionTitle>Popular Stocks</SectionTitle>
                            <CarouselVariantOne item={popularStocksCarouselData} />
                        </SectionContainer>
                    ) : null}
                    {hasFaqArticles ? (
                        <SectionContainer>
                            <SectionTitle>FAQs</SectionTitle>
                            <FAQs
                                faqs={stockStaticData?.faqArticles}
                                background='white'
                                questionColor='#3a3a3a'
                                answerColor='#8d8d8d'
                                numberOfFaq={12}
                                totalNumFAQ={0}
                                viewMoreText=''
                                upArrow=''
                                downArrow=''
                                magnifi={false}
                            />
                        </SectionContainer>
                    ) : null}
                </Wrapper>
                <SecureMoneySection />
            </StyledLanding>
        </StyledContainer>
    );
};
export default USStock;
