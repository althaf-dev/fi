import React, { ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Device } from '../../Themes/Device';
import { ICONS_URL_MAP, LOGOS_URL_MAP } from '../../constants/AssetConstants';
import { FAQS_URL, NAVIGATION_URLS } from '../../constants/AppConstant';
import { TextLinkArray } from '../../interfaces/elements';
import Colors from '../../Themes/Colors';
import MIXINS from '../../Themes/mixins';

import { Font, Flex, Image } from '../Abstract';
import { StyledLink } from '../styled';

import { LINK_ARRAY } from './constants';
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
    padding-bottom: 0px;
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
        padding: 220px 85px 0px;
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

const IDFCLogoWrapper = styled(Logo)`
    width: 68px;

    @media ${Device.desktop} {
        width: 110px;
    }
`;

const ABFLLogoWrapper = styled(Logo)`
    width: 78px;
    img { 
        margin-top: 9px;    
        height: 26px;
        width: 68px;    
    }

    @media ${Device.desktop} {
        margin-right: 40px !important;
        img { 
            margin-top: 1px;
            height: 77px;
            width: 94px;    
        }
    }
`;

const LiquiLogoWrapper = styled(Logo)`
    width: 128px;

    @media ${Device.desktop} {
        width: 180px;
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

const CommonLogoWrapperV1 = styled(Logo)`
    width: 198px;
    height: 46px;

    @media ${Device.desktop} {
        width: 300px;
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

const ArrowWrapper = styled.span`
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-left: 3px;
    vertical-align: middle;

    @media ${Device.desktop} {
        height: 19px;
        width: 19px;
    }
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

const StyledLinkUnderLine = styled(StyledLink)`
    text-decoration: underline;
`;

const LogoSubWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${Device.tab} {
        justify-content: start;
    }
`;

const Link = styled.a`
  color: ${(props) => props.theme.color.FOREST_GREEN};
`;

const PATHS_TO_HIDE_EPIFI_WEALTH_LOGO = [
    NAVIGATION_URLS.INSTANT_LOAN.url,
];

const PATHS_TO_SHOW_IDFC_LOGO = [
    NAVIGATION_URLS.INSTANT_LOAN.url,
];

const PATHS_TO_SHOW_ABFL_LOGO = [
    NAVIGATION_URLS.INSTANT_LOAN.url,
];

const PATHS_TO_SHOW_LIQUI_LOGO = [
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

type ILinkSectionProps = {
    data: TextLinkArray;
}

const LinkSection = (props: ILinkSectionProps) => {
    const { data } = props;

    const email = 'plnodalofficer@fi.care';
    const mailLink = <Link href={`mailto:${email}`}>{email}</Link>;

    return (
        <>
            {data.map((item) => (
                <ContentItem>
                    <div>{item.label}</div>
                    {item.links.map((link) => (
                        <span>
                            <StyledLinkUnderLine url={link.url} isExternal={link.isExternal}>
                                {link.text}
                                <ArrowWrapper>
                                    <Image
                                        loadingType='lazy'
                                        icon={ICONS_URL_MAP.TOP_RIGHT_ARROW_GREEN}
                                        alt='arrow'
                                        objectType='contain'
                                    />
                                </ArrowWrapper>
                            </StyledLinkUnderLine>
                            <br />
                        </span>
                    ))}
                </ContentItem>
            ))}
            <div>
                Fi Grievance Redressal: Contact Fi Money Principal Nodal Officer on
            &nbsp;
                {mailLink}
            </div>
        </>
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

const JumpContent = () => (
    <CommonContentStyles>
        <ContentItem>
            Jump is a peer-to-peer (P2P) investment opportunity for select users. epiFi has partnered with Liquiloans,
            a licensed & regulated P2P Non-Banking Financial Company, to provide this investment opportunity
        </ContentItem>

        <ContentItem>
            Liquiloans and epiFi do not guarantee the return of principal/interest
            payments. Before investing, please read the terms &&nbsp;
            <StyledLink url={`${FAQS_URL}/jump`} isExternal>FAQs &nbsp;</StyledLink>
            carefully — to
            fully comprehend the risks associated with this product.
        </ContentItem>
    </CommonContentStyles>
);

const USStocksContent = () => (
    <CommonContentStyles>
        <ContentItem>
            Fi money is not a broker dealer, nor an investment advisor.
            Trading in US Stocks shall be facilitated through Stock Broker Alpaca LLC, 8-69928.
        </ContentItem>

        <ContentItem>
            No information published on the website is intended to be investment advice, portfolio management or as any form of
            research analysis, directly or indirectly.
            The users of the website shall be solely responsible for any action taken by them pursuant to the information contained herein,
            including any investment decision with respect to transaction in securities.
        </ContentItem>
    </CommonContentStyles>
);

const InstantLoanContent = () => (
    <CommonContentStyles>
        <ContentItem>
            Fi Money App acts as a digital lending application/platform and a lending service provider for our partner regulated entities (RE).
            Which means that the loan shall always be provided to you by our partner RE and Fi Money only provides a platform
            to facilitate such loans.
        </ContentItem>

        <ContentItem>
            For information on how we handle your data please refer to the relevant privacy policies.
        </ContentItem>

        <ContentItem>
            <LinkSection data={LINK_ARRAY.INSTANT_LOAN_LINKS} />
        </ContentItem>
    </CommonContentStyles>
);

const CCValuebackPageContent = () => (
    <CommonContentStyles>
        <ContentItem>
            Fi Brand Pvt Ltd is partnering with Federal Bank and VISA
            to provide this co-branded credit card as per applicable regulations.
        </ContentItem>

        <ContentItem>
            Fi itself is not a bank and doesn&apos;t hold or claim to have a banking license.
        </ContentItem>
    </CommonContentStyles>
);

const URL_CONTENT_MAP = {
    [NAVIGATION_URLS.JUMP.url]: <JumpContent />,
    [NAVIGATION_URLS.US_STOCKS.url]: <USStocksContent />,
    [NAVIGATION_URLS.INSTANT_LOAN.url]: <InstantLoanContent />,
    [NAVIGATION_URLS.CREDIT_CARD_VALUEBACK.url]: <CCValuebackPageContent />,
};

const DefaultLogos = () => {
    const { pathname } = useLocation();

    const showEpifiWealthLogo = useMemo(() => {
        const pathInfo = PATHS_TO_HIDE_EPIFI_WEALTH_LOGO
            .find((route) => route === pathname);

        // If matching path found, then do not show logo
        if (pathInfo) return false;

        // else show the logo
        return true;
    }, [pathname]);

    const showIDFCLogo = useMemo(() => {
        const pathInfo = PATHS_TO_SHOW_IDFC_LOGO
            .find((route) => route === pathname);

        // If matching path found, thenshow logo
        if (pathInfo) return true;

        // else show the logo
        return false;
    }, [pathname]);

    const showABFLLogo = useMemo(() => {
        const pathInfo = PATHS_TO_SHOW_ABFL_LOGO
            .find((route) => route === pathname);

        // If matching path found, thenshow logo
        if (pathInfo) return true;

        // else show the logo
        return false;
    }, [pathname]);

    const showLiquiLogo = useMemo(() => {
        const pathInfo = PATHS_TO_SHOW_LIQUI_LOGO
            .find((route) => route === pathname);

        // If matching path found, then show logo
        if (pathInfo) return true;

        // else show the logo
        return false;
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
            {showLiquiLogo ? (
                <LiquiLogoWrapper>
                    <Image
                        loadingType='lazy'
                        icon={LOGOS_URL_MAP.LIQUI_LOANS_LOGO}
                        alt='Liqui loans'
                        objectType='contain'
                    />
                </LiquiLogoWrapper>
            ) : null}
            {
                showIDFCLogo ? (
                    <IDFCLogoWrapper>
                        <Image
                            loadingType='lazy'
                            icon={LOGOS_URL_MAP.IDFC_LOGO}
                            alt='IDFC First Bank'
                            objectType='contain'
                        />
                    </IDFCLogoWrapper>
                ) : null
            }

            {
                showABFLLogo ? (
                    <ABFLLogoWrapper>
                        <Image
                            loadingType='lazy'
                            icon={LOGOS_URL_MAP.ABFL_LOGO}
                            alt='Aditya Birla Finance Limited'
                            objectType='contain'
                        />
                    </ABFLLogoWrapper>
                ) : null
            }

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

const JumpLogo = () => (
    <CommonLogoWrapperV1>
        <Image
            loadingType='lazy'
            icon={LOGOS_URL_MAP.LIQUI_LOANS_LOGO}
            alt='Liquiloans logo'
            objectType='contain'
        />
    </CommonLogoWrapperV1>
);

const USStocksLogo = () => (
    <CommonLogoWrapperV1>
        <Image
            loadingType='lazy'
            icon={LOGOS_URL_MAP.ALPACA_LOGO}
            alt='Alpaca logo'
            objectType='contain'
        />
    </CommonLogoWrapperV1>
);

const CCValuebackPageLogo = () => (
    <>
        <FederalLogoWrapper>
            <Image
                loadingType='lazy'
                icon={LOGOS_URL_MAP.FI_FEDERAL}
                alt='Federal Bank'
                objectType='contain'
            />
        </FederalLogoWrapper>
        <VisaLogoWrapper>
            <Image
                loadingType='lazy'
                icon={LOGOS_URL_MAP.FI_VISA}
                alt='VISA'
                objectType='contain'
            />
        </VisaLogoWrapper>
        <PciLogoWrapper>
            <Image
                loadingType='lazy'
                icon={LOGOS_URL_MAP.FI_PCI}
                alt='PCI'
                objectType='contain'
            />
        </PciLogoWrapper>

    </>
);

const URL_LOGO_MAP = {
    [NAVIGATION_URLS.JUMP.url]: <JumpLogo />,
    [NAVIGATION_URLS.US_STOCKS.url]: <USStocksLogo />,
    [NAVIGATION_URLS.CREDIT_CARD_VALUEBACK.url]: <CCValuebackPageLogo />,
};

const defaultHeading = 'Fi partners with the best to secure your money';
const usStocksHeading = 'Fi partners with the best to securely grow your money';
const instantLoanHeading = 'Fi partners with the best to offer you instant loans';
const jumpHeading = 'Fi partners with the best to secure your wealth';

const URL_HEADING_MAP = {
    [NAVIGATION_URLS.US_STOCKS.url]: usStocksHeading,
    [NAVIGATION_URLS.INSTANT_LOAN.url]: instantLoanHeading,
    [NAVIGATION_URLS.JUMP.url]: jumpHeading,
};

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

    const { pathname } = useLocation();

    const contentData = useMemo(() => {
        const content = URL_CONTENT_MAP[pathname];

        // If matching path found, then show the corresponding content
        if (content) return content;

        // else show the default content
        return <DefaultContent />;
    }, [pathname]);

    const logoData = useMemo(() => {
        const content = URL_LOGO_MAP[pathname];

        // If matching path found, then show the corresponding logos
        if (content) return content;

        // else show the default logos
        return <DefaultLogos />;
    }, [pathname]);

    const headingData = useMemo(() => {
        const content = URL_HEADING_MAP[pathname];

        // If matching path found, then show the corresponding logos
        if (content) return content;

        // else show the default logos
        return defaultHeading;
    }, [pathname]);

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
