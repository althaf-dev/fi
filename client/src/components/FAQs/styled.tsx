/**
 * @file FAQs Styled
 */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const Card = styled.div<{ showAnswer?: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: ${(props) => (props.showAnswer ? '20px 20px 0px 0px' : '20px')};
    cursor: pointer;
    margin: ${(props) => (props.showAnswer ? '0px' : '0px auto 16px')};
    padding: 20px 16px 12px;

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

const Questions = styled.div`
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '16px', lineHeight: '115%',
    })};
    color: ${(props) => props.theme.color.MINE_SHAFT};
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

const Answers = styled.div<{ showAnswer: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '14px', lineHeight: '120%',
    })};
    color: ${(props) => props.theme.color.GREY_3};

    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    margin: ${(props) => (props.showAnswer ? '0px auto 16px' : '0px auto')};
    padding: 0px 16px 20px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 500, size: '20px', lineHeight: '120%',
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

const ArrowImageHolder = styled.div`
    width: 16px;
    height: 16px;

    @media ${Device.tab} {
        width: 20px;
        height: 20px;
    }

    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;

export {
    Card,
    QuestionsHolder,
    Questions,
    Answers,
    ArrowImageHolder,
};
