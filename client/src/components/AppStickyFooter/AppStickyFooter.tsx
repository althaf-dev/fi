import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Device } from '../../Themes/Device';
import { Font, Image } from '../Abstract';

import {
    trackEvent,
    trackGTMEvent,
    CLICKED_GET_THE_FI_APP,
    CLICKED_GET_THE_FI_APP_IOS,
} from '../../events';

import { getEncodedPlayStoreURL } from '../../utils/getEncodedPlayStoreURL';
import { IOS_APP_STORE_URL, HOME_PAGE_VARIANT_ONE_LINK_URL } from '../../constants/AppConstant';
import { LOGOS_URL_MAP } from '../../constants/AssetConstants';

// eslint-disable-next-line no-var
declare var window: any;

const StickyFooter = styled.div<{isHomePageVariant: boolean}>`
    background-color: ${(props) => props.theme.color.WHITE};
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: ${(props) => (!props.isHomePageVariant ? 'space-between' : 'center')};
    padding: ${(props) => (!props.isHomePageVariant ? '8px 22px' : '10px 22px')};

    @media ${Device.tab} {
        padding: 16px 40px;
    }

    @media ${Device.desktop} {
        display: none;
    }
`;

const FixFooter = styled(StickyFooter)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3; // Increased z-index by 2 (from 1 to 3) to make stick section visible above graph elements
`;

const ShadowDiv = styled.div`
    height: 64px;

    @media ${Device.tab} {
        height: 80px;
    }

    @media ${Device.desktop} {
        display: none;
    }
`;

const DownloadCTAWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;

    @media ${Device.tab} {
        max-width: 610px;
    }
`;

const PlayStoreHolder = styled.div`
    width: 163px;
    height: 48px;
`;

const AppStoreHolder = styled.div`
    width: 145px;
    height: 48px;
    margin-left: 8px;
`;

const HomePageVariantButton = styled(Font)`
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
    border-radius: 15px;
    border: none;
    color: ${(props) => props.theme.color.WHITE};
    height: 44px;
    outline: none;
    padding: 14px 20px;
    text-transform: uppercase;

    @media ${Device.tab} {
        height: 48px;
    }
`;

export interface AppStickyFooterProps {
    trackingPayload?: any;
    homePageVariant?: any;
}

const AppStickyFooter = (props: AppStickyFooterProps) => {
    const location = useLocation();
    const playStoreUrl = getEncodedPlayStoreURL(location.search);

    const { trackingPayload, homePageVariant } = props;
    const isHomePageVariant = !!Object.keys(homePageVariant).length;

    const trackingData = {
        ...trackingPayload,
        cta_location: 'footer',
    };

    const onGetTheFiApp = (key) => () => {
        trackEvent(key, { ...trackingData, method: 'manual', entry_point: 'home_page' });

        trackGTMEvent(key);
    };

    return (
        <>
            {/* Shadow Footer */}
            <ShadowDiv />
            {/* Shadow Footer End */}
            <FixFooter isHomePageVariant={isHomePageVariant}>
                {
                    !isHomePageVariant ? (
                        <DownloadCTAWrapper>
                            <a
                                href={window.oneLinkAndroidUrl || playStoreUrl}
                                onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP)}
                                id='footer_playstore_link'
                                className='onelink-android-url'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <PlayStoreHolder>
                                    <Image
                                        icon={LOGOS_URL_MAP.PLAY_STORE_BLACK}
                                        alt='logo'
                                        loadingType='eager'
                                    />
                                </PlayStoreHolder>
                            </a>
                            <a
                                href={window.oneLinkIosUrl || IOS_APP_STORE_URL}
                                onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP_IOS)}
                                id='footer_appstore_link'
                                className='onelink-ios-url'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <AppStoreHolder>
                                    <Image
                                        icon={LOGOS_URL_MAP.APP_STORE_BLACK}
                                        alt='logo'
                                        loadingType='eager'
                                    />
                                </AppStoreHolder>
                            </a>
                        </DownloadCTAWrapper>
                    ) : (
                        // show their respective cta for home page variants
                        <a
                            href={window.oneLinkCommonUrl || HOME_PAGE_VARIANT_ONE_LINK_URL}
                            id='poster_link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <HomePageVariantButton font='button' tagType='button' type='button'>
                                {homePageVariant.ctaLabel}
                            </HomePageVariantButton>
                        </a>
                    )
                }
            </FixFooter>
        </>
    );
};

AppStickyFooter.defaultProps = {
    trackingPayload: {},
    homePageVariant: {},
};

export default AppStickyFooter;
