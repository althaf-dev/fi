/**
 * @file TravelDateSelector
 * This file defines a TravelDateSelector component that allows users to select arrival and departure dates for travel.
 * It utilizes the DateSelector component for individual date selections and manages the state of selected dates.
 * The component also includes a confirm button to finalize the selection.
 */

import React, { useEffect } from 'react';

import { DEBIT_CARD_TRAVEL_IMG_URL_MAP } from '@/constants/AssetConstants';

import { ConfirmButton } from '../BottomSheet/styles';

import { DateSelectionError, DateSelectionWrapper } from './styles';
import DateSelector from './DateSelector';
import { DATE_LOCAL_STRING_CONFIG } from '../constants';

/**
 * Props definition for the TravelDateSelector component.
 */
interface TravelDateSelectorProps {
    onConfirm: (selectedDates: { arrival?: string, departure?: string } | null) => void;
    // Callback function to handle the confirmation of selected dates.
    setIsVisible: (isVisible: boolean) => void; // Function to control the visibility of the date selector component.
    setSelectedDates: (selectedDates: { arrival?: string, departure?: string } | null) => void; // Function to update the state of selected dates.
    selectedDates: { arrival?: string, departure?: string } | null; // Object containing the selected arrival and departure dates.
}

/**
 * TravelDateSelector component that provides an interface for selecting arrival and departure dates.
 *
 * This component renders two DateSelector components for arrival and departure date selection and a confirm button.
 * It manages the state of the selected dates and handles the confirmation process.
 *
 * @param {TravelDateSelectorProps} props - The props for the TravelDateSelector component.
 * @returns {JSX.Element} The rendered TravelDateSelector component.
 */
const TravelDateSelector = ({
    onConfirm, setIsVisible, setSelectedDates, selectedDates
}: TravelDateSelectorProps) => {
    const [error, setError] = React.useState<string | null>(null);

    useEffect(() => {
        if (selectedDates && selectedDates?.arrival && selectedDates?.departure) {
            const arrivalDate = new Date(selectedDates?.arrival).getTime();
            const departureDate = new Date(selectedDates?.departure).getTime();
            if (arrivalDate >= departureDate) {
                setError('Arrival date cannot be after or equal to departure date');
            } else {
                setError(null);
            }
        }
    }, [selectedDates]);

    return (
        <>
            <DateSelectionWrapper>
                {/* Arrival Date Selector */}
                <DateSelector
                    type='ARRIVAL DATE'
                    date={selectedDates?.arrival || ''}
                    iconSrc={DEBIT_CARD_TRAVEL_IMG_URL_MAP.CALENDAR}
                    onChange={(e) => {
                        const date = e.target.value && new Date(e.target.value);
                        setSelectedDates({
                            ...selectedDates || {},
                            arrival: date?.toLocaleString(DATE_LOCAL_STRING_CONFIG.locale, DATE_LOCAL_STRING_CONFIG.options),
                        });
                    }}
                />
                {/* Departure Date Selector */}
                <DateSelector
                    type='DEPARTURE DATE'
                    date={selectedDates?.departure || ''}
                    iconSrc={DEBIT_CARD_TRAVEL_IMG_URL_MAP.CALENDAR}
                    onChange={(e) => {
                        const date = e.target.value && new Date(e.target.value);
                        setSelectedDates({
                            ...selectedDates || {},
                            departure: date?.toLocaleString(DATE_LOCAL_STRING_CONFIG.locale, DATE_LOCAL_STRING_CONFIG.options),
                        });
                    }}
                />
            </DateSelectionWrapper>
            {/* Confirm Button */}
            {
                error && <DateSelectionError>{error}</DateSelectionError>
            }
            <ConfirmButton
                disabled={!(selectedDates && selectedDates?.arrival && selectedDates?.departure && !error)}
                onClick={() => {
                    onConfirm(selectedDates);
                    setIsVisible(false);
                    setSelectedDates(null);
                }}
            >
                Confirm
            </ConfirmButton>
        </>
    );
};

export default TravelDateSelector;
