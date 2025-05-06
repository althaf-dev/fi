/**
 * @file QR Coder scanner popover
*/

import React, { memo } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../Abstract';
import { Device } from '../../Themes/Device';
import { PNGS_URL, SVGS_URL } from '../../constants/AssetConstants';

const MarginAuto = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const Container = styled.div<{ isQRCodeShown: boolean; qrBottomAlign: string }>`
    display: none;
    @media ${Device.tab} {
        position: absolute;
        bottom: ${(props) => props.qrBottomAlign || '70px'};
        align-items: center;
        display: ${(props) => (props.isQRCodeShown ? 'block' : 'none')};
        border-radius: 20px;
        min-width: 424px;
        z-index: 1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 59px 0px 0px;
        background-color: ${(props) => props.theme.color.WHITE};

        &::before {
            left: calc(50% - 15px);
            content: "";
            position: absolute;
            top: 100%;
            border: 15px solid transparent;
            border-top-color: ${(props) => props.theme.color.WHITE_LILAC};
        }
    }
`;

const Wrapper = styled.div`
    @media ${Device.tab} {
        padding-bottom: 48px;
    }
`;

const QRCodeHolder = styled(MarginAuto)`
    @media ${Device.tab} {
        width: 184px;
        height: 184px;
        margin-bottom: 16px;
    }
`;

const WhatsappLinkText = styled(MarginAuto)`
    @media ${Device.tab} {
        display: flex;
        align-items: center;
        justify-items: center;
        column-gap: 10px;
        cursor: pointer;
    }
`;

const Description = styled(Font)`
    min-width: 288px;
    text-align: center;
    margin-bottom: 38px;
`;

const WhatsappLinkContainer = styled.div`
    background-color: ${(props) => props.theme.color.WHITE_LILAC};
    height: 71px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 1;
`;

const HoverDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 75px;
    bottom: -20px;
    z-index: -1;
`;

const ContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const WhatsappIconWrapper = styled.div`
  height: 20px;
  width: 20px;
`;

interface QRCodeSectionProps {
    isQRCodeShown: boolean;
    showQRCode: () => void;
    hideQRCode: () => void;
    onSendWhatsAppLink: () => void;
    qrBottomAlign?: string;
}

const QRCodeSectionV2 = (props: QRCodeSectionProps) => {
    const {
        onSendWhatsAppLink,
        isQRCodeShown,
        showQRCode,
        hideQRCode,
        qrBottomAlign,
    } = props;

    return (
        <ContainerWrapper>
            <Container
                isQRCodeShown={isQRCodeShown}
                onMouseOver={showQRCode}
                onMouseLeave={hideQRCode}
                qrBottomAlign={qrBottomAlign}
            >
                <Wrapper>
                    <Description
                        font='h2VariantSix'
                        tagType='text'
                        color='MINE_SHAFT'
                    >
                        Scan QR to get the Fi app
                    </Description>
                    <QRCodeHolder>
                        <Image
                            icon={`${SVGS_URL}QRcodeV2.svg`}
                            alt='logo'
                            loadingType='lazy'
                            fallBackImage={`${PNGS_URL}prodQRCode.png`}
                        />
                    </QRCodeHolder>
                </Wrapper>
                <WhatsappLinkContainer>
                    <WhatsappLinkText onClick={onSendWhatsAppLink}>
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
                <HoverDiv />
            </Container>
        </ContainerWrapper>
    );
};

QRCodeSectionV2.defaultProps = {
    qrBottomAlign: null,
};

export default memo(QRCodeSectionV2);
