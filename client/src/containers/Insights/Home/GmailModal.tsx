import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { useWindowDimensions } from '../../../hooks';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { Font, GoogleButton, Image } from '../../../components';
import { SVGS_URL, ICONS_URL_MAP } from '../../../constants/AssetConstants';

import { INSIGHTS_SIGNEDINGOOGLEWL_EVENT, trackEvent } from '../../../events';
import { getDeviceInfo } from '../../../device';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const GmailHolder = styled.div`
    height: 52px;
    width: 52px;
    overflow: hidden;

    @media ${Device.desktop} {
        width: 80px;
        height: 80px;
    }
`;

const CloseIconHolder = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;

    @media ${Device.desktop} {
        width: 40px;
        height: 40px;
    }
`;

const Title = styled(Font)`
    margin: 16px 0px 16px 0;
    line-height: 115%;

    @media ${Device.desktop} {
        margin: 24px 0 28px 0;
        line-height: 120%;
    }
`;

const DescText = styled(Font)`
    margin-bottom: 16px;

    @media ${Device.desktop} {
        margin-bottom: 22px;
    }
`;

const LastDescText = styled(Font)`
    margin-bottom: 24px;

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

const Ul = styled.ul`
    margin-left: 16px;

    @media ${Device.desktop} {
        margin-left: 20px;
    }
`;

const ButtonHolder = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const GreenLink = styled.a`
    color: ${(props) => props.theme.color.FOREST_GREEN};

    &:hover {
        border-bottom: 1px solid ${(props) => props.theme.color.FOREST_GREEN};
    }
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
        top: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        padding: 40,
        paddingBottom: 36,
    },
};

export interface GmailModalProps {
    isOpen: true | false;
    onClose?: () => void;
    onLoginClick?: () => void;
    trackingPayload?: any;
}

const GmailModal = (props: GmailModalProps) => {
    const { width } = useWindowDimensions();
    const { isOpen, onClose } = props;

    useEffect(() => {
        getDeviceInfo();
    }, []);

    const onButtonClick = () => {
        // sign-in with google cta event
        if (props.trackingPayload) {
            trackEvent(INSIGHTS_SIGNEDINGOOGLEWL_EVENT, props.trackingPayload);
        }

        props.onLoginClick();
    };

    return (
        <Modal
            isOpen={isOpen}
            style={
                width < WINDOW_SIZE.DESKTOP
                    ? customStylesForModal
                    : customStylesForModalDesktop
            }
            ariaHideApp={false}
        >
            <Header>
                <GmailHolder>
                    <Image icon={`${SVGS_URL}gmail.svg`} objectType='cover' />
                </GmailHolder>
                <CloseIconHolder onClick={onClose}>
                    <Image icon={ICONS_URL_MAP.CLOSE} alt='close card' />
                </CloseIconHolder>
            </Header>
            <Title font='h2VariantOne' tagType='text' color='MINE_SHAFT'>
                Connect your Google Account to track your spends
            </Title>

            <DescText font='pSmall' tagType='text' color='MID_GREY'>
                No, we won&apos;t be viewing all your emails. Give this a read before you give us access.
            </DescText>

            <Ul>
                <li>
                    <DescText font='pSmall' tagType='text' color='MID_GREY'>
                        No human will read your mail. Just Fi systems.
                    </DescText>
                </li>
                <li>
                    <DescText font='pSmall' tagType='text' color='MID_GREY'>
                        Fi systems only read emails from merchants & organizations that enable us to provide you with
                        financial insights or help you get quicker access to our app!
                    </DescText>
                </li>
                <li>
                    <DescText font='pSmall' tagType='text' color='MID_GREY'>
                        We don&apos;t share this data with anyone. 🔐
                    </DescText>
                </li>
                <li>
                    <DescText font='pSmall' tagType='text' color='MID_GREY'>
                        And yes, you can unlink anytime.
                    </DescText>
                </li>
                <li>
                    <LastDescText font='pSmall' tagType='text' color='MID_GREY'>
                        Read our&nbsp;
                        <GreenLink
                            onClick={() => window.open('/privacy', '_blank')}
                        >
                            Privacy Policy
                        </GreenLink>
                        &nbsp;to learn more.
                    </LastDescText>
                </li>
            </Ul>

            <ButtonHolder>
                <GoogleButton onClick={onButtonClick} />
            </ButtonHolder>
        </Modal>
    );
};

export default GmailModal;
