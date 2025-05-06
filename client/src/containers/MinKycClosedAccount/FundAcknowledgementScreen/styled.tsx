/**
 * @file Min KYC closed account info page styles
 */

import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { CenterText } from '../../../components';

export const AccountShowingContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 50px;
`;

export const SubText = styled(CenterText)`
    margin: 0px 20px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${Device.tab} {
        margin: 10px auto;
        padding: 0px 5px;
    }

    @media ${Device.desktop} {
        margin: 10px auto;
        padding: 0px 5px;
    }
`;
