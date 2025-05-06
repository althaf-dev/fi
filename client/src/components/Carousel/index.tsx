/**
 * @file Carousel Component
 */

import React, { useState, useEffect, useRef, memo } from 'react';

import { Container, ArrowHolder, Wrapper } from './styled';

interface ICarouselProps {
    /**
     * The content to be rendered within the Carousel component.
     */
    children: React.ReactNode;
    /**
     * The component for the left arrow navigation.
     */
    leftArrow: React.ReactNode;
    /**
     * The component for the right arrow navigation.
     */
    rightArrow: React.ReactNode;
     /**
     * The scroll value (in pixels) to apply when scrolling left.
     */
    leftScrollValue: number;
    /**
     * The scroll value (in pixels) to apply when scrolling right.
     */
    rightScrollValue: number;
}

// eslint-disable-next-line no-shadow
enum ScrollDirection {
    Left = 'left',
    Right = 'right',
}

const Carousel = (props: ICarouselProps) => {
    const {
        children, leftArrow, rightArrow,
        leftScrollValue, rightScrollValue,
    } = props;

    const scrollableRef = useRef(null);

    const [leftButtonVisible, setLeftButtonVisible] = useState(false);
    const [rightButtonVisible, setRightButtonVisible] = useState(true);

    const onScroll = (direction: ScrollDirection) => () => {
        if (scrollableRef.current) {
            const scrollValue = direction === ScrollDirection.Left ? -leftScrollValue : rightScrollValue;

            scrollableRef.current.scrollBy({
                left: scrollValue,
                behavior: 'smooth',
            });
        }
    };

    /**
     * Handle scroll event on the scrollable container
     * and update the visibility of the left and right arrows.
     */
    useEffect(() => {
        const scrollableContainer = scrollableRef.current;

        if (scrollableContainer) {
            const handleScroll = () => {
                const { scrollLeft, scrollWidth, clientWidth } = scrollableContainer;

                setLeftButtonVisible(scrollLeft > 0);
                setRightButtonVisible(scrollLeft < scrollWidth - clientWidth);
            };

            scrollableContainer.addEventListener('scroll', handleScroll);

            return () => {
                scrollableContainer.removeEventListener('scroll', handleScroll);
            };
        }

        return undefined; // Added this line to satisfy the return requirement
    }, []);

    return (
        <Wrapper>
            <Container ref={scrollableRef}>
                {children}
            </Container>
            <ArrowHolder onClick={onScroll(ScrollDirection.Left)} buttonVisible={leftButtonVisible}>
                {leftArrow}
            </ArrowHolder>
            <ArrowHolder onClick={onScroll(ScrollDirection.Right)} buttonVisible={rightButtonVisible}>
                {rightArrow}
            </ArrowHolder>
        </Wrapper>
    );
};

/**
 * The Carousel component provides a customizable carousel UI for displaying
 * a set of items that can be horizontally scrolled using left and right arrow navigation.
 *
 * Note: The arrow navigation is designed for desktop view and is not visible on mobile devices.
 *
 * @example:
 *  const scrollableRef = useRef<HTMLDivElement>(null);
 *  const leftArrow = <LeftArrow />;
 *  const rightArrow = <RightArrow />;
 *
 *  return (
 *      <Carousel
 *        scrollableRef={scrollableRef}
 *        leftArrow={leftArrow}
 *        rightArrow={rightArrow}
 *        leftScrollValue={140}
 *        rightScrollValue={140}
 *      >
 *          <div>Item 1</div>
 *          <div>Item 2</div>
 *          <div>Item 3</div>
 *      </Carousel>
 *  );
 */
export default memo(Carousel);
