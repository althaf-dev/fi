import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { WEBP_URL, PNGS_URL, JPGS_URL } from '../../constants/AssetConstants';
import { useWindowDimensions, useIsSSR } from '../../hooks';

import { Font, Image } from '../Abstract';
import { Device, WINDOW_SIZE } from '../../Themes/Device';
import CardOne from './CardOne';
import CardTwo from './CardTwo';

const GridType1Image1 = `${WEBP_URL}grid11.webp`;
const GridType1Image2 = `${WEBP_URL}grid12.webp`;
const GridType2Image1 = `${WEBP_URL}grid21.webp`;
const GridType2Image2 = `${WEBP_URL}grid22.webp`;

const GridType1Image1Fallback = `${PNGS_URL}grid11.png`;
const GridType1Image2Fallback = `${PNGS_URL}grid12.png`;
const GridType2Image1Fallback = `${JPGS_URL}grid21.jpg`;
const GridType2Image2Fallback = `${JPGS_URL}grid22.jpg`;

const Description = styled(Font)`
    margin-top: 15px;

    @media ${Device.desktop} {
        margin-top: 20px;
    }
`;

const Section = styled.div`
    margin-top: 40px;

    @media ${Device.tab} {
        margin-top: 80px;
    }

    @media ${Device.tab} {
        margin-top: 140px;
    }
`;

const TextHolder = styled.div<{ type: number }>`
    text-align: center;
    width: 320px;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 40px;

    @media ${Device.tab} {
        width: 345px;
        padding-top: 0px;
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.type === 2 ? '1000px' : '500px')};
        padding-bottom: 60px;
    }
`;

const GridHolderContainer = styled.div`
    width: 360px;
    height: 360px;
    margin: auto auto 20px auto;

    @media ${Device.tab} {
        border-radius: 20px;
        width: 600px;
        height: 400px;
        margin-bottom: 30px;
    }

    @media ${Device.desktop} {
        width: 1200px;
        height: 600px;
        margin-bottom: 100px;
    }
`;

const GridContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;

    @media ${Device.tab} {
        filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.1));
        border-radius: 20px;
    }

    @media ${Device.desktop} {
        filter: drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.2));
        border-radius: 30px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const GridChild1 = styled.div`
    height: 100%;
    width: 100%;

    @media ${Device.tab} {
        grid-row: span 2;
    }
`;

const GridChild2 = styled.div`
    height: 100%;
    width: 100%;
    z-index: 1;
    max-width: 180px;
    overflow: hidden;
    @media ${Device.tab} {
        height: 200px;
        max-width: 300px;
    }

    @media ${Device.desktop} {
        height: 300px;
        max-width: 100%;
    }
`;

const GridChild3 = styled.div<{ type: number; gridType: 1 | 2 }>`
    background-color: ${(props) =>
        props.type !== 2
            ? props.gridType === 1
                ? props.theme.color.TEA_GREEN
                : props.theme.color.PATTERNS_BLUE
            : props.theme.color.WHITE};
    height: 100%;
    width: 100%;
    grid-column: span 2;
    transition: color ease 1s;

    @media ${Device.tab} {
        grid-column: auto;
    }
`;

const GridChild4 = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        background-color: ${(props) => props.theme.color.WHITE};
        height: 100%;
        width: 100%;
    }
`;

const GridChild5 = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
`;

const Wrapper = styled(Section)<{ gridType: 1 | 2 }>`
    // margin-top: ${(props) => (props.gridType === 1 ? '180px' : 0)};
`;

const TransitionWrapper = styled.div<{ type: number }>`
    display: flex;
    height: 100%;
    transition: all ease ${(props) => (props.type !== 1 ? '1s' : '0s')};

    transform: ${(props) =>
        props.type === 1
            ? 'translateX(0px)'
            : props.type === 2
            ? 'translateX(-172px)'
            : 'translateX(-344px)'};

    @media ${Device.tab} {
        transform: ${(props) =>
            props.type === 1
                ? 'translateX(0px)'
                : props.type === 2
                ? 'translateX(-300px)'
                : 'translateX(-600px)'};
    }
`;

interface AppImageGridSectionProps {
    gridType?: 1 | 2;
    titleText?: string;
    subtitleText?: string;
}

