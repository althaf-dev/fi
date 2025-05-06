import React from 'react';
import styled from 'styled-components';

import { Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    max-width: 1440px;
    padding: 30px 30px 0px;

    @media ${Device.tab} {
        padding: 30px 40px 10px;
    }

    @media ${Device.desktop} {
        /* padding: 80px 85px 105px; */
        padding: 40px 85px 60px;
    }
`;

const LogoWrapper = styled.div`
    width: 32px;
    cursor: pointer;

    @media ${Device.tab} {
        width: 42px;
    }

    @media ${Device.desktop} {
        width: 48px;
    }
`;

const RewardsTnCHeader = () => (
    <HeaderWrapper>
        <LogoWrapper>
            <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='Fi Money' />
        </LogoWrapper>
    </HeaderWrapper>
);

export default RewardsTnCHeader;
