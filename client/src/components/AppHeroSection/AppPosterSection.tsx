import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { AppSection } from '../index';
import { Device } from '../../Themes/Device';

const HeaderSection = styled(AppSection)`
    padding-bottom: 40px;
    margin-right: auto;
    margin-left: auto;

    @media ${Device.desktop} {
        padding-bottom: 80px;
    }
`;

const Wrapper = styled.div`
    width: 100%;

    @media ${Device.desktop} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 85px;
    }
`;

const AnimationPlaceholder = styled.div<{ posterGrid: ReactNode }>`
    display: ${(props) => (props.posterGrid ? 'flex' : 'block')};
    justify-content: ${(props) => (props.posterGrid ? 'center' : 'initial')};

    width: 320px;
    height: 300px;
    margin: auto;

    @media ${Device.tab} {
        width: 398px;
        height: 398px;
    }

    @media ${Device.desktop} {
        width: 100%;
        height: 514px;
        margin: 0;
        flex-basis: 540px;
        min-width: 540px;
        justify-content: ${(props) => (props.posterGrid ? 'flex-end' : 'initial')};
    }
`;

interface AppPosterSectionProps {
    children?: ReactNode;
    posterGrid?: ReactNode;
}

const AppPosterSection = (props: AppPosterSectionProps) => {
    const { children, posterGrid } = props;

    return (
        <HeaderSection>
            <Wrapper>
                {children}
                <AnimationPlaceholder posterGrid={posterGrid}>
                    {posterGrid}
                </AnimationPlaceholder>
            </Wrapper>
        </HeaderSection>
    );
};

AppPosterSection.defaultProps = {
    children: null,
    posterGrid: null,
};

export default AppPosterSection;
