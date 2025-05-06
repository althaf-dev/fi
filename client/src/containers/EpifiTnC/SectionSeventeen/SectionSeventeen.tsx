/**
 * @file SectionSeventeen: section seventeen of the TnC page
 * consists of the US Stocks TnCs
 */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Font } from '../../../components';

import {
    BarHolder,
    BarOne,
    CardHolder,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    SectionContainerOne,
    TitleTextHolder,
    TitleTextOne,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionSeventeen = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    US Stocks 💵
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Yay, you didn't skip this section! These terms & conditions will act as the guardrails for your
                    US Stocks investments made via the Fi Money app. These terms and conditions (T&Cs) are meant to be read
                    by you along with the&nbsp;
                    <a href='/T&C'>
                        <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                            Fi Terms and Conditions
                        </Font>
                    </a>
                    &nbsp;+&nbsp;
                    <a href='/privacy'>
                        <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                            Fi Privacy Policy.
                        </Font>
                    </a>
                    &nbsp;To make things easier for you, we've split all the sequentially numbered terms into 3 categories:
                    <br />
                    <br />
                    •&nbsp;
                    <b>Liberalised Remittance Scheme</b>
                    <br />
                    •&nbsp;
                    <b>US Stocks Investments via Fi Money</b>
                    <br />
                    •&nbsp;
                    <b>Verifying your Source of Funds</b>
                </CardInfo>

                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    We urge you to keep on reading, as it's vital that you know, understand and comprehend our terms and conditions.
                    The T&Cs define our relationship with you – as we can only permit you to use our services if you agree to follow these terms.
                </CardInfo>
            </WidthHolderOne>

            <CardHolder>
                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            As per the conditions mentioned in the LRS, an Indian national (resident) is allowed to
                            remit up to
                            &nbsp;
                            <b>USD 2,50,000</b>
                            &nbsp;outside India per annum.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Your investment in US stocks will get classified under ‘Foreign Portfolio Investments’ in the
                            &nbsp;
                            <b>purpose code S0001</b>
                            &nbsp;i.e. Indian investment abroad — in equity capital shares. Please note that the limit mentioned above is
                            only for resident individuals and is not available to corporates, partnership firms, HUFs, Trusts etc.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The LRS limit of&nbsp;
                            <b>USD 2,50,000</b>
                            &nbsp;per annum also includes/subsumes remittances for current account transactions
                            (namely private visits; gift/donation; going abroad on employment; emigration; maintenance of relatives abroad;
                            business trip; medical treatment abroad; studies abroad) available to resident individuals.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Release of foreign exchange exceeding USD 2,50,000 requires prior permission from the applicable regulator.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You hereby undertake and confirm that you shall comply with the provision of the LRS Scheme for the said investment.
                            Also, you will provide the complete remittance details and ensure that these details specified therein are true
                            and correct in all respects.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You would need to maintain an active savings account with Federal Bank in order to invest
                            in US stocks via the Fi Money app.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The remittance will occur via your Federal Bank Savings Account, from which Federal Bank  will remit your money
                            to Alpaca Securities LLC, a regulated US stock broker (“US Stock Broker”) subject to certain checks.
                            Remittance of funds via your Federal Bank Savings Account requires specific documentation to establish the source
                            of funds as per the existing regulations.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The exchange rate(s) at which the remittance is made might be subject to change.
                            Please also note that the Federal Bank could reject the remittance for various reasons, such as an LRS Limit breach,
                            LRS limit check system’s downtime or any other reason as per Federal Bank’s policy or applicable law.
                            You understand that you may receive rejection intimation after debit from your Federal Bank Savings Account in relation
                            to the purchase of your US Stocks. If your purchase is rejected, you hereby authorise Federal Bank, to facilitate refunds
                            and the US Stock Broker to undertake  liquidation of the US Stocks purchased by you and agree that epiFi shall not be
                            responsible for any losses caused to you pursuant to such liquidation, including any tax liability.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            In case of liquidation of your US Stocks pursuant to reasons above-mentioned, you understand and agree that your
                            US Stocks account will be deactivated for ninety (90) days and the purchase amount shall be refunded back to you.
                            Any profit or loss associated with such liquidation would be adjusted against any future transactions conducted by you.
                        </Font>
                    </PrivacyCard>
                </div>
                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Please note that purchase of US Stocks would be successful only when the “International Money Transfer” status on your
                            Fi Money Application shows “success”. Ideally, the purchase timeframe to be a success shall be two bank working days.
                            However, due to unforeseen circumstances such as those mentioned in the above paragraphs, there might be a delay in
                            your money being sent to the US Stock Broker, and you understand that you shall not be able to conduct the sale of such
                            US Stocks till such time your purchase transaction is entirely successful.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            If your outward remittance request gets rejected by the Bank:
                            You agree that your US Stocks account may get deactivated for 90 days.
                            If the bank's reason for rejection is due to a breach of the LRS limit — you shall be restricted
                            from placing any purchase requests for the remaining financial year.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            In the unlikely event that your Federal Savings Account accessible through Fi is closed for reasons
                            such as fraudulent activities, a complaint from law enforcement agencies, suspicious transactions,
                            etc: You agree and acknowledge that inward remittances to such Federal Savings Account shall get affected.
                            During such cases, you agree to conduct the sale of your existing portfolio within 1 day. Failing which, Fi,
                            its banking partner, or the US Stock broker shall not be responsible for any losses you may incur. Furthermore,
                            epiFi reserves the right to stop your access to any of the services offered on the Fi App — if such bank account
                            closure is due to fraud or any complaints against you by law enforcement agencies.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Epifi Technology Private Limited&nbsp;
                            <b>(“epiFi/Fi/Fi Money”)</b>
                            &nbsp;is a technology services provider (TSP) for its users,
                            the remitting bank based in India, and the registered US broker/dealer. epiFi, as a TSP, connects users with
                            the bank and the US broker/dealer. epiFi is not a stockbroker nor an investment advisor.  Epifi shall not be under
                            any duty to assess the prudence or otherwise of any instruction or transaction given or entered by you.
                            Nothing provided on the Fi Money App shall constitute or be construed as advice of any nature and you are
                            advised to consult professionals in this regard prior to taking any decision.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            To verify the source of funds, You can submit a 6-month to 1-year bank account statement
                            (either Federal Bank or any other India-based bank's statement). Note: Periodically, a relevant
                            source of funds document will be collected from you.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The Federal Bank will conduct a rule-based automated source of funds check for undertaking the remittance
                            and maintains the discretion to reject a transaction(s) based on the result of the check.
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            As per regulations, you must submit an A2 form (an application required under the Foreign Exchange Management Act, 1999)
                            and a document to prove the source of funds — such as your Federal Bank savings account statement or any
                            other Bank’s statement. The A2 form will be automatically generated and will remain available for your review
                            before conducting a buy transaction.
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>
            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default SectionSeventeen;
