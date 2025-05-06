/**
 * @file Min KYC closed account info page styles
 */

import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { CenterText } from '../../../components';

export const AccountShowingContainer = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 50px;
`;

export const LabelLight = styled('div')`
    color: #a4a4a4;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px
`;

export const InputText = styled('div')`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 2px;
`;

export const LogoHolder = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 100px;
    background-color: white;
    padding: 10px;
    margin: 10px 12px;

    @media ${Device.tab} {
        width: 42px;
        height: 42px;
    }

    @media ${Device.desktop} {
        width: 40px;
        height: 40px;
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;

    @media ${Device.desktop} {
        gap: 12px;
    }
`;

export const SubText = styled(CenterText)`
    margin: 0px 5px;
    padding: 0px 5px;

    @media ${Device.tab} {
        margin: 50px auto;
        padding: 0px 20px;
    }

    @media ${Device.desktop} {
        margin: 50px auto;
        padding: 0px 10px;
    }
`;
