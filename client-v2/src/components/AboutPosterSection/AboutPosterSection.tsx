import React, { useEffect, useState, Suspense, lazy } from 'react';
import { callApi } from '../../Api';
import { LOTTIES_URL_MAP } from '../../constants/AssetConstants';
import {
    PosterSection,
    ContentHolder,
    LogoHolder,
    Description,
    Title,
} from './styled';

const LottiePlayer = lazy(() => import('../LottiePlayer'));

const AboutPosterSection = () => {
    const [animationData, setAnimationData] = useState();

    useEffect(() => {
        callApi(LOTTIES_URL_MAP.EMOTICONS, 'GET', {}, null, null, true).then(
            (data) => {
                setAnimationData(data);
            }
        );
    }, []);

    return (
        <PosterSection>
            <ContentHolder>
                <LogoHolder>
                    {animationData ? (
                        <Suspense fallback={<div />}>
                            <LottiePlayer
                                animationData={animationData}
                                stop={false}
                                pause={false}
                                loop
                            />
                        </Suspense>
                    ) : null}
                </LogoHolder>

                <Title font='h1' tagType='h1' color='MINE_SHAFT'>
                    We are makers, thinkers, explorers & dreamers
                </Title>

                <Description font='p' tagType='h2' color='TUNDORA_2'>
                    Our team distils decades of tech & banking wisdom – gained
                    from Google, Netflix, PayPal, and others – to create one
                    innovative product.
                </Description>
            </ContentHolder>
        </PosterSection>
    );
};

export default AboutPosterSection;
