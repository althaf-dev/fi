/* eslint-disable react/no-danger */
/**
 * @file Features Page Poster Section
 */

import React, {
    useRef, useState, lazy, Suspense, useEffect,
} from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { Device, WINDOW_SIZE } from '../../../Themes/Device';

import { useWindowDimensions, useIsSSR } from '../../../hooks';
import { getBrowserName } from '../../../device';
import { callApi } from '../../../Api';
import { htmlSanitization } from '../../../utils';

import { Font, Image, PrimaryButton } from '../../../Abstract';

import MIXINS from '../../../Themes/mixins';

const LottiePlayer = lazy(() => import('../../../components/LottiePlayer'));

// PLease dont remove height from image as it is required for removing Cummulative Layout Shift
const ImageHolderV2 = styled.div`
    height: 268px;
    width: auto;
    margin: 0 auto;

    @media ${Device.tab} {
        height: 350px;
    }

    @media ${Device.desktop} {
        height: 525px;
    }
`;

const Section = styled.div`
    text-align: center;
    padding-top: 40px;
    overflow: hidden;
    width: 320px;
    margin: auto;
    height: auto;
    position: relative;

    @media ${Device.tab} {
        width: 529px;
    }

    @media ${Device.desktop} {
        padding-top: 60px;
        width: 750px;
    }
`;

const LogoWrapper = styled.div<{ v2?: boolean }>`
    ${({ v2 }) => v2 && `
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        margin-bottom: 10px;

        @media ${Device.tab} {
            margin: 10px auto;    
        }

        @media ${Device.desktop} {
            margin: 0 0 25px 0;
        })
    `}
`;

const SectionV2 = styled.div`
    width: 360px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 40px;

    @media ${Device.tab} {
        width: 610px;
    }

    @media ${Device.desktop} {
        width: 1290px;
        flex-direction: row;
        justify-content: center;
        padding: 60px 70px 0px;
    }
`;

const LeftContainer = styled.div<{ v2?: boolean }>`
    display: ${(props) => (props.v2 ? 'flex' : 'block')};
    flex-direction: column;
    justify-content: center;

    @media ${Device.desktop} {
        max-width: ${(props) => (props.v2 ? '554px' : 'auto')};
    }
`;

const Tag = styled(Font)<{ v2?: boolean }>`
    background: ${(props) => props.theme.color.MINE_SHAFT};
    border-radius: 20px;
    padding: 4px 16px;
    width: max-content;
    margin: 0px auto 12px;

    @media ${Device.tab} {
        padding: 8px 16px;
        width: max-content;
        margin: 0px auto 24px;
    }

    @media ${Device.desktop} {
        width: max-content;
        margin: ${(props) => (props.v2 ? '0px 0px 30px' : '0px auto 30px')}
    }
`;

const Title = styled(Font)<{ v2?: boolean }>`
    margin: 0px auto 12px;
    text-align: center;

    @media ${Device.tab} {
        margin: 0px auto 4px;
    }

    @media ${Device.desktop} {
        text-align: ${(props) => (props.v2 ? 'start' : 'center')};
        margin: ${(props) => (props.v2 ? '0px 0px 30px' : '0px auto 30px')}
    }
`;

const Description = styled(Font)<{ subDescription?: string, v2?: boolean }>`
    margin: 0px auto 12px;
    text-align: center;

    @media ${Device.tab} {
        margin: 0px auto ${(props) => (props.subDescription ? '20px' : '36px')};
    }

    @media ${Device.desktop} {
        text-align: ${(props) => (props.v2 ? 'start' : 'center')};
        margin: 0px auto ${(props) => (props.subDescription ? '28px' : '30px')};
    }
`;

const SubDescription = styled(Font)`
    margin: 0px auto 12px;

    @media ${Device.tab} {
        margin: 0px auto 20px;
    }


    @media ${Device.desktop} {
        margin: 0px auto 28px;
    }
`;

const SubText = styled.div<{ v2?: boolean }>`
    display: flex;
    text-align: center;
    margin: 0px auto 3px;
    justify-content: ${(props) => (props.v2 ? 'start' : 'center')};
    align-items: center;
    flex-wrap: wrap;

    @media ${Device.tab} {
        margin: ${(props) => (props.v2 ? '0px 0px 4px' : '0px auto 12px')};
    }

    @media ${Device.desktop} {
        justify-content: ${(props) => (props.v2 ? 'start' : 'center')};
        margin: ${(props) => (props.v2 ? '0px 0px 8px' : '0px auto 15')};
    }
`;

const VideoImageContainer = styled.div`
    background-repeat: no-repeat;
    background-size: 100%;
    width: 230px;
    height: 320px;
    padding: 0px 13px;
    margin: 0px auto;
    overflow: hidden;

    @media ${Device.tab} {
        padding: 0px 18px;
        width: 324px;
        height: 454px;
    }

    @media ${Device.desktop} {
        padding: 0px 26px;
        width: 422px;   
        height: 582px;
    }
`;

const VideoContainer = styled.video`
    width: 100%;
    margin: 0px auto;
`;

