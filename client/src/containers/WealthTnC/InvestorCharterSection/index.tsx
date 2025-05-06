import React from 'react';

import { Font } from '../../../components';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const INVESTOR_CHARTER_SECTION_DATA = {
    title: 'Investor Charter 📃',
    description: {
        firstSection: 'A. Vision and Mission Statements for investors',
        secondSection: 'B. Details of business transacted by the Investment Adviser with respect to the investors',
        thirdSection: 'C. Details of services provided to investors (No Indicative Timelines)',
        fourthSection: 'D. Details of grievance redressal mechanism and how to access it',
        fifthSection: 'E. Expectations from the investors (Responsibilities of investors)',
    },
    card: {
        firstSection: [
            {
                id: 1,
                content: (
                    <p>
                        <b>Vision -</b>
                        <br />
                        Invest with knowledge & safety.
                        <br />
                        <br />
                        <b>Mission - </b>
                        <br />
                        Every investor should be able to invest in right investment products based on their needs,
                        manage and monitor them to meet their goals, access reports and enjoy financial wellness.
                    </p>
                ),
            },
        ],
        secondSection: [
            {
                id: 1,
                content: (
                    <p>
                        • To enter into an agreement with the client providing all details including fee details,
                        aspect of Conflict of interest disclosure and maintaining confidentiality of information.
                        <br />
                        <br />
                        • To do a proper and unbiased risk – profiling and suitability assessment of the Client.
                        <br />
                        <br />
                        • To obtain registration with Know Your Client Registration Agency (KRA) and Central Know
                        Your Customer Registry (CKYC).
                        <br />
                        <br />
                        • To conduct audit annually.
                        <br />
                        <br />
                        • To disclose the status of complaints in its website.
                        <br />
                        <br />
                        • To disclose the name, proprietor name, type of registration, registration number, validity,
                        complete address with telephone numbers and associated SEBI regional/local Office details in its website.
                        <br />
                        <br />
                        • To employ only qualified and certified employees.
                        <br />
                        <br />
                        • To deal with clients only from official number.
                        <br />
                        <br />
                        • To maintain records of interactions, with all clients including prospective clients (prior to onboarding),
                        where any conversation related to advice has taken place.
                    </p>
                ),
            },
        ],
        thirdSection: [
            {
                id: 1,
                content: (
                    <p>
                        <b>Onboarding of Clients</b>
                        <br />
                        • Sharing of agreement copy
                        <br />
                        • Completing KYC of clients
                        <br />
                        <br />
                        <b>Disclosure to Clients</b>
                        <br />
                        • To provide full disclosure about its business, affiliations, compensation in the agreement.
                        <br />
                        • To not access client’s accounts or holdings for offering advice.
                        <br />
                        • To disclose the risk profile to the client.
                        <br />
                        • To provide investment advice to the client based on the risk-profiling of the clients and suitability of the client.
                    </p>
                ),
            },
        ],
        fourthSection: [
            {
                id: 1,
                content: (
                    <p>
                        • In case of any grievance / complaint, an investor can reach out to us at&nbsp;
                        <a href='mailto: help@fi.care'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                help@fi.care
                            </Font>
                        </a>
                        &nbsp;or 080-47485490.
                        <br />
                        <br />
                        • If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s
                        &apos;SCORES&apos; portal which is a centralized web based complaints redressal system. SEBI takes up the complaints
                        registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of
                        the complaint.
                        <br />
                        <br />
                        • With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education,
                        Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E),
                        Mumbai - 400 051.
                    </p>
                ),
            },
        ],
        fifthSection: [
            {
                id: 1,
                content: (
                    <p>
                        <b>Do’s</b>
                        <br />
                        <br />
                        • Always deal with SEBI registered Investment Advisers.
                        <br />
                        <br />
                        • Ensure that the Investment Adviser has a valid registration certificate.
                        <br />
                        <br />
                        • Check for SEBI registration number
                        <br />
                        <br />
                        Please refer to the list of all SEBI registered Investment Advisers which is available on
                        SEBI website in the following link:&nbsp;
                        <a href='https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13' target='_blank' rel='noopener noreferrer'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13
                            </Font>
                        </a>
                        <br />
                        <br />
                        • Pay only advisory fees to your Investment Adviser. Make payments of advisory fees through banking channels
                        only and maintain duly signed receipts mentioning the details of your payments.
                        <br />
                        <br />
                        • Always ask for your risk profiling before accepting investment advice. Insist that Investment Adviser provides
                        advisory strictly on the basis of your risk profiling and take into account available investment alternatives.
                        <br />
                        <br />
                        • Ask all relevant questions and clear your doubts with your Investment Adviser before acting on advice.
                        <br />
                        <br />
                        • Assess the risk–return profile of the investment as well as the liquidity and safety aspects before making investments.
                        <br />
                        <br />
                        • Insist on getting the terms and conditions in writing duly signed and stamped. Read these terms and conditions
                        carefully particularly regarding advisory fees, advisory plans, category of recommendations etc. before dealing with any
                        Investment Adviser.
                        <br />
                        <br />
                        • Be vigilant in your transactions.
                        <br />
                        <br />
                        • Approach the appropriate authorities for redressal of your doubts / grievances.
                        <br />
                        <br />
                        • Inform SEBI about Investment Advisers offering assured or guaranteed returns
                    </p>
                ),
            },
            {
                id: 2,
                content: (
                    <p>
                        <b>Don’ts</b>
                        <br />
                        <br />
                        • Don’t fall for stock tips offered under the pretext of investment advice.
                        <br />
                        <br />
                        • Do not provide funds for investment to the Investment Adviser.
                        <br />
                        <br />
                        • Don’t fall for the promise of indicative or exorbitant or assured returns by the Investment Advisers.
                        <br />
                        <br />
                        • Don’t let greed overcome rational investment decisions.
                        <br />
                        <br />
                        • Don’t fall prey to luring advertisements or market rumors.
                        <br />
                        <br />
                        • Avoid doing transactions only on the basis of phone calls or messages from any Investment adviser or
                        its representatives.
                        <br />
                        <br />
                        • Don’t take decisions just because of repeated messages and calls by Investment Advisers.
                        <br />
                        <br />
                        • Do not fall prey to limited period discount or other incentive, gifts, etc. offered by Investment advisers.
                        <br />
                        <br />
                        • Don’t rush into making investments that do not match your risk taking appetite and investment goals..
                        <br />
                        <br />
                        • Do not share login credential and password of your trading and demat accounts with the Investment Adviser.
                    </p>
                ),
            },
        ],
    },
};

