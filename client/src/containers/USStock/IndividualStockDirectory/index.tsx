/**
 * @file US Stocks Individual Alphabet Directory
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { APP_URLS } from '../../../constants/AppConstant';
import UsStocksJson from '../../../assets/json/us-stocks.json';

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin: 50px;
    display: none;
`;

const IndividualStockDirectory = () => {
    const stockArray = Object.keys(UsStocksJson).map((item) => ({ name: UsStocksJson[item], symbol: item }));
    const { symbol } = useParams();

    const [filteredData, setFilteredData] = useState(stockArray);

    useEffect(() => {
        if (symbol) {
            const filteredResult = stockArray.filter((x) => x.name.toLowerCase().startsWith(`${symbol.toLowerCase()}`));
            setFilteredData(filteredResult);
        }
    }, []);

    return (
        <Container>
            {filteredData.map((item) => (
                <a href={`${APP_URLS.US_STOCKS}/${item.symbol.toLowerCase()}`} key={item.symbol}>{item.name}</a>
            ))}
        </Container>
    );
};

export default IndividualStockDirectory;
