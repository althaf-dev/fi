/**
 * @file TravelCardItem
 * This file defines a component that represents a selectable travel card item with a title, description, and a radio button.
 */

import * as React from 'react';
import {
    CardItemContainer,
    CardItemDetails,
    CardItemTitle,
    CardItemDescription,
    RadioContainer,
    RadioStateLayer,
    RadioInput,
    RadioButton,
} from '../styles';

interface TravelCardItemProps {
    title: string; // The title of the travel card item
    description: string; // The description of the travel card item
    onClick: () => void; // Function to be called when the travel card item is clicked
    isChecked: boolean; // Indicates whether the travel card item is currently selected
}

/**
 * The TravelCardItem component displays a card with a title, description, and a radio button.
 * It is designed to be used as part of a list of selectable travel options. When clicked, it invokes
 * the onClick function passed as a prop. The radio button's checked state is controlled by the isChecked prop.
 *
 * @param {TravelCardItemProps} props - The properties required by the TravelCardItem component.
 */
const TravelCardItem: React.FC<TravelCardItemProps> = ({
    title, description, onClick, isChecked
}) => (
    <CardItemContainer onClick={onClick}>
        <CardItemDetails>
            <CardItemTitle>{title}</CardItemTitle>
            <CardItemDescription>{description}</CardItemDescription>
        </CardItemDetails>
        <RadioContainer>
            <RadioStateLayer>
                <RadioInput type='radio' name='travelStyle' checked={isChecked} readOnly />
                <RadioButton checked={isChecked} />
            </RadioStateLayer>
        </RadioContainer>
    </CardItemContainer>
);

export default TravelCardItem;
