import React from 'react';
import styled from 'styled-components';
// import { InView } from 'react-intersection-observer';

import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
/*
import { VIDEOS_URL, PNGS_URL } from '../../../constants/AssetConstants';
import { getBrowserName } from '../../../device';
 */
import { ImageHolderV2 } from '../../../components/FeaturesPage/styled';
import { POSTER_SECTION_DATA } from '../constant';

/*
const SalaryAccountMp4Video = `${VIDEOS_URL}salary-account-page_poster.mp4`;
const SalaryAccountWebmVideo = `${VIDEOS_URL}salary-account-page_poster.webm`;
const DummyPhoneImage = `${PNGS_URL}dummy-phone.png`;
 */

// Remove explicit height since the poster image has a fixed height
const Section = styled.div`
    text-align: center;
    padding-top: 40px;
    overflow: hidden;
    /* height: 570px; */

    @media ${Device.tab} {
        /* height: 690px; */
    }

    @media ${Device.desktop} {
        padding-top: 60px;
        /* height: 900px; */
    }
`;

const ContentHolder = styled.div`
    margin: auto;
    max-width: 100%;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 820px;
    }
`;

const Title = styled(Font)`
    margin: 0px auto 15px;

    @media ${Device.tab} {
        max-width: 529px;
    }

    @media ${Device.desktop} {
        max-width: 728px;
        margin: 0px auto 30px;
    }
`;

const Description = styled(Font)`
    margin: 0px auto 24px;

    @media ${Device.tab} {
        margin: 0px auto 48px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 60px;
    }
`;

/*
const VideoImageContainer = styled.div`
    background-image: url(${DummyPhoneImage});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 229px;
    padding: 13px;
    margin: 0px auto;

    @media ${Device.tab} {
        padding: 18px;
        width: 324px;
    }

    @media ${Device.desktop} {
        padding: 26px;
        width: 422px;
    }
`;

const VideoContainer = styled.video`
    width: 200px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 284px;
    }

    @media ${Device.desktop} {
        width: 370px;
    }
`;
 */

// eslint-disable-next-line arrow-body-style
const PosterSection = () => {
    /*
    const videoRef = useRef(null);
    const deviceBrowser = getBrowserName();

    const onVisible = (inView: boolean) => {
        if (inView) {
            videoRef && videoRef.current && videoRef.current.play();
        } else {
            videoRef && videoRef.current && videoRef.current.pause();
        }
    };
    */

    return (
        <Section>
            <ContentHolder>
                <Title font='h1' tagType='h1' color='WHITE'>
                    The Salary Account packed with rewards
                </Title>

                <Description font='p' tagType='h2' color='SILVER_2'>
                    Open a salary account that makes managing and growing your money hassle-free. Your HR will love it too! Check it out ⬇️
                </Description>

                {/*
                Not used currently since we are just showing a static image
                Keep this code since in the future we may need to render a video again

                <InView onChange={(inView: boolean) => onVisible(inView)}>
                    <VideoImageContainer>
                        <VideoContainer
                            loop
                            muted
                            playsInline
                            ref={videoRef}
                        >
                            <source
                                src={deviceBrowser === 'safari' ? SalaryAccountMp4Video : SalaryAccountWebmVideo}
                                type={deviceBrowser === 'safari' ? 'video/mp4' : 'video/webm'}
                            />
                            <source src={SalaryAccountMp4Video} type='video/mp4' />
                        </VideoContainer>
                    </VideoImageContainer>
                </InView>
                */}

                <ImageHolderV2>
                    <Image
                        icon={POSTER_SECTION_DATA.IMAGES.WEBP}
                        fallBackImage={POSTER_SECTION_DATA.IMAGES.PNG}
                        objectType='contain'
                        alt='card-image'
                        loadingType='eager'
                        id='salary-poster-image'
                    />
                </ImageHolderV2>
            </ContentHolder>
        </Section>
    );
};

export default PosterSection;
