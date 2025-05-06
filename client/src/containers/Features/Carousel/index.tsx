import React from 'react';
import styled from 'styled-components';

import { Image } from '../../../components/Abstract';
import { Device } from '../../../Themes/Device';

import arrowUpIcon from '../../../assets/svgs/arrow-up.svg';
import arrowDownIcon from '../../../assets/svgs/arrow-down.svg';

import { VIDEO_SECTION, ScrollingAnimationObject } from '../constants';

const SliderContainer = styled.div`
    position: sticky;
    top: 350px;
    width: 24px;
    height: 252px;
    margin-left: 116px;
`;

const StickySlider = styled.div`
    display: flex;
    flex-direction: column;
`;

const ArrowCotainer = styled.div`
    cursor: pointer;
`;

const UpArrow = styled(ArrowCotainer)`
    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;

const DownArrow = styled(ArrowCotainer)`
    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;

const DotsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 18px
`;

const DotsStyle = styled.span`
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.6s ease;

    @media ${Device.desktop} {
        height: 8px;
        width: 8px;
        margin-bottom: 14px;
    }
`;

const Dots = styled(DotsStyle)`
    background-color: ${(props) => props.theme.color.SUVA_GREY};
`;

const DotsActive = styled(DotsStyle)`
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
`;

type ButtonType = 'UP' | 'DOWN';

interface CarouselProps {
    scrollingAnimation: ScrollingAnimationObject;
    onCarouselScroll: (value: number) => void;
}

const Carousel = (props: CarouselProps) => {
    const { scrollingAnimation, onCarouselScroll } = props;
    const activeSlide = scrollingAnimation.activeIndex;

    const setCurrentSlideIndex = (index) => {
        onCarouselScroll(index);
    };

    const onArrowClick = (buttonType: ButtonType) => {
        if (buttonType === 'UP') {
            if (activeSlide > 0) {
                setCurrentSlideIndex(activeSlide - 1);
            }
        } else if (buttonType === 'DOWN') {
            if (activeSlide < VIDEO_SECTION.length - 1) {
                setCurrentSlideIndex(activeSlide + 1);
            }
        }
    };

    return (
        <SliderContainer>
            <StickySlider>
                <UpArrow onClick={() => onArrowClick('UP')}>
                    <Image loadingType='lazy' icon={arrowUpIcon} alt='logo' />
                </UpArrow>
                <DotsContainer>
                    {VIDEO_SECTION.map((ele, index) => (
                        activeSlide === index
                            ? <DotsActive key={ele.id} />
                            : <Dots key={ele.id} onClick={() => setCurrentSlideIndex(index)} />
                    ))}
                </DotsContainer>
                <DownArrow onClick={() => onArrowClick('DOWN')}>
                    <Image loadingType='lazy' icon={arrowDownIcon} alt='logo' />
                </DownArrow>
            </StickySlider>
        </SliderContainer>
    );
};

export default Carousel;
