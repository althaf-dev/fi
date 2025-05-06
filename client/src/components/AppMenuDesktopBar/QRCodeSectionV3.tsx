/**
 * @file QR Coder scanner with whatsapp send link component
*/

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { PNGS_URL, SVGS_URL } from '../../constants/AssetConstants';

import { Font, Image } from '../Abstract';
import { MarginAuto } from '../Waitlist/components/CommonStyle';

const QRCodeHolder = styled(MarginAuto)`
    @media ${Device.tab} {
        width: 236px;
        height: 236px;
        margin-bottom: 16px;
    }
`;

const WhatsappLinkText = styled(MarginAuto)`
    @media ${Device.tab} {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        cursor: pointer;
    }
`;

const WhatsappLinkContainer = styled.div`
    padding-top: 40px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 1;
`;

const WhatsappIconWrapper = styled.div`
  height: 20px;
  width: 20px;
`;

const LineHolder = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const HorizontalLine = styled.div`
  width: 272px;
  border: 1px solid ${(props) => props.theme.color.IRON};
  position: relative;
  display: flex;
  justify-content: center;
`;

const LineText = styled(Font)`
    position: absolute;
    top: -16px;
    background-color: ${(props) => props.theme.color.MYSTIC};
    padding: 5px;
    border-radius: 50%;
`;

const ContainerWrapper = styled.div``;

interface IQRCodeSectionProps {
    onWhatsAppLinkSentPage: () => void;
}

const QRCodeSectionV3 = (props: IQRCodeSectionProps) => {
    const { onWhatsAppLinkSentPage } = props;

    return (
        <ContainerWrapper>
            <QRCodeHolder>
                <Image
                    icon={`${SVGS_URL}QRcodeV2.svg`}
                    alt='logo'
                    loadingType='lazy'
                    fallBackImage={`${PNGS_URL}prodQRCode.png`}
                />
            </QRCodeHolder>
            <LineHolder>
                <HorizontalLine>
                    <LineText
                        font='pSmallVariantTwelve'
                        tagType='text'
                        color='OSLO_GRAY'
                    >
                        Or
                    </LineText>
                </HorizontalLine>
            </LineHolder>
            <WhatsappLinkContainer>
                <WhatsappLinkText onClick={onWhatsAppLinkSentPage}>
                    <WhatsappIconWrapper>
                        <Image
                            icon={`${SVGS_URL}whatsapp-icon.svg`}
                            alt='logo'
                            loadingType='lazy'
                        />
                    </WhatsappIconWrapper>
                    <Font
                        font='titleVariantThree'
                        tagType='text'
                        color='FOREST_GREEN'
                    >
                        Send me a Whatsapp link
                    </Font>
                </WhatsappLinkText>
            </WhatsappLinkContainer>
        </ContainerWrapper>
    );
};

export default QRCodeSectionV3;
