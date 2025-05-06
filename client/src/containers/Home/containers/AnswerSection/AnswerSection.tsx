import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Device, WINDOW_SIZE } from '../../../../Themes/Device';
import { Image } from '../../../../components';
import { useWindowDimensions } from '../../../../hooks';
import { LOTTIES_URL_MAP, WEBP_URL, PNGS_URL } from '../../../../constants/AssetConstants';
import { callApi } from '../../../../Api';

import { Section, FeatureWrapper } from '../../components';
import { ANSWER_SECTION_DESCRIPTION, ANSWER_SECTION_TITLE } from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

const LottiePlayer = lazy(() => import('../../../../components/LottiePlayer'));

const AnimationPlaceholder = styled.div`
    width: 360px;
    height: 350px;
    margin: 0px -10px 40px;

    @media ${Device.tab} {
        margin: 15px auto 40px;
    }

    @media ${Device.desktop} {
        width: 798.5px;
        height: 440px;
        margin: 40px auto 0px;
    }
`;

const ImageHolder = styled.div`
    width: 320px;
    margin: 0 auto;
    padding-top: 28px;

    @media ${Device.desktop} {
        width: 640px;
    }
`;

const AnswerSection = (props: any) => {
    const { width } = useWindowDimensions();

    const [stopLottie, setStopLottie] = useState(true);
    const [animationMobileData, setAnimationMobileData] = useState(null);
    const [animationDesktopData, setAnimationDesktopData] = useState(null);

    const {
        nextSection, variant, screenName, parentComponent,
    } = props;

    const onVisible = (inView: boolean) => {
        if (inView) {
            if (width < WINDOW_SIZE.DESKTOP) {
                if (!animationMobileData) {
                    callApi(LOTTIES_URL_MAP.ASK_FI_MOBILE, 'GET', null, null, null, true)
                        .then((data) => {
                            setAnimationMobileData(data);
                            setStopLottie(false);
                        });
                } else {
                    setStopLottie(false);
                }
            } else if (!animationDesktopData) {
                callApi(LOTTIES_URL_MAP.ASK_FI_DESKTOP, 'GET', null, null, null, true)
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
        <div ref={nextSection}>
            <Section>
                <FeatureWrapper
                    title={ANSWER_SECTION_TITLE[variant]}
                    descriptionLine1={ANSWER_SECTION_DESCRIPTION[variant]}
                    screenName={screenName}
                    parentComponent={parentComponent}
                >
                    <AnimationPlaceholder
                        data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'AnimationContainer')}
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
                                                    ? `${WEBP_URL}home-page_assistant-section_mobile.webp`
                                                    : `${WEBP_URL}home-page_assistant-section.webp`
                                            }
                                            fallBackImage={
                                                width < WINDOW_SIZE.DESKTOP
                                                    ? `${PNGS_URL}home-page_assistant-section_mobile.png`
                                                    : `${PNGS_URL}home-page_assistant-section.png`
                                            }
                                            alt='answers'
                                            data-test-id={makeDataTestId(screenName, 'AnimationContainer', ElementTypes.Image, 'HomePageAssistantSection')}
                                        />
                                    </ImageHolder>
                                )
                            }
                        </InView>
                    </AnimationPlaceholder>
                </FeatureWrapper>
            </Section>
        </div>
    );
};

export default AnswerSection;
