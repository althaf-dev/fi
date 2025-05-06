import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';
import { ContentWrapper, BoldContent } from './SectionStyle';

const TitleText = styled(Font)`
    flex: 1;
`;

const TitleDescription = styled(Font)`
    margin-left: 18px;
    width: 152px;

    @media ${Device.tab} {
        margin-left: 45px;
        width: 450px;
    }

    @media ${Device.desktop} {
        margin-left: 96px;
        width: 760px;
    }
`;

const AllThingsDigitalSection = () => (
    <>
        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Payments - NEFT, RTGS Online
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                <BoldContent>
                    Fee-free
                </BoldContent>
                &nbsp;transactions!
                <br />
                We’re digital – of course, we love online transfers⚡️
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                SMS /Email updates/ Mobile Banking/ Internet Banking
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Stay updated, free of charge.
                <br />
                Get instant notifications the second you pay or get paid.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Digital Debit Card
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Ordered a Visa Debit Card?
                <br />
                Get a ready-to-use virtual card. Immediately 💳
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Payments - UPI / IMPS
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Money management made smarter, not harder.
                <br />
                Swift money transfers: Hassle-free;&nbsp;
                <BoldContent>
                    zero transaction charges.
                </BoldContent>
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Digital Account Statements
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                A free snapshot of the cash in your account!
                Whenever you want one.
            </TitleDescription>
        </ContentWrapper>
    </>
);

export default AllThingsDigitalSection;
