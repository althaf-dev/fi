/**
 * @file TravelDestinationSelector
 * This file defines a TravelDestinationSelector component that allows users to select a travel destination from a list.
 * It displays a list of DestinationItem components, each representing a possible destination with a flag and name.
 * The component manages selection state and provides a confirm button to finalize the choice.
 */

import React from 'react';

import { Country } from '@/rtk/components/debitCardTravelBudget/reducer';
import { ConfirmButton } from '../BottomSheet/styles';
import { ItemDivider } from '../TravelPlannerLanding/styles';

import { DestinationList } from './styles';
import DestinationItem from './DestinationItem';

/**
 * Props for the TravelDestinationSelector component.
 */
interface TravelDestinationSelectorProps {
    setSelectedDestination: (destination?: Country) => void; // Function to update the selected destination state.
    selectedDestination?: Country; // The currently selected destination.
    onConfirm: (destination: Country) => void; // Callback function to handle confirmation of the selected destination.
    setIsVisible: (isVisible: boolean) => void; // Function to control the visibility of the destination selector component.
    destinations: { flag: string, name: string }[]; // Array of destination objects with flag and name properties.
}

/**
 * TravelDestinationSelector component that renders a list of selectable destinations and a confirm button.
 *
 * This component allows users to select a destination from a list of DestinationItem components. Each item
 * represents a destination with a flag and name. The component manages the selection state and provides a
 * confirm button to finalize the selection. Upon confirmation, it triggers the provided onConfirm callback
 * with the selected destination.
 *
 * @param {TravelDestinationSelectorProps} props - The props for the TravelDestinationSelector component.
 * @returns {JSX.Element} The rendered TravelDestinationSelector component.
 */
const TravelDestinationSelector: React.FC<TravelDestinationSelectorProps> = ({
    setSelectedDestination, selectedDestination, onConfirm, setIsVisible, destinations,
}) => (
    <>
        <DestinationList>
            {destinations.map(({ flag, name }, index) => (
                <React.Fragment key={name}>
                    <DestinationItem
                        flag={flag}
                        name={name}
                        onClick={() => setSelectedDestination({ name, flag })}
                        isSelected={selectedDestination?.name === name}
                    />
                    {index < destinations.length - 1 && <ItemDivider />}
                </React.Fragment>
            ))}
        </DestinationList>
        <ConfirmButton
            disabled={!selectedDestination}
            onClick={() => {
                onConfirm(selectedDestination as Country);
                setSelectedDestination();
                setIsVisible(false);
            }}
        >
            Confirm
        </ConfirmButton>
    </>
);

// Default props for the TravelDestinationSelector component, specifying that selectedDestination is optional.
TravelDestinationSelector.defaultProps = {
    selectedDestination: undefined,
};

export default TravelDestinationSelector;
