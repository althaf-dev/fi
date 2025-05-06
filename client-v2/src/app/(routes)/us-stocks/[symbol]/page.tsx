/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import type { RedirectType } from 'next/navigation';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import USStock from '@/containers/USStock';

import { IStockIdForSymbolApiResponse, ISymbolDecisionFactorsApiResponse, ISymbolHistoricalPricesApiResponse } from '@/containers/USStock/types';
import { clientApiWrapperV2 } from '@/utils';
import { transfromSymbolDesisionFactorsRpcResponse } from '@/utils/transformation';
import { GenerateMetaInfos } from '@/MetaConfig/metaUs';
import { Title, Wrapper } from './styles';
import StockDirectory from '@/containers/USStock/StockDirectory';

async function fetchStockIdForSymbol(symbol: any) {
    try {
        const response: IStockIdForSymbolApiResponse = await clientApiWrapperV2.get(
            `http://localhost:8080/api/v1/us-stocks/symbol-validation?symbol=${symbol}`,
        );

        if (!response?.success) {
            throw new Error('Could not find the requested stock data');
        }

        const { data } = await response || {};

        const { stockId: _stockId } = data || {};

        if (!_stockId) {
            throw new Error('Invalid Stock Symbol');
        }
        return _stockId;
    } catch (errorMessage: any) {
        return null;
    }
}

async function fetchSymbolDecisionFactors(symbol: any) {
    try {
        const response: ISymbolDecisionFactorsApiResponse = await clientApiWrapperV2.get(
            `http://localhost:8080/api/v1/us-stocks/symbol-decision-factors?stockId=${encodeURIComponent(symbol)}`,
        );

        if (!response?.success) {
            throw new Error('Failed to fetch symbol decision factors');
        }

        const { data } = await response || {};
        if (!data) {
            throw new Error('No Data Available');
        }
        const transformSymbolDecisionFactorsData = transfromSymbolDesisionFactorsRpcResponse(data);
        return transformSymbolDecisionFactorsData;
    } catch (error) {
        return error;
    }
}

async function fetchSymbolHistoricalPrices(symbol: any) {
    try {
        const response: ISymbolHistoricalPricesApiResponse = await clientApiWrapperV2.get(
            `http://localhost:8080/api/v1/us-stocks/symbol-historical-prices?stockId=${encodeURIComponent(symbol)}`,
        );
        if (!response?.success) {
            throw new Error('Failed to fetch symbol historical prices');
        }
        const { data } = response || {};

        if (!data) {
            throw new Error('No Data Available');
        }

        const {
            icon, name, tagList, timePeriods, currentPrice, faqArticles,
        } = data || {};

        const staticData = {
            name,
            icon,
            tagList,
            timePeriods,
            faqArticles,
            currentPrice
        };
        return staticData;
    } catch (errorMessage: any) {
        return errorMessage;
    }
}
export async function generateMetadata({
    params: { symbol },
}: {
    params: { symbol: string }
  }): Promise<Metadata> {
    const IdforSymbol = await fetchStockIdForSymbol(symbol);
    const fetchSymbolDecisionFactorsData: any = await fetchSymbolDecisionFactors(IdforSymbol);
    const datafetchSymbolHistoricalPrices = await fetchSymbolHistoricalPrices(IdforSymbol);
    const { name } = datafetchSymbolHistoricalPrices;
    const { faqArticles } = datafetchSymbolHistoricalPrices;
    const { icon } = datafetchSymbolHistoricalPrices;
    const { currentPrice } = datafetchSymbolHistoricalPrices;
    const usStockSymbol = fetchSymbolDecisionFactorsData?.companyDetails?.subText;
    const {
        metaTitle, metaDescription, keyWords, canonicalUrl,
    } = GenerateMetaInfos(name, icon, faqArticles, currentPrice, usStockSymbol, symbol);
    return {
        title: metaTitle,
        description: metaDescription,
        keywords: keyWords,
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: canonicalUrl,
            siteName: 'Fi.Money',
            type: 'website',
            images: icon,
        },
        twitter: {
            card: 'summary',
            site: '@Bank_on_Fi',
            title: metaTitle,
            description: metaDescription,
            images: icon
        },
        alternates: {
            canonical: canonicalUrl

        },

    };
}

export default async function Page({
    params: { symbol },
}: {
    params: { symbol: string }
  }) {
    const redirectOptions: RedirectType = 'replace' as RedirectType;
    const IdforSymbol = await fetchStockIdForSymbol(symbol);
    if (!IdforSymbol) {
        redirect('/us-stocks', redirectOptions);
    }
    const fetchSymbolDecisionFactorsData: any = await fetchSymbolDecisionFactors(IdforSymbol);
    const datafetchSymbolHistoricalPrices = await fetchSymbolHistoricalPrices(IdforSymbol);
    const { name } = datafetchSymbolHistoricalPrices;
    const { faqArticles } = datafetchSymbolHistoricalPrices;
    const usStockSymbol = fetchSymbolDecisionFactorsData?.companyDetails?.subText;
    const transformSymbolDecisionFactorsData = fetchSymbolDecisionFactorsData;
    const LowerCasesymbol = usStockSymbol?.toLowerCase();

    const faqsSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqArticles?.map((article: any) => {
            const { question, answer } = article || {};

            return {
                '@type': 'Question',
                name: question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: answer,
                },
            };
        }),
    };

    const companySchema = {
        '@context': 'https://schema.org',
        '@type': 'companyDetails',
        mainEntity: transformSymbolDecisionFactorsData.companyDetails.description
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://fi.money/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'US Stocks',
                item: 'https://fi.money/us-stocks/',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name,
                item: `https://fi.money/us-stocks/${LowerCasesymbol}`,
            },
        ],
    };

    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Fi.Money',
        url: 'https://fi.money',
        logo: 'https://dza2kd7rioahk.cloudfront.net/assets/logos/fi-logo.svg',
        sameAs: [
            'https://www.twitter.com/Bank_on_Fi',
            'https://www.instagram.com/bankonfi/',
            'https://www.linkedin.com/company/epifi',
        ],
    };

    const TitleText = `${name} share price`;

    return (

        <>
            <script
                type='application/ld+json'
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify([faqsSchema, breadcrumbSchema, orgSchema, companySchema]) }}
            />
            <meta property='og:type' content='product' />
            <Wrapper>
                <div className='header-container'><AppHeader /></div>
                <Title>{TitleText}</Title>
                <USStock />
                <StockDirectory />
                <AppFooter />
            </Wrapper>
        </>
    );
}
