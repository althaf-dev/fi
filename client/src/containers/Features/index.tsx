import React, {
    useState, useEffect, useRef, useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import {
    AppFooter,
    StyledLanding,
} from '../../components';
import { Device, WINDOW_SIZE } from '../../Themes/Device';
import { useWindowDimensions } from '../../hooks';

import PosterSection from './PosterSection';
import ContentSection from './ContentSection';
import DesktopVideoSection from './DesktopVideoSection';
import FeaturesPageHeader from './FeaturesPageHeader';
import Carousel from './Carousel';
import MobileSection from './MobileSection';
import {
    ASK_FI, FIT_RULES,
    JARS, REWARDS,
    PAY,
    DEBIT_CARD,
    MUTUAL_FUNDS,
    CONNECTED_ACCOUNTS,
    FI_SECURE,
    VIDEO_SECTION,
    ScrollingAnimationObject,
    trackingPayload,
} from './constants';
import { debounce } from '../../utils/debounce';
import { scrollEndOfPage, scrollTopOfPage } from '../../utils/scrollEvents';
import { queryParams } from '../../utils/queryParams';
import { CLICKED_FEATURES_HEADLINE, LOADED_FEATURES_WEBSITE, trackEvent } from '../../events';

const StyledContainer = styled.div<{ headerBackgroundColor: boolean }>`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
    postion: relative;
`;

const FeaturesPagePosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
    position: relative;
    z-index: 1;
`;

const Container = styled.div`
    @media (min-height: 1025px) and ${Device.desktop} {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding-top: 150px;
    padding-bottom: 150px;
    position: relative;
    max-width: 1202px;
    margin-left: 196px;
    margin-right: 42px;

    @media (min-height: 1025px) and ${Device.desktop} {
        max-height: 910px;
        padding-bottom: 0px;
        padding-top: 0px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    @media (min-height: 1025px) and ${Device.desktop} {
        margin-top: 250px;
    }
`;

const SectionWrapper = styled.div<{showData?: boolean, height?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: ${(props) => (props.height <= 1024 ? '520px' : '580px')};
    min-height: ${(props) => (props.height <= 1024 ? '520px' : '580px')};
    margin-bottom: 100px;
    opacity: ${(props) => (props.showData ? 1 : 0)};
    transition: opacity .4s ease-in;
`;

const VideoCountSection = styled.div`
    color: ${(props) => props.theme.color.SUVA_GREY};
    font-family: Gilroy;
    font-weight: bold;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.45px;
    text-transform: uppercase;
    padding: 20px 0px;
`;

/* eslint-disable camelcase */
interface QueryParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
}

/* eslint-enable camelcase */
const Features = () => {
    // eslint-disable-next-line max-len
    const [scrollingAnimation, setScrollingAnimation] = useState<ScrollingAnimationObject>({ activeIndex: 0, transactionValue: 0 });
    const [headerBackgroundColor, setHeaderBackgroundColor] = useState(false);
    const [hideFixedHeader, setHideFixedHeader] = useState(false);

    const { width, height } = useWindowDimensions();

    const location = useLocation();

    // VIDEO_TRANSACTION_VALUE = Video Height which is (712px and 568px) + Each Video Bottom Margin which is 20px
    const VIDEO_TRANSACTION_VALUE = height <= 1024 ? 588 : 732;
    const SECTION_HEIGHT = 610;

    const videoRef = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const contentRef = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    // Run events when section inView
    const setEventWhenContentInView = ({ title, FI_DATA }) => {
        trackEvent(CLICKED_FEATURES_HEADLINE, {
            ...trackingPayload,
            headline_name: FI_DATA[0].title,
            category_name: title,
            auto_expanded: true,
        });
    };

    /**
     * @param index
     * using scollTo when height is less than 1024px due to the page sticky behaviour
     * using scrollIntoView when height is greater than 1024px because
     * when height is greater than 1024 in that case only content part is scrollable
     */
    const onCarouselScroll = (index) => {
        if (height <= 1024) {
            window.scrollTo({ top: SECTION_HEIGHT * (index + 1), behavior: 'smooth' });
        } else {
            contentRef[index].current.scrollIntoView({ block: 'center' });
        }
    };

    /**
     * get the scrolling postion and muliply with the VIDEO_TRANSACTION_VALUE
     * use the transactionValue for scrolling the content
     */
    const getScrollPosition = (index) => {
        const transactionValue = index * VIDEO_TRANSACTION_VALUE;

        setScrollingAnimation({
            activeIndex: index, transactionValue,
        });
    };

    // get the index of last inView section on which user stop scrolling
    const onScrollEnd = (index, contentObj) => {
        if (scrollEndOfPage()) return;
        if (scrollTopOfPage()) return;

        setEventWhenContentInView(contentObj);
        window.scrollTo({ top: SECTION_HEIGHT * (index), behavior: 'smooth' });
    };

    const detectScrollEnd = useCallback(debounce((index, contentObj) => {
        onScrollEnd(index, contentObj);
    }, 800), []);

    const onViewChange = (inView: boolean, index, contentObj) => {
        if (inView) {
            getScrollPosition(index);
            if (height <= 1024) {
                detectScrollEnd(index + 1, contentObj);
            }
        }
    };

    const getCountSection = (countValue) => {
        if (height >= 700) {
            return (
                <VideoCountSection>
                    {countValue}
                    {' '}
                    of
                    {' '}
                    {VIDEO_SECTION.length}
                </VideoCountSection>
            );
        }
        return null;
    };

    const onHeaderViewChange = (inView: boolean) => {
        if (inView) {
            setHeaderBackgroundColor(true);
        } else {
            setHeaderBackgroundColor(false);
        }
    };

    const onFooterView = (inView: boolean) => {
        if (inView) {
            setHideFixedHeader(true);
        } else {
            setHideFixedHeader(false);
        }
    };

    useEffect(() => {
        const params: QueryParams = queryParams(location.search);
        const { ...utmParams } = params;

        trackEvent(LOADED_FEATURES_WEBSITE, {
            ...trackingPayload,
            ...utmParams,
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (videoRef[scrollingAnimation.activeIndex]
            && videoRef[scrollingAnimation.activeIndex].current) {
            videoRef[scrollingAnimation.activeIndex].current.load();
            videoRef[scrollingAnimation.activeIndex].current.play();
        }
    }, [scrollingAnimation]);

    return (
        <StyledContainer headerBackgroundColor={headerBackgroundColor}>
            <FeaturesPagePosterContainer>
                <FeaturesPageHeader
                    activeMenu='FEATURES'
                    trackingPayload={trackingPayload}
                    headerBackgroundColor={headerBackgroundColor}
                    hideFixedHeader={hideFixedHeader}
                    fontColor='GREY_2'
                    menuColor='GRAY'
                />
                {width >= WINDOW_SIZE.DESKTOP
                    ? (
                        <InView threshold={0.2} onChange={(inView: boolean) => onHeaderViewChange(inView)}>
                            <PosterSection />
                        </InView>
                    )
                    : <PosterSection />}
            </FeaturesPagePosterContainer>

            <StyledLanding>
                {width >= WINDOW_SIZE.DESKTOP && height >= 700
                    ? (
                        <Container>
                            <Wrapper>
                                <DesktopVideoSection videoRef={videoRef} scrollingAnimation={scrollingAnimation} />
                                <SectionContainer>
                                    <InView
                                        threshold={0.6}
                                        onChange={(inView: boolean) => onViewChange(inView, 0, ASK_FI)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[0]}
                                            showData={scrollingAnimation.activeIndex === 0}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={ASK_FI}
                                            />
                                            {getCountSection(ASK_FI.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.5}
                                        onChange={(inView: boolean) => onViewChange(inView, 1, FIT_RULES)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[1]}
                                            showData={scrollingAnimation.activeIndex === 1}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={FIT_RULES}
                                            />
                                            {getCountSection(FIT_RULES.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.8}
                                        onChange={(inView: boolean) => onViewChange(inView, 2, JARS)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[2]}
                                            showData={scrollingAnimation.activeIndex === 2}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={JARS}
                                            />
                                            {getCountSection(JARS.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.7}
                                        onChange={(inView: boolean) => onViewChange(inView, 3, REWARDS)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[3]}
                                            showData={scrollingAnimation.activeIndex === 3}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={REWARDS}
                                            />
                                            {getCountSection(REWARDS.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.8}
                                        onChange={(inView: boolean) => onViewChange(inView, 4, PAY)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[4]}
                                            showData={scrollingAnimation.activeIndex === 4}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={PAY}
                                            />
                                            {getCountSection(PAY.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.6}
                                        onChange={(inView: boolean) => onViewChange(inView, 5, DEBIT_CARD)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[5]}
                                            showData={scrollingAnimation.activeIndex === 5}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={DEBIT_CARD}
                                            />
                                            {getCountSection(DEBIT_CARD.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.6}
                                        onChange={(inView: boolean) => onViewChange(inView, 6, MUTUAL_FUNDS)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[6]}
                                            showData={scrollingAnimation.activeIndex === 6}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={MUTUAL_FUNDS}
                                            />
                                            {getCountSection(MUTUAL_FUNDS.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.6}
                                        onChange={(inView: boolean) => onViewChange(inView, 7, CONNECTED_ACCOUNTS)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[7]}
                                            showData={scrollingAnimation.activeIndex === 7}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={CONNECTED_ACCOUNTS}
                                            />
                                            {getCountSection(CONNECTED_ACCOUNTS.id)}
                                        </SectionWrapper>
                                    </InView>
                                    <InView
                                        threshold={0.7}
                                        onChange={(inView: boolean) => onViewChange(inView, 8, FI_SECURE)}
                                    >
                                        <SectionWrapper
                                            ref={contentRef[8]}
                                            showData={scrollingAnimation.activeIndex === 8}
                                            height={height}
                                        >
                                            <ContentSection
                                                featurePageSectionObj={FI_SECURE}
                                            />
                                            {getCountSection(FI_SECURE.id)}
                                        </SectionWrapper>
                                    </InView>
                                </SectionContainer>
                                <Carousel
                                    scrollingAnimation={scrollingAnimation}
                                    onCarouselScroll={onCarouselScroll}
                                />
                            </Wrapper>
                        </Container>
                    )
                    : (
                        <>
                            <MobileSection
                                featurePageSectionObj={ASK_FI}
                                mp4NoFrameVideo={VIDEO_SECTION[0].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[0].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[0].posterPhoneImage}
                                firstSection
                            />
                            <MobileSection
                                featurePageSectionObj={FIT_RULES}
                                mp4NoFrameVideo={VIDEO_SECTION[1].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[1].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[1].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={JARS}
                                mp4NoFrameVideo={VIDEO_SECTION[2].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[2].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[2].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={REWARDS}
                                mp4NoFrameVideo={VIDEO_SECTION[3].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[3].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[3].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={PAY}
                                mp4NoFrameVideo={VIDEO_SECTION[4].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[4].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[4].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={DEBIT_CARD}
                                mp4NoFrameVideo={VIDEO_SECTION[5].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[5].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[5].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={MUTUAL_FUNDS}
                                mp4NoFrameVideo={VIDEO_SECTION[6].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[6].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[6].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={CONNECTED_ACCOUNTS}
                                mp4NoFrameVideo={VIDEO_SECTION[7].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[7].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[7].posterPhoneImage}
                            />
                            <MobileSection
                                featurePageSectionObj={FI_SECURE}
                                mp4NoFrameVideo={VIDEO_SECTION[8].mp4NoFrameVideo}
                                webmNoFrameVideo={VIDEO_SECTION[8].webmNoFrameVideo}
                                posterImage={VIDEO_SECTION[8].posterPhoneImage}
                                lastSection
                            />
                        </>
                    )}
            </StyledLanding>
            <InView threshold={0.5} onChange={(inView: boolean) => onFooterView(inView)}>
                <AppFooter trackingPayload={trackingPayload} />
            </InView>
        </StyledContainer>
    );
};

export default Features;
