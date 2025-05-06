/**
 * @file PriceAndPercentageReturnsSection
 * Render the price and percentage returns of the stock
 */
import React, { memo } from 'react';

import { Image } from '@/components';
import { htmlSanitization } from '@/utils';

import {
    CurrentPrice, PercentageReturnsWrapper, PercentageReturnsImageHolder, PercentageReturnsLabel,
} from './styled';

interface IPriceAndPercentageReturnsSection {
    currentPrice: string;
    percentageReturns: {
        icon: string;
        text: string;
    }
}

const PriceAndPercentageReturnsSection = (props: IPriceAndPercentageReturnsSection) => {
    const { currentPrice, percentageReturns } = props;
    const { icon, text } = percentageReturns || {};

    return (
        <>
            <CurrentPrice>
                {currentPrice}
            </CurrentPrice>
            {icon && text ? (
                <PercentageReturnsWrapper>
                    <PercentageReturnsImageHolder>
                        <Image icon={percentageReturns?.icon} alt='icon' fallBackImage={icon} loadingType='lazy' />
                    </PercentageReturnsImageHolder>
                    <PercentageReturnsLabel>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(text) }}
                        />
                    </PercentageReturnsLabel>
                </PercentageReturnsWrapper>
            ) : null}
        </>
    );
};

export default memo(PriceAndPercentageReturnsSection);
