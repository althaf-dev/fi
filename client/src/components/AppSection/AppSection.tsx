import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Device } from '../../Themes/Device';

const AppSectionContainer = styled.div`
    margin: 0 auto ${(props) => props.theme.spacing.XXL.phone};
    max-width: 360px;

    @media ${Device.tab} {
        margin: 0 auto ${(props) => props.theme.spacing.XXL.tab};
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: 0 85px ${(props) => props.theme.spacing.XXL.desktop};
        max-width: 1440px;
    }
`;

type AppSectionProps = {
    children?: ReactNode;
};

const AppSection = (props: AppSectionProps) => {
    return (
        <AppSectionContainer {...props}>{props.children}</AppSectionContainer>
    );
};

export default AppSection;
