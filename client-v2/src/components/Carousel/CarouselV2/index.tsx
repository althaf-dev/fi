'use client';

/**
 * @file CarouselV2 page
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';
import { SVGS_URL } from '@/constants/AssetConstants';

const SliderContainer = styled.div`
    position: relative;
    margin: 20px auto;
    overflow: hidden;
    max-width: 360px;

    @media ${Device.tab} {
      max-width: 768px;
      margin: 30px auto;
    }

    @media ${Device.desktop} {
      max-width: 1440px;
      margin: 0 auto;
    }
`;

const Title = styled.div`
    color: ${(props) => props.theme.color.GOLDEN_4};
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '20px', lineHeight: '24px',
    })};
    text-align: start;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '32px', lineHeight: '45px',
    })};
    margin: 0 auto 49px auto;
    text-align: center;
    }
`;

const SliderWrapper = styled.div`
    display: flex;
    flex: 0 0 100%;
    transition: transform 0.5s ease-in-out;
`;

const Slide = styled.img`
    padding: 20px;
    width: 320px;
    height: 394px;

    @media ${Device.tab} {
        width: 525px;
        height: 500px;
    }

    @media ${Device.desktop} {
        width: 750px;
        height: 750px;
    }
`;

const RadioGroup = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    @media ${Device.tab} {
        margin-top: -50px;
    } 

    @media ${Device.desktop} {
        margin-top: -100px;
    }
`;

const RadioButton = styled.input`
    margin: 0 5px;
    cursor: pointer;
    accent-color: ${(props) => props.theme.color.GOLDEN_5};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px auto;
    flex: 0 0 100%;
`;

const Gap = styled.div`
    flex: 0 0 20px;
`;

const Button = styled.div<{ visible?: boolean }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    width: 38px;
    height: 38px; 
    border-radius: 50%;
    padding: 15px;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.color.WHITE};
    &:active {
        background: ${(props) => props.theme.color.BROWN_1};
    }

    @media ${Device.desktop} {
        width: 66px;
        height: 66px;
        padding: 26px;
        &:hover{
            background: ${(props) => props.theme.color.BROWN_1};
        }
    }
`;

const PrevButton = styled(Button)`
    left: 0;
`;

const NextButton = styled(Button)`
    right: 0;
`;

const Arrow = styled.img`
    height: 11px;
    width: 6px;

    @media ${Device.desktop} {
        height: 23px;
        width: 13px;
    }
`;

interface CarouselProps {
    slides: {
        slide: string;
        title: string;
        id: number;
    }[];
}

const CarouselVariantOne: React.FC<CarouselProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleRadioChange = (index: number) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const radioButtons = document.getElementsByName('slider') as NodeListOf<HTMLInputElement>;
        radioButtons.forEach((radio, index) => {
            radio.checked = index === currentIndex;
        });
    }, [currentIndex]);

    const isPrevVisible = currentIndex !== 0;
    const isNextVisible = currentIndex !== slides.length - 1;

    return (
        <SliderContainer>
            <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide) => (
                    <Container key={slide.id}>
                        <Title>{slide.title}</Title>
                        <Slide src={slide.slide} />
                    </Container>
                ))}
            </SliderWrapper>
            <PrevButton onClick={prevSlide} visible={isPrevVisible}>
                <Arrow src={`${SVGS_URL}left-arrow_grey.svg`} />
            </PrevButton>
            <NextButton onClick={nextSlide} visible={isNextVisible}>
                <Arrow src={`${SVGS_URL}right-arrow_grey.svg`} />
            </NextButton>
            <RadioGroup>
                {slides.map((slide, index) => (
                    <React.Fragment key={slide.id}>
                        <RadioButton
                            type='radio'
                            name='slider'
                            id={`radio${index}`}
                            onChange={() => handleRadioChange(index)}
                        />
                        {index < slides.length - 1 && <Gap />}
                    </React.Fragment>
                ))}
            </RadioGroup>
        </SliderContainer>
    );
};

export default CarouselVariantOne;
