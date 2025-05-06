import React from 'react';
import styled from 'styled-components';

import dummyPhoneImage from '../../../assets/pngs/dummy-phone.png';
import { Image } from '../../../components';

import { VIDEO_SECTION, ScrollingAnimationObject } from '../constants';

const StickyContainer = styled.div<{ height: number }>`
    position: sticky;
    top: 155px;
    background-image: url(${dummyPhoneImage});
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 16px 8px;
    margin-right: 223px;
    height: ${(props) => (props.height <= 1024 ? '600px' : '744px')}; // 568px and 712px(video height) + 16px (top/bottom padding)
`;

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const VideoSection = styled.video<{ scrollingAnimation: ScrollingAnimationObject, height: number, showVideo: boolean}>`
    width: ${(props) => (props.height <= 1024 ? '300px' : '375px')};
    height: ${(props) => (props.height <= 1024 ? '568px' : '712px')};
    margin-bottom: 20px;
    transition: transform .6s ease-out, opacity .6s ease-out;
    opacity: ${(props) => (props.showVideo ? 1 : 0)};
    transform: ${(props) => `translateY(-${props.scrollingAnimation.transactionValue}px)`};
`;

const ImageHolder = styled.div<{ scrollingAnimation: ScrollingAnimationObject, height: number, showVideo: boolean}>`
    width: ${(props) => (props.height <= 1024 ? '300px' : '375px')};
    height: ${(props) => (props.height <= 1024 ? '568px' : '712px')};
    margin-bottom: 20px;
    transition: transform .6s ease-out, opacity .6s ease-out;
    opacity: ${(props) => (props.showVideo ? 1 : 0)};
    transform: ${(props) => `translateY(-${props.scrollingAnimation.transactionValue}px)`};
    padding: 0px 8px;
`;

interface DesktopVideoSectionProps {
    videoRef: any;
    scrollingAnimation: ScrollingAnimationObject
}

const DesktopVideoSection = (props: DesktopVideoSectionProps) => {
    const { videoRef, scrollingAnimation } = props;

    return (
        <StickyContainer height={window.innerHeight}>
            <VideoContainer>
                {VIDEO_SECTION.map((value, index) => {
                    if (value.webmNoFrameVideo || value.mp4NoFrameVideo) {
                        return (
                            <VideoSection
                                loop
                                muted
                                playsInline
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                ref={videoRef[index]}
                                height={window.innerHeight}
                                scrollingAnimation={scrollingAnimation}
                                poster={value.posterImage}
                                showVideo={scrollingAnimation.activeIndex === index}
                            >
                                {value.webmNoFrameVideo ? <source src={value.webmNoFrameVideo} type='video/webm' /> : null}
                                {value.mp4NoFrameVideo ? <source src={value.mp4NoFrameVideo} type='video/mp4' /> : null}
                            </VideoSection>
                        );
                    }
                    return (
                        <ImageHolder
                            height={window.innerHeight}
                            scrollingAnimation={scrollingAnimation}
                            showVideo={scrollingAnimation.activeIndex === index}
                        >
                            <Image icon={value.posterImage} alt='image' />
                        </ImageHolder>
                    );
                })}
            </VideoContainer>
        </StickyContainer>
    );
};

export default DesktopVideoSection;
