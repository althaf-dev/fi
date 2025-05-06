import React, { useEffect, useState, Suspense, lazy } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';
import { callApi } from '../../../Api';
import { LOTTIES_URL_MAP } from '../../../constants/AssetConstants';

const LottiePlayer = lazy(() => import('../../components/LottiePlayer'));

const PosterSection = styled.div`
    text-align: center;
    padding: 60px 20px;

    @media ${Device.tab} {
        padding-bottom: 80px;
    }

    @media ${Device.desktop} {
        padding: 0px 0px 120px;
        margin-top: -25px;
    }
`;

const ContentHolder = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 820px;
    }
`;

const LogoHolder = styled.div`
    height: 90px;
    width: 90px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    // ref - https://discourse.webflow.com/t/overflow-hidden-round-corners-not-working-on-safari/67805/4
    -webkit-transform: translate3d(0, 0, 0);

    @media ${Device.tab} {
        height: 120px;
        width: 120px;
    }

    @media ${Device.desktop} {
        height: 180px;
        width: 180px;
    }
`;

const Title = styled(Font)`
    margin-top: 30px;
    margin-bottom: 15px;

    @media ${Device.tab} {
        margin-top: 40px;
    }

    @media ${Device.desktop} {
        margin-top: 60px;
        margin-bottom: 30px;
    }
`;

const Description = styled(Font)`
    @media ${Device.tab} {
        margin: auto;
        max-width: 484px;
    }

    @media ${Device.desktop} {
        max-width: 820px;
    }
`;

const AboutPosterSection = () => {
    const [animationData, setAnimationData] = useState();

    useEffect(() => {
        callApi(LOTTIES_URL_MAP.EMOTICONS, 'GET', null, null, null, true).then(setAnimationData);
    }, []);

    return (
        <PosterSection>
            <ContentHolder>
                <LogoHolder>
                    {
                        animationData ? (
                            <Suspense fallback={<div />}>
                                <LottiePlayer
                                    animationData={animationData}
                                    stop={false}
                                    pause={false}
                                    loop
                                />
                            </Suspense>
                        ) : null
                    }
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
