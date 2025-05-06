/**
* @file Housing Page Video Section
*/

import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { ICONS_URL, ASSETS_URL, VIDEOS_URL } from '../../../constants/AssetConstants';
import { Device } from '../../../Themes/Device';

import { Image } from '../../../components';
import { getBrowserName } from '../../../device';

const HousingProjectMp4Video = `${VIDEOS_URL}housing-project.mp4`;
const posterImage = `${ASSETS_URL}/housing-project/poster-image.png`;
const playPauseIcon = `${ICONS_URL}play-icon.png`;

const VideoContainer = styled.video`
    width: 100%;
    cursor: pointer;
`;

const Container = styled.div`
    border-radius: 20px;
    width: 304px;
    margin: -120px auto 33px;
    position: relative;

    @media ${Device.tab} {
        width: 590px;
        margin: -100px auto 33px;
    }

    @media ${Device.desktop} {
        border-radius: 40px;
        width: 997px;
        margin: -353px auto 45px;
    }
`;

const PlayButtonContainer = styled.div`
    cursor: pointer;
    width: 36px;
    height: 36px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    @media ${Device.desktop} {
        width: 92px;
        height: 92px;
    }
`;

const VideoSection = () => {
    const deviceBrowser = getBrowserName();
    const [playVideo, setPlayVideo] = useState(false);

    const videoRef = useRef(null);

    const onVideoPlay = () => {
        if (playVideo) {
            setPlayVideo(false);
        } else {
            setPlayVideo(true);
        }
    };

    const onVisible = (inView: boolean) => {
        if (!inView) {
            setPlayVideo(false);
        }
    };

    useEffect(() => {
        if (playVideo) {
            videoRef && videoRef.current && videoRef.current.play();
        } else {
            videoRef && videoRef.current && videoRef.current.pause();
        }
    }, [playVideo]);

    return (
        <Container>
            <InView onChange={(inView: boolean) => onVisible(inView)}>
                <VideoContainer
                    loop
                    playsInline
                    ref={videoRef}
                    poster={posterImage}
                    onClick={() => onVideoPlay()}
                >
                    <source
                        src={deviceBrowser === 'safari' ? HousingProjectMp4Video : HousingProjectMp4Video}
                        type={deviceBrowser === 'safari' ? 'video/mp4' : 'video/webm'}
                    />
                    <source src={HousingProjectMp4Video} type='video/mp4' />
                </VideoContainer>
            </InView>
            {!playVideo
            && (
                <PlayButtonContainer onClick={onVideoPlay}>
                    <Image
                        icon={playPauseIcon}
                        fallBackImage={playPauseIcon}
                        alt='icon'
                        loadingType='lazy'
                    />
                </PlayButtonContainer>
            )}
        </Container>
    );
};

export default memo(VideoSection);
