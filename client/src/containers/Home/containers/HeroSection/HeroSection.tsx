import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import {
    Font,
    Image,
    Flex,
    AppPosterSectionV2,
} from '../../../../components';
import { Device } from '../../../../Themes/Device';
import {
    trackEvent,
    trackGTMEvent,
    CLICKED_GET_THE_FI_APP,
    CLICKED_GET_THE_FI_APP_IOS,
} from '../../../../events';

import { getEncodedPlayStoreURL } from '../../../../utils/getEncodedPlayStoreURL';
import { IOS_APP_STORE_URL } from '../../../../constants/AppConstant';
import { LOGOS_URL_MAP } from '../../../../constants/AssetConstants';

// eslint-disable-next-line no-var
declare var window: any;

const Content = styled.div`
    padding: 25px 20px 0;

    @media ${Device.tab} {
        padding: 92px 80px 0px;
        text-align: center;
    }

    @media ${Device.desktop} {
        padding: 0px;
        max-width: 650px;
        text-align: left;
    }
`;

const Title = styled(Font)`
    margin-bottom: 15px;
    text-align: center;

    @media ${Device.desktop} {
        font-size: 66px; // hack to accommodate long title
        text-align: left;
        margin-bottom: 32px;
    }
`;

const Description = styled(Font)`
    text-align: center;

    @media ${Device.tab} {
        max-width: 420px;
        margin: auto;
    }

    @media ${Device.desktop} {
        padding: 0;
        text-align: left;
        max-width: 644px;
        margin: 0px;
    }
`;

const ButtonWrapper = styled(Flex)`
    display: none;

    @media ${Device.desktop} {
        display: flex;
        margin: 64px 0 0px;
        align-items: center;
    }
`;

const ColoredSpan = styled.span`
    color: ${(props) => props.theme.color.WHITE};
    font-weight: 500;
`;

const PlayStoreHolder = styled.div`
    @media ${Device.desktop} {
        width: 175px;
        height: 52px;
    }
`;

const AppStoreHolder = styled.div`
    @media ${Device.desktop} {
        width: 156px;
        height: 52px;
        margin-left: 13px;
    }
`;

const HeroSection = (props: any) => {
    const location = useLocation();
    const playStoreUrl = getEncodedPlayStoreURL(location.search);

    const onGetTheFiApp = (key) => () => {
        const trackingData = {
            ...props.trackingPayload,
            cta_location: 'body',
            entry_point: 'home_page',
        };

        trackEvent(key, { ...trackingData, method: 'manual' });

        trackGTMEvent(key);
    };

    return (
        <AppPosterSectionV2>
            <Content>
                <Title font='h1VariantFive' tagType='h1' color='WHITE'>
                    Money management just got smarter
                </Title>

                <Description font='p3' tagType='h2' color='SILVER_2'>
                    Fi is a money management app for working professionals, loaded with a&nbsp;
                    <ColoredSpan>
                        zero balance savings account
                    </ColoredSpan>
                    &nbsp;and&nbsp;
                    <ColoredSpan>
                        commission-free mutual funds
                    </ColoredSpan>
                    . Connect your other bank accounts to Fi and see a combined balance and transaction history.
                </Description>

                <ButtonWrapper>
                    <a
                        href={window.oneLinkAndroidUrl || playStoreUrl}
                        onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP)}
                        id='poster_playstore_link'
                        className='onelink-android-url'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <PlayStoreHolder>
                            <Image
                                icon={LOGOS_URL_MAP.PLAY_STORE_WHITE}
                                alt='logo'
                                loadingType='eager'
                            />
                        </PlayStoreHolder>
                    </a>

                    <a
                        href={window.oneLinkIosUrl || IOS_APP_STORE_URL}
                        onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP_IOS)}
                        id='poster_appstore_link'
                        className='onelink-ios-url'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <AppStoreHolder>
                            <Image
                                icon={LOGOS_URL_MAP.APP_STORE_WHITE}
                                alt='logo'
                                loadingType='eager'
                            />
                        </AppStoreHolder>
                    </a>
                </ButtonWrapper>
            </Content>

        </AppPosterSectionV2>
    );
};

export default HeroSection;
