import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Font, Image, ArrowButton } from '../../../components';
import { ICONS_URL } from '../../../constants/AssetConstants';

import { StyledLandingCard } from '../InsightsStyled/InsightsStyled';

import { Device } from '../../../Themes/Device';

const CardData = [
    {
        iconUrl: `${ICONS_URL}open-box.png`,
        bgColor: '#CDC6E9',
        text: 'How much you’ve spent on takeout in the last 90 days?',
    },
    {
        iconUrl: `${ICONS_URL}skyrocket.png`,
        bgColor: '#F4E7BF',
        text: 'Which month your expenses skyrocketed?',
    },
    {
        iconUrl: `${ICONS_URL}shopping-cart.png`,
        bgColor: '#CDE5C1',
        text: 'The number of times you’ve shopped on Amazon',
    },
];

const IconHolder = styled.div`
    height: 32px;
    width: 32px;
    margin: 0 auto 12px;

    @media ${Device.desktop} {
        height: 60px;
        width: 60px;
    }
`;

const CardHolder = styled.div`
    display: grid;
    grid-template-columns: 8px repeat(3, 312px) 8px;
    grid-column-gap: 8px;
    overflow-x: auto;
    text-align: center;
    margin: auto;
    max-width: 985px;

    @media ${Device.desktop} {
        & > span {
            display: none;
        }
        grid-template-columns: repeat(3, 488px);
        grid-column-gap: 0px;
        max-width: 488px;
        overflow: hidden;
    }
`;

const Container = styled.div`
    & > div:first-child,
    & > div:last-child {
        display: none;
    }
    @media ${Device.desktop} {
        & > div:first-child,
        & > div:last-child {
            display: flex;
        }

        max-width: 632px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const LandingCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);

    const onClick = (buttonType: 'left' | 'right') => {
        if (buttonType === 'left') {
            if (activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
            }
        } else {
            if (activeIndex < 2) {
                setActiveIndex(activeIndex + 1);
            }
        }
    };

    useEffect(() => {
        ref.current.scrollLeft = activeIndex * 488;
    }, [activeIndex]);

    return (
        <Container>
            <ArrowButton
                onClick={() => onClick('left')}
                type='left'
                disabled={activeIndex === 0}
            />
            <CardHolder ref={ref}>
                <span></span>
                {CardData.map((value, index: number) => (
                    <StyledLandingCard key={index} bgColor={value.bgColor}>
                        <IconHolder>
                            <Image icon={value.iconUrl} alt='card icon' />
                        </IconHolder>
                        <Font tagType='text' font='h5VariantThree'>
                            {value.text}
                        </Font>
                    </StyledLandingCard>
                ))}
                <span></span>
            </CardHolder>
            <ArrowButton
                onClick={() => onClick('right')}
                disabled={activeIndex === 2}
            />
        </Container>
    );
};

export default LandingCard;
