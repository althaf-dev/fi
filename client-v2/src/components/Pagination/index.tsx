/**
 * @file Pagination Component
 * Renders a pagination component with previous and next buttons.
 */
import React, { memo } from 'react';

import { PaginationContainer, PaginationButton } from './styled';

interface IPagination {
    onPrevPage: () => void;
    onNextPage: () => void;
    hasBefore: boolean;
    hasAfter: boolean;
}

const Pagination = (props: IPagination) => {
    const {
        onPrevPage, onNextPage, hasBefore, hasAfter,
    } = props;

    return (
        <PaginationContainer>
            {hasBefore ? (
                <PaginationButton onClick={onPrevPage} disabled={!hasBefore}>
                    Prev
                </PaginationButton>
            ) : null}
            {hasAfter ? (
                <PaginationButton onClick={onNextPage} disabled={!hasAfter}>
                    Next
                </PaginationButton>
            ) : null}
        </PaginationContainer>
    );
};

export default memo(Pagination);
