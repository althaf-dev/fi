/**
 * @file ErrorBoundary.tsx: Error Boundary for Fi Minutes
 */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../../../Themes/Colors';
import MIXINS from '../../../Themes/mixins';
import { FI_MINUTES_URL_MAP } from '../../../constants/AssetConstants';

import { IconContainer, TextVar15, TextVar19 } from '../styled';

const ErrorContainer = styled.div`
    height: 100% !important;
    padding: 2.5vh 2vh;
    margin-top: 32px;
    ${MIXINS.FlexMixin({ dir: 'column' })};
`;

interface IErrorBoundaryState {
    errorInfo: any;
}

interface IErrorBoundaryProps {
    children: any;
}

export default class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = { errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo,
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorContainer>
                    <IconContainer src={FI_MINUTES_URL_MAP.ERROR_BOUNDARY} width='100px' height='100px' />
                    <TextVar15 color={Colors.WHITE}>Something went wrong.</TextVar15>
                    <TextVar19 color={Colors.GRAY}>We couldn’t load all your data right now. Please try again later.</TextVar19>
                </ErrorContainer>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
