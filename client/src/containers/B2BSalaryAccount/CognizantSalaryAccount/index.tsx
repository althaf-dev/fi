/**
 * @file CognizantSalaryAccount Page
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Heading, FeaturesCards, FeaturesTable } from '../../../components/FeaturesPage/components';
import CONGNIZANT_SALARY_ACCOUNT_DATA from '../../../assets/json/cognizant-salary-account.json';

import { Device, WINDOW_SIZE } from '../../../Themes/Device';

import { useWindowDimensions, useIsSSR } from '../../../hooks';
import {
    AppFooter, StyledContainer, StyledLanding, PosterContainer, PrimaryButton,
    SecureMoneySection, Font, ViewPortModal, PosterComponent, FiCardSection,
    QRCodeSection,
} from '../../../components';

import ComingSoonCardSection from '../ComingSoonCardSection';
import UnequalCardSection from '../UnequalCardSection';
import SingleCardSection from '../SingleCardSection';
import TeamSection from '../TeamSection';
import AccountOpeningSection from '../AccountOpeningSection';
import { SectionType } from '../constant';

const SalaryAccountPosterContainer = styled(PosterContainer)`
    padding-top: 85px;
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
`;

const ButtonHolder = styled.div`
    width: 280px;
    margin: 0px auto 50px;

    @media ${Device.tab} {
        margin: 0px auto 60px;
        width: 320px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 80px;
        width: 412px;
    }
`;

const Wrapper = styled.div`
    padding: 30px 20px 0px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 40px 40px 0px 40px;
    }

    @media ${Device.desktop} {
        max-width: 1290px;
        padding: 120px 70px 0px;
    }
`;

const Section = styled.div`
    margin: 40px 0px 80px;
`;

const SubText = styled(Font)`
    margin-top: 25px;
    text-align: right;
`;

const CardSectionContainer = styled.div`
    margin-top: 40px;
`;

const SingleCardContainer = styled.div`
    margin: 63px 0px 80px;
`;

const CognizantSalaryAccount = () => {
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    const [isQRCodeShown, setIsQRCodeShown] = useState(false);

    const showAndHideQRCode = (value: boolean) => () => {
        setIsQRCodeShown(value);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderSection = (section) => {
        let layoutSection;

        switch (section.type) {
            case SectionType.Button: {
                const { data } = section || {};
                const { label } = data || {};

                layoutSection = (
                    <ButtonHolder>
                        <PrimaryButton
                            label={label}
                            fontVariant='buttonVariantTwo'
                            onMouseOver={showAndHideQRCode(true)}
                            onMouseLeave={showAndHideQRCode(false)}
                            isQRCodeShown={isQRCodeShown}
                        />
                        <QRCodeSection
                            isQRCodeShown={isQRCodeShown}
                            showQRCode={showAndHideQRCode(true)}
                            hideQRCode={showAndHideQRCode(false)}
                            alignQRCodeInCenter
                        />
                    </ButtonHolder>
                );
                break;
            }

            case SectionType.UnequalCardSectionWithSubText: {
                const { data, title } = section || {};

                layoutSection = (
                    <>
                        <Heading title={title} />
                        <Section>
                            <UnequalCardSection item={data} />
                            <SubText font='labelVariantTwelve' tagType='text' color='LIGHTER_GREY'>
                                T&Cs Apply
                            </SubText>
                        </Section>
                    </>
                );
                break;
            }

            case SectionType.FeatureCard: {
                const { data, title } = section || {};

                layoutSection = (
                    <>
                        <Heading title={title} />
                        <Section>
                            <FeaturesCards item={data} />
                        </Section>
                    </>
                );
                break;
            }

            case SectionType.FeatureTable: {
                const { data, title } = section || {};

                layoutSection = (
                    <>
                        <Heading title={title} />
                        <Section>
                            <FeaturesTable data={data} />
                        </Section>
                    </>
                );
                break;
            }

            case SectionType.ComingSoonCardSection: {
                const { data, title } = section || {};

                layoutSection = (
                    <>
                        <Heading title={title} />
                        <CardSectionContainer>
                            <ComingSoonCardSection item={data} />
                        </CardSectionContainer>
                    </>
                );
                break;
            }

            case SectionType.SingleCardSection: {
                const { data } = section || {};

                layoutSection = (
                    <SingleCardContainer>
                        <SingleCardSection item={data} />
                    </SingleCardContainer>
                );
                break;
            }

            case SectionType.AccountOpeningSection: {
                const { data, title } = section || {};

                layoutSection = (
                    <>
                        <Heading title={title} />
                        <Section>
                            <AccountOpeningSection item={data} />
                        </Section>

                    </>
                );
                break;
            }

            case SectionType.TeamSection: {
                const { data, title, description } = section || {};

                layoutSection = (
                    <>
                        <Heading
                            title={title}
                            description={description}
                        />
                        <Section>
                            <TeamSection item={data} />
                        </Section>
                    </>
                );
                break;
            }

            case SectionType.FiCardSection: {
                const { data } = section || {};

                layoutSection = (
                    <FiCardSection item={data} />
                );
                break;
            }

            default:
                return null;
        }

        return layoutSection;
    };

    if (!isSSR && width < WINDOW_SIZE.TAB) {
        return (
            <ViewPortModal
                isOpen
                title='We&apos;re sorry we don&apos;t support this screen size. Please ensure you are viewing this on a desktop with the window maximized.'
            />
        );
    }

    return (
        <StyledContainer>
            <SalaryAccountPosterContainer>
                <PosterComponent item={CONGNIZANT_SALARY_ACCOUNT_DATA.poster} />
            </SalaryAccountPosterContainer>
            <StyledLanding>
                <Wrapper>
                    {CONGNIZANT_SALARY_ACCOUNT_DATA?.section.map((section) => renderSection(section))}
                </Wrapper>
                <SecureMoneySection />
            </StyledLanding>
            <AppFooter />
        </StyledContainer>
    );
};

export default CognizantSalaryAccount;
