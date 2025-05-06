/**
 * @file DestinationItem
 * This file defines a DestinationItem component that represents a selectable destination item in a list.
 * It displays a flag, the name of the destination, and an optional checkmark to indicate selection.
 */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { CheckImage } from '../../TravelPlannerLanding/styles';

import { DestinationContainer, DestinationFlag, DestinationTitle } from '../styles';
import { ICONS_URL_MAP } from '@/constants/AssetConstants';

/**
 * Props for the DestinationItem component.
 */
interface DestinationItemProps {
    flag: string; // A string representing the flag of the destination.
    name: string; // The name of the destination.
    onClick: () => void; // Callback function to handle click events on the destination item.
    isSelected: boolean; // A boolean indicating if the destination item is currently selected.
}

/**
 * DestinationItem component that renders a destination item with a flag, name, and optional checkmark.
 *
 * This component is designed to be used within a list of destinations, allowing users to select a destination.
 * It visually indicates the selected state with a checkmark icon.
 *
 * @param {DestinationItemProps} props - The props for the DestinationItem component.
 * @returns {JSX.Element} The rendered DestinationItem component.
 */
const DestinationItem = ({
    flag, name, onClick, isSelected,
}: DestinationItemProps) => (
    <DestinationContainer onClick={onClick}>
        <DestinationFlag>{flag}</DestinationFlag>
        <DestinationTitle>{name}</DestinationTitle>
        {isSelected && <CheckImage src={ICONS_URL_MAP.CHECK} alt='Selected' />}
    </DestinationContainer>
);

// PropType validation for the DestinationItem component.
DestinationItem.propTypes = {
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default DestinationItem;
