import React from 'react';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const OBLIGATIONS_AND_RIGHTS_SECTION_DATA = {
    title: 'Obligations & Rights 🔏️‍️',
};

const USER_SECTION_DATA = {
    description: {
        title: 'USER',
        content: 'Here’s an overview of what you should and shouldn’t do while using Epifi’s services. While we encourage you to read the entire section, we’ll try to distil it into a few points here. Fundamentally, you (the user) agree to comply with all the regulations listed by the company, bank, and its third-party service providers. You also consent never to do anything illegal, pay applicable taxes on time, keep sensitive information (like PIN & Passwords) from being shared, and actively prevent data breaches on the platform.',
    },
    card: {
        content: [
            {
                id: 1,
                content: 'You shall act in compliance with all laws, rules, and regulations and shall not carry out any activity, which is banned, illegal, fraudulent, immoral (while using the services).',
            },
            {
                id: 2,
                content: (
                    <p>
                        You shall also guard your mobile phone number and other account-related information.
                        You shall remain fully and wholly answerable for:
                        <br />
                        - any unauthorised use of your mobile/laptop email on the platform
                        <br />
                        - all authorised transactions on your mobile/email on the platform
                    </p>
                ),
            },
            {
                id: 3,
                content: 'You shall take all precautions as may be feasible – or as may be directed by Epifi – to make sure that there is no breach of security. In the unfortunate event that there is a breach of security, you must immediately notify Epifi. You will be liable for losses incurred by Epifi or any other party due to a third party’s use of your account. Also, you will not use any other person’s account.',
            },
            {
                id: 4,
                content: 'You shall ensure that the money invested is from your own  Savings Account (primary holder’s Savings Account in case of Investment Account held jointly), from legitimate sources, and remitted through approved banking channels.',
            },
            {
                id: 5,
                content: 'You shall bear the liability and be responsible for the payment of all applicable taxes and fees. Epifi would not be liable or responsible for paying your taxes and fees regarding any accounts maintained by you.',
            },
            {
                id: 6,
                content: 'You expressly consent to sharing of transaction feed from the AMC to Epifi and also agree to the T&Cs and scheme information document of all the mutual funds that you would invest in.',
            },
            {
                id: 7,
                content: 'If you suspect that you provided incorrect information to us – you should inform us about it immediately. You can also correct your information with the help of self-help tools/features available on our platform. We will endeavour to correct the error wherever possible on a best-effort basis.',
            },
            {
                id: 8,
                content: 'You grant authority to Epifi to process and transmit any request made by them through the mobile app authenticated by their login credentials. As per Epifi’s T&C’s, such requests may be used in executing their instructions regarding purchase/redemption/switch or any other transactions/ activities regarding mutual funds on their behalf, as may be instructed by them from time to time.',
            },
            {
                id: 9,
                content: 'You expressly consent and authorise the Bank to disclose your KYC information and/or the related records to any person(s) / entity(ies) for the purpose of your KYC authentication/ verification by such person(s) / entity(ies) including AMCs.',
            },
        ],
    },
};

const EPIFI_SECTION_DATA = {
    description: {
        title: 'EPIFI',
        content: (
            <p>
                This is a long~ish section where we divulge things of supreme importance for all parties involved.
                It explains what the must-comply duties are for Epifi. And things that can be considered as specific
                responsibilities of the bank. Key points include:
                <br />
                <br />
                • Epifi will comply with all applicable laws and regulations.
                <br />
                • Though there may be several mutual fund schemes, other market-linked schemes/products on our
                platform, we do not endorse any in particular and remain neutral.
                <br />
                • Users have the complete freedom to pick and choose where to invest.
            </p>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: 'Epifi shall be responsible for the services directly provided to you. These T&Cs shall govern the delivery and completion of the services. Epifi shall not be liable for any claims which are not directly related to Epifi or the services provided to you.',
            },
            {
                id: 2,
                content: 'Epifi does not warrant the confidentiality or security of the messages, personal or otherwise, transmitted through the platform. We further make no warranty of any kind concerning the system – its network, function, or performance. We provide no representation for any loss, whenever and howsoever, incurred by the user. Any person who may have suffered damage – resulting from or connected with the services – will not receive a warranty.',
            },
            {
                id: 3,
                content: 'You acknowledge that the information provided through our content is compiled from various sources, which are beyond our control. Accordingly, Epifi does not warrant the consistency or suitability of the information, and you acknowledge that the content is provided to you on an “as is, with all faults“ basis.',
            },
            {
                id: 4,
                content: 'We expressly disclaim all warranties, whether express, oral, implied, statutory, or otherwise, of any kind to the users and/or any third party. We also reject any implied warranties of consistency, timeliness, completeness, merchantability, and fitness for a particular purpose, as well as any warranties arising by virtue of custom of trade or course of dealing and any implied warranties of title or non-infringement.',
            },
            {
                id: 5,
                content: 'We also make no warranty that the content, services, or platform will meet your requirements, be uninterrupted, timely, secure or error-free. We don’t make any warranty on the facilities that may be obtained from the use of the content, weblink, platform, services or the reliability or quality thereof.',
            },
            {
                id: 6,
                content: 'Epifi does not guarantee or promise any returns on investments made in mutual fund scheme(s) or other market-linked schemes/products. Consequently, past performance does not indicate the future performance of such schemes and may not necessarily provide a basis for comparison with other investments.',
            },
            {
                id: 7,
                content: 'Epifi does not, and is not obliged to, offer all mutual fund schemes for investment. Furthermore, by limiting the number of schemes on the mobile app, Epifi does not represent the quality, bona fides or nature of any asset management company or mutual fund scheme or any other representation, warranty, or guarantee express or implied.',
            },
            {
                id: 8,
                content: 'The data and information provided on the application does not constitute advice and shall not be relied upon by the user while making investment decisions.',
            },
            {
                id: 9,
                content: 'For Investment Accounts held jointly, the mutual fund portfolios maintained by the concerned Asset Management Company (AMC) will also be held jointly. In such cases, all the individuals will have the same authority to operate those folios (any or survivor). Nothing provided in the services, content, or platform will constitute investment advice or recommendations on the suitability of any specific product or security',
            },
            {
                id: 10,
                content: 'All content is provided for your convenience and information only. No such content shall constitute an offer to sell or a solicitation of an offer to buy any security or product.',
            },
            {
                id: 11,
                content: 'Before the execution of any transaction (by you) involving information you received from our content, you should consult your financial, business, tax/accounting advisors, and your attorney concerning the price, suitability, value, risk or other aspects of any stock, mutual fund, security, advisory programme, or other investments.',
            },
            {
                id: 12,
                content: 'Pricing and other information generated through the use of data or services made available herein may not reflect actual prices or values available in the market at the time provided or when the user may want to purchase or sell a particular security or other instruments.',
            },
        ],
    },
};

const ObligationsAndRightsSection = () => (
    <SectionContainer>
        <Title content={OBLIGATIONS_AND_RIGHTS_SECTION_DATA.title} />

        {/* start user section */}
        <Description title={USER_SECTION_DATA.description.title} content={USER_SECTION_DATA.description.content} />
        <Card content={USER_SECTION_DATA.card.content} addBottomMargin />
        {/* end user section */}

        {/* start epifi section */}
        <Description title={EPIFI_SECTION_DATA.description.title} content={EPIFI_SECTION_DATA.description.content} />
        <Card content={EPIFI_SECTION_DATA.card.content} />
        {/* end epifi section */}
    </SectionContainer>
);

export default ObligationsAndRightsSection;
