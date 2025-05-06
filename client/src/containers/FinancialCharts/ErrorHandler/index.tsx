/**
 * @file ErrorHandler: Error handler for charts.
 */
import React from 'react';
import styled from 'styled-components';

import { PrimaryButton } from '../../../components';

const Container = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`;

const Message = styled.div`
    color: ${(props) => props.theme.color.SUVA_GREY};
    text-align: center;
    width: 280px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

const RetryButton = styled.div`
    width: fit-content;
    text-transform: none !important;
    margin: 20px auto 0px auto;
`;

interface ErrorHandlerProps{
    message: string;
    onClick: () => void;
}

const ErrorHandler = (props: ErrorHandlerProps) => {
    const { message, onClick } = props;

    return (
        <Container>
            <Message>
                {message}
            </Message>
            <RetryButton>
                <PrimaryButton
                    label='Retry'
                    onClick={onClick}
                />
            </RetryButton>
        </Container>
    );
};

export default ErrorHandler;
