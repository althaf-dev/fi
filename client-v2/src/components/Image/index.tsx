/* eslint-disable react/require-default-props */

'use client';

import React from 'react';
import styled from 'styled-components';
import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';
import { Device } from '@/Themes/Device';
import { ResponsiveStyle } from '../types';

const StyledImage = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`;

const ContainImage = styled(StyledImage)<{ styles?: ResponsiveStyle<string> }>`
    object-fit: contain;
    ${(props) => props?.styles?.phone}

    @media ${Device.tab} {
        ${(props) => props?.styles?.tab}
    }

    @media ${Device.desktop} {
        ${(props) => props?.styles?.desktop}
    }
`;

interface ImageProps {
    icon: string;
    alt?: string;
    loadingType?: 'lazy' | 'eager';
    fallBackImage?: any;
    id?: string;
    dataTestId?: string;
    styles?: ResponsiveStyle
    className?: string;
}

const Image = ({
    icon,
    alt,
    loadingType,
    fallBackImage,
    id,
    dataTestId,
    styles,
    className,
}: ImageProps) => {
    const addFallBackImage = (event: any, image: string) => {
        if (image) event.target.src = image;
    };

    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <ContainImage
            src={icon}
            alt={alt}
            loading={loadingType}
            onError={(event) => addFallBackImage(event, fallBackImage)}
            id={id}
            data-test-id={dataTestId}
            styles={styleMap?.main}
            className={className}
        />
    );
};

export default Image;
