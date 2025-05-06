/**
 * @file Features Page Emoji Component
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';

import { Image } from '../../../Abstract';

import { CardsVariant } from '../../FeaturesCards';

const ImageHolder = styled.div<{cardsVariant: CardsVariant }>`
    width: 42px;
    margin: 0px 0px 12px;

    @media ${Device.tab} {
        margin: ${(props) => (props.cardsVariant === CardsVariant.LeftRightCardVariant ? '0px 20px 0px 0px' : '0px 0px 12px')};
    }

    @media ${Device.desktop} {
        width: 60px;
    }
`;

interface ImageComponentProps {
    image: any;
    fallBackImage: any;
    cardsVariant?: CardsVariant;
}

const ImageComponent = (props: ImageComponentProps) => {
    const { image, fallBackImage, cardsVariant } = props;

    return (
        <ImageHolder cardsVariant={cardsVariant}>
            <Image
                icon={image}
                fallBackImage={fallBackImage}
                alt='icon'
                loadingType='lazy'
            />
        </ImageHolder>
    );
};

ImageComponent.defaultProps = {
    cardsVariant: false,
};

export default ImageComponent;
