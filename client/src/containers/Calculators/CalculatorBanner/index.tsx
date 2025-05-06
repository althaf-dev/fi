/**
 * @file Banner Component
 */

import React, { memo } from 'react';

import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';
import { ICalculatorCtaBannerData } from '../types';

const BannerWrapper = styled.div<{
  desktopBackgroundImageSrc: string, desktopFallbackImageSrc: string, mobileFallbackImageSrc: string, showOnDesktop: boolean,
  mobileBackgroundImageSrc: string, sideBanner: boolean
}>`
    background-image: url(${(props) => props.mobileBackgroundImageSrc}), url(${(props) => props.mobileFallbackImageSrc});
    padding: 16px 18px 12px;
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    border-radius: 20px; 
    display: ${(props) => (props.showOnDesktop ? 'none' : 'block')};
    width: 100%;

    @media ${Device.tab} {
        display: ${(props) => (props.showOnDesktop ? 'none' : 'block')};
      }

    @media ${Device.desktop} {
        display: ${(props) => (props.showOnDesktop ? 'block' : 'none')};
        background-image: url(${(props) => props.desktopBackgroundImageSrc}), url(${(props) => props.desktopFallbackImageSrc});
        padding: ${(props) => (props.sideBanner ? '44px 30px' : '28px')};
        width: ${(props) => (props.sideBanner ? '464px' : '100%')};
        border-radius: ${(props) => (props.sideBanner ? '40px' : '20px')};
        margin-bottom: ${(props) => (props.sideBanner ? '0px' : '30px')};
      }
`;

const Title = styled.h2<{sideBanner: boolean, titleColor: string}>`
    color: ${(props) => props.titleColor};
    ${MIXINS.FontMixin({ size: '14px', weight: 700, lineHeight: '130%' })}
    margin-bottom: 12px;
    max-width: 160px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ size: '28px', weight: 600, lineHeight: '140%' })}
        margin-bottom: 16px;
        max-width: ${(props) => (props.sideBanner ? '228px' : '588px')};
        color: ${(props) => props.titleColor};
      }
`;

const Button = styled.button`
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
    border-radius: 10px;
    cursor: pointer;
    padding: 8px 6px;
    text-transform: uppercase;
    ${MIXINS.FontMixin({ size: '12px', weight: 600, lineHeight: '130%' })}
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FlexMixin({ align: 'center' })};

    @media ${Device.desktop} {
        padding: 16px 20px;
        ${MIXINS.FontMixin({ size: '16px', weight: 700, lineHeight: '110%' })}

      }
`;

interface CalculatorBannerProps {
  bannerData: ICalculatorCtaBannerData;
  showOnDesktop?: boolean;
  sideBanner?: boolean;
}

const CalculatorBanner = (props: CalculatorBannerProps) => {
    const {
        bannerData,
        showOnDesktop,
        sideBanner,
    } = props;

    if (!bannerData) {
        return null;
    }

    const {
        title,
        title_color: titleColor,
        button_text: buttonText,
        url,
        desktop_image_src: { image_src: desktopImageSrc, fallback_image_src: desktopFallbackImageSrc },
        mobile_image_src: { image_src: mobileImageSrc, fallback_image_src: mobileFallbackImageSrc },
    } = bannerData;

    return (
        <BannerWrapper
            desktopBackgroundImageSrc={desktopImageSrc}
            mobileBackgroundImageSrc={mobileImageSrc}
            desktopFallbackImageSrc={desktopFallbackImageSrc}
            mobileFallbackImageSrc={mobileFallbackImageSrc}
            showOnDesktop={showOnDesktop}
            sideBanner={sideBanner}
        >
            <Title sideBanner={sideBanner} titleColor={titleColor}>{title}</Title>
            <a
                href={url}
                target='_blank'
                rel='noreferrer'
            >
                <Button>{buttonText}</Button>
            </a>
        </BannerWrapper>
    );
};

CalculatorBanner.defaultProps = {
    showOnDesktop: false,
    sideBanner: false,
};

export default memo(CalculatorBanner);
