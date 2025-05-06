/**
 * @file Fi Card Section
 */

import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICONS_URL_MAP } from '../../constants/AssetConstants';
import { Device } from '../../Themes/Device';

import { Font, Image } from '../Abstract';

const Container = styled.div`
    background: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 20px 16px;

    @media ${Device.tab} {
        padding: 35px 40px;
    }

    @media ${Device.desktop} {
        padding: 34px 42px;
    }
`;

const ImageHolder = styled.div`
    width: 28px;
    height: 28px;
    margin-right: 12px;

    @media ${Device.tab} {
        width: 52px;
        height: 52px;
        margin-right: 24px;
    }

    @media ${Device.desktop} {
        width: 68px;
        height: 68px;
        margin-right: 30px;
    }
`;

const CardTitle = styled(Font)`
    text-align: left;
    margin-right: 23px;
    max-width: 203px;

    @media ${Device.tab} {
        margin-right: 48px;
        max-width: 444px;
    }

    @media ${Device.desktop} {
        margin-right: 110px;
        max-width: 800px;
    }
`;

const ArrowHolder = styled.div`
    width: 20px;
    height: 20px;

    @media ${Device.tab} {
        width: 40px;
        height: 40px;
    }
`;

interface FiCardSectionProps {
    item: any;
}

const FiCardSection = (props: FiCardSectionProps) => {
    const { item } = props;
    const {
        icon, title, email, url,
    } = item;
    const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = icon || {};

    const navigate = useNavigate();

    const onClick = () => {
        navigate(url);
    };

    const cardSection = (
        <>
            <ImageHolder>
                <Image
                    icon={imageSrc}
                    alt='logo'
                    loadingType='lazy'
                    fallBackImage={fallbackImageSrc}
                />
            </ImageHolder>
            <CardTitle font='cardTitleVariantSix' tagType='text' color='SAN_MARINO'>
                {title}
            </CardTitle>
            <ArrowHolder>
                <Image
                    icon={ICONS_URL_MAP.RIGHT_ARROW_V2}
                    alt='arrow icon'
                    loadingType='lazy'
                />
            </ArrowHolder>
        </>
    );

    if (email) {
        return (
            <a href={`mailto:${email}`}>
                <Container>
                    {cardSection}
                </Container>
            </a>
        );
    }

    return (
        <Container onClick={onClick}>
            {cardSection}
        </Container>
    );
};

export default memo(FiCardSection);
