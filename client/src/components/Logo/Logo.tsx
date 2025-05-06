// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { LOGOS_URL_MAP } from '../../constants/AssetConstants';

import { Image } from '../Abstract';

const LogoWrapper = styled.div`
    width: 32px;
    height: 32px;
    margin: 20px auto 30px;

    @media ${Device.desktop} {
        width: 52px;
        height: 52px;
        margin: 60px auto 40px;
    }
`;

const Logo = () => (
    <LogoWrapper>
        <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='logo' />
    </LogoWrapper>
);

export default Logo;
