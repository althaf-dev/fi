/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`;

const CoverImage = styled(StyledImage)<{ height: any; width: any, borderRadius: any }>`
    object-fit: cover;
    height: ${(props) => (props.height ? props.height : '100%')};
    width: ${(props) => (props.width ? props.width : '100%')};
    border-radius: ${(props) => (props.borderRadius || '0px')};
`;

const ContainImage = styled(StyledImage)<{ height: any; width: any }>`
    object-fit: contain;
    height: ${(props) => (props.height ? props.height : '100%')};
    width: ${(props) => (props.width ? props.width : '100%')};
`;

interface ImageProps {
    icon: string | undefined;
    alt?: string;
    objectType?: 'cover' | 'contain';
    loadingType?: 'lazy' | 'eager';
    height?: any;
    width?: any;
    fallBackImage?: any;
    borderRadius?: any;
    id?: string;
    dataTestId?: string;
}

const Image = ({
    icon,
    alt,
    objectType,
    loadingType,
    height,
    width,
    fallBackImage,
    borderRadius,
    id,
    dataTestId,
}: ImageProps) => {
    const addFallBackImage = (event: any, image: string) => {
        if (image) event.target.src = image;
    };

    switch (objectType) {
        case 'contain':
            return (
                <ContainImage
                    height={height}
                    width={width}
                    src={icon}
                    alt={alt}
                    loading={loadingType}
                    onError={(event) => addFallBackImage(event, fallBackImage)}
                    id={id}
                    data-test-id={dataTestId}
                />
            );

        default:
            return (
                <CoverImage
                    height={height}
                    width={width}
                    src={icon}
                    alt={alt}
                    loading={loadingType}
                    onError={(event) => addFallBackImage(event, fallBackImage)}
                    borderRadius={borderRadius}
                    id={id}
                    data-test-id={dataTestId}
                />
            );
    }
};
export default Image;
