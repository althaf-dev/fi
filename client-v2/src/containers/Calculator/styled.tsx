/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { PosterContainer, Font } from '../../components';
import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

import { ComponentType } from './constants';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 767px;
    margin: 0px auto;
    padding: 20px 30px;

    @media ${Device.tab} {
        padding: 40px;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1440px;
        padding: 80px 180px;
    }
`;

const CalculatorPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.DARK_GREY};
`;

const AdditionalInformationWrapper = styled.div`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
`;

const AdditionalInformationContainer = styled.div`
    max-width: 767px;
    margin: 0px auto;
    padding: 40px 30px 40px;

    @media ${Device.tab} {
        max-width: 768px;
    }

    @media ${Device.desktop} {
        max-width: 1440px;
        padding: 80px 185px 100px;
    }

    & > div:last-child {
        margin-bottom: 0px;
    }
`;

const AdditionalInformationSection = styled.div`
    margin-bottom: 40px;

    @media ${Device.desktop} {
        margin-bottom: 60px;
    }
`;

const Title = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.45px;
    margin-bottom: 20px;

    @media ${Device.tab} {
        font-size: 26px;
        margin-bottom: 24px;
    }

    @media ${Device.desktop} {
        font-size: 30px;
    }
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.SUVA_GREY};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155%;

    @media ${Device.tab} {
        font-size: 20px;
        line-height: 140%;
    }

    @media ${Device.desktop} {
        font-size: 24px;
    }
`;

const ContentSection = styled.div<{ showComponentInsideStickyGraph?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: ${(props) => (props.showComponentInsideStickyGraph ? '0px auto' : '0px')};

    @media ${Device.tab} {
        width: 100%;
        margin: 0px;
    }
`;

const ContentSectionVOne = styled.div`
    width: 100%;
`;

const LeftSection = styled.div`
    width: 100%;

    @media ${Device.desktop} {
        width: 496px;
        padding-inline: 5px;
    }
`;

const RightSection = styled.div`
    @media ${Device.desktop} {
        ${MIXINS.FlexMixin({ dir: 'column', justify: 'space-between' })};
        min-height: 564px; 
    }
`;

const LeftSectionVOne = styled.div`
    width: 100%;

    @media ${Device.desktop} {
        width: 334px;
    }
`;

const CalculatorInputsSection = styled.div<{ componentType?: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => (props.componentType === ComponentType.TextLabelWithIcon ? '0px' : '40px')};

    @media ${Device.tab} {
        flex-direction: column;
        margin-bottom: ${(props) => (props.componentType === ComponentType.TextLabelWithIcon ? '0px' : '40px')};
    }

    @media ${Device.desktop} {
        display: block;
        margin-bottom: 48px;
    }

    &:last-child {
        margin-bottom: 0px;
    }
`;

const CalculatorInputsSectionVOne = styled(CalculatorInputsSection)`
    display: block;
`;

const StickyGraphSection = styled.div<{ graphView: boolean }>`
    background: ${(props) => props.theme.color.LIGHTER_GREY};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px 24px 0px 0px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    text-align: center;
    padding: 8px 24px 16px;
    transition: height 1s;
    max-height: 90%;
    overflow: scroll;
    // height: ${(props) => (props.graphView ? '465px' : '120px')};
`;

const ViewButton = styled.div<{ graphView: boolean }>`
    color: ${(props) => props.theme.color.GREY_3};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.0357143em;
    text-transform: uppercase;
    margin-top: ${(props) => (props.graphView ? '0px' : '20px')};
`;

const GraphOutput = styled.div<{ hasMobileDesignV1: boolean }>`
    color: ${(props) => props.theme.color.WHITE};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: ${(props) => (props.hasMobileDesignV1 ? '13px' : '20px')};
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.45px;
    max-width: 300px;
    margin: 12px auto 0px;
`;

const OverlayContainer = styled.div<{ graphView: boolean }>`
    position: ${(props) => (props.graphView ? 'fixed' : 'relative')};
    inset: 0px;
    background-color: ${(props) => (props.graphView ? 'rgba(40, 40, 40, 0.8)' : 'none')};
