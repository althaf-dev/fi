/**
 * @file UsStock Collections Styled
 */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const PosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.SHARK};
`;

const Wrapper = styled.div`
    padding: 20px 30px;
    margin: auto;
    overflow: hidden;

    @media ${Device.tab} {
        padding: 40px;
        max-width: 767px;
    }

    @media ${Device.desktop} {
        padding: 40px 185px;
        max-width: 1440px;
    }
`;

const CollectionDetailsWrapper = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 17px;
    margin-top: 25px;

    @media ${Device.desktop} {
        border-radius: 25px;
        margin-top: 20px;
    }
`;

const DescriptionWrapper = styled.div`
    background-color: ${(props) => props.theme.color.CATSKILL_WHITE};
    border-radius: 17px 17px 0 0;
    margin-bottom: 1px;
    padding: 20px;

    @media ${Device.desktop} {
        border-radius: 25px 25px 0 0;
        padding: 40px;
    }
`;

const Description = styled.div`
    ${MIXINS.FontMixin({ font: 'Inter', size: '16px', lineHeight: '20px', weight: 400 })};
    color: ${(props) => props.theme.color.ABBEY};
    text-align: center;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ font: 'Inter', size: '24px', lineHeight: '29px', weight: 400 })};
    }
`;

const StocksListWrapper = styled.div`
    padding: 17px 14px;
    position: relative;

    @media ${Device.desktop} {
        padding: 24px 40px;
    }
`;

const CenteredSpinnerWrapper = styled.div`
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
`;

export {
    PosterContainer,
    Wrapper,
    CollectionDetailsWrapper,
    StocksListWrapper,
    DescriptionWrapper,
    Description,
    CenteredSpinnerWrapper,
};