const AppImageGridSection = (props: AppImageGridSectionProps) => {
    const [type, setType] = useState(1);
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    const { gridType, titleText, subtitleText } = props;
    const isType1Grid = gridType === 1;

    useEffect(() => {
        width > WINDOW_SIZE.DESKTOP ? (type !== 1 ? setType(1) : null) : null;
    }, [width]);

    useEffect(() => {
        let timer = null;
        if (width < WINDOW_SIZE.DESKTOP) {
            if (type === 1) {
                timer = setTimeout(() => setType(2), 3000);
            } else if (type === 2) {
                timer = setTimeout(() => setType(3), 4000);
            } else {
                timer = setTimeout(() => setType(1), 1000);
            }
        }
        return () => clearTimeout(timer);
    }, [type]);

    return (
        <Wrapper gridType={gridType}>
            <TextHolder type={gridType}>
                <Font font='h1' tagType='h2' color='MINE_SHAFT'>
                    {titleText}
                </Font>

                <Description
                    font={isType1Grid ? 'p3' : 'pVariantOne'}
                    tagType='h3'
                    color='GREY_3'
                >
                    {subtitleText}
                </Description>
            </TextHolder>
            <GridHolderContainer>
                <GridContainer>
                    <GridChild1>
                        <CardOne gridType={gridType} />
                    </GridChild1>

                    <GridChild2>
                        {!isSSR && width >= WINDOW_SIZE.DESKTOP ? (
                            <Image
                                icon={
                                    isType1Grid
                                        ? GridType1Image1
                                        : GridType2Image1
                                }
                                alt='cart 2'
                                loadingType='lazy'
                                fallBackImage={
                                    isType1Grid
                                        ? GridType1Image1Fallback
                                        : GridType2Image1Fallback
                                }
                            />
                        ) : (
                            <TransitionWrapper type={type}>
                                <Image
                                    icon={
                                        isType1Grid
                                            ? GridType1Image1
                                            : GridType2Image1
                                    }
                                    alt='cart 2'
                                    loadingType='lazy'
                                    height='auto'
                                    fallBackImage={
                                        isType1Grid
                                            ? GridType1Image1Fallback
                                            : GridType2Image1Fallback
                                    }

                                />
                                <Image
                                    icon={
                                        isType1Grid
                                            ? GridType1Image2
                                            : GridType2Image2
                                    }
                                    alt='cart 2'
                                    loadingType='lazy'
                                    height='auto'
                                    fallBackImage={
                                        isType1Grid
                                            ? GridType1Image2Fallback
                                            : GridType2Image2Fallback
                                    }
                                />
                                <Image
                                    icon={
                                        isType1Grid
                                            ? GridType1Image1
                                            : GridType2Image1
                                    }
                                    alt='cart 2'
                                    loadingType='lazy'
                                    height='auto'
                                    fallBackImage={
                                        isType1Grid
                                            ? GridType1Image1Fallback
                                            : GridType2Image1Fallback
                                    }
                                />
                            </TransitionWrapper>
                        )}
                    </GridChild2>

                    <GridChild3 type={type} gridType={gridType}>
                        {!isSSR && width < WINDOW_SIZE.DESKTOP ? (
                            <CardTwo
                                gridType={gridType}
                                type={type}
                                setType={(value) => setType(value)}
                                isSelected={type === 1}
                            />
                        ) : (
                            <CardTwo gridType={gridType} type={1} />
                        )}
                    </GridChild3>

                    <GridChild4>
                        <CardTwo gridType={gridType} type={2} />
                    </GridChild4>

                    <GridChild5>
                        <Image
                            icon={
                                isType1Grid
                                    ? GridType1Image2
                                    : GridType2Image2
                            }
                            alt='cart 5'
                            loadingType='lazy'
                            fallBackImage={
                                isType1Grid
                                    ? GridType1Image2Fallback
                                    : GridType2Image2Fallback
                            }
                        />
                    </GridChild5>
                </GridContainer>
            </GridHolderContainer>
        </Wrapper>
    );
};

AppImageGridSection.defaultProps = {
    gridType: 1,
    titleText: 'Backed by major league investors',
    subtitleText:
        'We’ve raised $13.2 million in seed funds, led by Sequoia India & Ribbit Capital.',
};

export default AppImageGridSection;
