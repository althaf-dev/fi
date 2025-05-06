import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Device } from '../../../Themes/Device';
import { Image } from '../../../components';
import { LOGOS_URL_MAP, ICONS_URL_MAP } from '../../../constants/AssetConstants';

const HeaderHolder = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${Device.desktop} {
        height: 154px;
    }
`;

const LogoHolder = styled.div`
    overflow: hidden;
    width: 40px;
    height: 40px;

    @media ${Device.desktop} {
        width: 50px;
        height: 50px;
    }
`;

const CloseHolder = styled.div`
    overflow: hidden;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    cursor: pointer;
    display: none;

    @media ${Device.desktop} {
        left: 48px;
        width: 52px;
        height: 52px;
    }
`;

interface HeaderProps {
    onClose?: () => void;
    allowRouting?: boolean;
}

const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const { allowRouting, onClose } = props;

    return (
        <HeaderHolder>
            <LogoHolder>
                <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='fi money' objectType='contain' />
            </LogoHolder>
            <CloseHolder
                onClick={() => {
                    if (allowRouting) {
                        navigate('/waitlist');
                    }

                    onClose();
                }}
            >
                <Image icon={ICONS_URL_MAP.CLOSE} alt='close' objectType='contain' />
            </CloseHolder>
        </HeaderHolder>
    );
};

Header.defaultProps = {
    allowRouting: true,
    onClose: () => {},
};

export default Header;
