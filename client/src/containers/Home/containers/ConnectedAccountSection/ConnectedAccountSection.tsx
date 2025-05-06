import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Device } from '../../../../Themes/Device';
import { Image } from '../../../../components';
import { LOTTIES_URL_MAP, WEBP_URL, PNGS_URL } from '../../../../constants/AssetConstants';
import { callApi } from '../../../../Api';

import { Section, FeatureWrapper } from '../../components';

import { CONNECTED_ACCOUNT_SECTION_TITLE, CONNECTED_ACCOUNT_SECTION_DESCRIPTION } from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

const LottiePlayer = lazy(() => import('../../../../components/LottiePlayer'));

const AnimationPlaceholder = styled.div`
    width: 360px;
    margin: 0px -10px 40px;

    @media ${Device.tab} {
        margin: 15px auto 40px;
    }

    @media ${Device.desktop} {
        width: 822px;
        height: 420px;
        margin: 40px auto 0px;
    }
`;

const ImageHolder = styled.div`
    width: 100%;
`;

const ConnectedAccountSection = ({ variant, screenName, parentComponent }: any) => {
    const [stopLottie, setStopLottie] = useState(true);
    const [animationData, setAnimationData] = useState(null);

    const onVisible = (inView: boolean) => {
        if (inView) {
            if (!animationData) {
                callApi(LOTTIES_URL_MAP.CONNECTED_ACCOUNTS, 'GET', null, null, null, true)
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
                title={CONNECTED_ACCOUNT_SECTION_TITLE[variant]}
                descriptionLine1={CONNECTED_ACCOUNT_SECTION_DESCRIPTION[variant]}
                screenName={screenName}
                parentComponent={parentComponent}
            >
                <AnimationPlaceholder>
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
                                        icon={`${WEBP_URL}home-page_connected-accounts-section.webp`}
                                        fallBackImage={`${PNGS_URL}home-page_connected-accounts-section.png`}
                                        alt='Connected Accounts'
                                        data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Image, 'ConnectedAccounts')}
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

export default ConnectedAccountSection;
