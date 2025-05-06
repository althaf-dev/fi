/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';

// use Container styling only for the tab and desktop view
const Container = styled.div`
    position: relative;

    @media ${Device.tab} {
        max-width: 360px;
    }

    @media ${Device.desktop} {
        max-width: 255px;
    }
`;

const Description = styled.span`
    color: ${(props) => props.theme.color.ONYX};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    @media ${Device.tab} {
        color: ${(props) => props.theme.color.GREY_3};
        font-size: 24px;
        line-height: 115%;
        margin-right: 2px;
        vertical-align: middle;
    }
`;

export {
    Container, Description,
};
