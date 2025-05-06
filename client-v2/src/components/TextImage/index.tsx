/* eslint-disable react/no-array-index-key */

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image } from '../../Abstract';
import { DEVICE_HEIGHT, Device } from '@/Themes/Device';

interface Item {
    imageUrl: string;
    title: string[];
    subtitle: string[];
}

interface TextImageProps {
    data: Item[];
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

const TextColumn = styled.div`
  height: 500px;
  overflow: hidden;
  width: 300px;

  @media ${Device.desktop} {
    width: 400px;
    height: 580px;
  }
`;

const ImageColumn = styled.div`
  position: absolute;
  max-width: 130px;
  right: 3%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;

@media ${Device.desktop} {
    right: 30%;
}
`;

interface ImageProps {
    active: boolean;
}

const ImageWrapper = styled.div<ImageProps>`
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

interface TitleProps {
    active: boolean;
}

const Title = styled.h2<TitleProps>`
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: ${(props) => (props.active ? '24px' : '20px')};
    background: radial-gradient(777.35% 74.8% at 53.19% 128.79%, #FBF3E6 0%, #F1CE9B 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    transition: font-size 0.70s ease-in-out;

    @media ${Device.desktop} {
        font-size: ${(props) => (props.active ? '36px' : '32px')};
    }
`;

interface SubtitleProps {
    active: boolean;
}
const Subtitle = styled.div<SubtitleProps>`
  color: #FFF;
  font-size: ${(props) => (props.active ? '14.4px' : '12px')};
  @media ${DEVICE_HEIGHT.phone} {
    margin-bottom: 8px;
    padding-bottom: 8px;
}
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #371F09;
  text-align: left;
  font-family: Gilroy;
  transition: font-size 0.70s ease-in-out;
  max-width: 230px;

  @media ${Device.desktop} {
    font-size: ${(props) => (props.active ? '24px' : '20px')};
    max-width: 400px;
}
`;

const TextImage: React.FC<TextImageProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % data.length;
                return nextIndex;
            });
        }, 2000);

        return () => clearInterval(timer);
    }, [data]);

    return (
        <Container>
            <TextColumn>
                {data?.map((item, index) => (
                    <div key={index}>
                        <Title active={index === currentIndex}>
                            {item?.title?.map((textItem, subIndex) => (
                                <p key={subIndex}>{textItem}</p>
                            ))}
                        </Title>
                        <Subtitle active={index === currentIndex}>
                            {
                                item?.subtitle?.map((textItem, subIndex) => (
                                    <div key={subIndex}>{textItem}</div>
                                ))
                            }
                        </Subtitle>
                    </div>
                ))}
            </TextColumn>
            <ImageColumn>
                {data?.map((item, index) => (
                    <ImageWrapper key={index} active={index === currentIndex}>
                        {index === currentIndex && (
                            <Image
                                icon={item.imageUrl}
                                alt='card-image'
                                loadingType='lazy'
                                fallBackImage={item.imageUrl}
                            />
                        )}
                    </ImageWrapper>
                ))}
            </ImageColumn>
        </Container>
    );
};

export default TextImage;
