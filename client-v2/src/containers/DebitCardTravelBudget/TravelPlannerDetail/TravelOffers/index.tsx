/**
 * @file TravelOffers
 * This file defines a component that renders a list of travel offers available for the user's travel budget.
 * Each offer includes images and a description.
 */
import React from 'react';

import { useAppSelector } from '@/rtk/hooks';

import {
    OfferHeader, OfferIcon, OfferImage, OfferItem, OfferText, OffersList, OffersTitle, OffersWrapper,
    PageDivider
} from '../styles';

/**
 * Renders the TravelOffers component which displays a list of travel offers.
 * Each offer is represented by an icon, an image, and a description.
 */
const TravelOffers = () => {
    // Retrieve the budget details from the application's state
    const { budget } = useAppSelector((state) => state?.travelBudget);

    // Extract travel offers from the budget
    const { travelOffers } = budget || {};

    // Render nothing if there are no travel offers
    if (!travelOffers || !Array.isArray(travelOffers) || travelOffers.length === 0) {
        return <></>;
    }

    return (
        <>
            <PageDivider />
            <OffersWrapper>
                <OffersTitle>Travel Offers</OffersTitle>
                <OffersList>
                    {travelOffers.map(({ offerImages = [], description }) => (
                        <OfferItem key={description}>
                            <OfferHeader>
                                {
                                    // Render the offer icon and image if two images are provided
                                    offerImages && Array.isArray(offerImages) && offerImages.length === 2 && (
                                        <>
                                            <OfferIcon src={offerImages[0]?.mobileImageUrl} alt='Offer Icon' />
                                            <OfferImage src={offerImages[1]?.mobileImageUrl} alt='Offer Image' />
                                        </>
                                    )
                                }
                            </OfferHeader>
                            <OfferText>{description}</OfferText>
                        </OfferItem>
                    ))}
                </OffersList>
            </OffersWrapper>
        </>
    );
};

export default TravelOffers;
