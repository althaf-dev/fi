import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';
import { Section } from '../AboutStyled/AboutStyled';
import CardOne from './CardOne';
import CardThree from './CardThree';
import CardTwo from './CardTwo';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const CardHolder = styled.div`
    display: grid;
    grid-template-columns: 10px repeat(3, 260px) 10px;
    grid-gap: 30px;
    overflow-x: auto;
    margin-bottom: 40px;

    @media ${Device.tab} {
        grid-template-columns: 40px repeat(3, 260px) 40px;
        grid-gap: 40px;
    }

    @media ${Device.desktop} {
        grid-template-columns: 2px repeat(3, 390px) 2px;
        grid-gap: 60px;
    }
`;

const Wrapper = styled(Section)`
    @media ${Device.desktop} {
        padding-top: 40px;
    }
`;

const TitleHolder = styled(Font)`
    width: 320px;
    margin: auto;
    text-align: center;
    padding: 40px 20px;

    @media ${Device.tab} {
        width: 600px;
        padding: 0 0 60px;
    }
    @media ${Device.desktop} {
        width: 880px;
        padding-bottom: 100px;
    }
`;

const AboutScrollCardSection = () => {
    return (
        <Wrapper>
            <TitleHolder tagType='h2' font='h1' color='MINE_SHAFT'>
                The future of personal finance management is here!
            </TitleHolder>

            <Container>
                <CardHolder>
                    <span></span>
                    <CardOne />
                    <CardTwo />
                    <CardThree />
                    <span></span>
                </CardHolder>
            </Container>
        </Wrapper>
    );
};

export default AboutScrollCardSection;