const InvestorCharterSection = () => (
    <SectionContainer>
        <Title content={INVESTOR_CHARTER_SECTION_DATA.title} />

        {/* start investor charter first section */}
        <Description content={INVESTOR_CHARTER_SECTION_DATA.description.firstSection} />
        <Card content={INVESTOR_CHARTER_SECTION_DATA.card.firstSection} addBottomMargin />
        {/* end investor charter first section */}

        {/* start investor charter second section */}
        <Description content={INVESTOR_CHARTER_SECTION_DATA.description.secondSection} />
        <Card content={INVESTOR_CHARTER_SECTION_DATA.card.secondSection} addBottomMargin />
        {/* end investor charter second section */}

        {/* start investor charter third section */}
        <Description content={INVESTOR_CHARTER_SECTION_DATA.description.thirdSection} />
        <Card content={INVESTOR_CHARTER_SECTION_DATA.card.thirdSection} addBottomMargin />
        {/* end investor charter third section */}

        {/* start investor charter fourth section */}
        <Description content={INVESTOR_CHARTER_SECTION_DATA.description.fourthSection} />
        <Card content={INVESTOR_CHARTER_SECTION_DATA.card.fourthSection} addBottomMargin />
        {/* end investor charter fourth section */}

        {/* start investor charter fifth section */}
        <Description content={INVESTOR_CHARTER_SECTION_DATA.description.fifthSection} />
        <Card content={INVESTOR_CHARTER_SECTION_DATA.card.fifthSection} />
        {/* end investor charter fifth section */}
    </SectionContainer>
);

export default InvestorCharterSection;
