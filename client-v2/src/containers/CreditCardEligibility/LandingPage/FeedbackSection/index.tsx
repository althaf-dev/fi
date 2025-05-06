/**
 * @file Feedback Section
 */

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from '@/components/Carousel';
import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

const CarouselItem = styled.div<any>`
    background-color: ${(props) => props.theme.color.GREY_4};
    display: flex;
    flex-direction: column;
    width: 289px;
    height: auto;
    justify-content: flex-start;
    flex-shrink: 0;
    border-radius: 25px;
    border-top: 0;
    position: relative;
    margin-top: 50px;
    &:first-child {
      margin-left: 10%;
    }
    &:last-child {
      margin-right:10%;
    }

    @media ${Device.tab} {
      width: 414px;
      border-radius: 45px;
      margin-top: 70px;
      padding-left: 15px;
    }
    
    @media ${Device.desktop} {
      width: 514px;
      margin-top: 90px;
      padding-left: 20px;
      &:first-child {
        margin-left: ${(props) => props.padding}px;
      }
      &:last-child {
        margin-right: ${(props) => props.padding}px;
      }
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 32px;
    position: absolute;
    top: -7%;

    @media ${Device.tab} {
        width: 80px;
        height: 50px;
        top: -5%;
    }

    @media ${Device.desktop} {
        width: 101px;
        height: 64px;
    }
`;

const Wrapper = styled.div`
    padding: 30px 32px 20px 25px;
    min-height: 220px;
    display: flex;
    align-items: center;

    @media ${Device.tab} {
        padding-top: 45px;
        min-height: 350px;
    }

    @media ${Device.desktop} {
        padding-top: 60px;
        min-height: 450px;
    }
`;

const CarouselDescription = styled.div`
    padding-bottom: 20px;
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 500,
        size: '12px',
        lineHeight: '20px',
    })};
    
    @media ${Device.tab} {
        padding-bottom: 30px;
        ${MIXINS.FontMixin({
        weight: 500,
        size: '20px',
        lineHeight: '30px',
    })};
    }

    @media ${Device.desktop} {
        padding-bottom: 40px;
        ${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '40px',
    })};
    }
`;

const FeedBackSectionContainer = styled.div`
    margin: 0 auto;
    padding-bottom: 120px;

    @media ${Device.tab} {
        padding-bottom: 200px;
    };
`;

const FeedBackSectionTitle = styled.div`
    padding-bottom: 20px;
    padding-left: 10%;
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 700,
        size: '24px',
        lineHeight: '34px',
    })};

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '44px',
        lineHeight: '56px',
        weight: 600,
    })};
        text-align: start;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '64px',
        lineHeight: '76px',
    })};
        width: 100%;
        margin: 0 auto;
        max-width: 1440px;
        padding-left: 85px;
        padding-right: 85px;
    }
`;

interface IfeedBackProps {
    name?: string;
    title?: string;
    description?: string;
    icon?: string;
}

const FeedBackSection = (props: {
    title: string;
    feedBackData: IfeedBackProps[];
    }) => {
    const { title, feedBackData } = props;
    const maxWidth = 1440;
    const [padding, setPadding] = useState<any>();

    useEffect(() => {
        setPadding(globalThis.window?.innerWidth > maxWidth
            ? ((globalThis.window?.innerWidth - maxWidth) / 2 + 85) : 85);
    }, []);

    return (
        <FeedBackSectionContainer>
            <FeedBackSectionTitle>{title}</FeedBackSectionTitle>
            <Carousel>
                {feedBackData.map((data, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CarouselItem key={index} padding={padding}>
                        <Wrapper>
                            <Icon src={data.icon} />
                            <CarouselDescription>{data.description}</CarouselDescription>
                        </Wrapper>
                    </CarouselItem>
                ))}
            </Carousel>
        </FeedBackSectionContainer>
    );
};

export default FeedBackSection;
