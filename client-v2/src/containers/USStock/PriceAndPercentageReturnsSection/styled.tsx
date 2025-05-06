/**
 * @file PriceAndPercentageReturn Styled
 */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const Wrapper = styled.div`
    ${MIXINS.FlexMixin({})};
`;

const CurrentPrice = styled.div`
    ${MIXINS.FontMixin({ weight: 600, lineHeight: '20px' })};
    color: ${(props) => props.theme.color.WHITE};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '32px', lineHeight: '37px' })};
    }
`;

const PercentageReturnsImageHolder = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 1px;
    margin-left: 4px;

    @media ${Device.desktop} {
        width: 20px;
        height: 20px;
        margin-left: 8px;
    }
`;

const PercentageReturnsLabel = styled(CurrentPrice)``;

const ActiveTabLabel = styled(CurrentPrice)`
    color: ${(props) => props.theme.color.LIGHT_GREY};
    margin-left: 4px;

    @media ${Device.desktop} {
        margin-left: 8px;
    }
`;

export {
    Wrapper,
    CurrentPrice,
    PercentageReturnsImageHolder,
    PercentageReturnsLabel,
    ActiveTabLabel,
};
