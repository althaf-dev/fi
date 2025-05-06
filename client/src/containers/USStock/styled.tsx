/**
 * @file UsStock Styled
 */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const USStockPosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.SHARK};
`;

const Wrapper = styled.div`
    padding: 20px 30px 0px;
    max-width: 767px;
    margin: auto;

    @media ${Device.desktop} {
        padding: 40px 185px 0px;
        max-width: 1440px;
    }
`;

const SectionContainer = styled.div`
    margin-top: 30px;

    @media ${Device.desktop} {
        margin-top: 100px;
    }
`;

const SectionTitle = styled.div<{ textAlign?: string }>`
    margin-bottom: 30px;
    text-align: ${(props) => props.textAlign || 'center'};
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '18px', lineHeight: '110%',
    })};
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 500, size: '48px', lineHeight: '105%',
    })};
        margin-bottom: 40px;
    }
`;

const ButtonHolder = styled.div`
    margin: 30px auto 0px;
    max-width: 300px;

    @media ${Device.tab} {
        margin: 60px auto 0px;
    }

    @media ${Device.desktop} {
        margin: 80px auto 0px;
    }
`;

export {
    USStockPosterContainer,
    Wrapper,
    SectionContainer,
    SectionTitle,
    ButtonHolder,
};
