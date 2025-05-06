/**
 * @file DateSelector
 * This file defines a DateSelector component that allows users to select a date within a specified range.
 * It utilizes styled components for layout and styling, and integrates utility functions for date conversion.
 */

import React from 'react';

import { convertDate } from '../../utils';

import {
    Date, DateIcon, DateInfo, DateInput, DateSelectorContainer, DateType, SelectedDate
} from '../styles';

/**
 * Props definition for the DateSelector component.
 */
interface DateSelectorProps {
    type: string; // The type of date being selected (e.g., "Start Date", "End Date").
    date: string; // The currently selected date in ISO format.
    iconSrc: string; // The source URL for the icon displayed next to the date type.
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Callback function to handle changes to the date input.
    minDate?: string; // Optional minimum date that can be selected.
    maxDate?: string; // Optional maximum date that can be selected.
}

/**
 * DateSelector component that renders a date selection interface.
 *
 * This component displays the date type and the currently selected date, along with a date input field
 * for changing the date. It supports optional minimum and maximum dates for the selection range.
 *
 * @param {DateSelectorProps} props - The props for the DateSelector component.
 * @returns {JSX.Element} The rendered DateSelector component.
 */
const DateSelector = ({
    type, date, iconSrc, onChange, minDate, maxDate,
}: DateSelectorProps) => (
    <DateSelectorContainer>
        <Date>
            <DateIcon src={iconSrc} alt={`${type} icon`} />
            <DateInfo>
                <DateType>{type}</DateType>
                <SelectedDate>{date || '-'}</SelectedDate>
            </DateInfo>
        </Date>
        <DateInput
            type='date'
            onChange={onChange}
            min={minDate && convertDate(minDate, 1)}
            max={maxDate && convertDate(maxDate, -1)}
            value={convertDate(date)}
        />
    </DateSelectorContainer>
);

// Default props for the DateSelector component, specifying that minDate and maxDate are optional.
DateSelector.defaultProps = {
    maxDate: undefined,
    minDate: undefined,
};

export default DateSelector;
