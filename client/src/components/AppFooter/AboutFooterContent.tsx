/* eslint-disable max-len */
/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Device } from '../../Themes/Device';

import { Font } from '../Abstract';

import { AboutFiFirstContent, AboutFiSecondContent, AboutFiWrapper } from './styled';

interface FooterContentProps {
    showSecondaryContent?: boolean;
}

const DisclaimerLabelHead = styled(Font)`
    margin-top: 20px;

    @media ${Device.desktop} {
        margin-top: 24px;
        width: 696px;
    }
`;

const DisclaimerLabel = styled(Font)`
    margin-top: 20px;

    @media ${Device.desktop} {
        margin-top: 24px;
        width: 696px;
    }
`;

const AboutFooterContent = (props: FooterContentProps) => {
    const { name: featurePageNameParam } = useParams();
    const { showSecondaryContent } = props;
    if (showSecondaryContent) {
        return (
            <>
                <AboutFiWrapper>
                    <AboutFiFirstContent font='pSmall' tagType='p' color='GREY_2'>
                        Fi is a money management platform that re-imagines the banking experience in India. The Federal Bank Account offered through our App, is a digital bank account that gives you the fastest way to open a bank account online.
                    </AboutFiFirstContent>
                    <AboutFiSecondContent font='pSmall' tagType='p' color='GREY_2'>
                        Epifi Wealth Private Limited is a SEBI Registered Non Individual Investment Advisor (INA200015185) (BASL Membership ID: 1175) (Validity: September 24, 2020 - Perpetual)
                        Principal Officer: Jasna Jayan Contact Information:
                        {' '}
                        <a href='mailto:principalofficer.wealth@epifi.com'>principalofficer.wealth@epifi.com</a>
                        ; SEBI regional office address: 2nd Floor,
                        Jeevan Mangal Building, No.4, Residency Road, Bengaluru - 560025, Karnataka; Tel. Board: +91-080-22222262/ 22222264/ 2222 2283 E-mail:
                        {' '}
                        <a href='mailto:bangalore-lo@sebi.gov.in'>bangalore-lo@sebi.gov.in</a>
                    </AboutFiSecondContent>
                </AboutFiWrapper>
                <AboutFiWrapper>
                    <AboutFiFirstContent font='pSmall' tagType='p' color='GREY_2'>
                        You can do everything from the Fi App, including peer-to-peer payments, fund transfers, bill payments, and more, with features to automate every action. You also get a VISA Platinum Debit card, track your spending, gain insights, grow your investment, get loans and earn rewards.
                    </AboutFiFirstContent>
                    <AboutFiSecondContent font='pSmall' tagType='p' color='GREY_2'>
                        Epifi Wealth Pvt Ltd Salarpuria Sattva Knowledge Court, Survey No. 77, Plot no.9, 06th Floor, Doddenakundi,KR Puram, Hobli, Bangalore East, Karnataka 560048.
                    </AboutFiSecondContent>
                </AboutFiWrapper>
                <DisclaimerLabelHead font='pSmall' tagType='text' color='TEXT_GREY_1'>
                    Disclaimer
                </DisclaimerLabelHead>
                <DisclaimerLabel font='pSmall' tagType='text' color='GREY_2'>
                    <ul>
                        <li>
                            There are brand logos shown on this site to indicate where a person spends money. These brands own these logos. We don’t endorse them, nor do they us.
                        </li>
                        {featurePageNameParam !== 'connect-all-your-bank-accounts' && (
                            <li>
                                Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Past performance is not an indicator for future returns.
                            </li>
                        )}
                    </ul>
                </DisclaimerLabel>
            </>
        );
    }

    return (
        <>
            <AboutFiWrapper>
                <AboutFiFirstContent font='pSmall' tagType='p' color='GREY_2'>
                    Fi is a money management platform that re-imagines the banking experience in India. The Federal Bank Account offered through our App, is a digital bank account that gives you the fastest way to open a bank account online.
                </AboutFiFirstContent>
                <AboutFiSecondContent font='pSmall' tagType='p' color='GREY_2'>
                    You can do everything from the Fi App, including p2p payments, fund transfers, bill payments, and more, with features to automate every action. You also get a Debit Card, spends insights and tools to grow your investment and earn rewards.
                </AboutFiSecondContent>
            </AboutFiWrapper>
            <DisclaimerLabel font='pSmall' tagType='text' color='GREY_2'>
                Disclaimer: You may have noticed some brand logos used on this website to indicate where you, as a user, may or may not have spent money. We don’t endorse these brands. Nor do these brands endorse us. The logos of the specific brands are owned by them.
            </DisclaimerLabel>
        </>
    );
};

AboutFooterContent.defaultProps = {
    showSecondaryContent: false,
};

export default AboutFooterContent;
