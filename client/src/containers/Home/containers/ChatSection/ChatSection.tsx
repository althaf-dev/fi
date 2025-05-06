import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Section, FeatureWrapper } from '../../components';
import { Device, WINDOW_SIZE } from '../../../../Themes/Device';
import { Image } from '../../../../components';
import { useWindowDimensions } from '../../../../hooks';
import { LOTTIES_URL_MAP, WEBP_URL, PNGS_URL } from '../../../../constants/AssetConstants';
import { callApi } from '../../../../Api';

import { CHAT_SECTION_DESCRIPTION, CHAT_SECTION_TITLE } from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

const LottiePlayer = lazy(() => import('../../../../components/LottiePlayer'));

const AnimationPlaceholder = styled.div`
    margin: 40px -18px 40px;
    width: 360px;
    height: 505px;

    @media ${Device.tab} {
        margin: 50px auto 40px;
        width: 400px;
    }

    @media ${Device.desktop} {
        width: 600px;
        height: 760px;
        margin: auto;
        padding: 80px 0 60px;
    }
`;

const ImageHolder = styled.div`
    width: 100%;
`;

const ChatSection = ({ variant, screenName, parentComponent }: any) => {
    const { width } = useWindowDimensions();

    const [stopLottie, setStopLottie] = useState(true);
    const [animationMobileData, setAnimationMobileData] = useState(null);
    const [animationDesktopData, setAnimationDesktopData] = useState(null);

    const onVisible = (inView: boolean) => {
        if (inView) {
            if (width < WINDOW_SIZE.DESKTOP) {
                if (!animationMobileData) {
                    callApi(LOTTIES_URL_MAP.CHAT_MOBILE, 'GET', null, null, null, true)
                        .then((data) => {
                            setAnimationMobileData(data);
                            setStopLottie(false);
                        });
                } else {
                    setStopLottie(false);
                }
            } else if (!animationDesktopData) {
                callApi(LOTTIES_URL_MAP.CHAT_DESKTOP, 'GET', null, null, null, true)
                    .then((data) => {
                        setAnimationDesktopData(data);
                        setStopLottie(false);
                    });
            } else {
                setStopLottie(false);
            }
        } else {
            setStopLottie(true);
        }
    };

    return (
        <Section>
            <FeatureWrapper
                title={CHAT_SECTION_TITLE[variant]}
                descriptionLine1={CHAT_SECTION_DESCRIPTION[variant]}
            >
                <AnimationPlaceholder
                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'ChatAnimationContainer')}
                >
                    <InView onChange={(inView: boolean) => onVisible(inView)}>
                        {
                            (animationMobileData || animationDesktopData) ? (
                                <Suspense fallback={<div />}>
                                    <LottiePlayer
                                        animationData={
                                            width < WINDOW_SIZE.DESKTOP
                                                ? animationMobileData
                                                : animationDesktopData
                                        }
                                        stop={stopLottie}
                                        pause={false}
                                    />
                                </Suspense>
                            ) : (
                                <ImageHolder>
                                    <Image
                                        icon={
                                            width < WINDOW_SIZE.DESKTOP
                                                ? `${WEBP_URL}home-page_chat-section_mobile.webp`
                                                : `${WEBP_URL}home-page_chat-section.webp`
                                        }
                                        fallBackImage={
                                            width < WINDOW_SIZE.DESKTOP
                                                ? `${PNGS_URL}home-page_chat-section_mobile.png`
                                                : `${PNGS_URL}home-page_chat-section.png`
                                        }
                                        alt='chat'
                                        data-test-id={makeDataTestId(screenName, 'ChatAnimationContainer', ElementTypes.Image, 'ChatImage')}
                                    />
                                </ImageHolder>
                            )
                        }
                    </InView>
                </AnimationPlaceholder>
            </FeatureWrapper>
        </Section>
    );
};

export default ChatSection;
