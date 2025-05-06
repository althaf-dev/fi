/**
 * @file B2BSalaryAccountHR styled components
 */

import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { Font } from '../../components';

export const Title = styled(Font)`
    margin-bottom: 30px;
    text-align: center;

    @media ${Device.tab} {
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        margin-bottom: 60px;
    }
`;

export const Description = styled(Font)``;
