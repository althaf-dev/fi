import React from 'react';
import styled from 'styled-components';

import {
    Font,
} from '../../../components';
import { Device } from '../../../Themes/Device';

const Container = styled.div`
    margin: 0px auto;
    max-width: 360px;

    @media ${Device.tab} {
        max-width: 768px;
    }

    @media ${Device.desktop} {
        max-width: 1440px;
    }
`;

const Content = styled.div`
    padding: 40px 20px;

    @media ${Device.tab} {
        padding: 60px 120px 90px;
        text-align: center;
    }

    @media ${Device.desktop} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 190px;
        padding-bottom: 120px;
    }
`;

const Title = styled(Font)`
    text-align: center;
    margin-bottom: 15px;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 530px;
        margin-bottom: 15px;
    }

    @media ${Device.desktop} {
        max-width: 800px;
        margin-bottom: 30px;
    }
`;

const Description = styled(Font)`
    text-align: center;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 495px;
        margin: auto;
    }

    @media ${Device.desktop} {
        max-width: 718px;
    }
`;

const PosterSection = () => (
    <Container>
        <Content>
            <Title font='h1NormalVariant' tagType='h1' color='MINE_SHAFT'>
                Features that make money management smarter
            </Title>

            <Description font='pNormalVariant' tagType='h2' color='GREY_2'>
                A bunch of intelligent in-app tools that help you know your money, grow your savings,
                and organise your funds.
            </Description>
        </Content>
    </Container>
);

export default PosterSection;
