/**
 * @file PopularDestinations
 * This file defines a component that displays a list of popular travel destinations in a carousel format.
 */

import React from 'react';

import { Country } from '@/rtk/components/debitCardTravelBudget/reducer';
import { useAppSelector } from '@/rtk/hooks';
import { Carousel } from '@/components';

import {
    PopularDestinationCard, PopularDestinationImage, PopularDestinationInfo, PopularDestinationList, PopularDestinationName, PopularDestinationPrice,
    PopularDestinationsContainer, SectionTitle
} from '../styles';

interface PopularDestinationsProps {
  // Function to be called when a destination card is clicked
  onDestinationClick: (country: Country) => void;
}

/**
 * The PopularDestinations component renders a carousel of cards for popular travel destinations.
 * Each card displays an image, the name, and a brief description of the destination.
 * Clicking on a card invokes the onDestinationClick function passed via props, with the country object as its argument.
 *
 * @param {PopularDestinationsProps} props - The properties passed to the PopularDestinations component.
 */
const PopularDestinations = ({ onDestinationClick }: PopularDestinationsProps) => {
    const { travelDestinations } = useAppSelector((state) => state.travelBudget) || {};

    const { popularTravelDestinations: popularDestinations } = travelDestinations || {};

    // Return null if there are no popular destinations to display
    if (!popularDestinations || !Array.isArray(popularDestinations) || popularDestinations.length === 0) {
        return <></>;
    }

    return (
        <PopularDestinationsContainer>
            <SectionTitle>Popular travel destinations</SectionTitle>
            <Carousel leftArrow={undefined} rightArrow={undefined} leftScrollValue={0} rightScrollValue={0}>
                <PopularDestinationList>
                    {popularDestinations.map(({ country, destinationImage: { mobileImageUrl }, description }) => (
                        <PopularDestinationCard
                            key={country?.name}
                            onClick={() => onDestinationClick(country)}
                        >
                            <PopularDestinationImage src={mobileImageUrl} alt={country?.name} />
                            <PopularDestinationInfo>
                                <PopularDestinationName>{country?.name}</PopularDestinationName>
                                <PopularDestinationPrice>
                                    {description}
                                </PopularDestinationPrice>
                            </PopularDestinationInfo>
                        </PopularDestinationCard>
                    ))}
                </PopularDestinationList>
            </Carousel>
        </PopularDestinationsContainer>
    );
};

export default PopularDestinations;
