"use client"

import React, { ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

import { Device } from '../../Themes/Device';
import { LOGOS_URL_MAP } from '../../constants/AssetConstants';
import { NAVIGATION_URLS } from '../../constants/AppConstant';
import Colors from '../../Themes/Colors';
import MIXINS from '../../Themes/mixins';

import { Font, Flex, Image } from '../Abstract';

import { ElementTypes, makeDataTestId } from '../../DataTestIds';

const Header = styled(Font)<{ headingColor?: string }>`
    color: ${(props) => props.headingColor || props.theme.color.BLACK};
    text-align: center;
    max-width: 265px;
    grid-area: header;

    @media ${Device.tab} {
        max-width: 370px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
        text-align: left;
    }
`;

const Section = styled.div<{ bgColor?: string }>`
    width: 100%;
    background-color: ${(props) => props.bgColor || props.theme.color.CHALK_GREY};
`;

const Wrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    margin: auto;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    justify-items: center;
    grid-template-areas:
        'header'
        'logo'
        'content';

    .complete-height {
        height: fit-content;
    }

    @media ${Device.tab} {
        padding-top: 120px;
        max-width: 420px;
        gap: 44px;
    }

    @media ${Device.desktop} {
        gap: 30px 20px;
        justify-items: start;
        grid-template-areas:
            'header content'
            'logo content';
        grid-template-columns: 550px auto;
        gap: 30px 100px;
        padding: 220px 85px 200px;
        max-width: 1440px;
    }
`;

const LogoWrapper = styled(Flex)`
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    grid-area: logo;
    width: 320px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: unset;
        margin: 0px;
    }

    @media ${Device.desktop} {
        justify-content: flex-start;
    }
`;

const Logo = styled.div`
    &:not(:last-child) {
        margin-right: 18px;
    }

    @media ${Device.tab} {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
    @media ${Device.desktop} {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
`;

const FederalLogoWrapper = styled(Logo)`
    width: 98px;

    @media ${Device.desktop} {
        width: 140px;
    }
`;

const VisaLogoWrapper = styled(Logo)`
    width: 62px;
    height: 46px;

    @media ${Device.desktop} {
        width: 90px;
        height: 75px;
    }
`;

const NpciLogoWrapper = styled(Logo)`
    width: 72px;
    height: 46px;

    @media ${Device.desktop} {
        width: 104px;
        height: 75px;
    }
`;

const PciLogoWrapper = styled(Logo)`
    width: 65px;
    height: 46px;

    @media ${Device.desktop} {
        width: 94px;
        height: 75px;
    }
`;

const EpifiWealthWrapper = styled(Logo)`
    width: 98px;
    height: 46px;

    @media ${Device.desktop} {
        width: 112px;
        height: 75px;
    }
`;

const ContentWrapper = styled.div`
    width: 280px;
    text-align: center;
    grid-area: content;

    @media ${Device.tab} {
        width: 370px;
    }

    @media ${Device.desktop} {
        margin-top: 16px;
        width: 100%;
        height: 100%;
        text-align: left;
    }
`;

const Content = styled(Font)`
    position: relative;
    overflow: hidden;
    line-height: 120%;

    @media ${Device.desktop} {
        height: 100%;
    }
`;

const ContentItem = styled.p`
    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media ${Device.desktop} {
        max-width: 585px;
    }
`;

const LogoContainer = styled.div`
    overflow: hidden;
    width: 100%;
`;

const IsoText = styled(Font)`
    white-space: nowrap;
    ${MIXINS.FontMixin({
        weight: 700, size: '14px', lineHeight: '120%', font: 'Inter',
    })};

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        weight: 700, size: '16px', lineHeight: '120%', font: 'Inter',
    })};
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        weight: 700, size: '20px', lineHeight: '120%', font: 'Inter',
    })};
    }

`;

const IsoTextLogoWrapper = styled(Logo)`
    width: auto;
    height: 46px;
    ${MIXINS.FlexMixin({})};

    @media ${Device.desktop} {
        height: 75px;
    }
`;

const LogoSubWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${Device.tab} {
        justify-content: start;
    }
`;

const PATHS_TO_HIDE_EPIFI_WEALTH_LOGO = [
    NAVIGATION_URLS.INSTANT_LOAN.url,
];

const PATHS_TO_HIDE_VISA_LOGO = [
    NAVIGATION_URLS.INSTANT_LOAN.url,
];

const PATHS_TO_HIDE_NPCI_LOGO = [
    NAVIGATION_URLS.INSTANT_LOAN.url,
];

type ICommonContentStyles = {
    children: ReactNode;
}

const CommonContentStyles = (props: ICommonContentStyles) => {
    const { children } = props;

    return (
        <ContentWrapper>
            <Content
                tagType='text'
                font='workingInfo'
                color='GREY_3'
            >
                {children}
            </Content>
        </ContentWrapper>
    );
};

