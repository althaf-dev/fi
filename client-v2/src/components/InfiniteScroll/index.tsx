'use client';

/**
 * @file InfiniteScroll Component
 *
 * This file contains the InfiniteScroll component, which is a reusable React component
 * for implementing infinite scrolling behavior. It renders a scrollable container and
 * triggers a callback when the scroll reaches the end.
 */
import React, { useEffect, useRef, useCallback, memo } from 'react';
import styled from 'styled-components';

import { ScrollableContainer } from '../styled';

const Container = styled(ScrollableContainer)`
    max-height: 90vh;
`;

interface IInfiniteScrollProps {
    /**
     * Callback function to be called when the scroll reaches the end.
     */
    onScrollEnd: () => void;
    /**
     * The children components to render inside the InfiniteScroll component.
     */
    children: React.ReactNode;
    /**
     * Boolean indicating whether there is more data to be loaded.
     */
    hasMoreData: boolean;
    /**
     * The threshold value (in pixels) before reaching the end of the scrollable container
     * to trigger the `onScrollEnd` callback. Defaults to 0.
     */
    scrollThreshold?: number;
}

const InfiniteScroll = (props: IInfiniteScrollProps) => {
    const {
        onScrollEnd, scrollThreshold, children, hasMoreData,
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Handles the scroll event and triggers the `onScrollEnd` callback when scrolled to the bottom.
     */

    const handleScroll = useCallback(() => {
        const container = containerRef.current;

        if (container) {
            const { scrollTop, scrollHeight, clientHeight } = container;

            const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - (scrollThreshold || 0);

            if (scrolledToBottom && hasMoreData) {
                onScrollEnd();
            }
        }
    }, [scrollThreshold, hasMoreData, onScrollEnd]);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }

        return undefined; // Added this line to satisfy the return requirement
    }, [handleScroll]);

    return <Container ref={containerRef}>{children}</Container>;
};

InfiniteScroll.defaultProps = {
    scrollThreshold: 0,
};

export default memo(InfiniteScroll);
