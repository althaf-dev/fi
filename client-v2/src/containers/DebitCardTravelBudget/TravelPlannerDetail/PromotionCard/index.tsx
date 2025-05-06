/**
 * @file PromotionCard
 * This file defines a component that renders a promotional card showcasing the savings
 * a user can achieve with the Fi-Federal Debit Card on travel expenses.
 */

import React from 'react';

import { DEBIT_CARD_TRAVEL_IMG_URL_MAP } from '@/constants/AssetConstants';
import { useAppSelector } from '@/rtk/hooks';

import { amountFormatter } from '../../utils';

import {
    BigCardImage, Card, CardContent, CardHeader, CardImage, CardTitle, DetailAmount, DetailCard, DetailContent, DetailTitle,
    SavingsBreakdown, TotalSavings
} from '../styles';

interface SavingsDetailProps {
    title: string; // The title of the savings detail
    amount: string; // The formatted amount saved
    imageSrc: string; // The source URL of the image associated with the savings detail
}

/**
 * Renders a single savings detail including a title, amount, and an image.
 */
const SavingsDetail: React.FC<SavingsDetailProps> = ({ title, amount, imageSrc }) => (
    <DetailCard>
        <DetailContent>
            <DetailTitle>{title}</DetailTitle>
            <DetailAmount>{amount}</DetailAmount>
        </DetailContent>
        <CardImage src={imageSrc} alt={title} />
    </DetailCard>
);

/**
 * Renders the main promotional card component, showcasing total savings and individual savings details
 * like zero forex markup and card offers.
 */
const PromotionCard = () => {
    // Retrieve budget details from the application's state
    const { budget } = useAppSelector((state) => state?.travelBudget);

    // Destructure necessary values from the budget for displaying on the card
    const {
        cardOffersSavingsAmount, totalSavingsAmount, zeroMarkupSavingsAmount, travelOffers
    } = budget || {};

    // Calculate the number of offers available
    const noOfOffers = travelOffers && travelOffers?.length;

    return (
        <Card>
            <CardContent>
                <CardHeader>
                    <CardTitle>
                        With the Fi-Federal
                        {' '}
                        <br />
                        {' '}
                        Debit Card, you save
                    </CardTitle>
                    <TotalSavings>
                        {amountFormatter(totalSavingsAmount || 0)}
                        {' '}
                        🥳
                        <br />
                    </TotalSavings>
                </CardHeader>
                <SavingsBreakdown>
                    <SavingsDetail
                        title='ZERO FOREX MARKUP'
                        amount={`${amountFormatter(zeroMarkupSavingsAmount || 0)}`}
                        imageSrc={DEBIT_CARD_TRAVEL_IMG_URL_MAP.GLOBE_COINS}
                    />
                    <SavingsDetail
                        title={`${(noOfOffers && `${noOfOffers} `) || ''}CARD OFFER${noOfOffers && noOfOffers === 1 ? '' : 'S'}`}
                        amount={`${amountFormatter(cardOffersSavingsAmount || 0)}`}
                        imageSrc={DEBIT_CARD_TRAVEL_IMG_URL_MAP.CASH}
                    />
                </SavingsBreakdown>
            </CardContent>
            <BigCardImage src={DEBIT_CARD_TRAVEL_IMG_URL_MAP.DEBIT_CARD_HAND} alt='Big Image' />
        </Card>
    );
};

export default PromotionCard;
