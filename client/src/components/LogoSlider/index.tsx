/**
 @file: Logo Slider
*/

import React, { useMemo } from 'react';
import styled from 'styled-components';
import repeat from 'ramda/src/repeat';
import flatten from 'ramda/src/flatten';

import MIXINS from '../../Themes/mixins';

import { Image } from '../index';

const Container = styled.div<{ animationDirection: string }>`
    ${MIXINS.FlexMixin({})};
    animation: ${(props) => props.animationDirection} 40s linear infinite normal forwards;
    column-gap: 20px;
    width: calc(250px * 14);

    @keyframes right {
        0% {
          transform: translateX(calc(-250px * 7));
        }
        100% {
          transform: translateX(0);
        }
    }

    @keyframes left {
        0% {
          transform: transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-250px * 7));
        }
    }
`;

const ImageHolder = styled.div`
    height: 100px;
    width: 250px;
    padding: 20px;
`;

const LogoWrapper = styled.div`
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: auto;

    &:hover div {
        animation-play-state: paused;
    }
`;

interface LogoSliderProps {
    images: {
        imageSrc: string;
        fallbackImageSrc: string;
    }[];
    animationDirection: 'left' | 'right';
}

/*
* Usage:
*  <LogoSlider images={imageData} animationDirection='left' />
*
* Props:
*  - images: An array of logo slider image data
*    Example data structure:
*     "images": [
*        {
*            "imageSrc": "url",
*            "fallbackImageSrc": "url"
*        },
*        {
*            "imageSrc": "url",
*            "fallbackImageSrc": "url"
*        },
*       ...]
*  - animationDirection: animation image moving direction string
*       Example data structure:
*        "animationDirection": "left" | 'right',
*/

const LogoSlider = (props: LogoSliderProps) => {
    const { images, animationDirection } = props;

    // multiply the three times of image to get the smooth animation
    const logoList = useMemo(() => flatten(repeat(images, 3)), [images]);

    return (
        <LogoWrapper>
            <Container animationDirection={animationDirection}>
                {logoList?.map((logo, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ImageHolder key={key}>
                        <Image
                            objectType='contain'
                            icon={logo?.imageSrc}
                            fallBackImage={logo?.fallbackImageSrc}
                            alt='card-image'
                            loadingType='lazy'
                        />
                    </ImageHolder>
                ))}
            </Container>
        </LogoWrapper>
    );
};

export default React.memo(LogoSlider);
