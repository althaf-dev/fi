import styled, { keyframes } from 'styled-components';

import { Device } from '../../Themes/Device';

const LoaderOverlay = styled.div<{isLoading: boolean}>`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    display: ${(props) => (props.isLoading ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.95;
    z-index: 99;
`;

const LoaderWithoutOverlay = styled.div<{isLoading: boolean}>`
    width: 100%;
    height: 100%;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const LoaderAnimationKeyframes = keyframes`
    0% {
        background-color: #00B899;
    }
    50%,
    100% {
        background-color: #FDFDFD;
    }
`;

const LoaderAnimation = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #FDFDFD;
    color: #FDFDFD;
    animation: ${LoaderAnimationKeyframes} 1s infinite linear alternate;
    animation-delay: .5s;

    @media ${Device.desktop} {
        width: 15px;
        height: 15px;
        border-radius: 10px;
    }

    &::before, &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #FDFDFD;
        color: #FDFDFD;
        animation: ${LoaderAnimationKeyframes} 1s infinite alternate;

        @media ${Device.desktop} {
            width: 15px;
            height: 15px;
            border-radius: 10px;
        }
    }

    &::before {
        left: -25px;
        animation-delay: 0s;
    }

    &::after {
        left: 25px;
        animation-delay: 1s;
    }
`;

export {
    LoaderOverlay,
    LoaderContainer,
    LoaderAnimation,
    LoaderWithoutOverlay,
};
