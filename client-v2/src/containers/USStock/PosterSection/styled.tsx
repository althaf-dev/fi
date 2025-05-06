/**
 * @file PosterSection Styled
 */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const Wrapper = styled.div`
    padding: 20px 30px;
    margin: auto;
    overflow: hidden;

    @media ${Device.tab} {
        padding: 40px 30px;
        max-width: 767px;
    }

    @media ${Device.desktop} {
        padding: 40px 185px;
        max-width: 1440px;
    }
`;

const StockInfoSection = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })};
    margin-top: 22px;

    @media ${Device.desktop} {
        margin-top: 44px;
    }
`;

const ImageHolder = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 19px;
    width: 56px;
    height: 56px;
    padding: 12px;
    margin-bottom: 8px;

    @media ${Device.desktop} {
        border-radius: 24px;
        width: 78px;
        height: 78px;
        margin-bottom: 16px;
    }
`;

const StockName = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '24px' })};
    color: ${(props) => props.theme.color.WHITE};
    margin-bottom: 8px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '40px', lineHeight: '105%' })};
        margin-bottom: 16px;
    }
`;

const PriceAndPercentageReturnsSection = styled.div`
    ${MIXINS.FlexMixin({})};
`;

const CurrentPrice = styled.div`
    ${MIXINS.FontMixin({ weight: 600, lineHeight: '20px' })};
    color: ${(props) => props.theme.color.WHITE};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '32px', lineHeight: '37px' })};
    }
`;

const TagsSection = styled.div`
    ${MIXINS.FlexMixin({})};
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;

    @media ${Device.desktop} {
        margin-top: 16px;
    }
`;

const Tag = styled.div`
    ${MIXINS.FontMixin({ font: 'Inter', weight: 600, size: '12px' })};
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    border-radius: 9px;
    color: ${(props) => props.theme.color.GREY_3};
    padding: 4px 10px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ font: 'Inter', weight: 600, size: '24px' })};
        border-radius: 18px;
        padding: 16px;
    }
`;

const TimePeriodsSection = styled.div`
    ${MIXINS.FlexMixin({})};
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 30px;
`;

const TimePeriodTab = styled.button<{ isTabActive: boolean }>`
    ${MIXINS.FontMixin({ font: 'Gilroy', weight: 600, size: '14px' })};
    background-color: ${(props) => (props.isTabActive ? props.theme.color.IVORY : props.theme.color.MINE_SHAFT)};
    border-radius: 12px;
    border: none;
    color: ${(props) => (props.isTabActive ? props.theme.color.FOREST_GREEN : props.theme.color.PORCELAIN)};
    cursor: pointer;
    padding: 8px 12px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '24px', lineHeight: '27px',
    })};
        border-radius: 25px;
        padding: 15px 20px;
    }
`;

const PercentageReturnsImageHolder = styled.div`
    width: 10px;
    height: 10px;
    margin: 0px 1px 0px 4px;

    @media ${Device.desktop} {
        width: 20px;
        height: 20px;
        margin: 0px 1px 0px 8px;
    }
`;

const PercentageReturnsLabel = styled(CurrentPrice)``;

const LineChartContainer = styled.div`
    position: relative;
    margin-top: 25px;
`;

export {
    Wrapper,
    StockInfoSection,
    ImageHolder,
    StockName,
    PriceAndPercentageReturnsSection,
    CurrentPrice,
    TagsSection,
    Tag,
    TimePeriodsSection,
    TimePeriodTab,
    PercentageReturnsImageHolder,
    PercentageReturnsLabel,
    LineChartContainer,
};
