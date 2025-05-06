import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const DEFINITIONS_SECTION_DATA = {
    title: 'Definitions 📘',
    description: {
        firstContent: (
            <p>
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• AMC&nbsp;</b>
                </Font>
                means Asset Management Company
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Business Days&nbsp;</b>
                </Font>
                means days in which banks are open for business in Mumbai (India), New Delhi (India) and
                Bengaluru (India).
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• SEBI&nbsp;</b>
                </Font>
                means the Security and Exchange Board of India.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Service(s) or Platform&nbsp;</b>
                </Font>
                means and includes the following features in the mobile application and/or website as provided
                by Epifi, collectively referred to as the&nbsp;
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>“Services”:</b>
                </Font>
            </p>
        ),
        secondContent: (
            <p>
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Savings Account&nbsp;</b>
                </Font>
                shall mean the savings bank account set up by the user with Federal Bank Limited as part of the
                registration process for availing the services from Epifi.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Service Provider&nbsp;</b>
                </Font>
                means and includes a company, partnership, or any such entity whose facilities are used by us to
                provide the services to users throughout the platform.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Payment Systems Provider&nbsp;</b>
                </Font>
                means the banks and other financial institutions (as defined in the Payments and Settlement
                Systems Act, 2007) with whom the Company has agreed to facilitate Payment Transactions.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Politically Exposed Person&nbsp;</b>
                </Font>
                means an individual who holds (or someone who has been entrusted with) a prominent public
                position in India.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• User&nbsp;</b>
                </Font>
                means any person (“You”) who signs up on the company’s app using the platform, mobile
                application and/or website. It also applies to those who transact or benefit from any of our
                services through the platform.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• Know Your Customer (“KYC”)&nbsp;</b>
                </Font>
                means the ‘know-your-customer’ requirements prescribed under various laws and regulations for customer identification
                by applicable authorities. To fulfil such KYC requirements, Epifi procures personal identification details from you before
                any services can be delivered.
                <br />
                <br />
                <Font font='p' tagType='span' color='MINE_SHAFT'>
                    <b>• IRDA&nbsp;</b>
                </Font>
                means the Insurance Regulatory and Development Authority.
            </p>
        ),
    },
    servicesCard: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        - Wealth and Financial management services
                        <br />
                        <br />
                        - Mutual Funds (as permitted by SEBI)
                        <br />
                        <br />
                        - Advisory Services, provided by Epifi Wealth Pvt. Ltd., Investment Adviser Department
                        <br />
                        <br />
                        - Any other product/service offered by Epifi Wealth from time to time.
                    </p>
                ),
            },
        ],
    },
};

const DECLARATION_SECTION_DATA = {
    description: {
        title: 'DECLARATION',
        content: (
            <p>
                Essentially, by using and signing up for the Services offered by Epifi, I acknowledge and confirm that:
            </p>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        • I am competent to enter into a contract under the laws of my country.
                        <br />
                        <br />
                        • All information provided by me to Epifi — for registration and investments — is true and
                        correct.
                        <br />
                        <br />
                        • I have read and understood the Privacy Policy.
                        <br />
                        <br />
                        • I have understood and agreed to abide by the T&Cs below.
                        <br />
                        <br />
                        • I am an Indian resident. And as per the applicable Indian tax laws, I’m subject to tax
                        payments and filings in India.
                        <br />
                        <br />
                        • I am not a United States Person (U.S. person), as defined under the laws of the United
                        States of America, or a resident of Canada or any Financial Action Task Force (FATF)
                        declared non-compliant country or territory.
                        <br />
                        <br />
                        • I am not a Politically Exposed Person.
                        <br />
                        <br />
                        • I will only use my Savings Account as the source of funds for all my investments
                        through the Services.
                    </p>
                ),
            },
        ],
    },
};

