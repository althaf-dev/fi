import React from 'react';
import styled, { keyframes } from 'styled-components';

const CenterAlignContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoaderAnimationKeyframes = keyframes`
    0% {
        background-color: #00B899;
    }
    50%,
    100% {
        background-color: #B9B9B9;
    }
`;

const LoaderAnimation = styled.div`
    position: relative;
    width: 9px;
    height: 9px;
    border-radius: 5px;
    animation: ${LoaderAnimationKeyframes} 1s infinite linear alternate;
    animation-delay: .5s;

    &::before, &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 9px;
        height: 9px;
        border-radius: 5px;
        animation: ${LoaderAnimationKeyframes} 1s infinite alternate;
    }

    &::before {
        left: -16px;
        animation-delay: 0s;
    }

    &::after {
        left: 16px;
        animation-delay: 1s;
    }
`;

const TextHolder = styled.div`
    font-family: Gilroy, sans-seif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${(props) => props.theme.color.MINE_SHAFT};
    margin-top: 43px;
`;

const WealthAadhaarESign = () => (
    <CenterAlignContainer>
        <LoaderAnimation />
        <TextHolder>
            Taking you back to Fi
        </TextHolder>
    </CenterAlignContainer>
);

export default WealthAadhaarESign;
