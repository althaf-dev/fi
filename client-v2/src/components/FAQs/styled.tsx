/**
 * @file FAQs Styled
 */
import styled, { css } from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const Card = styled.div<{ showAnswer?: boolean, backgroundColor?: string }>`
    background-color: ${(props) => props.backgroundColor || props.theme.color.WHITE};
    border-radius: ${(props) => (props.showAnswer ? '20px 20px 0px 0px' : '20px')};
    cursor: pointer;
    margin: ${(props) => (props.showAnswer ? '0px' : '0px auto 16px')};
    padding: 20px 16px;
    text-align: start;

    @media ${Device.tab} {
        padding: 32px 24px 20px;
        margin: ${(props) => (props.showAnswer ? '0px' : '0px auto 20px')};
    }

    @media ${Device.desktop} {
        padding: 32px 30px;
        padding: ${(props) => (props.showAnswer ? '32px 30px 24px' : '32px 30px')};
    }
`;

const QuestionsHolder = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
`;

const Questions = styled.div<{questionColor?: string;}>`
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '16px', lineHeight: '115%',
    })};
    color: ${(props) => (props.questionColor ? 'black' : props.theme.color.GOLDEN_3)};
    max-width: 250px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '24px', lineHeight: '115%',
    })};
        max-width: 600px;
    }

    @media ${Device.desktop} {
        max-width: unset;
    }
`;

const Answers = styled.div<{ showAnswer: boolean, backgroundColor?: string, magnifi?: boolean, answerColor?: string; }>`
    background-color: ${(props) => props.backgroundColor || props.theme.color.WHITE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    ${(props) => props.magnifi && css`
    font-weight: 400;
    `}
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '14px', lineHeight: '140%',
    })};
    color: ${(props) => (props.answerColor ? props.answerColor : props.theme.color.WHITE)};
    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    margin: ${(props) => (props.showAnswer ? '0px auto 16px' : '0px auto')};
    padding: 0px 16px 20px;
    text-align: start;

    @media ${Device.tab} {
        ${(props) => props.magnifi && css`
        font-weight: 400;
    `}
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '20px', lineHeight: '140%',
    })};
        padding: 0px 24px 32px;
        margin: ${(props) => (props.showAnswer ? '0px auto 20px' : '0px auto')};
    }

    @media ${Device.desktop} {
        padding: 0px 30px 32px;
        margin: ${(props) => (props.showAnswer ? '0px auto 20px' : '0px auto')};

        & > div:not(:last-child) {
            margin-bottom: 40px;
        }
    }
`;

const ArrowImageHolder = styled.div<{ magnifi?: boolean }>`
    width: ${(props) => (props.magnifi ? '24px' : '16px')};
    height: ${(props) => (props.magnifi ? '24px' : '16px')};

    @media ${Device.tab} {
        width: ${(props) => (props.magnifi ? '20px' : '24px')};
        height: ${(props) => (props.magnifi ? '20xp' : '24px')};
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.magnifi ? '35px' : '24px')};
        height: ${(props) => (props.magnifi ? '19px' : '24px')};
    }
`;

const ExpandableTitle = styled.div`
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 500, size: '16px', lineHeight: '19px',
    })};
    color: ${(props) => props.theme.color.GOLDEN_3};
    text-decoration-line: underline;
    margin: 24px auto 150px auto;
    cursor: pointer;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 500, size: '32px', lineHeight: '38px',
    })};    
    margin: 85px auto 350px auto ;
    }
`;

export {
    Card,
    QuestionsHolder,
    Questions,
    Answers,
    ArrowImageHolder,
    ExpandableTitle,
};
