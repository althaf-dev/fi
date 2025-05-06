'use client';

/**
 * @file US Stocks Alphabet Directory
 */
import React from 'react';
import styled from 'styled-components';
import { APP_URLS } from '../../../constants/AppConstant';

const Container = styled.div`
    display: flex;
    margin: 50px;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    display: none;
`;

const StockDirectory = () => {
    const Alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (

        <Container>
            {Alphabets.map((symbol) => (
                <a key={symbol} href={`${APP_URLS.US_STOCKS}${APP_URLS.STOCK_DIRECTORY}/${symbol}`}>
                    {symbol}
                </a>
            ))}
        </Container>

    );
};

export default StockDirectory;
