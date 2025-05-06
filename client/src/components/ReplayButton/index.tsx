// moved this from Home container
import React from 'react';
import styled from 'styled-components';

import { SVGS_URL } from '../../constants/AssetConstants';

import { Font, Image } from '../Abstract';

const StyledReplayButton = styled(Font)`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    cursor: pointer;
`;

const ImageHolder = styled.span`
    height: 40px;
    width: 40px;
`;

interface ReplayButtonProps {
    onClick?: () => void;
}

const ReplayButton = (props: ReplayButtonProps) => {
    const { onClick } = props;

    return (
        <StyledReplayButton
            onClick={onClick}
            font='p3'
            tagType='span'
            color='WHITE'
        >
            Replay&nbsp;
            <ImageHolder>
                <Image loadingType='lazy' icon={`${SVGS_URL}refresh-white.svg`} />
            </ImageHolder>
        </StyledReplayButton>
    );
};

ReplayButton.defaultProps = {
    onClick: () => {},
};

export default ReplayButton;
