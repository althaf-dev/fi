'use client'
import React from 'react';
import CardOne from './CardOne/CardOne';
import CardThree from './CardThree/CardThree';
import CardTwo from './CardTwo/CardTwo';
import { CardHolder, Wrapper, TitleHolder, Container } from './Styled';

const AboutScrollCardSection = () => (
    <Wrapper>
        <TitleHolder tagType='h2' font='h1' color='MINE_SHAFT'>
            The future of personal finance management is here!
        </TitleHolder>

        <Container>
            <CardHolder>
                <span />
                <CardOne />
                <CardTwo />
                <CardThree />
                <span />
            </CardHolder>
        </Container>
    </Wrapper>
);

export default AboutScrollCardSection;
