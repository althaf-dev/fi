/**
 * @file StocksList Component
 *
 * Renders a list of stocks with their information, including stock card, image, name, price, and percentage returns.
 */
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_URLS } from '../../../constants/AppConstant';
import { IUSStockData } from '../../../interfaces/elements';

import { Image } from '../../../components';

import PriceAndPercentageReturnsSection from '../PriceAndPercentageReturnsSection';

import {
    StockCard, ImageHolder, StockName, StockInfo, Separator, StockStats,
} from './styled';

interface IStockListProps {
    stocksList: IUSStockData;
}

const StocksList = (props: IStockListProps) => {
    const { stocksList } = props;

    const stockListValues = stocksList && Object.values(stocksList);

    const navigate = useNavigate();

    const onClick = (symbol) => () => {
        if (symbol) {
            const lowercaseSymbol = symbol.toLowerCase();
            navigate(`${APP_URLS.US_STOCKS}/${lowercaseSymbol}`);
        }
    };

    return (
        <>
            {stockListValues?.map((stock, index) => {
                const {
                    id, title, icon, percentageReturns,
                    currentPrice, symbol,
                } = stock || {};
                const { image_src: imageSrc } = icon || {};
                const { icon: percentageReturnIcon, text } = percentageReturns || {};

                const isLastCard = index === stockListValues.length - 1;

                return (
                    <React.Fragment key={id}>
                        <StockCard onClick={onClick(symbol)}>
                            <StockInfo>
                                <ImageHolder>
                                    <Image icon={imageSrc} alt='stock icon' loadingType='lazy' />
                                </ImageHolder>
                                <StockName>{title}</StockName>
                            </StockInfo>
                            <StockStats>
                                <PriceAndPercentageReturnsSection
                                    currentPrice={currentPrice}
                                    percentageReturns={{
                                        icon: percentageReturnIcon,
                                        text,
                                    }}
                                />
                            </StockStats>
                        </StockCard>
                        {!isLastCard ? <Separator /> : null}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default memo(StocksList);