const LogoHolder = styled.div`
    width: 40px;
    height: 100%;
    margin-right: 7px;

    @media ${Device.tab} {
        width: 89px;
    }

    @media ${Device.desktop} {
        width: 148px;
    }
`;

const BenefitsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 32px;
    max-width: 360px;
    margin: 0 auto;

    @media ${Device.desktop} {
        gap: 20px;
        max-width: 100%;
        padding-bottom: 0;
        margin: 0 0 27px 0;
    }
`;

const LottiePlaceHolder = styled.div`
    width: 230px;
    margin: 0px auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: auto;

    @media ${Device.tab} {
        width: 260px;
    }

    @media ${Device.desktop} {
        width: 410px;
    }
`;

const AnimationContainer = styled.div`
    height: 312px;
    margin-top: -15px;

    @media ${Device.tab} {
        height: 452px;
        margin-top: -25px;
    }

    @media ${Device.desktop} {
        height: 638px;
        margin-top: -30px;
    }
`;

const AnimationPlaceholder = styled.div`
    width: 275px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 400px;
    }

    @media ${Device.desktop} {
        width: 565px;
    }
`;

const ButtonHolder = styled.div`
    width: 272px;
    margin: 0px auto 30px;

    @media ${Device.desktop} {
        width: 324px;
        margin: 0px;
    }
`;

const Container = styled(SubText)<{ v2?: boolean }>`
  ${({ v2 }) => (v2
        ? `
        margin-bottom: 0;

        @media ${Device.tab} {
          margin-bottom: 0;
        }

        @media ${Device.desktop} {
          margin-bottom: 0;
        }
      `
        : `
        margin-bottom: 10px;

        @media ${Device.tab} {
          margin-bottom: 20px;
        }

        @media ${Device.desktop} {
          margin-bottom: 25px;
        }
      `)}
`;

const Icon = styled.img`
    height: 39px;
    width: 39px;

    @media ${Device.tab} {
        height: 56px;
        width: 56px;
    }

    @media ${Device.desktop} {
        height: 76px;
        width: 76px;
    }
`;

const Label = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '12px',
        lineHeight: '16px',
    })};


    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '18px',
        lineHeight: '24px',
    })};
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '32px',
    })};
    }
`;

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    @media ${Device.desktop} {
        gap: 34px;
    }
`;

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ImageUSStock = styled.img`
    width: 250px;
    margin: 0 auto;

    @media ${Device.tab} {
        width: 400px;
    }

    @media ${Device.desktop} {
        width: 500px;
    }

