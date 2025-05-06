/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

const Section = styled.div`
    display: flex;
    align-items: center;
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.GREY_3};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    max-width: 155px;

    @media ${Device.tab} {
        font-size: 24px;
        line-height: 115%;
    }
`;

const ImageHolder = styled.div`
    width: 24px;
    height: 24px;
    margin-left: 6px;
`;

export {
    Description, ImageHolder, Section,
};