const REGISTRATION_SECTION_DATA = {
    description: {
        title: 'REGISTRATION',
        content: (
            <p>
                There’s no point beating around the bush! So, here it goes. Yes, we ask you to provide
                personal information – only whatever’s required by law. Do make sure that the information
                provided is accurate and complete. All this data, once secured, forms the crux of the essential
                services we offer, some of which may have a nominal fee attached to them. And yes, we strive to
                protect your data at all times. In case you’re wondering how securely we do so, please
                check our easy-to-read&nbsp;
                <a href='/privacy'>
                    <Font font='p' tagType='span' color='FOREST_GREEN'>
                        Privacy Policy.
                    </Font>
                </a>
            </p>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: 'You must register with the company to use our services and avail an investment account and/or other services such as linked accounts via account aggregator(s). During the login/registration process or any time after that, you may be asked to provide accurate and complete personal identification details, including but not limited to your name, address, phone number, email address, face scan (including a liveness check) and the like. In failing to do so, the company may at any time reject your registration and terminate your right to use or access the platform or services.',
            },
            {
                id: 2,
                content: 'To ultimately use our services, you would also be required to provide other information, including your PF account details (such as UAN, PF account number), salary details, PAN card number, credit score, age, signature and permission to access other financial data as per applicable law.',
            },
            {
                id: 3,
                content: 'All the information you provide will remain protected and used as per our Privacy Policy and as per the existing legal regulations. The data you provide is not merely to offer current services but also to provide other facilities – which we will introduce from time to time.',
            },
            {
                id: 4,
                content: 'By registering, you certify and warrant that all information you provide, now or in the future, are your own and not someone else’s and is/will be accurate, consistent, and entirely true. You agree to notify us when you stop using a particular contact number or address and provide up to date information at all times.',
            },
            {
                id: 5,
                content: 'You accept that for any transactions that are submitted offline i.e. with wet signatures, the signature available in your KYC records would be used for signature verification. You also agree and understand that you shall be solely liable to inform Epifi / AMC in case of any change in your KYC information including change in signature/ signatories etc. and if your signature is not updated, available or legible in the KYC records, Epifi / AMC can carry out further checks to validate the authenticity of the request or reject any such offline request based on existing KYC information.',
            },
            {
                id: 6,
                content: 'Epifi reserves the right to update the content, weblink, platform or services to, amongst other things, increase efficiency, optimise user interface, and add new facilities now and then. Update packages may be sent to your device for download and installation. You agree to install the updates on occasion and acknowledge that Epifi will only be able to provide account support if you ensure to install all updates upon receiving such notifications.',
            },
        ],
    },
};

const DeclarationDescriptionWrapper = styled.div`
    margin-top: 40px;

    @media ${Device.tab} {
        margin-top: 60px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
    }
`;

const DefinitionsSection = () => (
    <SectionContainer>
        <Title content={DEFINITIONS_SECTION_DATA.title} />

        {/* start definitions section */}
        <Description content={DEFINITIONS_SECTION_DATA.description.firstContent} />
        <Card content={DEFINITIONS_SECTION_DATA.servicesCard.content} addBottomMargin />
        <Description content={DEFINITIONS_SECTION_DATA.description.secondContent} />
        {/* end definitions section */}

        {/* start declaration section */}
        <DeclarationDescriptionWrapper>
            <Description
                title={DECLARATION_SECTION_DATA.description.title}
                content={DECLARATION_SECTION_DATA.description.content}
            />
        </DeclarationDescriptionWrapper>
        <Card content={DECLARATION_SECTION_DATA.card.content} addBottomMargin />
        {/* end declaration section */}

        {/* start registration section */}
        <Description
            title={REGISTRATION_SECTION_DATA.description.title}
            content={REGISTRATION_SECTION_DATA.description.content}
        />
        <Card content={REGISTRATION_SECTION_DATA.card.content} />
        {/* end registration section */}
    </SectionContainer>
);

export default DefinitionsSection;
