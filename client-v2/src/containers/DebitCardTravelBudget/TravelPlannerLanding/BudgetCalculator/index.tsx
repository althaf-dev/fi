/**
 * @file BudgetCalculator
 * This file defines a component that allows users to input their travel destination and calculate their travel budget.
 */

import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { Country, setCountry } from '@/rtk/components/debitCardTravelBudget/reducer';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { ICONS_URL_MAP } from '@/constants/AssetConstants';

import { Destination, DestinationFlag, DestinationName } from '../../TravelDestinationSelector/styles';
import TravelDestinationSelector from '../../TravelDestinationSelector';
import BottomSheet from '../../BottomSheet';
import { search } from '../../utils';

import {
    CalculateButton, CalculatorContainer, DestinationInput, DropdownIcon, Header,
    InputWrapper, Label, Subtitle, Title
} from '../styles';

interface BudgetCalculatorProps {
  // Function to be called when the calculate button is clicked
  onCalculate: () => void;
}

/**
 * The BudgetCalculator component provides an interface for users to select their travel destination
 * and calculate their travel budget by invoking the onCalculate function passed as a prop.
 *
 * @param {BudgetCalculatorProps} props - The properties passed to the BudgetCalculator component.
 */
function BudgetCalculator({ onCalculate }: BudgetCalculatorProps) {
    const dispatch = useAppDispatch();
    const destinationCountry = useAppSelector((state) => state?.travelBudget?.country);
    const destinationCountries = useAppSelector((state) => state?.travelBudget?.travelDestinations?.countries);

    // State for managing country search query in the destination selector
    const [countryQuery, setCountryQuery] = useState<string>('');

    // State for managing the list of destinations based on the search query
    const [destinationList, setDestinationList] = useState<{ flag: string, name: string }[] | null>(null);

    // State to control the visibility of the bottom sheet
    const [isVisible, setIsVisible] = useState(false);
    // State to hold the selected destination country
    const [selectedDestination, setSelectedDestination] = useState<Country | undefined>();

    return (
        <CalculatorContainer>
            <Header>
                <Title>Plan your travel budget</Title>
                <Subtitle>Tell us where you&apos;re going</Subtitle>
            </Header>
            <DestinationInput>
                <InputWrapper
                    onClick={() => {
                        setIsVisible(true);
                        setSelectedDestination(destinationCountry);
                    }}
                >
                    <Label htmlFor='travelDestination'>
                        {
                            (
                                destinationCountry && (
                                    <Destination>
                                        <DestinationFlag>{destinationCountry?.flag}</DestinationFlag>
                                        <DestinationName>{destinationCountry?.name}</DestinationName>
                                    </Destination>
                                )
                            ) || 'Travel destination'
                        }
                    </Label>
                    <DropdownIcon
                        src={ICONS_URL_MAP.BOTTOM_ARROW_V2}
                        alt='Dropdown'
                    />
                </InputWrapper>
                {
                    destinationCountries && Array.isArray(destinationCountries) && destinationCountries.length > 0 && (
                        <BottomSheet
                            isVisible={isVisible}
                            onClose={() => {
                                setIsVisible(false);
                                setSelectedDestination(undefined);
                            }}
                            showSearchBar
                            title=''
                            query={countryQuery}
                            onQueryChange={(query) => {
                                setCountryQuery(query);
                                if (!query) {
                                    setDestinationList(null);
                                    return;
                                }
                                const searchResults = search(
                                    (countryQuery.length < query.length && destinationList) || destinationCountries || [],
                                    query
                                );
                                setDestinationList(searchResults as { flag: string, name: string }[]);
                            }}
                        >
                            <TravelDestinationSelector
                                setSelectedDestination={setSelectedDestination}
                                selectedDestination={selectedDestination}
                                onConfirm={(country) => dispatch(setCountry({ country }))}
                                setIsVisible={setIsVisible}
                                destinations={(countryQuery && destinationList) || destinationCountries || []}
                            />
                        </BottomSheet>
                    )
                }
            </DestinationInput>
            <CalculateButton
                onClick={onCalculate}
                disabled={!destinationCountry}
            >
                Calculate budget
            </CalculateButton>
        </CalculatorContainer>
    );
}

BudgetCalculator.propTypes = {
    onCalculate: PropTypes.func.isRequired,
};

export default BudgetCalculator;
