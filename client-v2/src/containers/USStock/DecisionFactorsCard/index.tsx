/**
 * @file DecisionFactorsCard
 * This file contains the DecisionFactorsCard component.
 * The DecisionFactorsCard is a card component used for displaying decision factors related to US stocks.
 */
import React, { memo, ReactNode } from 'react';

import { Image } from '../../../components';

import {
    Card,
    HeadingSection,
    Title,
    Symbol,
    IconHolder,
} from './styled';

interface IDecisionFactorsCard {
    title: string;
    symbol?: string;
    icon?: string;
    children?: ReactNode;
}

const DecisionFactorsCard = (props: IDecisionFactorsCard) => {
    const {
        title, symbol, icon, children,
    } = props;

    return (
        <Card>
            <HeadingSection>
                <Title>
                    {title}
                </Title>
                {symbol ? (
                    <Symbol>
                        {symbol}
                    </Symbol>
                ) : null}
                {icon ? (
                    <IconHolder>
                        <Image icon={icon} alt='icon' fallBackImage={icon} loadingType='lazy' />
                    </IconHolder>
                ) : null}
            </HeadingSection>
            {children || null}
        </Card>
    );
};

DecisionFactorsCard.defaultProps = {
    symbol: '',
    icon: '',
    children: null,
};

export default memo(DecisionFactorsCard);
