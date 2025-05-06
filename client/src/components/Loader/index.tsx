import React from 'react';

import {
    LoaderOverlay, LoaderContainer, LoaderAnimation, LoaderWithoutOverlay, LoaderWithTextContainer, LoaderTextContainer,
} from './styles';

interface LoaderProps {
    isLoading: boolean;
    hasOverlay?: boolean;
    text?: string;
}

const Loader = (props: LoaderProps) => {
    const { isLoading, hasOverlay, text } = props;

    return (
        hasOverlay ? (
            <LoaderOverlay isLoading={isLoading}>
                <LoaderContainer>
                    <LoaderWithTextContainer>
                        <LoaderTextContainer
                            font='h6VariantOne'
                            tagType='text'
                            color='WHITE'
                        >
                            {text}
                        </LoaderTextContainer>
                        <LoaderAnimation />
                    </LoaderWithTextContainer>
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
    text: '',
};

export default Loader;