`;

const ToolTipDescription = styled.div<{ componentType: string }>`
    color: ${(props) => props.theme.color.STEEL};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    width: ${(props) => (props.componentType === 'dropdown' || props.componentType === 'dropdown_and_input' ? 'unset' : '360px')};
    margin: 0px auto;
    padding: ${(props) => (props.componentType === 'slider_and_input' ? '30px 24px 24px' : '16px 20px 16px')};

    @media ${Device.tab} {
        width: unset;
        text-align: center;
    }
`;

const ErrorContainer = styled.div`
    color: ${(props) => props.theme.color.WARNING_COLOR};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 8px;
    text-align: center;
    width: 100%;

    @media ${Device.tab} {
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        margin-top: 16px;
        text-align: left;
    }
`;

const ArrowImageHolder = styled.div`
    width: 16px;
    height: 16px;
    margin: 0px auto;
`;

const ButtonHolder = styled.div`
    width: 80px;
    margin: 0px 24px 16px auto;
    float: right;
`;

const Separator = styled.hr`
    margin: 30px auto;

    @media ${Device.tab} {
        margin: 40px auto;
    }

    @media ${Device.desktop} {
        margin: 60px auto;
    }
`;

const Disclaimer = styled.div`
    color: ${(props) => props.theme.color.GREY_3};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 155%;

    @media ${Device.tab} {
        font-size: 16px;
        line-height: 140%;
    }

    @media ${Device.desktop} {
        font-size: 20px;
    }
`;

const OutputContainer = styled.div`
    background-color: ${(props) => props.theme.color.IVORY};
    border-radius: 29px;
    width: 306px;
    margin: 40px auto 0px;
    padding: 24px;

    @media ${Device.tab} {
        margin: 48px auto 0px;
        width: 660px;
        padding: 40px 60px;
    }

    @media ${Device.desktop} {
        margin: 0px;
        width: 464px;
    }
`;

const OutputContainerVOne = styled(OutputContainer)`
    background-color: ${(props) => props.theme.color.NERO};
    border-radius: 19px;
    width: 100%;

    @media ${Device.desktop} {
        border-radius: 28px;
        margin: 0px;
        padding: 35px 45px;
        width: 395px;
    }
`;

const Output = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.45px;

    @media ${Device.tab} {
        font-size: 32px;
        line-height: 38px;
    }

    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 36px;
    }
`;

const CalculatorCtaWrapper = styled.div`
    background-color: ${(props) => props.theme.color.DARK_GREY};
    border-radius: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    height: 140px;
    position: relative;

    @media ${Device.desktop} {
        margin-bottom: 60px;
        height: 280px;
    }
`;

const CtaHeadingAndButtonWrapper = styled.div`
    padding-left: 20px;

    @media ${Device.desktop} {
        padding-left: 60px;
    }
`;

const CtaHeading = styled(Font)`
    width: 157px;
    text-align: start;
    margin-bottom: 12px;

    @media ${Device.tab} {
        width: 622px;
        margin-bottom: 20px;
    }
`;

const ButtonContainer = styled.button`
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
    border-radius: 11px;
    cursor: pointer;
    padding: 6px 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media ${Device.desktop} {
        border-radius: 19px;
        padding: 14px 25px;
    }
`;

const ArrowHolder = styled.div`
    width: 16px;
    height: 16px;

    @media ${Device.desktop} {
        width: 28px;
        height: 28px
    }
`;

const ButtonText = styled(Font)``;

const ImageWrapper = styled.div`
    width: 142px;
    height: 142px;
    position: absolute;
    top: -1px;
    right: -1px;

    @media ${Device.desktop} {
        width: 282px;
        height: 282px;
    }
`;

const TextLabelWrapper = styled.div`
    @media ${Device.tab} {
        width: 100%;
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        margin-bottom: 0px;
    }
`;

const PositionWrapper = styled.div`
    width: 100%;

    @media ${Device.desktop} {
        width: unset;
        position: sticky;
        top: 75px;
    }
`;

const GraphBottomInputFields = styled.div`
    margin-top: 32px;

    @media ${Device.tab} {
        margin-top: 60px;
    }

    @media ${Device.desktop} {
        margin-top: 92px;
    }
`;

const MobileSectionWrapper = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    max-width: 767px;
    padding: 20px 16px;
`;

const MobileCalculatorLabel = styled(Font)`
    text-align: center;
`;

const MobileCalculatorToolTipInfo = styled(Font)`
    text-align: center;
    max-width: 290px;
    margin: 12px auto 0px;
