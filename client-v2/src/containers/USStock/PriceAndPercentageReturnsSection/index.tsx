/**
 * @file PriceAndPercentageReturnsSection
 * Render the price and percentage returns of the stock
 */
import React, { memo } from 'react';

import { Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

import {
    Wrapper, CurrentPrice, PercentageReturnsImageHolder, PercentageReturnsLabel, ActiveTabLabel,
} from './styled';

interface IPriceAndPercentageReturnsSection {
    currentPrice: string;
    percentageReturns: {
        icon: string| null;
        text: string| null;
    }
    activeTabLabel: string;
}

const PriceAndPercentageReturnsSection = (props: IPriceAndPercentageReturnsSection) => {
    const { currentPrice, percentageReturns, activeTabLabel } = props;
    const { icon, text } = percentageReturns || {};

    return (
        <Wrapper>
            <CurrentPrice>
                {currentPrice}
            </CurrentPrice>
            <PercentageReturnsImageHolder>
                {
                    percentageReturns?.icon && <Image icon={percentageReturns?.icon} alt='icon' fallBackImage={icon} loadingType='lazy' />

                }
            </PercentageReturnsImageHolder>
            <PercentageReturnsLabel>
                {
                    text && (
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(text) }}
                        />
                    )
                }

            </PercentageReturnsLabel>
            <ActiveTabLabel>
                {activeTabLabel}
            </ActiveTabLabel>
        </Wrapper>
    );
};

export default memo(PriceAndPercentageReturnsSection);
