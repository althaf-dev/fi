/**
 @file: Poster Video Section
*/

import React, { useRef } from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

import { getBrowserName } from '../../device';
import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const VideoContainer = styled.video`
    ${MIXINS.FlexMixin({ justify: 'normal', align: 'normal' })};
    margin: 0px auto;
    height: 418px;

    @media ${Device.tab} {
        height: 682px;
    }

    @media ${Device.desktop} {
        width: auto;
        height: calc(100vh - 150px);
        min-height: 550px;
        max-height: 930px;
    }
`;

interface IPosterVideoSectionProps {
    mp4VideoUrl: string;
    webmVideoUrl: string;
}

/*
* Usage:
*  <PosterVideoSection mp4VideoUrl={mp4VideoUrl} webmVideoUrl={webmVideoUrl} />
*
* Props:
*  - mp4VideoUrl: mp4 image url of the video
*  - webmVideoUrl: webm image url of the video
*/

const PosterVideoSection = (props: IPosterVideoSectionProps) => {
    const { webmVideoUrl, mp4VideoUrl } = props;

    const videoRef = useRef(null);
    const deviceBrowser = getBrowserName();

    const onVisible = (inView: boolean) => {
        if (inView) {
            videoRef && videoRef.current && videoRef.current.play();
        } else {
            videoRef && videoRef.current && videoRef.current.pause();
        }
    };

    return (
        <InView onChange={onVisible}>
            <VideoContainer loop muted playsInline ref={videoRef}>
                <source
                    src={deviceBrowser === 'safari' ? mp4VideoUrl : webmVideoUrl}
                    type={deviceBrowser === 'safari' ? 'video/mp4' : 'video/webm'}
                />
                <source src={mp4VideoUrl} type='video/mp4' />
            </VideoContainer>
        </InView>
    );
};

export default React.memo(PosterVideoSection);
