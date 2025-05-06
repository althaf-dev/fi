import React from 'react';
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import { SVGS_URL } from '@/constants/AssetConstants';

import Image from '../Image/Image';

interface GoogleButtonProps {
    onClick?: () => void;
}

const ButtonHolder = styled.div`
    overflow: hidden;
    width: 182px;
    border-radius: 2px;
    cursor: pointer;

    @media ${Device.desktop} {
        width: 224px;
    }
`;

const GoogleButton = (props: GoogleButtonProps) => (
    // eslint-disable-next-line react/destructuring-assignment
    <ButtonHolder onClick={props.onClick}>
        <Image
            icon={`${SVGS_URL}google-button.svg`}
            alt='google button'
            objectType='contain'
        />
    </ButtonHolder>
);

GoogleButton.defaultProps = {
    onClick: () => {},
};

export default GoogleButton;
