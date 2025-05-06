/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { PropsWithChildren, useState, useEffect } from 'react';
import styled from 'styled-components';
import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';
import { Device } from '@/Themes/Device';
import { Image } from '@/Abstract';
import { ResponsiveStyle } from '../types';

type DynamicComponentProps = {
  className?: string;
  styles?: ResponsiveStyle;
  styleId?: string;
  visibleAfter?: number;
  hideAfter?: number;
  isVisible?: boolean;
  borderOpacity?: number;
}

interface DynamicContainer {
    isVisible: boolean;
}

interface Button {
    isVisible: boolean;
}

const DynamicContainer = styled.div<DynamicComponentProps>`
    transition: opacity 0.3s ease-in-out;
    z-index: 10;
    padding: 0px 20px 20px;
    width: 300px;
    width: ${(props) => (!props.isVisible ? '100%' : '300px')};
    text-align: center;
    margin: auto;
    border-radius: ${(props) => (!props.isVisible ? 'none' : '32px 32px 0px 0px')};
    position: fixed;
    bottom: 0;
    border: 1px solid rgba(241, 206, 155, ${(props) => props.borderOpacity});
    border-bottom: none;
    background: ${(props) => (!props.isVisible ? '#201207' : 'linear-gradient(4deg, #201207 -35.45%, rgba(32, 18, 7, 0.00) 96.54%)')};

    @media ${Device.desktop} {
        display: none;
    }
`;

const SecondaryContainer = styled.div<DynamicComponentProps>`
    display: flex;
    flex-direction: column;
    color: var(--Neutrals-Fog-200, #E6E9ED);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

const SubContainer = styled.div<DynamicComponentProps>`
    display: flex;  
    justify-content: center;
`;

const Title = styled.div<DynamicComponentProps>`
    margin: 0px 8px 8px 0px;
`;

const SubTitle = styled.div<DynamicComponentProps>`
    font-size: 8px;
`;

const Button = styled.div<DynamicComponentProps>`
    background: linear-gradient(180deg, #C0723D 0%, #754312 116.25%); 
    border-radius: 20px;
    font-weight: 600;
    line-height: 16px;
    box-shadow: 0px 2px 0px 0px #F1CE9B;
    color: #F6E1C1; 
    width: fit-content;
    display: flex;
    padding: 12px 15px;
    cursor: pointer;
    margin: auto;
    margin-bottom: 5px;
    position: relative;
    bottom: ${(props) => (!props.isVisible ? '0px' : '20px')};
    transition: bottom 0.5s ease;
    font-family: Gilroy;
    font-size: 14px;
    width: 235px;
    justify-content: space-around;
`;

const LifeTimeFreeTitle = styled.div<DynamicComponentProps>`
    margin: 0 auto 0;
    text-align: center;
    color: #FFF8CE;
    background: linear-gradient(180deg, #1B0B08 -38.77%, rgb(27 11 8 / 70%) 89.83%);
    width: auto;
    border-radius: 12px;
    padding: 15px 20px;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.379px;
`;

function DynamicComponent(props: PropsWithChildren<DynamicComponentProps>) {
    const {
        visibleAfter = 0, hideAfter = 0, className, styles, ...rest
    } = props;

    const [isVisible, setIsVisible] = useState(true);
    const [borderOpacity, setBorderOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const newOpacity = Math.max(0, Math.min(1, 1 - window.scrollY / hideAfter));
            setBorderOpacity(newOpacity);
            if (hideAfter === 0) {
                setIsVisible(window.scrollY > visibleAfter);
            } else if (window.scrollY > hideAfter) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        if (typeof window !== 'undefined') {
            setIsVisible(window.scrollY <= 180);
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hideAfter, visibleAfter]);
    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <>
            <DynamicContainer borderOpacity={borderOpacity} isVisible={isVisible} data-styleId='main' className={`l-link ${className}`} {...rest} styles={styleMap?.main}>
                <Button isVisible={isVisible}>
                    <a href={(globalThis.window as any)?.oneLinkCommonUrl} target='_blank' rel='noreferrer'> GET THE WEEKEND CARD</a>
                    <Image
                        width='9%'
                        icon='https://dza2kd7rioahk.cloudfront.net/assets/svgs/magnifi-arrow-right.svg'
                        alt='card-image'
                        loadingType='lazy'
                    />
                </Button>
                <SecondaryContainer isVisible={isVisible}>
                    {isVisible ? (
                        <>
                            <SubContainer>
                                <Title>ISSUED BY</Title>
                                <Image
                                    width='30%'
                                    icon='https://dza2kd7rioahk.cloudfront.net/assets/svgs/magnifi-federal-bank.svg'
                                    alt='card-image'
                                    loadingType='lazy'
                                />
                            </SubContainer>
                            <SubTitle>
                                Co-branded partnership with
                                <b> Fi Brand Pvt. Ltd </b>
                            </SubTitle>
                        </>
                    ) : (
                        <LifeTimeFreeTitle>LIFETIME FREE</LifeTimeFreeTitle>
                    )}
                </SecondaryContainer>
            </DynamicContainer>
        </>
    );
}

export default DynamicComponent;
