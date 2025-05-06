import React from 'react';
import styled from 'styled-components';
import { Section, FeatureWrapper } from '../../components';
import { Device } from '../../../../Themes/Device';

const AnimationPlaceholder = styled.div`
    padding: 40px 0px 80px;

    @media ${Device.tab} {
        padding-bottom: 120px;
    }

    @media ${Device.desktop} {
        padding: 40px 0px 200px;
    }
`;

const StyledSection = styled(Section)`
    margin-bottom: 0px;
`;

const InsightsSection = () => (
    <>
        <StyledSection>
            <FeatureWrapper
                title='You gain insights to make better money decisions'
                descriptionLine1='Personal insights to help you build a meaningful relationship with your money and do more.'
            />
        </StyledSection>
        <AnimationPlaceholder>
            {/* <Carousel /> */}
        </AnimationPlaceholder>
    </>
);

export default InsightsSection;
