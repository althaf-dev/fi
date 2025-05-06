import React from 'react';

import { LoaderOverlay, LoaderContainer, LoaderAnimation, LoaderWithoutOverlay } from './styles';

interface LoaderProps {
    isLoading: boolean;
    hasOverlay?: boolean;
}

const Loader = (props: LoaderProps) => {
    const { isLoading, hasOverlay } = props;

    return (
        hasOverlay ? (
            <LoaderOverlay isLoading={isLoading}>
                <LoaderContainer>
                    <LoaderAnimation />
                </LoaderContainer>
            </LoaderOverlay>
        ) : (
            <LoaderWithoutOverlay isLoading={isLoading}>
                <LoaderContainer>
                    <LoaderAnimation />
                </LoaderContainer>
            </LoaderWithoutOverlay>
        )
    );
};

Loader.defaultProps = {
    hasOverlay: true,
};

export default Loader;
