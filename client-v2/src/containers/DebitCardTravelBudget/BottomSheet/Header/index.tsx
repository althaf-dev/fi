/**
 * @file Header
 * It contains the BottomSheetSelectorHeader component, which is a header component for a bottom sheet selector.
 * It displays a title, a close button, and an optional search bar.
 */

import * as React from 'react';

import { DEBIT_CARD_TRAVEL_IMG_URL_MAP, ICONS_URL_MAP } from '@/constants/AssetConstants';

import {
    Image, ImageButton, SearchBar, SearchIcon, SearchInput, StyleText, TravelStyleHeader
} from '../styles';

interface BottomSheetSelectorHeaderProps {
    title: string; // The title to be displayed in the header
    onClose: () => void; // Callback function to be called when the close button is clicked
    showSearchBar: boolean; // Flag indicating whether to show the search bar or not
    query: string | undefined; // The current search query
    onQueryChange: (query: string) => void; // Callback function to be called when the search query changes
}

/**
 * The BottomSheetSelectorHeader component.
 * @param title - The title to be displayed in the header.
 * @param onClose - Callback function to be called when the close button is clicked.
 * @param showSearchBar - Flag indicating whether to show the search bar or not.
 * @param query - The current search query.
 * @param onQueryChange - Callback function to be called when the search query changes.
 */
const BottomSheetSelectorHeader = ({
    title, onClose, showSearchBar, query, onQueryChange
}: BottomSheetSelectorHeaderProps) => {
    /**
     * Event handler for the search input change event.
     * Calls the onQueryChange callback function with the new search query.
     * @param e - The change event object.
     */
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onQueryChange(e.target.value);
    };

    return (
        <TravelStyleHeader>
            <ImageButton>
                <Image
                    src={ICONS_URL_MAP.CLOSE}
                    onClick={onClose}
                />
            </ImageButton>
            {
                title && <StyleText>{title}</StyleText>
            }
            {
                showSearchBar && (
                    <SearchBar>
                        <SearchIcon
                            src={DEBIT_CARD_TRAVEL_IMG_URL_MAP.MAGNIFYING_GLASS}
                        />
                        <SearchInput
                            placeholder='Search Countries'
                            value={query}
                            onChange={handleOnChange}
                        />
                    </SearchBar>
                )
            }
        </TravelStyleHeader>
    );
};

export default BottomSheetSelectorHeader;
