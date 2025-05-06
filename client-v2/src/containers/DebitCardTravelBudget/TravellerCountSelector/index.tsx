/**
 * @file TravelerCountSelector
 * Defines components for selecting the number of travelers in a travel planning application.
 */
import React from 'react';

import { ConfirmButton } from '../BottomSheet/styles';

import {
    ButtonText, ButtonWrapper, CounterContent, CounterDisplay, TravellerCount
} from './styles';

interface CounterButtonProps {
    operation: string; // The operation the button performs ('+' for increment, '-' for decrement)
    onClick: () => void; // Callback function for button click events
}

/**
 * Renders a button for incrementing or decrementing the traveler count.
 */
const CounterButton = ({ operation, onClick }: CounterButtonProps) => (
    <ButtonWrapper onClick={onClick}>
        <ButtonText>{operation}</ButtonText>
    </ButtonWrapper>
);

interface TravellerCountSelectorProps {
    onConfirm: (count: number | null) => void; // Callback for confirming the selected traveler count
    setIsVisible: (isVisible: boolean) => void; // Controls the visibility of the selector
    setSelectedPeopleCount: (count: number | null | ((prevCount: number) => number | null)) => void; // Updates the selected traveler count
    selectedPeopleCount: number | null; // Currently selected traveler count
}

/**
 * Provides an interface for selecting the number of travelers.
 * Includes a counter display with '+' and '-' buttons and a confirm button.
 */
const TravellerCountSelector = ({
    onConfirm, setIsVisible, setSelectedPeopleCount, selectedPeopleCount
}: TravellerCountSelectorProps) => (
    <>
        <CounterContent>
            <CounterDisplay>
                <CounterButton operation='-' onClick={() => setSelectedPeopleCount((prevCount: number) => (prevCount && typeof prevCount === 'number' && prevCount > 1 ? prevCount - 1 : 0))} />
                <TravellerCount>{selectedPeopleCount || 0}</TravellerCount>
                <CounterButton operation='+' onClick={() => setSelectedPeopleCount((prevCount: number) => (prevCount && typeof prevCount === 'number' ? prevCount + 1 : 1))} />
            </CounterDisplay>
        </CounterContent>
        <ConfirmButton
            disabled={!selectedPeopleCount || selectedPeopleCount < 1}
            onClick={() => {
                onConfirm(selectedPeopleCount);
                setIsVisible(false);
                setSelectedPeopleCount(null);
            }}
        >
            Confirm
        </ConfirmButton>
    </>
);

export default TravellerCountSelector;
