import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Device } from '../../../../Themes/Device';
import { Image } from '../../../../components';
import { LOTTIES_URL_MAP, WEBP_URL, PNGS_URL } from '../../../../constants/AssetConstants';
import { callApi } from '../../../../Api';

import { Section, FeatureWrapper } from '../../components';

import { FIT_RULES_SECTION_DESCRIPTION, FIT_RULES_SECTION_TITLE } from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

const LottiePlayer = lazy(() => import('../../../../components/LottiePlayer'));

const ImageHolder = styled.div`
    width: 100%;
`;

const AnimationPlaceholder = styled.div`
    width: 360px;
    height: 194px;
    margin: 0px -10px 40px;

    @media ${Device.tab} {
        margin: 15px auto 40px;
    }

    @media ${Device.desktop} {
        width: 798.5px;
        height: 430px;
        margin: 40px auto 0px;
    }
`;

const FitRulesSection = ({ variant, screenName, parentComponent }: any) => {
    const [stopLottie, setStopLottie] = useState(true);
    const [animationData, setAnimationData] = useState(null);

    const onVisible = (inView: boolean) => {
        if (inView) {
            if (!animationData) {
                callApi(LOTTIES_URL_MAP.FIT_RULES, 'GET', null, null, null, true)
                    .then((data) => {
                        setAnimationData(data);
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
                title={FIT_RULES_SECTION_TITLE[variant]}
                descriptionLine1={FIT_RULES_SECTION_DESCRIPTION[variant]}
            >
                <AnimationPlaceholder
                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'FitAnimationContainer')}
                >
                    <InView onChange={(inView: boolean) => onVisible(inView)}>
                        {
                            animationData ? (
                                <Suspense fallback={<div />}>
                                    <LottiePlayer
                                        animationData={animationData}
                                        stop={stopLottie}
                                        pause={false}
                                    />
                                </Suspense>
                            ) : (
                                <ImageHolder>
                                    <Image
                                        icon={`${WEBP_URL}home-page_fit-rules-section.webp`}
                                        fallBackImage={`${PNGS_URL}home-page_fit-rules-section.png`}
                                        alt='Fit Rules'
                                        data-test-id={makeDataTestId(screenName, 'FitAnimationContainer', ElementTypes.Image, 'HomePageAssistantSection')}
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

export default FitRulesSection;
