/**
 * @file DecisionFactorsCard Styled
 */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const Card = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 13px;
    padding: 20px 13px;
    margin-bottom: 16px;

    @media ${Device.desktop} {
        border-radius: 50px;
        padding: 40px;
        margin-bottom: 24px;
    }
`;

const HeadingSection = styled.div`
    ${MIXINS.FlexMixin({ justify: 'start' })};
`;

const Title = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '20px' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '32px', lineHeight: '37px' })};
    }
`;

const Symbol = styled.div`
    ${MIXINS.FontMixin({ weight: 700, size: '12px', lineHeight: '16px' })};
    color: ${(props) => props.theme.color.GREY_3};
    margin-left: 4px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 700, size: '24px', lineHeight: '28px' })};
        margin-left: 8px;
    }
`;

const IconHolder = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 4px;

    @media ${Device.desktop} {
        width: 32px;
        height: 32px;
        margin-left: 8px;
    }
`;

export {
    Card,
    HeadingSection,
    Title,
    Symbol,
    IconHolder,
};
