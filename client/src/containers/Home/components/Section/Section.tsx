import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Device } from '../../../../Themes/Device';

const SectionContainer = styled.div`
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

type SectionProps = {
    children?: ReactNode;
};

const Section = (props: SectionProps) => {
    return <SectionContainer {...props}>{props.children}</SectionContainer>;
};

export default Section;
