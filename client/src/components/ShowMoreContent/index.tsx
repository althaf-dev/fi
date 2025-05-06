/**
 * @file ShowMoreContent
 * Generic component to show a more content with "See more" functionality
 */
import React, { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const ExpandedContent = styled.span`
    overflow: visible;
`;

const TruncatedContent = styled.span<{ linesToShow: number }>`
    text-overflow: ellipsis;
    ${(props) => MIXINS.LineClampMixin(props.linesToShow)};
`;

const SeeMoreButton = styled.span`
    cursor: pointer;
    color: ${(props) => props.theme.color.FOREST_GREEN};

    ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '14px', lineHeight: '20px',
    })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '24px', lineHeight: '28px',
    })};
    }
`;

interface IShowMoreContent {
    description: string;
    linesToShow: number;
}

const ShowMoreContent = (props: IShowMoreContent) => {
    const { description, linesToShow } = props;

    const contentRef = useRef(null);

    const [isTruncated, setIsTruncated] = useState(false);

    const toggleDescription = () => {
        setIsTruncated(!isTruncated);
    };

    /**
     * Calculates the number of lines in a content container and determines if it is truncated
     */
    useEffect(() => {
        if (contentRef.current) {
            const divHeight = contentRef.current.offsetHeight;
            const lineHeight = parseInt(window.getComputedStyle(contentRef.current).lineHeight, 10);
            const lineCount = Math.ceil(divHeight / lineHeight);

            // TODO: [ANKIT] [MONORAIL - https://monorail.pointz.in/p/fi-app/issues/detail?id=52023] Create a util function for this
            setIsTruncated(lineCount > 3);
        }
    }, []);

    return (
        <>
            {isTruncated ? (
                <>
                    <TruncatedContent linesToShow={linesToShow}>
                        {description}
                    </TruncatedContent>
                    <SeeMoreButton onClick={toggleDescription}>See More</SeeMoreButton>
                </>
            ) : (
                <ExpandedContent ref={contentRef}>
                    {description}
                </ExpandedContent>
            )}
        </>
    );
};

export default memo(ShowMoreContent);
