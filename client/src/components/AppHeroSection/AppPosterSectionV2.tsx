/* eslint-disable camelcase */
/**
 * @file App Poster Section
 */
/* eslint-disable no-nested-ternary */
import React, { ReactNode, useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Device } from '../../Themes/Device';
import { PNGS_URL, VIDEOS_URL, WEBP_URL } from '../../constants/AssetConstants';

import { getBrowserName } from '../../device';

import { Image } from '../Abstract';

const HomePosterImg = `${WEBP_URL}home-page_poster.webp`;
const HomePosterImgFb = `${PNGS_URL}home-page_poster.png`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${Device.desktop} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 620px;
    }
`;

const HeaderSection = styled.div`
    margin-right: auto;
    margin-left: auto;
    height: 423px;

    @media ${Device.tab} {
        height: 688px;
    }

    @media ${Device.desktop} {
        margin: 0;
        height: calc(100vh - 150px);
        min-height: 550px;
        max-height: 930px; // 1080px - 150px
        position: relative;
        left: 3%;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    75% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const VideoContainer = styled.video`
    animation: ${fadeIn} 250ms linear forwards;

    margin: 0 auto;
    width: 360px;
    height: 418px;

    @media ${Device.tab} {
        width: 595px;
        height: 682px;
    }

    @media ${Device.desktop} {
        width: auto;
        height: calc(100vh - 150px);
        min-height: 550px;
        max-height: 930px; // 1080px - 150px
    }
`;

const PosterImageCommonStyle = styled.div`
    margin: 0 auto;
    width: 300px;
    height: 418px;

    @media ${Device.tab} {
        width: 485px;
        height: 682px;
    }

    @media ${Device.desktop} {
        width: auto;
        height: calc(100vh - 150px);
        min-height: 550px;
        max-height: 930px; // 1080px - 150px
        position: relative;
        left: 3%;
    }
`;

const ImageContainer = styled(PosterImageCommonStyle)`
    animation: ${fadeOut} 500ms linear forwards;
`;

const ImageHolder = styled(PosterImageCommonStyle)``;

interface AppPosterSectionProps {
    children?: ReactNode;
    posterImage?: {
        image_src?: string,
        fallback_image_src?: string,
    };
    // posterVideo?: {
    //     mp4_video_src?: string,
    //     webm_video_src?: string,
    // };
}

const AppPosterSectionV2 = (props: AppPosterSectionProps) => {
    const { children, posterImage } = props;
    const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = posterImage || {};
    // const { mp4_video_src: mp4VideoSrc, webm_video_src: webmVideoSrc } = posterVideo || {};

    const videoRef = useRef(null);
    const deviceBrowser = getBrowserName();

    const [isVideoLoaded, setVideoLoaded] = useState(false);

    const onVisible = (inView: boolean) => {
        if (inView) {
            videoRef && videoRef.current && videoRef.current.play();
        } else {
            videoRef && videoRef.current && videoRef.current.pause();
        }
    };

    setTimeout(() => {
        setVideoLoaded(true);
    }, 750);

    useEffect(() => {
        const homePosterImage = document.getElementById('home-poster-image');

        if (homePosterImage) {
            homePosterImage?.setAttribute('fetchpriority', 'high');
        }
    }, []);

    // TODO(Ankit): need to pass home page video as a props
    return (
        <HeaderSection>
            <Wrapper>
                {children}
                {imageSrc || fallbackImageSrc ? (
                    <ImageHolder>
                        <Image
                            icon={imageSrc}
                            fallBackImage={fallbackImageSrc}
                            alt='Fi Money'
                            loadingType='eager'
                        />
                    </ImageHolder>
                ) : (
                    <InView onChange={(inView: boolean) => onVisible(inView)}>
                        {
                            isVideoLoaded ? (
                                <VideoContainer
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                    ref={videoRef}
                                    poster={HomePosterImgFb}
                                >
                                    <source
                                        src={deviceBrowser === 'safari' ? `${VIDEOS_URL}home-page_poster.mp4` : `${VIDEOS_URL}home-page_poster.webm`}
                                        type={deviceBrowser === 'safari' ? 'video/mp4' : 'video/webm'}
                                    />
                                </VideoContainer>
                            ) : (
                                <ImageContainer>
                                    <Image
                                        icon={HomePosterImg}
                                        fallBackImage={HomePosterImgFb}
                                        alt='Fi Money'
                                        loadingType='eager'
                                        id='home-poster-image'
                                    />
                                </ImageContainer>
                            )
                        }
                    </InView>
                )}
            </Wrapper>
        </HeaderSection>
    );
};

AppPosterSectionV2.defaultProps = {
    children: null,
    posterImage: {
        image_src: '',
        fallback_image_src: '',
    },
    // posterVideo: {
    //     mp4_video_src: '',
    //     webm_video_src: '',
    // },
};

export default AppPosterSectionV2;