const DefaultContent = () => (
    <CommonContentStyles>
        <ContentItem>
            Our partner bank hosts your Savings Account
            and follows all security standards per applicable regulations.
        </ContentItem>

        <ContentItem>
            Your money is always safe with our banking partner - Federal Bank,
            is covered under the Deposit Insurance and Credit Guarantee Corporation Scheme. This insures your money up to&nbsp;
            <strong>₹5 lakh.</strong>
        </ContentItem>

        <ContentItem>
            Fi itself is not a bank and doesn’t hold or claim to
            have a banking license.
        </ContentItem>
    </CommonContentStyles>
);

const DefaultLogos = () => {
    const pathname = usePathname();

    const showEpifiWealthLogo = useMemo(() => {
        const pathInfo = PATHS_TO_HIDE_EPIFI_WEALTH_LOGO
            .find((route) => route === pathname);

        // If matching path found, then do not show logo
        if (pathInfo) return false;

        // else show the logo
        return true;
    }, [pathname]);

    const showVisaLogo = useMemo(() => {
        const pathInfo = PATHS_TO_HIDE_VISA_LOGO
            .find((route) => route === pathname);

        // If matching path found, then do not show logo
        if (pathInfo) return false;

        // else show the logo
        return true;
    }, [pathname]);

    const showNpciLogo = useMemo(() => {
        const pathInfo = PATHS_TO_HIDE_NPCI_LOGO
            .find((route) => route === pathname);

        // If matching path found, then do not show logo
        if (pathInfo) return false;

        // else show the logo
        return true;
    }, [pathname]);

    return (
        <LogoSubWrapper>
            <FederalLogoWrapper>
                <Image
                    loadingType='lazy'
                    icon={LOGOS_URL_MAP.FEDERAL}
                    alt='Federal Bank'
                    objectType='contain'
                />
            </FederalLogoWrapper>

            {showVisaLogo ? (
                <VisaLogoWrapper>
                    <Image
                        loadingType='lazy'
                        icon={LOGOS_URL_MAP.VISA}
                        alt='VISA'
                        objectType='contain'
                    />
                </VisaLogoWrapper>
            ) : null}
            {showNpciLogo ? (
                <NpciLogoWrapper>
                    <Image
                        loadingType='lazy'
                        icon={LOGOS_URL_MAP.NPCI}
                        alt='NPCI'
                        objectType='contain'
                    />
                </NpciLogoWrapper>
            ) : null}
            <PciLogoWrapper>
                <Image
                    loadingType='lazy'
                    icon={LOGOS_URL_MAP.PCI}
                    alt='PCI'
                    objectType='contain'
                />
            </PciLogoWrapper>
            {showEpifiWealthLogo ? (
                <EpifiWealthWrapper>
                    <Image
                        loadingType='lazy'
                        icon={LOGOS_URL_MAP.EPIFI_WEALTH}
                        alt='EPIFI WEALTH'
                        objectType='contain'
                    />
                </EpifiWealthWrapper>
            ) : null}
            <IsoTextLogoWrapper>
                <IsoText tagType='text' font='p5VariantOne' color='CHARCOAL_GREY'>
                    ISO 27001:2013
                </IsoText>
            </IsoTextLogoWrapper>
        </LogoSubWrapper>
    );
};

const defaultHeading = 'Fi partners with the best to secure your money';

interface ISecureMoneySectionProps {
    bgColor?: string;
    headingColor?: string;
    screenName?: string;
    parentComponent?: string;
}

const SecureMoneySection = (props: ISecureMoneySectionProps) => {
    const {
        bgColor, headingColor, screenName, parentComponent,
    } = props;

    const contentData = <DefaultContent />;

    const logoData = <DefaultLogos />;

    const headingData = defaultHeading;

    return (
        <Section
            bgColor={bgColor}
            data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'SecureMoneyContainer')}
        >
            <Wrapper
                data-test-id={makeDataTestId(screenName, 'SecureMoneyContainer', ElementTypes.Container, 'SecureMoneyWrapper')}
            >
                <Header
                    font='h1'
                    tagType='h2'
                    headingColor={headingColor}
                    data-test-id={makeDataTestId(screenName, 'SecureMoneyWrapper', ElementTypes.Container, headingData.substring(0, 15))}
                >
                    {headingData}
                </Header>

                <LogoContainer
                    data-test-id={makeDataTestId(screenName, 'SecureMoneyWrapper', ElementTypes.Container, 'SecureMoneyLogoContainer')}
                >
                    <LogoWrapper
                        data-test-id={makeDataTestId(screenName, 'SecureMoneyLogoContainer', ElementTypes.Container, 'SecureMoneyLogoWrapper')}
                    >
                        {logoData}
                    </LogoWrapper>
                </LogoContainer>
                {contentData}
            </Wrapper>
        </Section>
    );
};

SecureMoneySection.defaultProps = {
    bgColor: Colors.CHALK_GREY,
    headingColor: Colors.BLACK,
    screenName: '',
    parentComponent: '',
};

export default SecureMoneySection;
