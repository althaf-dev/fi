/**
 * @file Features Section
 */

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from '@/components/Carousel';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';

const CarouselItem = styled.div<any>`
    background: linear-gradient(180deg, #28292c 0%, #18191b 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 284px;
    flex-shrink: 0;
    height: 250px;
    border-radius: 25px;
    border: 1px solid #00b899;
    border-top: 0;
    text-align: center;
    position: relative;
    margin-top: 54px;
    &:first-child {
        margin-left: 10%;
    }
    &:last-child {
        margin-right: 10%;
    }

    @media ${Device.tab} {
        height: 321px;
        border: 2px solid #00b899;
        border-top: 0;
        width: 414px;
        border-radius: 45px;
        margin-top: 70px;
    }

    @media ${Device.desktop} {
        height: 421px;
        width: 514px;
        border-radius: 45px;
        margin-top: 101px;
        &:first-child {
        margin-left: ${(props) => props.padding}px;
        }
        &:last-child {
        margin-right: ${(props) => props.padding}px;
        }
    }
`;

const CarouselImage = styled.img`
    height: 187px;
    width: 187px;
    position: absolute;
    top: -25%;
    z-index: 1;

    @media ${Device.tab} {
        height: 240px;
        width: 240px;
    }

    @media ${Device.desktop} {
        height: 300px;
        width: 300px;
    }
`;

const CarouselTitle = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 700,
        size: '20px',
        lineHeight: '24px',
    })};
    max-width: 50%;
    margin-top: 90px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '26px',
        lineHeight: '33px',
    })};
        margin-top: 120px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '36px',
        lineHeight: '43px',
    })};
        max-width: 40%;
    }
`;

const CarouselDescription = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 500,
        size: '12px',
        lineHeight: '14px',
    })};
    max-width: 60%;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '18px',
        lineHeight: '32px',
    })};
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '22px',
        lineHeight: '36px',
    })};
    }
`;

const FeaturesSectionContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;

    @media ${Device.desktop} {
        margin-bottom: 200px;
    }
`;

const FeaturesSectionTitle = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    padding-left: 10%;
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 700,
        size: '24px',
        lineHeight: '34px',
    })};
    padding-bottom: 24px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        weight: 600,
        size: '44px',
        lineHeight: '56px',
    })};
        padding-bottom: 36px;
        max-width: 768px;
        text-align: start;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '64px',
        lineHeight: '76px',
    })};
        padding: 0 85px 36px 85px;
        margin: 0 auto;
        width: 100%;
        max-width: 1440px;
    }
`;

const LineBreak = styled.div`
    width: 80%;
    height: 2px;
    background: linear-gradient(90deg, #28292b 0%, #00b899 30%, #28292b 95%);
    margin: 16px 0;
`;

interface IfeaturesProps {
  icon?: string;
  title?: string;
  description?: string;
}

const RewardSection = (props: {
  title: string;
  featuresData: IfeaturesProps[];
}) => {
    const { title, featuresData } = props;
    const maxWidth = 1440;
    const [padding, setPadding] = useState<any>();

    useEffect(() => {
        setPadding(globalThis.window?.innerWidth > maxWidth
            ? ((globalThis.window?.innerWidth - maxWidth) / 2 + 85) : 85);
    }, []);

    return (
        <FeaturesSectionContainer>
            <FeaturesSectionTitle>{title}</FeaturesSectionTitle>
            <Carousel>
                {featuresData.map((data, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CarouselItem key={index} padding={padding}>
                        <CarouselImage src={data.icon} />
                        <CarouselTitle>{data.title}</CarouselTitle>
                        <LineBreak />
                        <CarouselDescription>{data.description}</CarouselDescription>
                    </CarouselItem>
                ))}
            </Carousel>
        </FeaturesSectionContainer>
    );
};

export default RewardSection;
