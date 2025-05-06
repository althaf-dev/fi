/**
 * @file Features Page Image Component
 */

import React from 'react';
import styled from 'styled-components';

import { useWindowDimensions, useIsSSR } from '../../../../hooks';
import { Device, WINDOW_SIZE } from '../../../../Themes/Device';

import { Image } from '../../../Abstract';

// eslint-disable-next-line no-shadow
export enum ImagesVariant {
    CenterAlignImageVariant = 'center_align_image',
}

const ImageHolder = styled.div<{ imageVariant?: string }>`
    width: 320px;
    margin: auto;

    @media ${Device.tab} {
        width: 312px;
        margin: ${(props) => (props.imageVariant === ImagesVariant.CenterAlignImageVariant ? 'auto' : 'auto 0px')};
    }

    @media ${Device.desktop} {
        width: 478px;
    }
`;

interface ImageComponentProps {
    image: any,
    fallBackImage: any,
    mobile?: any,
    imageVariant?: string,
}

const ImageComponent = (props: ImageComponentProps) => {
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    let { image, fallBackImage } = props;
    const { mobile, imageVariant } = props;

    if (!isSSR && mobile && width < WINDOW_SIZE.TAB) {
        image = mobile.image_src;
        fallBackImage = mobile.fallback_image_src;
    }

    return (
        <ImageHolder imageVariant={imageVariant}>
            <Image
                icon={image}
                fallBackImage={fallBackImage}
                alt='card-image'
                loadingType='lazy'
            />
        </ImageHolder>
    );
};

ImageComponent.defaultProps = {
    mobile: null,
    imageVariant: '',
};

export default ImageComponent;
