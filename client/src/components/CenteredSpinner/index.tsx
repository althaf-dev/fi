/**
 * @file CenteredSpinner
 *
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Device } from '../../Themes/Device';

// Define a keyframe animation
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const CenteredSpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Create a styled component for the loading circle
const LoadingCircle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.color.WHITE};
    border-top-color: ${(props) => props.theme.color.FOREST_GREEN};
    animation: ${spin} 1s linear infinite;

    @media ${Device.desktop} {
        width: 50px;
        height: 50px;
        border: 6px solid ${(props) => props.theme.color.WHITE};
        border-top-color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const CenteredSpinner = () => (
    <CenteredSpinnerContainer>
        <LoadingCircle />
    </CenteredSpinnerContainer>
);

export default CenteredSpinner;
