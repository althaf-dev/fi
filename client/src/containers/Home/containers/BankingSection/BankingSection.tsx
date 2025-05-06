import React from 'react';
import styled from 'styled-components';

import { Section, FeatureWrapper } from '../../components';
import { Image, Font, Flex } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import { PNGS_URL, SVGS_URL } from '../../../../constants/AssetConstants';

import { BANKING_SECTION_TITLE, BANKING_SECTION_EXTRA_CONTENT, BANKING_SECTION_LABELS } from '../../constants';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

const ContentWrapper = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px 0 60px;

    @media ${Device.tab} {
        flex-direction: column;
    }

    @media ${Device.desktop} {
        flex-direction: row-reverse;
        padding: 80px 0 60px;
    }
`;

const TextWrapper = styled.div`
    @media ${Device.desktop} {
        text-align: left;
        padding: 0;
    }
`;

const ImageHolder = styled.div`
    width: 320px;
    height: 272px;

    @media ${Device.tab} {
        width: 370px;
        height: 315px;
    }

    @media ${Device.desktop} {
        width: 610px;
        height: 520px;
    }
`;

const BankingSection = ({
    variant, nextSection, screenName, parentComponent,
}: any) => (
    <div
        ref={nextSection}
        data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'BankingSection')}
    >
        <Section>
            <FeatureWrapper
                title={BANKING_SECTION_TITLE[variant]}
                screenName={screenName}
                parentComponent='BankingSection'
            >
                <ContentWrapper
                    data-test-id={makeDataTestId(screenName, 'BankingSection', ElementTypes.Container, 'BankingSectionContentWrapper')}
                >
                    <TextWrapper
                        data-test-id={makeDataTestId(screenName, 'BankingSectionContentWrapper', ElementTypes.Container, 'BankingTextWrapper')}
                    >
                        {BANKING_SECTION_LABELS.map((item) => (
                            <React.Fragment key={item.id}>
                                <Font
                                    tagType='h3'
                                    font='headingTagline'
                                    color='SUVA_GREY'
                                    data-test-id={makeDataTestId(screenName, 'BankingTextWrapper', ElementTypes.H1Text, item.label)}
                                >
                                    {item.label}
                                </Font>
                                <br />
                            </React.Fragment>
                        ))}
                        {
                            BANKING_SECTION_EXTRA_CONTENT[variant] ? (
                                <Font
                                    tagType='h3'
                                    font='headingTagline'
                                    color='SUVA_GREY'
                                    data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.H1Text, 'ExtraText')}
                                >
                                    {BANKING_SECTION_EXTRA_CONTENT[variant]}
                                </Font>
                            ) : null
                        }
                    </TextWrapper>
                    <ImageHolder
                        data-test-id={makeDataTestId(screenName, 'BankingSectionContentWrapper', ElementTypes.Container, 'ImageHolder')}
                    >
                        <Image
                            icon={`${SVGS_URL}debit-card-home.svg`}
                            alt='debit-card'
                            loadingType='lazy'
                            fallBackImage={`${PNGS_URL}debit-card.png`}
                            dataTestId={makeDataTestId(screenName, 'ImageHolder', ElementTypes.Image, 'DebitCardSVG')}
                        />
                    </ImageHolder>
                </ContentWrapper>
            </FeatureWrapper>
        </Section>
    </div>
);

export default BankingSection;
