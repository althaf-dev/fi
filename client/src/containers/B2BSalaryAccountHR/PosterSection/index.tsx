/**
 * @file B2BSalaryAccountHR Poster Section
 */

import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';
import SalaryProgramSection from '../SalaryProgramSection';
import MIXINS from '../../../Themes/mixins';
import { DEMO_SECTION_ID_DESKTOP, PAGE_TYPE } from '../constant';

const Section = styled.div`
    text-align: center;
    overflow: hidden;
    width: 320px;
    margin: auto;
    height: auto;
    position: relative;

    @media ${Device.tab} {
        width: 529px;
    }

    @media ${Device.desktop} {
        width: 100%;
    }
`;

const SalaryAccountPosterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    @media ${Device.desktop} {
        gap: 103px;
        margin-top: 62px;
        margin-bottom: 143px;
    }
`;

const ContentHolder = styled.div`
    margin: auto;
    max-width: 100%;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
    }
`;

const Title = styled(Font)`
    margin: 0px auto;
    padding: ${(props) => (props?.type && props?.type === PAGE_TYPE.sme.label ? '18px' : '20px')};
    color: ${(props) => props.theme.color.FOREST_GREEN};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '28px',
        lineHeight: '33px',
    })};

    @media ${Device.tab} {
        max-width: 529px;
        padding: 30px;
    }

    @media ${Device.desktop} {
        max-width: 85%;
        margin: 0px auto;
        ${MIXINS.FontMixin({
        size: '48px',
        lineHeight: '50px',
    })};
    }
`;

const Description = styled(Font)`
    max-width: 80%;
    margin: 0px auto 24px;
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'inter',
        weight: 500,
        size: '16px',
        lineHeight: '24.8px',
    })};

    @media ${Device.tab} {
        margin: 0px auto 48px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 60px;
        ${MIXINS.FontMixin({ size: '24px', lineHeight: '40px' })};
    }
`;

const SalaryProgramSectionDesktop = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        margin-top: 0px;
    }
`;

const BenifitsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    padding-bottom: 32px;
    width: 285px;

    @media ${Device.desktop} {
        gap: 70px;
        padding-bottom: 0;
        width: auto;
    }
`;

const Icon = styled.img`
    height: 39px;
    width: 39px;

    @media ${Device.desktop} {
        height: 70px;
        width: 70px;
    }
`;

const Label = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '14px',
        lineHeight: '21px',
    })};
    text-align: left;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '37px',
    })};
    }
`;

const Caption = styled.div`
    color: ${(props) => props.theme.color.SUVA_GREY};
    ${MIXINS.FontMixin({
        font: 'inter',
        weight: 400,
        size: '11px',
        lineHeight: '19px',
    })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '20px',
        lineHeight: '34px',
    })};
    }
`;

const Wrapper = styled.div`
    display: flex;
    gap: 26px;

    @media ${Device.desktop} {
        gap: 34px;
    }
`;

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

interface IPosterSectionProps {
    type: string,
    data: {
      title: string;
      description: string;
      ctaButtonData: {
          btnLabel: string;
          btnUrl: any;
      };
      benefitsData: {
          id?: number;
          title?: string;
          description?: string;
          icon?: string;
      }[];
    };
}

const PosterSection = (props: IPosterSectionProps) => {
    const { data, type } = props;
    const { title, description, benefitsData } = data;

    return (
        <Section id={DEMO_SECTION_ID_DESKTOP}>
            <ContentHolder>
                <Title font='h1' tagType='h1' color='WHITE' type={type}>
                    {title}
                </Title>

                <Description font='p' tagType='h2' color='SILVER_2'>
                    {description}
                </Description>

                <SalaryAccountPosterWrapper>
                    <BenifitsSection>
                        {benefitsData.map((Data) => (
                            <Wrapper>
                                <Icon src={Data.icon} />
                                <SubWrapper>
                                    <Label>{Data.title}</Label>
                                    <Caption>{Data.description}</Caption>
                                </SubWrapper>
                            </Wrapper>
                        ))}
                    </BenifitsSection>
                    <SalaryProgramSectionDesktop>
                        <SalaryProgramSection data={data} type={type} />
                    </SalaryProgramSectionDesktop>

                </SalaryAccountPosterWrapper>
            </ContentHolder>
        </Section>
    );
};

export default React.memo(PosterSection);
