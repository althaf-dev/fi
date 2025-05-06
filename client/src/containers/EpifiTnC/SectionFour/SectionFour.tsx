import React from 'react';

import { Font } from '../../../components';
import { FEDERAL_HOME_URL, FEDERAL_GENERAL_TNC_URL } from '../../../constants/AppConstant';

import {
    // Bar,
    CardHolder,
    CardInfo,
    ColoredSpan,
    PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    BarHolder,
    BarOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';
import { SubTitle, UnorderdList } from '../EpifiTnCStyled/EpifiTnCStyled';

const SectionFour = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Savings Account 💰
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    You can open a savings account on our Platform, given to you
                    in partnership with a Bank. The terms governing the savings
                    account and various related banking facilities shall be as
                    detailed on the concerned Bank&apos;s website&nbsp;
                    <a
                        href={FEDERAL_HOME_URL}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ColoredSpan color='FOREST_GREEN'>here</ColoredSpan>
                    </a>
                    &nbsp;and&nbsp;
                    <a
                        href={FEDERAL_GENERAL_TNC_URL}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ColoredSpan color='FOREST_GREEN'>here</ColoredSpan>
                    </a>
                    .
                </CardInfo>
            </WidthHolderOne>

            <WidthHolderOne>
                <SubTitle font='p4' tagType='text' color='MINE_SHAFT'>
                    UNDERTAKING
                </SubTitle>
            </WidthHolderOne>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Amongst other things, by agreeing to Epifi & the Bank’s T&Cs, you&apos;re signing up for a background check of sorts.
                    What does this signify? Well, for one, it means anyone who registers will adhere to applicale laws and regulations.
                    Also, we want to make sure no Fi user engages in illegal acts like Money Laundering, etc.
                </CardInfo>
            </WidthHolderOne>

            <CardHolder marginBottom>
                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree to these T&Cs as well as the Bank&apos;s T&Cs (provided above) before opening an account through our Platform.
                            Furthermore, any account opening (or maintenance) is subject to the rules & regulations introduced (or amended)
                            from time-to-time any other regulatory body, including but not limited to e-KYC authentication, background check and
                            risk-related due diligence on the user.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You confirm that the contents of these T&Cs (and your
                            relationship with Epifi) would be governed as per
                            the provisions of the Indian Contract Act 1872.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree that, if the Bank demands it, you&apos;ll provide the necessary information
                            and all documents related to identity, address, profile, transactions or other matters.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree to record your video (including your photograph) during the (video-based) account
                            opening process — to prevent any form of identity fraud — as per the regulatory process.
                        </Font>
                    </PrivacyLastCard>
                </div>
                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree that an account opened through our Platform, using Aadhaar OTP e-KYC authentication shall
                            be subject to below limits:
                            <UnorderdList>
                                <li>
                                    Such accounts have a validity of 350 days, during this period the account needs to be upgraded
                                    to a Full KYC Account else the account will be closed.
                                </li>
                                <li>
                                    If your account was created before 1st of September 2023, then the total amount added to this account
                                    cannot exceed ₹2 Lakh in a financial year and your account balance cannot exceed ₹1 Lakh at any given
                                    point of time.
                                </li>
                                <li>
                                    If your account was created on or after 1st of September 2023, then the total amount added to this account
                                    cannot exceed ₹50,000 in a financial year and your account balance cannot exceed ₹1 Lakh at any given point
                                    of time.
                                </li>
                                <li>
                                    These limits will be removed once you upgrade to a full KYC account.
                                </li>
                            </UnorderdList>
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree to use this account to only conduct genuine banking transactions,
                            which remain permissible under the law.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree that the Bank can freeze account operations if:
                            <UnorderdList>
                                <li>
                                    The account has been opened or seen to conduct transactions
                                    that are not permissible by law.
                                </li>
                                <li>
                                    Transactions routed via the account don&apos;t match your profile or
                                    have no discernable links to your profile.
                                </li>
                                <li>
                                    You fail to provide the required information/ documents related to identity,
                                    address, profile or transactions.
                                </li>
                            </UnorderdList>
                        </Font>
                    </PrivacyCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <SubTitle font='p4' tagType='text' color='MINE_SHAFT'>
                    REGISTRATION
                </SubTitle>
            </WidthHolderOne>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    There&apos;s no point beating around the bush! So, here it goes.
                    Yes, we ask you to provide personal information – only
                    whatever&apos;s required by law. Do make sure that info provided
                    is accurate and complete. All this data, once secured, forms
                    the crux of the essential Services we provide you, some of
                    which may have a nominal fee attached to them. Basically,
                    we’re trying to tell you that we strive to protect your
                    data, at all times. In case you&apos;re wondering how securely we
                    do so, please check our easy-to-read
                    <a href='/privacy' target='_blank'>
                        <ColoredSpan color='FOREST_GREEN'>
                            &nbsp;Privacy Policy
                        </ColoredSpan>
                    </a>
                    .
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
                            You must register with the Company and the Bank to
                            use our Services and avail a savings account. During
                            the login/registration process or any time after
                            that, you may be asked to provide accurate and
                            complete personal identification details, including
                            but not limited to your name, address, phone number,
                            email address, face scan (including a liveness
                            check) and the like, failing which, the Company may
                            at any time reject your registration and terminate
                            your right to use or access the Platform or
                            Services.
                        </Font>
                    </PrivacyCard>
                </div>
                <div>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            To ultimately use our Services, you would also be
                            required to provide other information, including
                            your PF account details (such as UAN, PF account
                            number), salary details, PAN card number, credit
                            score, and permission to access other financial
                            data. All the information provided by you will
                            remain protected and used as per our Privacy Policy
                            and as per the existing legal regulations. The data
                            provided by you is not merely to offer current
                            Services but also for providing other facilities –
                            which we will introduce from time-to-time.
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

export default SectionFour;
