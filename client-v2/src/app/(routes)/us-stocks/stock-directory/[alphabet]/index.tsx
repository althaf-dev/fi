'use client';

/**
 * @file US Stocks Individual Alphabet Directory
 */
import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { APP_URLS } from '@/constants/AppConstant';
import UsStocksJson from '../../../../../assets/json/us-stocks.json';
import { GenerateMetaInfoStockDirectory } from '@/MetaConfig/metaUs';

interface StockData {
    [key: string]: string;
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin: 50px;
    display: none;
`;

const IndividualStockDirectory = () => {
    const UStocksJson: StockData = UsStocksJson;
    const stockArray = Object.keys(UsStocksJson).map((item) => ({ name: UStocksJson[item], symbol: item }));
    const { alphabet } = useParams();

    const filteredResult = stockArray.filter((x) => x.name.toLowerCase().startsWith(`${(alphabet as string)?.toLowerCase()}`));

    const { metaTitle, metaDescription, canonicalUrl, } = GenerateMetaInfoStockDirectory(alphabet as string);

    const metaData = {
        title: metaTitle,
        description: metaDescription,
        alternates: {
            canonical: canonicalUrl,

        }
    };

    return (
        <>
            <script
                type='application/ld+json'
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(metaData) }}
            />
            <Container>
                {filteredResult.map((item: any) => (
                    <a href={`${APP_URLS.US_STOCKS}/${item?.symbol.toLowerCase()}`} key={item?.symbol}>{item?.name}</a>
                ))}
            </Container>
        </>

    );
};

export default IndividualStockDirectory;
