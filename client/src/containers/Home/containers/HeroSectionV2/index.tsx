/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';
import { Components } from '../../../../DataTestIds/Home';

// eslint-disable-next-line no-var
declare var window: any;

const Wrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;

    @media ${Device.tab} {
        margin-bottom: 0;
    }
`;

const Container = styled.div`
    width: 360px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media ${Device.tab} {
        width: 610px;
    }

    @media ${Device.desktop} {
        width: 1270px;
        flex-direction: row;
        justify-content: center;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 360px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 650px;
    }
`;

const Content = styled.div`
    padding: 25px 20px 0;
    height: max-content;

    @media ${Device.tab} {
        text-align: center;
    }

    @media ${Device.desktop} {
        padding: 0px;
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

const HeroSectionV2 = (props: any) => {
    const location = useLocation();
    const playStoreUrl = getEncodedPlayStoreURL(location.search);
    const { screenName, parentComponent } = props;

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
        <Wrapper data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, Components.HeroSectionV2Wrapper)}>
            <Container data-test-id={makeDataTestId(screenName, Components.HeroSectionV2Wrapper, ElementTypes.Container, Components.HeroSectionV2Container)}>
                <ContentContainer data-test-id={makeDataTestId(screenName, Components.HeroSectionV2Container, ElementTypes.Container, Components.HeroSectionV2ContentContainer)}>
                    <Content data-test-id={makeDataTestId(screenName, Components.HeroSectionV2ContentContainer, ElementTypes.Container, Components.HeroSectionV2Content)}>
                        <Title font='h1VariantFive' tagType='h1' color='WHITE' data-test-id={makeDataTestId(screenName, Components.HeroSectionV2Content, ElementTypes.H1Text, 'ForAllThingsMoney')}>
                            For all things money
                        </Title>

                        <Description font='p3' tagType='h2' color='SILVER_2' data-test-id={makeDataTestId(screenName, Components.HeroSectionV2Content, ElementTypes.H2Text, 'WhetherItsPlanning')}>
                            Whether it&apos;s planning your savings with a new-age savings account, investing in mutual funds and high-interest products or tracking your expenses - do it all on Fi.
                        </Description>

                        <ButtonWrapper data-test-id={makeDataTestId(screenName, Components.HeroSectionV2Content, ElementTypes.Container, Components.ButtonWrapper)}>
                            <a
                                href={window.oneLinkAndroidUrl || playStoreUrl}
                                onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP)}
                                id='poster_playstore_link'
                                className='onelink-android-url'
                                target='_blank'
                                rel='noreferrer'
                                data-test-id={makeDataTestId(screenName, Components.ButtonWrapper, ElementTypes.Link, 'Playstore')}
                            >
                                <PlayStoreHolder>
                                    <Image
                                        icon={LOGOS_URL_MAP.PLAY_STORE_WHITE}
                                        alt='logo'
                                        loadingType='eager'
                                        dataTestId={makeDataTestId(screenName, Components.ButtonWrapper, ElementTypes.Image, 'Playstore')}
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
                                data-test-id={makeDataTestId(screenName, Components.ButtonWrapper, ElementTypes.Link, 'IOSAPPStore')}
                            >
                                <AppStoreHolder>
                                    <Image
                                        icon={LOGOS_URL_MAP.APP_STORE_WHITE}
                                        alt='logo'
                                        loadingType='eager'
                                        dataTestId={makeDataTestId(screenName, Components.ButtonWrapper, ElementTypes.Image, 'IOSAPPStore')}
                                    />
                                </AppStoreHolder>
                            </a>
                        </ButtonWrapper>
                    </Content>
                </ContentContainer>
                <AppPosterSectionV2 />
            </Container>
        </Wrapper>
    );
};

export default HeroSectionV2;
