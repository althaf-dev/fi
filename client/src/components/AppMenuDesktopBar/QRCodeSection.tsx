import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import {
    trackEvent, trackGTMEvent,
    CLICKED_GET_THE_FI_APP, CLICKED_GET_THE_FI_APP_IOS,
} from '../../events';

import { Font, Image } from '../Abstract';
import { Device } from '../../Themes/Device';
import { getEncodedPlayStoreURL } from '../../utils/getEncodedPlayStoreURL';
import { getEnvBaseQRCodeImage } from '../../utils/getEnvBaseQRCodeImage';
import { IOS_APP_STORE_URL } from '../../constants/AppConstant';
import { PNGS_URL, LOGOS_URL_MAP } from '../../constants/AssetConstants';

// eslint-disable-next-line no-var
declare var window: any;

const MarginAuto = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const Container = styled.div<{isQRCodeShown: boolean, alignQRCodeInCenter?: boolean }>`
    display: none;

    @media ${Device.tab} {
        display: block;
        position: absolute;
        right: ${(props) => (props.alignQRCodeInCenter ? 'unset' : '0px')};
        padding-top: ${(props) => (props.isQRCodeShown ? '25px' : '0px')};
        min-width: 340px;
    }

    @media ${Device.desktop} {
        min-width: 420px;
    }
`;

const Wrapper = styled.div<{isQRCodeShown: boolean}>`
    @media ${Device.tab} {
        display: ${(props) => (props.isQRCodeShown ? 'block' : 'none')};
        border-radius: 20px;
        background-color: ${(props) => props.theme.color.WHITE};
        padding: 50px 68px;
        position: absolute;
        right: 0px;
        z-index: 2; // Increased z-index by 1 (from 1 to 2) to make QR code visible above other elements

        &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            right: 45px;
            border: 20px solid transparent;
            border-bottom-color: ${(props) => props.theme.color.WHITE};
        }
    }
`;

const QRCodeHolder = styled(MarginAuto)`
    @media ${Device.desktop} {
        width: 150px;
        height: 150px;
        margin-bottom: 16px;
    }
`;

const PlayStoreHolder = styled(MarginAuto)`
    @media ${Device.tab} {
        margin-top: 24px;
        margin-bottom: 16px;
        width: 175px;
        height: 52px;
    }
`;

const AppStoreHolder = styled(MarginAuto)`
    @media ${Device.tab} {
        width: 156px;
        height: 52px;
    }
`;

const Description = styled(Font)`
    min-width: 288px;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface QRCodeSectionProps {
    isQRCodeShown: boolean;
    showQRCode: () => void;
    hideQRCode: () => void;
    trackingPayload?: any;
    alignQRCodeInCenter?: boolean;
}

const QRCodeSection = (props: QRCodeSectionProps) => {
    const {
        trackingPayload, isQRCodeShown, showQRCode, hideQRCode, alignQRCodeInCenter,
    } = props;

    const location = useLocation();

    const playStoreUrl = getEncodedPlayStoreURL(location.search);

    const trackingData = {
        ...trackingPayload,
        cta_location: 'header',
    };

    const onGetTheFiApp = (key) => () => {
        trackEvent(key, { ...trackingData, method: 'manual', entry_point: 'home_page' });

        trackGTMEvent(key);
    };

    return (
        <Container isQRCodeShown={isQRCodeShown} onMouseOver={showQRCode} onMouseLeave={hideQRCode} alignQRCodeInCenter={alignQRCodeInCenter}>
            <Wrapper isQRCodeShown={isQRCodeShown}>
                <div>
                    <QRCodeHolder>
                        <Image
                            icon={getEnvBaseQRCodeImage()}
                            alt='logo'
                            loadingType='lazy'
                            fallBackImage={`${PNGS_URL}prodQRCode.png`}
                        />
                    </QRCodeHolder>

                    <Description font='h2VariantSix' tagType='text' color='MINE_SHAFT'>
                        Scan QR to get the Fi app
                    </Description>

                    <ButtonWrapper>
                        <a
                            href={window.oneLinkAndroidUrl || playStoreUrl}
                            onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP)}
                            id='qrcodescanner_playstore_link'
                            className='onelink-android-url'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <PlayStoreHolder>
                                <Image
                                    icon={LOGOS_URL_MAP.PLAY_STORE_BLACK}
                                    alt='logo'
                                    loadingType='lazy'
                                />
                            </PlayStoreHolder>
                        </a>

                        <a
                            href={window.oneLinkIosUrl || IOS_APP_STORE_URL}
                            onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP_IOS)}
                            id='qrcodescanner_appstore_link'
                            className='onelink-ios-url'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AppStoreHolder>
                                <Image
                                    icon={LOGOS_URL_MAP.APP_STORE_BLACK}
                                    alt='logo'
                                    loadingType='lazy'
                                />
                            </AppStoreHolder>
                        </a>
                    </ButtonWrapper>
                </div>
            </Wrapper>
        </Container>
    );
};

QRCodeSection.defaultProps = {
    trackingPayload: {},
    alignQRCodeInCenter: false,
};

export default QRCodeSection;
