import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Section, FeatureWrapper } from '../../components';
import { Device } from '../../../../Themes/Device';
import { Image } from '../../../../components';
import { VIDEOS_URL, WEBP_URL, PNGS_URL } from '../../../../constants/AssetConstants';

import { REWARD_SECTION_TITLE, REWARD_SECTION_DESCRIPTION } from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

const AnimationPlaceholder = styled.div`
    position: relative;
    /* width: 300px; */
    height: 330px;
    padding: 32px 20px 0px;

    @media ${Device.tab} {
        padding-top: 25px;
    }

    @media ${Device.desktop} {
        /* width: 460px; */
        height: 720px;
    }
`;

const VideoPlayer = styled.video`
    width: 320px;
    margin-top: 40px;

    @media ${Device.tab} {
        width: 570px;
        margin-top: 40px;
    }

    @media ${Device.desktop} {
        width: 800px;
        margin-top: 72px;
    }
`;

const ImageHolder = styled.div`
    /* width: 800px; */

    @media ${Device.desktop} {
        width: 800px;
        margin: 66px auto 0;
    }
`;

const RewardSection = ({ variant, screenName, parentComponent }: any) => {
    const videoRef = useRef(null);

    const [isVideoLoaded, setVideoLoaded] = useState(false);

    const onVisible = (inView: boolean) => {
        if (inView) {
            if (!isVideoLoaded) {
                setVideoLoaded(true);

                setTimeout(() => {
                    videoRef?.current?.play();
                }, 500);
            } else {
                videoRef?.current?.play();
            }
        } else {
            videoRef?.current?.pause();
        }
    };

    return (
        <Section>
            <FeatureWrapper
                title={REWARD_SECTION_TITLE[variant]}
                descriptionLine1={REWARD_SECTION_DESCRIPTION[variant]}
            >
                <AnimationPlaceholder
                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'RewardsAnimationContainer')}
                >
                    <InView onChange={(inView: boolean) => onVisible(inView)}>
                        {
                            isVideoLoaded ? (
                                <VideoPlayer
                                    ref={videoRef}
                                    loop
                                    muted
                                    playsInline
                                    poster={`${PNGS_URL}home-page_rewards-section.png`}
                                    data-test-id={makeDataTestId(screenName, 'RewardsAnimationContainer', ElementTypes.Video, 'FeatureVideo')}
                                >
                                    <source src={`${VIDEOS_URL}home-page_rewards-section.mp4`} />
                                </VideoPlayer>
                            ) : (
                                <ImageHolder>
                                    <Image
                                        icon={`${WEBP_URL}home-page_rewards-section.webp`}
                                        fallBackImage={`${PNGS_URL}home-page_rewards-section.png`}
                                        alt='rewards'
                                        data-test-id={makeDataTestId(screenName, 'RewardsAnimationContainer', ElementTypes.Image, 'FeatureImage')}
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

export default RewardSection;
