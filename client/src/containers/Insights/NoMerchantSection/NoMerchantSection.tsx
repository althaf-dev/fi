import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Holder } from '../InsightsStyled/InsightsStyled';
import { Font, PrimaryButton, Flex, Image } from '../../../components';
import { SVGS_URL, ICONS_URL_MAP } from '../../../constants/AssetConstants';

import { Device } from '../../../Themes/Device';

import GmailModal from '../Home/GmailModal';
import { INSIGHTS_NOGMAILINSIGHTWL_EVENT, trackEvent } from '../../../events';

const ContentContainer = styled(Flex)`
    min-height: 100vh;
    max-height: 100vh;
    max-width: 360px;

    margin: 0px auto;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.CHARCOAL_GREY};

    @media ${Device.desktop} {
        max-width: 1290px;
        width: 100%;
        min-height: 100%;
        max-height: 100%;
        background-color: ${(props) => props.theme.color.DARKER_GREY};
        border-radius: 30px;
        position: relative;
    }
`;

const ImageWrapper = styled.div`
    max-width: 226px;
    margin: 53px auto 0px;

    @media ${Device.desktop} {
        max-width: 400px;
        margin-top: 64px;
    }
`;

const Content = styled.div`
    padding: 0px 24px;

    max-width: 518px;
`;

const Text = styled(Font)`
    text-align: center;
`;

const Title = styled(Text)`
    margin-bottom: 16px;
`;

const Description = styled(Text)``;

const Footer = styled.div`
    width: 312px;
    margin: 0px auto;
`;

const ButtonWrapper = styled.div`
    margin-bottom: 24px;

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;
const Button = styled(PrimaryButton)``;

const CloseHolder = styled.div`
    overflow: hidden;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 16px;
    cursor: pointer;

    @media ${Device.desktop} {
        left: 48px;
        top: 48px;
        width: 52px;
        height: 52px;
    }
`;

interface NoMerchantSectionProps {
    insightConsentUrl: string;
    onClose: () => void;
}

const insightsTrackingPayload = {
    flow_name: 'insights',
    channel: 'insights',
    page_name: 'insights home page',
};

const NoMerchantSection = (props: NoMerchantSectionProps) => {
    const [openModal, setOpenModal] = useState(false);
    const { insightConsentUrl, onClose } = props;

    const onLoginButtonClick = () => {
        window.open(insightConsentUrl, '_self');
    };

    useEffect(() => {
        trackEvent(INSIGHTS_NOGMAILINSIGHTWL_EVENT, insightsTrackingPayload);
    }, []);

    return (
        <Holder color='dark'>
            <ContentContainer>
                <CloseHolder onClick={onClose}>
                    <Image
                        icon={ICONS_URL_MAP.CLOSE}
                        alt='close-icon'
                        objectType='contain'
                    />
                </CloseHolder>
                <ImageWrapper>
                    <Image
                        icon={`${SVGS_URL}globe.svg`}
                        alt='Thanks'
                        loadingType='lazy'
                    />
                </ImageWrapper>

                <Content>
                    <Title tagType='text' font='h1VariantThree' color='WHITE'>
                        More to your money than meets the eye
                    </Title>
                    <Description tagType='text' font='input' color='SILVER_2'>
                        Fi can provide better insights if you link a Google
                        Account that’s connected to your other spends.
                    </Description>
                </Content>

                <Footer>
                    <ButtonWrapper>
                        <Button
                            label='CONNECT ANOTHER ACCOUNT'
                            color='WHITE'
                            onClick={() => setOpenModal(true)}
                        />
                    </ButtonWrapper>
                </Footer>
            </ContentContainer>

            <GmailModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onLoginClick={onLoginButtonClick}
            />
        </Holder>
    );
};

const mapStateToProps = ({ insightReducer }) => {
    const { answerState } = insightReducer;

    return { answerState };
};

const connector = connect(mapStateToProps, null);
export default connector(NoMerchantSection);
