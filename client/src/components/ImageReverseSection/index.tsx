/**
 * @file Abstract Image Reverse Section
 */

import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../Abstract';
import { Device } from '../../Themes/Device';

import FinePrintText from '../FinePrintText';
import { IFinePrint } from '../types';

const Wrapper = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;

    @media ${Device.tab} {
        justify-content: space-between;
        align-items: center;
        flex-direction: ${(props) => (props.type === 'rightImage' ? 'row' : 'row-reverse')};
    }

    @media ${Device.desktop} {
        max-width: 100%;
    }
`;

const ContentHolder = styled.div<{ size: any }>`
    max-width: ${(props) => (props.size.mobile)}px;
    text-align: center;
    display: flex;
    flex-direction: column;


    @media ${Device.tab} {
        max-width: ${(props) => (props.size.tab)}px;
        text-align: left;
    }

    @media ${Device.desktop} {
        max-width: ${(props) => (props.size.desktop)}px;
    }
`;

/**
 * Add min(100%, device_width) so that for smaller mobile screens the image width does not overflow the container
 * Doing this will centre align the image w.r.t to the container
 */
const ImageHolder = styled.div<{ size: any }>`
    width: min(100%, ${(props) => (props.size.mobile.width)}px);
    height: ${(props) => (props.size.mobile.height)}px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: min(100%, ${(props) => (props.size.tab.width)}px);
        height: ${(props) => (props.size.tab.height)}px;
    }

    @media ${Device.desktop} {
        margin: 0;
        width: min(100%, ${(props) => (props.size.desktop.width)}px);
        height: ${(props) => (props.size.desktop.height)}px;
    }
`;

const Title = styled(Font)`
    margin: 0px auto 20px;
`;

const Description = styled(Font)`
    margin: 0px auto 30px;

    @media ${Device.tab} {
        margin: 0px;
    }
`;

// eslint-disable-next-line no-shadow
export enum ColorVariant {
    MINE_SHAFT = 'MINE_SHAFT',
    GREY_3 = 'GREY_3',
    GREY_2 = 'GREY_2',
}

// eslint-disable-next-line no-shadow
export enum FontVariant {
    SalaryPageTitleFont = 'cardTitleVariantFour',
    AskFiPageTitleFont = 'cardTitleVariantFive',
    AskFiPageDescriptionFont = 'pNormalVariant',
    FinePrintTextFont = 'pSmallVariantEight',
}

export const SalaryPageContentSize = {
    mobile: 268,
    tab: 274,
    desktop: 446,
};

export const AskFiPageContentSize = {
    mobile: 320,
    tab: 320,
    desktop: 550,
};

export const SalaryPageImageSize = {
    mobile: {
        width: 268,
        height: 210,
    },
    tab: {
        width: 268,
        height: 260,
    },
    desktop: {
        width: 395,
        height: 306,
    },
};

export const AskFiPageImageSize = {
    mobile: {
        width: 320,
        height: 260,
    },
    tab: {
        width: 320,
        height: 260,
    },
    desktop: {
        width: 478,
        height: 388,
    },
};

interface ImageReverseSectionProps {
    id: number;
    titleText: string | ReactNode;
    descriptionText: string | ReactNode;
    finePrint?: IFinePrint;
    imageSize: any;
    contentSize: any;
    imageIcon: any;
    fallbackIcon: any;
    titleTextColor?: ColorVariant;
    titleFont?: FontVariant;
    cardType?: string;
    descriptionTextColor?: ColorVariant;
    descriptionFont?: FontVariant;
}

const ImageReverseSection = (props: ImageReverseSectionProps) => {
    const {
        id, cardType, titleText, titleTextColor, titleFont, descriptionText,
        descriptionTextColor, descriptionFont, imageIcon, fallbackIcon, contentSize,
        imageSize, finePrint,
    } = props;

    return (
        <Wrapper type={cardType} key={id}>
            <ContentHolder size={contentSize}>
                <Title font={titleFont} tagType='text' color={titleTextColor}>
                    {titleText}
                </Title>

                {descriptionText ? (
                    <Description font={descriptionFont} tagType='text' color={descriptionTextColor}>
                        {descriptionText}
                    </Description>
                ) : null}

                <FinePrintText data={finePrint} />

            </ContentHolder>

            <ImageHolder size={imageSize}>
                <Image
                    icon={imageIcon}
                    fallBackImage={fallbackIcon}
                    alt='card-image'
                    loadingType='lazy'
                    objectType='contain'
                />
            </ImageHolder>
        </Wrapper>

    );
};

ImageReverseSection.defaultProps = {
    cardType: 'rightImage',
    titleTextColor: ColorVariant.MINE_SHAFT,
    descriptionTextColor: ColorVariant.GREY_3,
    finePrint: {},
    titleFont: FontVariant.SalaryPageTitleFont,
    descriptionFont: FontVariant.AskFiPageDescriptionFont,
};

export default ImageReverseSection;
