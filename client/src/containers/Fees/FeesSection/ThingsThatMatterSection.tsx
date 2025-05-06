import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';
import {
    FEDERAL_SAVINGS_RATE_URL,
    FEDERAL_DEPOSITS_RATE_URL,
} from '../../../constants/AppConstant';

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

const ThingsThatMatterSection = () => (
    <>
        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Who is eligible?
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                We’re currently open only to&nbsp;
                <BoldContent>
                    Working Professionals
                </BoldContent>
                &nbsp;who reside in India.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Is there a minimum balance?
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                For Plus, Infinite, Salary or Prime account plans, it is required to maintain their
                respective balances but no fees would be charged.
                <br />
                <br />
                An average monthly balance of ₹5000 should be maintained for users on Regular account plan.
                If it isn&rsquo;t maintained, a monthly fee of up to ₹200 (up to ₹1000 annually) is applicable.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                What interest do I earn on my savings account balances?
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                <BoldContent>
                    3.00%
                </BoldContent>
                &nbsp;is the interest rate for Savings Accounts.
                <br />
                Heads up! All banks change these rates (once in a while)
                based on market conditions, etc.
                <br />
                <br />
                So, for a complete breakdown, head&nbsp;
                <a href={FEDERAL_SAVINGS_RATE_URL} target='_blank' rel='noreferrer'>
                    <ColoredSpan color='FOREST_GREEN'>here</ColoredSpan>
                </a>
                .
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                What about interest rates on Fixed Deposits and Smart
                Deposits?
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                You can get up to 6.8% p.a. interest on your Smart Deposit and up to 7.4% p.a. interest on your Fixed Deposit.
                We&apos;ve partnered with Federal Bank to offer one of the best interest rates in the market.
                <br />
                <br />
                For more details, check&nbsp;
                <a href={FEDERAL_DEPOSITS_RATE_URL} target='_blank' rel='noreferrer'>
                    <ColoredSpan color='FOREST_GREEN'>here</ColoredSpan>
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
                Account Maintenance
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                There are no charges for maintaining a Federal Bank Savings Account through Fi.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Visa Platinum Debit Card
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Users on Regular, Standard and Plus account plans can order a physical VISA Platinum Debit Card
                for ₹299+GST. If you&apos;re on Infinite, Salary or Prime plans,
                you can order one for free. Annual maintenance charges for Regular, Standard and Plus are ₹299
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Forex Charges on Debit Cards
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                You can enjoy Zero forex charges if you&apos;re on the Plus, Infinite, Salary or Prime account plans.
                For users on Standard & Regular plans, a 3.5% markup will be charged on international spends.
                <br />
                <br />
                <BoldContent>
                    Plus:
                </BoldContent>
                &nbsp;We’ve waived off international transaction charges for all transactions
                (except on crypto transactions) up to ₹30K per month w.e.f. 8 March 2024.
                Before 8th March 2024, forex charges on transactions up to ₹50K per month will be waived off.
                <br />

            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                ATM Transactions
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Love the feeling of having cash in your wallet? We hear you.
                Use your Visa Debit Card at any ATM in India.
                <br />
                <br />
                You can withdraw cash from any Federal Bank ATM for free.
                <br />
                <br />
                At other ATMs, there&rsquo;s a limit to the number of free transactions:
                <br />
                At other ATMs (Metro): 3/ month.
                <br />
                At other ATMs (Non-metro): 5/ month.
                <br />
                <br />
                A fee of ₹25/transaction will be charged after the respective transaction limits.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                International ATM charges
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                You can use your Debit Card wherever VISA is accepted 💳
                <br />
                When you withdraw cash from an International ATM, there is a fee of ₹200.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Card Replacements
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Misplaced your Debit Card? Don’t worry.Here are the current charges for getting a replacement card as per your account plan:
                <br />
                <br />
                <BoldContent>
                    Salary/Infinite:
                </BoldContent>
                &nbsp;₹199
                <br />
                <br />
                <BoldContent>
                    Plus:
                </BoldContent>
                &nbsp;₹299
                <br />
                <br />
                <BoldContent>
                    Standard/Regular:
                </BoldContent>
                &nbsp;₹299
                <br />
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='GAINSBORO'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Fuel surcharge
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                For POS transactions at Petrol Pumps, expect a surcharge.
                <br />
                It’s&nbsp;
                <BoldContent>
                    2.5% of the transaction amount
                </BoldContent>
                &nbsp;or&nbsp;
                <BoldContent>
                    ₹10,
                </BoldContent>
                &nbsp;whichever is higher.
            </TitleDescription>
        </ContentWrapper>

        <ContentWrapper color='WHITE'>
            <TitleText
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                Purchase transaction decline fee (due to insufficient funds, Withdrawal Limit Exceeded,
                Transaction Channel Deactivated, Incorrect PIN and Blocked due to excessive PIN tries, invalid CVV.)
            </TitleText>
            <TitleDescription
                tagType='text'
                font='h5VariantSix'
                color='MINE_SHAFT'
            >
                We’ll waive the fees on the first 2 transaction declines in a month.
                <br />
                <br />
                However, from the 3rd transaction decline, a fee will be charged per decline as follows:
                <br />
                <br />
                Domestic: ₹25
                <br />
                International: ₹200
                <br />
                <br />
                Please ensure you have sufficient funds in your savings account before trying to withdraw money.
            </TitleDescription>
        </ContentWrapper>
    </>
);

export default ThingsThatMatterSection;
