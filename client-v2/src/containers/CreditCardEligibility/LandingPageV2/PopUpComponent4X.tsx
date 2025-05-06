'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '../../../Abstract';
import { Device } from '@/Themes/Device';
import { SVGS_URL } from '@/constants/AssetConstants';

interface PopUpComponentProps {
    baseText: string;
    className: string;
    iconUrl: string;
    children: any;
    style: any;
}

interface PopupProps {
    isVisible: boolean;
    style: any;
}

const PopupContainer = styled.div<PopupProps>`
  width: 357px;
  height: 500px;
  border-radius: 32px;
  border: 1px solid #F1CE9B;
  background: #201207;;
  backdrop-filter: blur(100px);
  position: absolute;
  left: 50%;
  transform:  ${(props) => props.style.translate || 'translate(-50%, -50%)'};
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  @media ${Device.desktop} {
    width: 1222px;
    height: 394px;
    top: -98px;
}
`;

const CloseButton = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
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
        font-size: 20px;
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

const DEFULT_ARROW_URL = 'https://assets-global.website-files.com/61559d56514fd67c50eea39e/61e8ffa41ac7fc5f48f190ec_arrow-new-tab.svg';

const PopUpComponent4X: React.FC<PopUpComponentProps> = ({
    baseText, className, iconUrl, children, style,
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
                    <Image icon={iconUrl || DEFULT_ARROW_URL} alt='card-image' loadingType='lazy' />
                </ArrowImageWrapper>
            </BaseContainer>
            <PopupContainer isVisible={isPopupVisible} style={style}>
                <CloseButton onClick={handleClosePopup}>
                    <Image
                        icon={`${SVGS_URL}magnifi-close-icon.svg`}
                        alt='card-image'
                        loadingType='lazy'
                        fallBackImage={`${SVGS_URL}magnifi-close-icon.svg`}
                    />
                </CloseButton>
                {
                    children
                }
            </PopupContainer>
        </>
    );
};

export default PopUpComponent4X;
