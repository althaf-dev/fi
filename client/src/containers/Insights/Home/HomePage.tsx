import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useWindowDimensions } from '../../../hooks';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { Font, PrimaryButton, Image } from '../../../components';
import { PNGS_URL, LOGOS_URL_MAP } from '../../../constants/AssetConstants';

import { WidthWrapper, Holder } from '../InsightsStyled/InsightsStyled';
import {
    getEmailSyncStatusAction,
    getStartedInsightAction,
    updateActiveStateInsightAction,
    updateSyncModal,
} from '../actions';
import { isNativeAppFlow } from '../utils';
import LandingCard from '../LandingCard/LandingCard';

import GmailModal from './GmailModal';
import EmailSyncModal from './EmailSyncModal';
import DuplicateEmailModal from './DuplicateEmailModal';

const IconHolder = styled.div`
    width: 196px;
    height: 196px;
    margin: 36px auto 24px;

    @media ${Device.desktop} {
        width: 248px;
        height: 248px;
        margin: 44px auto 8px;
    }
`;

const CloseIconHolder = styled.div`
    cursor: pointer;
    position: absolute;
    left: 16px;
    top: 16px;
    height: 32px;
    width: 32px;

    @media ${Device.tab} {
        left: 24px;
        top: 24px;
        height: 40px;
        width: 40px;
    }

    @media ${Device.desktop} {
        left: 111px; // 75px padding + 36px spacing from modal
        top: 111px; // 75px padding + 36px spacing from modal
        height: 52px;
        width: 52px;
    }
`;

const Description = styled(Font)`
    margin: 16px auto 32px;
    text-align: center;

    @media ${Device.desktop} {
        margin: 20px auto 32px;
    }
`;

const ContentContainer = styled.div``;

const Wrapper = styled(WidthWrapper)`
    text-align: center;

    @media ${Device.tab} {
        width: 400px;
    }

    @media ${Device.desktop} {
        width: 510px;
    }
`;

const ButtonHolder = styled.div`
    width: 111px;
    margin: 30px 24px 24px auto;

    @media ${Device.desktop} {
        margin: 20px 48px 36px auto;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    overflow: auto;
    position: absolute;
    width: 100%;

    @media ${Device.desktop} {
        background-color: ${(props) => props.theme.color.WHITE};
        border-radius: 30px;
        height: calc(100vh - 150px); /* Fallback for browsers that do not support Custom Properties */
        height: calc(var(--vh, 1vh) * 100 - 150px); // 150px top/bottom padding
        position: static;
    }
`;

const ErrorContainer = styled(Container)`
    align-items: center;
    justify-content: center;
`;

const LinkContainer = styled.div`
    margin-top: 16px;
    text-align: center;

    @media ${Device.desktop} {
        margin-top: 24px;
    }
`;

const LinkLabel = styled(Font)`
    text-decoration: underline;
`;

interface HomePageProps {
    isRedirectFlow: boolean;
    openSyncModal: boolean;
    emailSyncProgress: number;
    insightConsentUrl: string;
    onClose?: () => void;
    trackingPayload: any;
    openDuplicateEmailModal: boolean;
    hasExhaustedInsights: boolean;
    setOpenDuplicateEmailModal: (arg0: boolean) => void;
}

const HomePage = (props: HomePageProps) => {
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const [openModal, setOpenModal] = useState(false);
    const {
        isRedirectFlow, emailSyncProgress, openSyncModal, onClose, trackingPayload,
        openDuplicateEmailModal, setOpenDuplicateEmailModal, hasExhaustedInsights,
    } = props;

    const nativeAppFlow = isNativeAppFlow();

    const onLetsGoClick = () => {
        if (props.emailSyncProgress) {
            if (props.emailSyncProgress === 100) {
                dispatch(updateActiveStateInsightAction(1));
            } else {
                dispatch(updateSyncModal(true));
            }
        } else {
            setOpenModal(true);
        }
    };

    const onLoginButtonClick = () => {
        if (props.insightConsentUrl) {
            if (props.emailSyncProgress === null) {
                window.open(props.insightConsentUrl, '_self');
            } else {
                dispatch(updateSyncModal(true));
            }
        } else {
            dispatch(getStartedInsightAction());
        }
    };

    useEffect(() => {
        if (openSyncModal) {
            setOpenModal(false);
        }
    }, [openSyncModal]);

    useEffect(() => {
        if (isRedirectFlow && emailSyncProgress === null) {
            dispatch(getEmailSyncStatusAction(null));
        }
    }, [dispatch, isRedirectFlow, emailSyncProgress]);

    return (
        <>
            {
                hasExhaustedInsights ? (
                    <Holder color='dark'>
                        <ErrorContainer>
                            <ContentContainer>
                                <Wrapper>
                                    <Font
                                        font='h2'
                                        tagType='text'
                                        color={width >= WINDOW_SIZE.DESKTOP ? 'CHARCOAL_GREY' : 'WHITE'}
                                    >
                                        You have exhausted your attempts to connect. Please try again after a day.
                                    </Font>
                                </Wrapper>
                            </ContentContainer>
                        </ErrorContainer>
                    </Holder>
                ) : (
                    <Holder color='dark'>
                        <Container>
                            {
                                !nativeAppFlow ? (
                                    <CloseIconHolder onClick={onClose}>
                                        <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='fi money' />
                                    </CloseIconHolder>
                                ) : null
                            }
                            <IconHolder>
                                <Image icon={`${PNGS_URL}insights-gifts.png`} alt='gift icon' />
                            </IconHolder>

                            <ContentContainer>
                                <Wrapper>
                                    <Font
                                        font='h2'
                                        tagType='text'
                                        color={width >= WINDOW_SIZE.DESKTOP ? 'CHARCOAL_GREY' : 'WHITE'}
                                    >
                                        Get personal insights
                                    </Font>

                                    <Description
                                        font='pSmallVariantTwo'
                                        tagType='text'
                                        color={width >= WINDOW_SIZE.DESKTOP ? 'SUVA_GREY' : 'SILVER_2'}
                                    >
                                        Connect your Google account, the one linked to your
                                        food orders and online shopping, and we’ll show you:
                                    </Description>
                                </Wrapper>

                                <LandingCard />

                                <LinkContainer>
                                    <Link to='/privacy'>
                                        <LinkLabel font='footerLabel' tagType='span' color='FOREST_GREEN'>
                                            Privacy Policy
                                        </LinkLabel>
                                    </Link>
                                </LinkContainer>
                            </ContentContainer>

                            <ButtonHolder>
                                <PrimaryButton label='LET’S GO' onClick={onLetsGoClick} />
                            </ButtonHolder>
                        </Container>
                        <GmailModal
                            trackingPayload={trackingPayload}
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                            onLoginClick={onLoginButtonClick}
                        />
                        <DuplicateEmailModal
                            isOpen={openDuplicateEmailModal}
                            onClose={() => {
                                setOpenDuplicateEmailModal(false);
                                setOpenModal(true);
                            }}
                        />
                        {
                            isRedirectFlow ? (
                                <EmailSyncModal trackingPayload={trackingPayload} />
                            ) : null
                        }
                    </Holder>
                )
            }
        </>

    );
};

HomePage.defaultProps = { onClose: () => {} };

export default HomePage;
