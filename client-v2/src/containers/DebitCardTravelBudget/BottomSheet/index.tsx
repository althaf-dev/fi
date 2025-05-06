/**
 * @file BottomSheet
 * This file contains the definition of the BottomSheet component.
 */

import * as React from 'react';

import { Card, ContentWrapper, MainContainer, BottomSheetContainer } from './styles';
import BottomSheetSelectorHeader from './Header';

/**
 * Props interface for the BottomSheet component.
 */
interface BottomSheetProps {
    isVisible: boolean; // Indicates whether the bottom sheet is visible or not
    onClose: () => void; // Callback function to close the bottom sheet
    showSearchBar: boolean; // Indicates whether to show the search bar or not
    title: string; // Title of the bottom sheet
    children: React.ReactNode; // Content of the bottom sheet
    query: string; // Search query
    onQueryChange: (query: string) => void; // Callback function to handle search query change
}

/**
 * BottomSheet component.
 * Renders a bottom sheet with a header and content.
 */
const BottomSheet = ({
    isVisible, onClose, showSearchBar, title, children, query, onQueryChange,
}: BottomSheetProps) => (
    <BottomSheetContainer isVisible={isVisible}>
        <MainContainer>
            <ContentWrapper>
                <Card>
                    <BottomSheetSelectorHeader
                        title={title}
                        showSearchBar={showSearchBar}
                        onClose={onClose}
                        query={query}
                        onQueryChange={onQueryChange}
                    />
                    { children }
                </Card>
            </ContentWrapper>
        </MainContainer>
    </BottomSheetContainer>
);

export default BottomSheet;
