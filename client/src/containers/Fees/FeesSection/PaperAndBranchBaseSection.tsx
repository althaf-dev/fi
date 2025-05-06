import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FEDERAL_SERVICE_CHARGES_URL, NAVIGATION_URLS } from '../../../constants/AppConstant';
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

const ColoredSpan = styled.span<{ color: 'FOREST_GREEN' }>`
    color: ${(props) => props.theme.color[props.color]};
    text-decoration: underline;
`;

const PaperAndBranchBaseSection = () => (
    <>
        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Chequebook
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Since you’re on Fi, there’s very little need for chequebooks.
                But in case you really want it, here are two things to keep in mind:
                <br />
                <br />
                - Only&nbsp;
                <BoldContent>
                    full-KYC users
                </BoldContent>
                &nbsp;can send us a chequebook request.
                <br />
                <br />
                <BoldContent>
                    Standard / Regular:
                </BoldContent>
                &nbsp; For&nbsp;
                <BoldContent>
                    ₹100,
                </BoldContent>
                &nbsp;we’ll deliver a chequebook with&nbsp;
                <BoldContent>
                    10 cheque leaves.
                </BoldContent>
                <br />
                <br />
                <BoldContent>
                    Plus / Salary / Infinite & Prime:
                </BoldContent>
                &nbsp;Your first chequebook with 10 leaves is on us. Subsequent chequebooks with 10 leaves will cost ₹100.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Demand Draft
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Chances that you’ll require a Demand Draft (DD) are slim to none.
                However, if you need one, just holler!
                <br />
                <br />
                DDs for upto ₹1 lakh per quarter are fee-free 🗞
                <br />
                For all DD-related fees, go to page 8 of this&nbsp;
                <a href={FEDERAL_SERVICE_CHARGES_URL} target='_blank' rel='noreferrer'>
                    <ColoredSpan color='FOREST_GREEN'>document</ColoredSpan>
                </a>
                .
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Stop Cheque Payment charges
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Want to stop a cheque from getting processed? Let our
                Customer Care Centre know, and we can make it happen.
                <br />
                <br />
                The charges for that are&nbsp;
                <BoldContent>
                    ₹100 per cheque.
                </BoldContent>
                <br />
                Or ₹500 for a series of three cheques or more.
                <br />
                <Link to={NAVIGATION_URLS.CONTACT_US.url}>
                    <ColoredSpan color='FOREST_GREEN'>Customer Care Centre</ColoredSpan>
                </Link>
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Physical Signed Account Statement Delivery
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Working on your visa or loan application? You might need a
                signed banking statement.
                <br />
                <br />
                {/* If you want us to, we’ll sign & deliver&nbsp;
                <BoldContent>
                    one free statement
                </BoldContent>
                &nbsp;(per month). Need more than one? There’s a ₹100 fee.
                <br />
                For every 40 transactions listed, we charge an additional ₹100.
                There is a fee of
                <BoldContent> ₹100 + GST </BoldContent>
                per page. The charges are capped at
                <BoldContent> ₹500 + GST</BoldContent>
                .
                This means, even if your statement is more than 5 pages, you will only be charged
                <BoldContent> ₹500 + GST</BoldContent>
                . */}
                If you want us to, our Partner Bank will sign & deliver one free statement (per month). Need more than one? There’s a ₹100 fee.
                For every 40 transactions listed, an additional ₹100 gets charged.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Balance Certificate
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Need to produce a ’Proof of Funds’ document?
                <br />
                We can send you an official Balance Certificate 📜
                <br />
                <br />
                In fact, we’ll deliver it to your doorstep.
                <br />
                All this for just&nbsp;
                <BoldContent>
                    ₹100!
                </BoldContent>
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Interest Certificate
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                This certificate verifies how much interest you earned.
                <br />
                Centred specifically on your savings account & Fixed/Smart deposits.
                <br />
                <br />
                If you need one, we’ll send one for free on a yearly basis. Need more, we charge you&nbsp;
                <BoldContent>
                    ₹100 per interest certificate.
                </BoldContent>
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Other Bank ATMs Transactions decline charges (due to insufficient funds, Transaction Channel Deactivated,
                Incorrect PIN and Blocked due to excessive PIN tries, withdrawal failure in your account).
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                You can check your balance (for free) anytime on the Fi app!
                <br />
                So, there’s only a ghost of a chance that this scenario may happen👻
                <br />
                <br />
                In any case, there’s a fee of ₹25 for every transaction decline at any bank
                ATM within India and ₹200 for every transaction decline at any bank ATM outside India.
                <br />
                <br />
                So ensure you have sufficient funds before trying to withdraw.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Outward return charges
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                If the cheque bounces -
                <br />
                * First time: ₹125;
                <br />
                * Second time: ₹250;
                <br />
                * Three or more times: ₹500.
                <br />
                <br />
                Note: Every financial quarter (3 months), the fee cycle is
                reset.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Inward return charges
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Fi users have the option of submitting cheques as well. In an unlikely scenario, if a cheque gets
                returned there’s a fee.
                <br />
                <br />
                It’s called an Inward Return Charge, and it’s&nbsp;
                <BoldContent>
                    ₹150.
                </BoldContent>
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Collection of cheques (outstation)/Inward LCC
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Our banking partner is willing to collect cheques from
                users.
                <br />
                There’s a fee involved for processing these cheques.
                <br />
                <br />
                It starts from ₹15 onwards. Read more on page 5 of this&nbsp;
                <a href={FEDERAL_SERVICE_CHARGES_URL} target='_blank' rel='noreferrer'>
                    <ColoredSpan color='FOREST_GREEN'>document</ColoredSpan>
                </a>
                .
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                ECS/NACH
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                National Automated Clearing House (NACH) & Electronic
                Clearing Service (ECS).
                <br />
                <br />
                They help complete high-volume, interbank online transfers
                that are fixed and periodic! Think regular EMIs, loan
                repayments, and so on. Turn to page 6 of this&nbsp;
                <a href={FEDERAL_SERVICE_CHARGES_URL} target='_blank' rel='noreferrer'>
                    <ColoredSpan color='FOREST_GREEN'>document</ColoredSpan>
                </a>
                &nbsp;for the fees.
            </TitleDescription>
        </ContentWrapper>
    </>
);

export default PaperAndBranchBaseSection;
