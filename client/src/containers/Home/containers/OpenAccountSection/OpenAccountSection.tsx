import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Font, Image, Flex } from '../../../../components';
import { Device, WINDOW_SIZE } from '../../../../Themes/Device';
import { useWindowDimensions } from '../../../../hooks';
import { getDeviceOs } from '../../../../device';
import { APP_PLAY_STORE_URL_V2, IOS_APP_STORE_URL } from '../../../../constants/AppConstant';
import { WEBP_URL, PNGS_URL, ICONS_URL_MAP } from '../../../../constants/AssetConstants';
import {
    trackEvent,
    CLICKED_DOWNLOAD_FI,
} from '../../../../events';

import {
    OPEN_ACCOUNT_SECTION_TITLE,
    OPEN_ACCOUNT_SECTION_DESCRIPTION_ONE,
    OPEN_ACCOUNT_SECTION_DESCRIPTION_TWO,
} from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

// eslint-disable-next-line no-var
declare var window: any;

const ParentWrapper = styled.div`
    display: grid;
    width: 100%;
    background-color: ${(props) => props.theme.color.LIGHT_YELLOW};
    margin: auto;
    padding: 40px 20px 60px;
    justify-items: center;
    gap: 30px 0px;
    overflow: hidden;
    grid-template-areas:
        'title'
        'poster'
        'typeone'
        'typetwo';

    @media ${Device.tab} {
        padding-top: 60px;
        padding-bottom: 80px;
        gap: 40px 0px;
    }

    @media ${Device.desktop} {
        border-radius: 30px;
        margin-bottom: 0px;
        gap: 0px;
        padding: 0px;
        max-width: 1290px;
        margin: 0px auto;
        justify-items: start;
        max-height: 756px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            'title typeone'
            'poster typetwo';
    }
`;

const WrapperOne = styled.div`
    grid-area: title;

    @media ${Device.desktop} {
        padding: 84px 64px;
        width: 100%;
        background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    }
`;
const WrapperTwo = styled.div`
    grid-area: poster;
`;

const WrapperThree = styled.div`
    grid-area: typeone;

    @media ${Device.desktop} {
        width: 100%;
        padding: 80px 80px 42px;
    }
`;

const WrapperFour = styled.div`
    grid-area: typetwo;

    @media ${Device.desktop} {
        width: 100%;
        padding: 0px 80px 80px;
    }
`;

const Title = styled(Font)`
    text-align: center;
    max-width: 325px;

    @media ${Device.tab} {
        max-width: 517px;
    }

    @media ${Device.desktop} {
        line-height: 64px !important;
        text-align: left;

        color: ${(props) => props.theme.color.LIGHT_YELLOW};
    }
`;

const Poster = styled.div`
    width: 290px;
    height: 160px;
    border-radius: 15px;
    overflow: hidden;

    @media ${Device.tab} {
        width: 484px;
        height: 260px;
        border-radius: 20px;
    }

    @media ${Device.desktop} {
        height: 378px;
        width: 100%;
        border-radius: 0px;
    }
`;

const Section = styled(Flex)`
    flex-direction: column;
    align-items: center;
    width: 260px;
    text-align: center;
    margin-top: 17px;

    @media ${Device.tab} {
        margin-top: 20px;
    }

    @media ${Device.desktop} {
        width: 95%;
        align-items: flex-start;
        text-align: left;
        margin-top: 0px;
    }
`;

const SectionOne = styled(Section)`
    width: 260px;

    @media ${Device.tab} {
        width: 310px;
    }

    @media ${Device.desktop} {
        width: 100%;
    }
`;

const SectionTwo = styled(Section)`
    width: 260px;

    @media ${Device.tab} {
        width: 310px;
    }

    @media ${Device.desktop} {
        width: 100%;
    }
`;

const SectionTitle = styled(Font)`
    margin: 15px 0 4px;

    div {
        display: inline;
    }

    @media ${Device.tab} {
        margin: 18.18px 0 10px;
    }

    @media ${Device.desktop} {
        margin: 30px 0 15px;
    }
`;

const SectionDescription = styled(Font)``;

const EntrepreneursDescription = styled(Font)`
    @media ${Device.desktop} {
        max-width: 470px;
    }
`;

const SectionLink = styled(Font)`
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    @media ${Device.tab} {
        margin-top: 15px;
    }
`;

const ArrowTop = styled.div`
    width: 1em;
    height: 1em;
    margin-left: 8px;
`;

const SectionLinkLearnMore = styled(SectionLink)`
    border-bottom: 1px solid ${(props) => props.theme.color.GREY_2};
`;

