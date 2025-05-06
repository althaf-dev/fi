/**
 * @file Features Page Carousel Component
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';
import { ICONS_URL_MAP } from '../../../../constants/AssetConstants';
import { Image } from '../../../Abstract';

import RenderBasicComponent from '../../RenderBasicComponent';

const Wrapper = styled.div`
    padding: 30px 20px 0px;
    max-width: 360px;
    margin: 0px auto;
    position: relative;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 40px 70px 0px;
    }

    @media ${Device.desktop} {
        max-width: 1290px;
        padding: 120px 91px 0px;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;

    @media ${Device.tab} {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${Device.desktop} {
        justify-content: space-between;
    }
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    & > span:not(:last-child) {
        margin-right: 10px;
    }

    @media ${Device.tab} {
        margin-top: 40px;

        & > span:not(:last-child) {
            margin-right: 14px;
        }
    }
`;

const DotsWrapper = styled.span`
    cursor: pointer;
    border-radius: 50%;
    height: 6px;
    width: 6px;
    transition: background-color 0.6s ease;

    @media ${Device.desktop} {
        height: 8px;
        width: 8px;
    }
`;

const Dots = styled(DotsWrapper)<{ activeDots: boolean }>`
    background-color: ${(props) => (props.activeDots ? props.theme.color.FOREST_GREEN : props.theme.color.SUVA_GREY)};
`;

const CommonArrowContainer = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 38px;
    width: 24px;
    height: 24px;
    padding: 7px 8px;
    position: absolute;
    top: 92%;

    @media ${Device.tab} {
        top: 50%;
    }

    @media ${Device.desktop} {
        width: 32px;
        height: 32px;
        padding: 10px 12px;
    }
`;

const ArrowContainer = styled(CommonArrowContainer)<{ isCursorDisabled: boolean, isLeftArrow?: boolean, isRightArrow?: boolean }>`
    cursor: ${(props) => (props.isCursorDisabled ? 'not-allowed' : 'pointer')};
    left: ${(props) => (props.isLeftArrow ? '10%' : 'unset')};
    right: ${(props) => (props.isRightArrow ? '10%' : 'unset')};

    @media ${Device.tab} {
        left: ${(props) => (props.isLeftArrow ? '4%' : 'unset')};
        right: ${(props) => (props.isRightArrow ? '4%' : 'unset')};
    }

    @media ${Device.desktop} {
        left: ${(props) => (props.isLeftArrow ? '2%' : 'unset')};
        right: ${(props) => (props.isRightArrow ? '2%' : 'unset')};
    }
`;

const Arrow = styled.div<{isArrowVisible: boolean }>`
    opacity: ${(props) => (props.isArrowVisible ? '0.2' : 'unset')};
`;

interface CarouselComponentProps {
    data: {
        left: {
            type: string,
            data: any,
        },
        right: {
            type: string,
            data: any,
        },
    }[];
}

const CarouselComponent = (props: CarouselComponentProps) => {
    const { data } = props;
    const carouselDataLength = data.length;

    const [activeIndex, setActiveIndex] = useState(1);

    const onArrowClick = (buttonType) => () => {
        if (buttonType === 'LEFT' && activeIndex > 1) {
            setActiveIndex(activeIndex - 1);
        } else if (buttonType === 'RIGHT' && activeIndex < carouselDataLength) {
            setActiveIndex(activeIndex + 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex(activeIndex === carouselDataLength ? 1 : activeIndex + 1);
        }, 5000);
        return () => clearTimeout(timer);
    }, [activeIndex, carouselDataLength]);

    return (
        <Wrapper>
            {data.map((item, index) => {
                if (activeIndex === index + 1) {
                    return (
                        <Section>
                            <RenderBasicComponent info={item.left} />
                            <RenderBasicComponent info={item.right} />
                        </Section>
                    );
                }
                return null;
            })}
            <ArrowContainer onClick={onArrowClick('LEFT')} isCursorDisabled={activeIndex === 1} isLeftArrow>
                <Arrow isArrowVisible={activeIndex === 1}>
                    <Image loadingType='lazy' icon={ICONS_URL_MAP.GREY_LEFT_ARROW} alt='logo' />
                </Arrow>
            </ArrowContainer>
            <ArrowContainer onClick={onArrowClick('RIGHT')} isCursorDisabled={activeIndex === carouselDataLength} isRightArrow>
                <Arrow isArrowVisible={activeIndex === carouselDataLength}>
                    <Image loadingType='lazy' icon={ICONS_URL_MAP.GREY_RIGHT_ARROW} alt='logo' />
                </Arrow>
            </ArrowContainer>
            <DotsContainer>
                {data.map((_, index) => (
                    <Dots onClick={() => setActiveIndex(index + 1)} activeDots={activeIndex === index + 1} />
                ))}
            </DotsContainer>
        </Wrapper>
    );
};

export default CarouselComponent;
