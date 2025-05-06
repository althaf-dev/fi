/**
 * @file TravelStyleSelector
 * This file defines a component that allows users to select a travel style from a list of options.
 */
import React from 'react';

import { ItemDivider } from '../TravelPlannerLanding/styles';
import { ConfirmButton } from '../BottomSheet/styles';
import { travelOptions } from '../constants';

import { CardList } from './styles';
import TravelCardItem from './TravelCardItem';

interface TravelStyleSelectorProps {
    // Function to be called with the selected travel style when the confirm button is clicked
    onConfirm: (selectedTravelStyle: { label: string; value: string } | null) => void;
    // Function to control the visibility of the selector component
    setIsVisible: (isVisible: boolean) => void;
    // Function to set the currently selected travel style
    setSelectedTravelStyle: (selectedTravelStyle: { label: string; value: string } | null) => void;
    // The currently selected travel style
    selectedTravelStyle: { label: string; value: string } | null;
}

/**
 * The TravelStyleSelector component renders a list of travel style options for the user to select from.
 * It displays each option as a card with a title and description. When an option is clicked, it becomes
 * the selected travel style. The component also includes a confirm button that, when clicked, calls the
 * onConfirm function with the selected travel style and hides the selector.
 *
 * @param {TravelStyleSelectorProps} props - The properties required by the TravelStyleSelector component.
 */
const TravelStyleSelector = ({
    onConfirm, setIsVisible, setSelectedTravelStyle, selectedTravelStyle
}: TravelStyleSelectorProps) => (
    <>
        <CardList>
            {travelOptions.map((option, index) => (
                <React.Fragment key={option.title?.value}>
                    <TravelCardItem
                        title={option.title?.label}
                        description={option.description}
                        onClick={() => setSelectedTravelStyle(option?.title)}
                        isChecked={selectedTravelStyle?.value === option?.title?.value}
                    />
                    {index < travelOptions.length - 1 && <ItemDivider />}
                </React.Fragment>
            ))}
        </CardList>
        <ConfirmButton
            disabled={!selectedTravelStyle}
            onClick={() => {
                onConfirm(selectedTravelStyle);
                setIsVisible(false);
                setSelectedTravelStyle(null);
            }}
        >
            Confirm
        </ConfirmButton>
    </>
);

export default TravelStyleSelector;
