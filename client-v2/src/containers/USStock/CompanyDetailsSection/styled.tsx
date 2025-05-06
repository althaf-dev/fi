/**
 * @file ComapnyDetails Styled
 */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const Description = styled.div`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '14px', lineHeight: '20px'
    })};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    margin-top: 18px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '24px', lineHeight: '28px'
    })};
        margin-top: 24px;
    }
`;

const DetailsWrapper = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
    flex-wrap: wrap;
    margin-top: 16px;

    @media ${Device.desktop} {
        margin-top: 24px;
    }
`;

const Text = styled.div`
    ${MIXINS.FontMixin({ font: 'Gilroy', weight: 600, size: '12px' })};
    color: ${(props) => props.theme.color.GREY_3};
    margin-bottom: 4px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '20px', lineHeight: '24px'
    })};
        margin-bottom: 16px;
    }
`;

const Value = styled.div`
    ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '14px', lineHeight: '20px'
    })};
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 400, size: '24px', lineHeight: '28px'
    })};
    }
`;

const Detail = styled.div`
    width: 90px;
    align-self: start;

    @media ${Device.desktop} {
        width: 312px;
    }
`;

export {
    Description,
    DetailsWrapper,
    Detail,
    Text,
    Value,
};
