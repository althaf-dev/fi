import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Device } from '../../../Themes/Device';
import { Image } from '../../../components';

import dummyPhoneImage from '../../../assets/pngs/dummy-phone.png';
import { featurePageSectionObjResponse } from '../constants';
import ContentAccordion from '../ContentAccordion';

const Container = styled.div<{ firstSection: boolean, lastSection: boolean}>`
    margin-left: auto;
    margin-right: auto;
    margin-top: ${(props) => (props.firstSection ? '40px' : '72px')};
    margin-bottom: ${(props) => (props.lastSection ? '60px' : '0px')};
    max-width: 360px;

    @media ${Device.tab} {
        margin-top: ${(props) => (props.firstSection ? '80px' : '112px')};
        margin-bottom: ${(props) => (props.lastSection ? '100px' : '0px')};
        max-width: 610px;
    }
`;

const Wrapper = styled.div`
    text-align: center;
    padding: 0px 9px;

    @media ${Device.tab} {
        padding: 0px 75px;
    }
`;

const VideoSection = styled.video`
    width: 210px;
    height: 420px;

    @media ${Device.tab} {
        width: 330px;
        height: 660px;
    }
`;

const VideoContainer = styled.div`
    background-image: url(${dummyPhoneImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 13px 8px;
    width: 236px; // 210px(video width) + 26px (top/bottom padding)
    margin: 0px auto;

    @media ${Device.tab} {
        padding: 16px 8px;
        width: 362px; // 330px(video width) + 32px (top/bottom padding)
    }
`;

const ImageHolder = styled.div`
    width: 217px;
    height: 420px;

    @media ${Device.tab} {
        width: 345px;
        height: 660px;
        padding: 0px 10px;
    }
`;

interface MobileSectionProps {
    featurePageSectionObj: featurePageSectionObjResponse
    mp4NoFrameVideo?: any;
    webmNoFrameVideo?: any;
    firstSection?: boolean
    lastSection?: boolean
    posterImage: string;
}

const MobileSection = (props: MobileSectionProps) => {
    const {
        featurePageSectionObj, mp4NoFrameVideo, webmNoFrameVideo, firstSection, lastSection, posterImage,
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);

    const videoRef = useRef(null);

    const onVisible = (inView: boolean) => {
        if (inView) {
            videoRef && videoRef.current && videoRef.current.play();
        } else {
            videoRef && videoRef.current && videoRef.current.pause();
        }
    };

    return (
        <Container firstSection={firstSection} lastSection={lastSection}>
            <Wrapper>
                <ContentAccordion
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    featurePageSectionObj={featurePageSectionObj}
                >
                    <VideoContainer>
                        {webmNoFrameVideo || mp4NoFrameVideo
                            ? (
                                <InView onChange={(inView: boolean) => onVisible(inView)}>
                                    <VideoSection
                                        loop
                                        muted
                                        playsInline
                                        ref={videoRef}
                                        poster={posterImage}
                                    >
                                        {webmNoFrameVideo ? <source src={webmNoFrameVideo} type='video/webm' /> : null}
                                        {mp4NoFrameVideo ? <source src={mp4NoFrameVideo} type='video/mp4' /> : null}
                                    </VideoSection>
                                </InView>
                            )
                            : (
                                <ImageHolder>
                                    <Image icon={posterImage} alt='image' />
                                </ImageHolder>
                            )}
                    </VideoContainer>
                </ContentAccordion>
            </Wrapper>
        </Container>
    );
};

MobileSection.defaultProps = {
    firstSection: false,
    lastSection: false,
    mp4NoFrameVideo: '',
    webmNoFrameVideo: '',
};

export default MobileSection;