`;

interface PosterSectionProps {
    title: string,
    description: string,
    tag: string,
    multiLogo:string,
    subText: string,
    subLogo: any;
    posterImage: any;
    posterVideo: any;
    lottieData?: any;
    subDescription?: string;
    v2?: boolean;
    buttonText?: string;
    buttonUrl?: string;
    multiLogoTwo: string;
    multiLogoThird: string;
    multiLogoFourth: string;
    benefitsData?: {
        id?: number;
        title?: string;
        icon?: string;
    }[];
}

const PosterSection = (props: PosterSectionProps) => {
    const deviceBrowser = getBrowserName();
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    const [stopLottie, setStopLottie] = useState(true);
    const [animationData, setAnimationData] = useState(null);

    const videoRef = useRef(null);

    const {
        title, description, subText, multiLogo, tag, subLogo, posterImage, posterVideo, lottieData,
        subDescription, v2, buttonText, buttonUrl, multiLogoTwo, benefitsData, multiLogoThird, multiLogoFourth,
    } = props;
    let { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = posterImage || {};
    const { mobile_image_src: mobileImageSrc } = posterImage || {};
    let { image_src: subSrc, fallback_image_src: subImageSrc } = subLogo || {};
    const { html_src: subHtmlSrc } = subLogo || {};
    const { mobile } = posterImage;
    const { mp4_video_src: mp4VideoSrc, webm_video_src: webmVideoSrc } = posterVideo || {};
    const {
        lottie_url: lottieUrl, lottie_image_src: lottieImageSrc, lottie_fallback_image_src: lottieFallbackImageSrc,
    } = lottieData || {};

    if (!isSSR && mobile && width < WINDOW_SIZE.TAB) {
        imageSrc = mobile.image_src;
        fallbackImageSrc = mobile.fallback_image_src;
        subSrc = mobile.image_src;
        subImageSrc = mobile.fallback_image_src;
    }
    const usStocksposterImage = (width < WINDOW_SIZE.DESKTOP) ? (mobileImageSrc) : (imageSrc);

    let SectionWrapeer;

    if (v2) {
        SectionWrapeer = SectionV2;
    } else {
        SectionWrapeer = Section;
    }

    const onVisible = (inView: boolean) => {
        if (inView) {
            videoRef && videoRef.current && videoRef.current.play();
        } else {
            videoRef && videoRef.current && videoRef.current.pause();
        }
    };

    const getAnimationData = async () => {
        if (animationData) {
            setStopLottie(false);
        } else {
            const animationResponse = await callApi(lottieUrl, 'GET', null, null, null, true);
            setAnimationData(animationResponse);
            setStopLottie(false);
        }
    };

    const onLottieSectionVisible = (inView: boolean) => {
        if (inView) {
            getAnimationData();
        } else {
            setStopLottie(true);
        }
    };

    const lottieFallbackImageWrapper = (
        <LottiePlaceHolder>
            <Image
                icon={lottieImageSrc}
                fallBackImage={lottieFallbackImageSrc}
                alt='poster'
            />
        </LottiePlaceHolder>
    );

    const lottieSection = (
        <InView onChange={(inView: boolean) => onLottieSectionVisible(inView)}>
            {animationData ? (
                <AnimationContainer>
                    <AnimationPlaceholder>
                        <Suspense fallback={lottieFallbackImageWrapper}>
                            <LottiePlayer
                                animationData={animationData}
                                stop={stopLottie}
                                pause={false}
                            />
                        </Suspense>
                    </AnimationPlaceholder>
                </AnimationContainer>
            ) : (
                lottieFallbackImageWrapper
            )}
        </InView>
    );

    const videoSection = (
        <InView onChange={(inView: boolean) => onVisible(inView)}>
            <VideoImageContainer>
                <VideoContainer
                    loop
                    muted
                    playsInline
                    ref={videoRef}
                >
                    <source
                        src={deviceBrowser === 'safari' ? mp4VideoSrc : webmVideoSrc}
                        type={deviceBrowser === 'safari' ? 'video/mp4' : 'video/webm'}
                    />
                    <source src={mp4VideoSrc} type='video/mp4' />
                </VideoContainer>
            </VideoImageContainer>
        </InView>
    );

    let imageSection;

    switch (true) {
        case v2:
            imageSection = (
                <ImageUSStock
                    src={usStocksposterImage}
                />
            );
            break;

        default:
            imageSection = (
                <ImageHolderV2>
                    <Image
                        icon={imageSrc}
                        fallBackImage={fallbackImageSrc}
                        objectType='contain'
                        alt='card-image'
                        loadingType='eager'
                        id='feature-image'
                    />
                </ImageHolderV2>
            );
            break;
    }

    useEffect(() => {
        const featureImage = document.getElementById('feature-image');

        if (featureImage) {
            featureImage?.setAttribute('fetchpriority', 'high');
        }
    }, []);

    return (
        <SectionWrapeer>
            <LeftContainer v2={v2}>
                {tag ? (
                    <Tag font='pSmallVariantEight' tagType='text' v2={v2}>
                        <div
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(tag) }}
                        />
                    </Tag>
                ) : null}

                <Title font='h1' tagType='h1' color='WHITE' v2={v2}>
                    <div
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                    />
                </Title>
                {description ? (
                    <Description font='p' tagType='h2' color='SILVER_2' v2={v2}>
                        <div
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }}
                        />
                    </Description>
                ) : null}

                {subDescription ? (
                    <SubDescription font='pSmallVariantThirteen' tagType='p' color='STEEL'>
                        <div
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(subDescription) }}
                        />
                    </SubDescription>
                ) : null}
                <LogoWrapper v2={v2}>
                    {subText ? (
                        <SubText v2={v2}>
                            <div
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(subText) }}
                            />
                        </SubText>
                    ) : null}
                    <Container v2={v2}>
                        {subHtmlSrc
                            ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(subHtmlSrc) }}
                                />
                            ) : (
                                <LogoHolder>
                                    <Image
                                        icon={subSrc}
                                        fallBackImage={subImageSrc}
                                        loadingType='lazy'
                                    />
                                </LogoHolder>
                            )}
                        {multiLogo ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(multiLogo) }}
                            />
                        ) : null}
                        {multiLogoTwo ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(multiLogoTwo) }}
                            />
                        ) : null}
                        {
                            multiLogoThird ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(multiLogoThird) }}
                                />
                            ) : null
                        }
                        {
                            multiLogoFourth ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(multiLogoFourth) }}
                                />
                            ) : null
                        }
                    </Container>
                </LogoWrapper>

                {benefitsData ? (
                    <BenefitsSection>
                        {benefitsData.map((Data) => (
                            <Wrapper>
                                <Icon src={Data.icon} />
                                <SubWrapper>
                                    <Label>{Data.title}</Label>
                                </SubWrapper>
                            </Wrapper>
                        ))}
                    </BenefitsSection>
                ) : null}

                {buttonText && buttonUrl ? (
                    <ButtonHolder>
                        <a href={buttonUrl} target='_blank' rel='noreferrer'>
                            <PrimaryButton
                                label={buttonText}
                                fontVariant='buttonVariantTwo'
                            />
                        </a>
                    </ButtonHolder>
                ) : null}

            </LeftContainer>
            {mp4VideoSrc && videoSection}
            {imageSrc && imageSection}
            {lottieUrl && lottieSection}
        </SectionWrapeer>
    );
};

PosterSection.defaultProps = {
    lottieData: null,
    subDescription: '',
    v2: false,
    buttonText: '',
    buttonUrl: '',
    benefitsData: '',
};

export default PosterSection;
