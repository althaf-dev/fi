import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../components/Abstract';
import { Device } from '../../../Themes/Device';

const PosterContent = styled.div`
    padding-top: 40px;
    padding-bottom: 116px;
    max-width: 320px;
    margin: auto;
    text-align: center;

    @media ${Device.tab} {
        padding-top: 90px;
        padding-bottom: 200px;
        max-width: 484px;
    }

    @media ${Device.desktop} {
        padding-top: 40px;
        padding-bottom: 288px;
        max-width: 700px;
    }
`;

const Title = styled(Font)`
    margin-bottom: 15px;

    @media ${Device.desktop} {
        margin-bottom: 30px;
    }
`;

const Description = styled(Font)``;

const PosterSection = () => {
    return (
        <PosterContent>
            <Title font='h1' tagType='h1' color='WHITE'>
                Meet the Team
            </Title>

            <Description font='p' tagType='h2' color='SILVER_2'>
                An eccentric group of individuals, who genuinely believe they can revolutionise money management.
            </Description>
        </PosterContent>
    );
};

export default PosterSection;
