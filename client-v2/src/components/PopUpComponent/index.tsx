/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '../../Abstract';
import { Device } from '@/Themes/Device';

interface Item {
    imageUrl: string;
    title: string;
    subtitle: string;
}

interface PopUpComponentProps {
    baseText: string;
    headingText: string;
    data: Item[];
    className: string;
}

interface PopupProps {
    isVisible: boolean;
}

const PopupContainer = styled.div<PopupProps>`
  width: 357px;
  height: 500px;
  border-radius: 32px;
  border: 1px solid #F1CE9B;
  background: #201207;;
  backdrop-filter: blur(100px);
  position: fixed;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  @media ${Device.desktop} {
    width: 1140px;
    height: 394px;
    top: 50%;
}
`;

const CloseButton = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

const Heading = styled.div`
    color: #FBF3E6;
    text-align: center;
    font-family: Gilroy;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin: 80px auto 20px;

    @media ${Device.phone} {
        text-align: center;
        
    }

    @media ${Device.desktop} {
        margin: 40px auto 20px;
    }
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
    font-family: Gilroy;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 14px;
    background: #F6F9FD;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;

    @media ${Device.desktop} {
        font-size: 19.6px;
    }
`;

const Subtitle = styled.p`
  color: #C0723D;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  font-family: Inter;

  @media ${Device.desktop} {
    font-size: 16.8px;
}
`;

const ImageWrapper = styled.div`
    width: 48px;
    height: 48px;
    margin-right: 15px;
`;

const SubContainer = styled.div`
display: flex;
flex-direction: row;
padding-bottom: 25px;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const BaseText = styled.span`
    text-align: left;
    background: radial-gradient(2061.25% 87.63% at 50.52% 50%, #FBF3E6 0%, #F3D3A5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin-right: 5px;

    @media ${Device.desktop} {
        font-size: 32px;
        line-height: 34px;
    }

`;

const BaseContainer = styled.div`
    text-align: left;
    display: flex;
    text-decoration: underline;
    color: white;

`;

const ArrowImageWrapper = styled.div`
    width: 14px;
    height: 12px;
    margin-top: 3px;

    @media ${Device.desktop} {
        width: 28px;
        height: 28px;
        margin-top: 5px;
        margin-left: 5px;
    }
`;

const PopUpComponent: React.FC<PopUpComponentProps> = ({
    baseText, headingText, data, className
}) => {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleViewDetailsClick = () => {
        setPopupVisibility(true);
    };

    const handleClosePopup = () => {
        setPopupVisibility(false);
    };

    return (
        <>
            <BaseContainer className={className} onClick={handleViewDetailsClick}>
                <BaseText>{baseText}</BaseText>
                <ArrowImageWrapper className={className}>
                    <Image icon='https://assets-global.website-files.com/61559d56514fd67c50eea39e/61e8ffa41ac7fc5f48f190ec_arrow-new-tab.svg' alt='card-image' loadingType='lazy' />
                </ArrowImageWrapper>
            </BaseContainer>
            <PopupContainer isVisible={isPopupVisible}>
                <CloseButton onClick={handleClosePopup}>
                    <Image
                        icon='https://dza2kd7rioahk.cloudfront.net/assets/svgs/magnifi-close-icon.svg'
                        alt='card-image'
                        loadingType='lazy'
                        fallBackImage='https://dza2kd7rioahk.cloudfront.net/assets/svgs/magnifi-close-icon.svg'
                    />
                </CloseButton>
                <Heading>{headingText}</Heading>
                <PopupContent>
                    {data?.map((item, index) => (
                        <SubContainer>
                            <ImageWrapper key={index}>
                                <Image
                                    icon={item.imageUrl}
                                    alt='card-image'
                                    loadingType='lazy'
                                    fallBackImage='https://dza2kd7rioahk.cloudfront.net/assets/svgs/magnifi-close-icon.svg'
                                />
                            </ImageWrapper>
                            <TextContainer>
                                <Title>{item.title}</Title>
                                <Subtitle>{item.subtitle}</Subtitle>
                            </TextContainer>
                        </SubContainer>
                    ))}
                </PopupContent>
            </PopupContainer>
        </>
    );
};

export default PopUpComponent;
