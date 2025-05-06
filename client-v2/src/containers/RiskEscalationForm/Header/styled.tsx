import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

export const PrevHolder = styled.div`
    cursor: pointer;
    position: absolute;
    left: 15px;
    top: 0px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    padding: 5px;
    z-index: 10;

    @media ${Device.tab} {
        width: 40px;
        height: 40px;
        left: 0px;
        border-radius: 50%;
        background: white;
        padding: 8px;
    }

    @media ${Device.desktop} {
        width: 36px;
        height: 36px;
        left: 0px;
        border-radius: 50%;
        background: white;
        padding: 8px;
    }
`;

export const HeaderHolder = styled.div`
    ${MIXINS.FlexMixin({})};
    margin-bottom: 10px;
    margin-top: 18px;

    @media ${Device.desktop} {
        margin-bottom: 10px;
    }

    .header-title{
        font-family: Gilroy;
        font-size: 20px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
    }
`;