`;

const CtaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 40px;
`;

const CalculatorAccordionWrapper = styled.div`
    margin-top: 20px;
    width: 100%;

    @media ${Device.tab} {
        margin-top: 52px;
    }
`;

const MobileContentWrapper = styled.div<{ hasNestedItem?: boolean }>`
    margin-bottom: ${(props) => (props.hasNestedItem ? '0px' : '48px')};
`;

const NestedItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media ${Device.tab} {
        flex-direction: column;
        margin-bottom: 30px;
    }

    &:last-child {
        margin-bottom: 0px;
    }
`;

const TableWrapper = styled.div`
    margin: 48px auto 0px;

    @media ${Device.desktop} {
        margin: 100px auto 0px;
    }
`;

const CalculatorWrapper = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'space-between' })};
    border-radius: 19px;
    background: ${(props) => props.theme.color.MINE_SHAFT};
    padding: 24px 10px;

    @media ${Device.desktop} {
        ${MIXINS.FlexMixin({ justify: 'space-between' })};
        border-radius: 28px;
        padding: 40px 77px;
    }
`;

const SectionVOne = styled.div`
    margin: 40px auto 60px;

    @media ${Device.tab} {
        margin: 40px auto 100px;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        margin: 40px auto 180px;
        max-width: 1440px;
    }
`;

const ValuebackWrapper = styled.div`
    padding: 0px 30px;

    @media ${Device.tab} {
        padding: 0px 40px;
    }

    @media ${Device.desktop} {
        padding: 0px 85px;
    }
`;

const ValuebackBreadcrumbs = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 28px;
`;

const BreadcrumbText = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '110%' })};
    color: ${(props) => props.theme.color.STEEL};
    text-transform: uppercase;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 700, size: '16px', lineHeight: '14px' })};
    }
`;

const ValuebackImageHolder = styled.div`
    width: 12px;
    height: 12px;

    @media ${Device.desktop} {
        width: 16px;
        height: 16px;
    }
`;

const ValuebackTitle = styled.h1`
    ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '120%' })};
    background: radial-gradient(58.67% 608.02% at 53.49% 112.24%,
        ${(props) => props.theme.color.WHITE} 0%, ${(props) => props.theme.color.DUSTY_GRAY} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: left;
    margin-bottom: 16px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '64px', lineHeight: '76px' })};
        margin-bottom: 12px;
    }
`;

const ValuebackDescription = styled.div`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '16px', lineHeight: '155%',
    })};
    color: ${(props) => props.theme.color.SILVER_2};
    text-align: left;
    margin-bottom: 45px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '24px', lineHeight: '140%',
    })};
        margin-bottom: 80px;
    }
`;

const ValubackCalculatorTitle = styled.div`
    ${MIXINS.FontMixin({ weight: 500, size: '16px', lineHeight: '19px' })};
    color: ${(props) => props.theme.color.WHITE};
    text-align: left;
    margin-bottom: 21px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '40px', lineHeight: '48px' })};
        margin-bottom: 40px;
    }
`;

export {
    Container, Section, CalculatorPosterContainer,
    AdditionalInformationWrapper, AdditionalInformationContainer, AdditionalInformationSection, Title, Description,
    ContentSection, LeftSection, CalculatorInputsSection, StickyGraphSection, ViewButton, GraphOutput,
    OverlayContainer, ToolTipDescription, ErrorContainer, ArrowImageHolder, ButtonHolder, Separator, Disclaimer,
    OutputContainer, Output, CalculatorCtaWrapper, CtaHeadingAndButtonWrapper, CtaHeading, ImageWrapper,
    ButtonContainer, ButtonText, ArrowHolder, TextLabelWrapper, PositionWrapper, GraphBottomInputFields,
    MobileCalculatorLabel, MobileCalculatorToolTipInfo, CtaWrapper, MobileSectionWrapper,
    CalculatorAccordionWrapper, MobileContentWrapper, NestedItemWrapper, ContentSectionVOne, CalculatorInputsSectionVOne,
    OutputContainerVOne, TableWrapper, CalculatorWrapper, LeftSectionVOne, SectionVOne, ValuebackWrapper,
    ValuebackBreadcrumbs, BreadcrumbText, ValuebackImageHolder, ValuebackTitle, ValuebackDescription,
    ValubackCalculatorTitle, RightSection,
};
