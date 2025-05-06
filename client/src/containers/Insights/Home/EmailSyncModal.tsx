import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';

import { useWindowDimensions } from '../../../hooks';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { Font, Image } from '../../../components';
import { INSIGHTS_ALLOWEDGMAILACCESS_EVENT, trackEvent } from '../../../events';
import { SVGS_URL } from '../../../constants/AssetConstants';

import {
    getEmailSyncStatusAction,
    getAlreadyExistEmailSyncStatusAction,
    getInsightsEmail,
    updateActiveStateInsightAction,
} from '../actions';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 312px;
    margin: auto;
    height: 100%;

    @media ${Device.desktop} {
        width: 396px;
    }
`;

const ContentBody = styled.div``;

const ContentFooter = styled.div`
    text-align: center;
`;

const Header = styled.div`
    width: 240px;
    height: 142px;
    overflow: hidden;
    margin: auto;

    @media ${Device.desktop} {
        width: 254px;
        height: 150px;
        margin: 101px auto 85px auto;
    }
`;

const Title = styled(Font)`
    text-align: center;
`;

const ProgressHolder = styled.div`
    width: 200px;
    height: 6px;
    background: ${(props) => props.theme.color.SUVA_GREY_30};
    border-radius: 10px;
    margin: 24px auto 32px auto;

    @media ${Device.desktop} {
        margin: 48px auto 40px auto;
    }
`;

const Progressbar = styled.div<{ width: number }>`
    border-radius: 10px;
    width: ${(props) => `${props.width}%`};
    height: 100%;
    background: ${(props) => props.theme.color.FOREST_GREEN};
    transition: width 5s;
`;

const FooterCard = styled(Font)`
    background: ${(props) => props.theme.color.CHALK_GREY};
    border-radius: 8px;
    padding: 16px;
`;

const customStylesForModal = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
    },
    content: {
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        padding: 24,
    },
};

const customStylesForModalDesktop = {
    overlay: customStylesForModal.overlay,
    content: {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '460px',
        height: 'min-content',
        borderRadius: 30,
        padding: 32,
    },
};

export interface EmailSyncModalProps {
    openSyncModal: boolean;
    emailSyncProgress: number;
    errInInsightsEmail: boolean;
    insightsEmail: string;
    trackingPayload?: any;
}

const EmailSyncModal = (props: EmailSyncModalProps) => {
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    const { emailSyncProgress, errInInsightsEmail, insightsEmail, openSyncModal, trackingPayload } = props;

    useEffect(() => {
        let timer: any;
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(() => {
            if (insightsEmail) {
                if (emailSyncProgress !== 100) {
                    dispatch(getAlreadyExistEmailSyncStatusAction());
                } else {
                    dispatch(updateActiveStateInsightAction(1));
                }
            }
        }, 5000);

        if (errInInsightsEmail || emailSyncProgress === 100) {
            clearInterval(timer);
        }

        if (timer) {
            return () => clearInterval(timer);
        }
    }, [dispatch, emailSyncProgress, insightsEmail]);

    useEffect(() => {
        if (!insightsEmail) {
            dispatch(getInsightsEmail());
        }
    }, [dispatch, insightsEmail]);

    useEffect(() => {
        if (openSyncModal) {
            dispatch(getEmailSyncStatusAction(null));

            // allowed gmail access event
            if (trackingPayload) {
                trackEvent(INSIGHTS_ALLOWEDGMAILACCESS_EVENT, trackingPayload);
            }
        }
    }, [dispatch, openSyncModal, trackingPayload]);

    return (
        <Modal
            isOpen={openSyncModal}
            style={
                width < WINDOW_SIZE.DESKTOP
                    ? customStylesForModal
                    : customStylesForModalDesktop
            }
            ariaHideApp={false}
        >
            <Content>
                <Header>
                    <Image
                        icon={
                            emailSyncProgress < 100
                                ? `${SVGS_URL}progress-poster.svg`
                                : `${SVGS_URL}mail-sync-poster.svg`
                        }
                        alt='progress poster'
                    />
                </Header>

                <ContentBody>
                    <Title
                        font='h2VariantOne'
                        tagType='text'
                        color='MINE_SHAFT'
                    >
                        {emailSyncProgress < 100
                            ? "We're digging up some Insights for you"
                            : 'Insights retrieved, check it out!'}
                    </Title>
                    <ProgressHolder>
                        <Progressbar width={emailSyncProgress} />
                    </ProgressHolder>
                </ContentBody>

                <ContentFooter>
                    <Font font='pSmall' tagType='text' color='MID_GREY'>
                        {emailSyncProgress < 100
                            ? '*Usually, this takes less than 2 minutes*'
                            : '*Our barkaeologist has dug deep*'}
                    </Font>
                    <br />
                    <br />
                    <FooterCard font='pSmall' tagType='text' color='MID_GREY'>
                        <div>
                            <b>While you wait, did you know...</b>
                        </div>
                        <div>
                            Most app developers add random trivia and facts on
                            their &apos;load-screens&apos; to keep users engaged📚
                        </div>
                    </FooterCard>
                </ContentFooter>
            </Content>
        </Modal>
    );
};

const mapStateToProps = ({ insightReducer }) => {
    const { emailSyncProgress, errInInsightsEmail, insightsEmail, openSyncModal } = insightReducer;

    return {
        emailSyncProgress,
        errInInsightsEmail,
        insightsEmail,
        openSyncModal,
    };
};

const connector = connect(mapStateToProps, null);

export default connector(EmailSyncModal);