const OpenAccountSection = ({ variant, screenName, parentComponent }: any) => {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const deviceOS = getDeviceOs();

    const redirectToUrl = (URL) => {
        const url = window.oneLinkCommonUrl || URL;
        window.open(url, '_blank', 'noopener');
    };

    const deviceOSBaseRedirection = () => {
        trackEvent(CLICKED_DOWNLOAD_FI, { device_os: deviceOS });

        if (deviceOS === 'android') {
            redirectToUrl(APP_PLAY_STORE_URL_V2);
        } else if (deviceOS === 'ios') {
            redirectToUrl(IOS_APP_STORE_URL);
        } else {
            redirectToUrl(APP_PLAY_STORE_URL_V2);
        }
    };

    const salariedEmployees = (
        <SectionOne
            data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'SalariedEmpContainer')}
        >
            <SectionTitle
                tagType='h3'
                font='h4VariantOne'
                data-test-id={makeDataTestId(screenName, 'SalariedEmpContainer', ElementTypes.H3Text, 'WorkingProffText')}
            >
                Working Professionals ✅
            </SectionTitle>

            <SectionDescription
                tagType='p'
                font='workingInfo'
                color='TUNDORA_2'
                data-test-id={makeDataTestId(screenName, 'SalariedEmpContainer', ElementTypes.ParagraphText, OPEN_ACCOUNT_SECTION_DESCRIPTION_ONE[variant].substring(0, 15))}
            >
                {OPEN_ACCOUNT_SECTION_DESCRIPTION_ONE[variant]}
            </SectionDescription>
            <a
                onClick={deviceOSBaseRedirection}
                onKeyDown={deviceOSBaseRedirection}
                rel='noreferrer'
                role='button'
                tabIndex={0}
                data-test-id={makeDataTestId(screenName, 'SalariedEmpContainer', ElementTypes.Link, 'DownloadFiLink')}
            >
                <SectionLink
                    tagType='text'
                    font='cardTagFont'
                    color='GREY_2'
                    data-test-id={makeDataTestId(screenName, 'DownloadFiLink', ElementTypes.Container, 'DownloadFiContainer')}
                >
                    DOWNLOAD FI
                    <ArrowTop>
                        <Image
                            icon={ICONS_URL_MAP.GREY_TOP_RIGHT_ARROW}
                            alt='arrow'
                            objectType='contain'
                            data-test-id={makeDataTestId(screenName, 'DownloadFiContainer', ElementTypes.Image, 'ArrowTopImage')}
                        />
                    </ArrowTop>
                </SectionLink>
            </a>
        </SectionOne>
    );

    const entrepreneurs = (
        <SectionTwo
            data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'EntrepreneursContainer')}
        >
            <SectionTitle
                tagType='h3'
                font='h4VariantOne'
                data-test-id={makeDataTestId(screenName, 'EntrepreneursContainer', ElementTypes.H3Text, 'StudentsText')}
            >
                Students & Others ⏳
            </SectionTitle>

            <EntrepreneursDescription
                tagType='p'
                font='workingInfo'
                color='TUNDORA_2'
                data-test-id={makeDataTestId(screenName, 'EntrepreneursContainer', ElementTypes.ParagraphText, OPEN_ACCOUNT_SECTION_DESCRIPTION_TWO[variant].substring(0, 15))}
            >
                {OPEN_ACCOUNT_SECTION_DESCRIPTION_TWO[variant]}
            </EntrepreneursDescription>
            <SectionLinkLearnMore
                tagType='text'
                font='input'
                color='GREY_2'
                onClick={() => navigate('/FAQs/about-fi/eligibility-&-access/why-is-fi-money-only-for-working-professionals')}
                data-test-id={makeDataTestId(screenName, 'EntrepreneursContainer', ElementTypes.Link, 'LearnMore')}
            >
                Learn More
            </SectionLinkLearnMore>
        </SectionTwo>
    );

    const OpenAccountSectionTitle = (
        <WrapperOne
            data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'WrapperOneContainer')}
        >
            <Title
                tagType='text'
                font='h1VariantSix'
                data-test-id={makeDataTestId(screenName, 'WrapperOneContainer', ElementTypes.H1Text, OPEN_ACCOUNT_SECTION_TITLE[variant].substring(0, 15))}
            >
                {OPEN_ACCOUNT_SECTION_TITLE[variant]}
            </Title>
        </WrapperOne>
    );

    const poster = (
        <Poster
            data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'PosterContainer')}
        >
            <Image
                icon={
                    width < WINDOW_SIZE.DESKTOP
                        ? `${WEBP_URL}chill-poster-phone.webp`
                        : `${WEBP_URL}chill-poster.webp`
                }
                loadingType='lazy'
                alt='open a Savings Account poster'
                fallBackImage={
                    width < WINDOW_SIZE.DESKTOP
                        ? `${PNGS_URL}chill-poster-phone.png`
                        : `${PNGS_URL}chill-poster.png`
                }
                dataTestId={makeDataTestId(screenName, 'PosterContainer', ElementTypes.Image, 'PosterImage')}
            />
        </Poster>
    );

    return (
        <ParentWrapper>
            {OpenAccountSectionTitle}
            <WrapperTwo>
                {poster}
            </WrapperTwo>
            <WrapperThree>{salariedEmployees}</WrapperThree>
            <WrapperFour>{entrepreneurs}</WrapperFour>
        </ParentWrapper>
    );
};

export default OpenAccountSection;
