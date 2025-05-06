import React from 'react';
import { Font } from '../../../components';

import {
    // Bar,
    BarHolder,
    BarOne,
    CardHolder,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';
import { SubTitle } from '../EpifiTnCStyled/EpifiTnCStyled';

const SectionFive = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Obligations & Rights 🔏️‍️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <SubTitle font='p4' tagType='text' color='MINE_SHAFT'>
                    USER
                </SubTitle>
            </WidthHolderOne>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    An overview of what you should and shouldn&apos;t do while
                    using Epifi&apos;s Services. While we encourage you to read
                    the entire section, we&apos;ll try to distil it into a few
                    points here. Essentially, you (the user) agree to comply
                    with all the regulations listed by the Company, Bank and
                    its third-party service providers. You also consent never to
                    do anything illegal, pay applicable taxes on time,
                    keep sensitive information (PIN, Passwords) from being
                    shared, and always prevent data breaches on the
                    Platform.
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
                            You shall act in compliance with all laws, rules
                            and regulations and shall not carry out any
                            activity, which is banned, illegal or immoral
                            (while using the Services) or use the Services
                            in any manner which may cause Epifi to be
                            subject to investigation, prosecution or legal
                            action such as trading in contraband items or
                            indulging in activities prohibited by applicable
                            laws. You shall at all times, comply with the
                            guidelines set by the Bank and third-party
                            service providers.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You shall bear the liability and be responsible for
                            the payment of all applicable taxes and fees.
                            Epifi would not be liable or responsible for
                            payment of your taxes and fees in respect of any
                            accounts maintained by you.
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
                            You will be solely responsible for protecting
                            your PIN or personal identification number
                            (for accessing the Platform). You shall also
                            guard your mobile phone number and other
                            account-related information. You shall remain
                            fully and wholly answerable for any
                            unauthorised use of your mobile/laptop email
                            on the Platform and all authorised
                            transactions on your mobile/email on the
                            Platform. You shall take all precautions as
                            may be feasible – or as may be directed by
                            Epifi – to make sure that there is no breach of
                            security. It helps maintain the integrity of the
                            link between our systems, the Platform, and
                            the Payment Systems Providers, at all times.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            If you suspect that there is incorrect
                            information provided by you to us – you should
                            inform us about this immediately. You can also
                            correct your information with the help of
                            self-help tools/features available on our
                            Platform. We will endeavour to correct the error
                            wherever possible on a best-effort basis.
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <SubTitle font='p4' tagType='text' color='MINE_SHAFT'>
                    EPIFI
                </SubTitle>
            </WidthHolderOne>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Here&apos;s a long~ish section where we divulge things of
                    supreme importance, for all parties involved. It
                    explains what the must-comply duties are for Epifi. And
                    what can be considered as specific responsibilities of
                    the Bank. Key points include:
                    <br />
                    <br />
                    • Epifi will comply with every applicable law.
                    <br />
                    • Fund management, of any form, is governed directly by the
                    Bank and not Epifi.
                    <br />
                    • Epifi isn’t answerable for the confidentiality of messages
                    transmitted by users on the Platform.
                    <br />
                    <br />
                    Also included is a list of worst-case scenarios that fall
                    under neither Epifi&apos;s nor the Bank&apos;s purview.
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
                            Epifi shall comply with all provisions regarding the protection of the user’s funds as
                            set out by its partner Bank’s agreements. We want to clarify that management of the funds
                            in a savings account/fixed deposit/recurring deposit/ flexi deposit is the sole responsibility of the Partner Bank.
                            All the accounts remain governed by the relevant guidelines of the Partner Bank and its regulators.
                            You acknowledge that Epifi does not provide any banking services.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Epifi does not warrant the confidentiality or
                            security of the messages, personal or otherwise,
                            transmitted through the Platform. We further
                            make no warranty of any kind concerning the
                            system – its network, function or performance.
                            We provide no representation for any loss,
                            whenever and howsoever, incurred by the user.
                            Any person who may have suffered damage –
                            resulting from or in connection with the
                            Services – will not receive warranty.
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
                            Epifi shall be responsible for the Services
                            directly provided to you. These T&Cs shall
                            govern the delivery and completion of the
                            Services. You acknowledge and agree that the
                            specific transaction risks shall be governed by
                            the terms governing the relation between you and
                            the Service Provider.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Without limitation to the other provisions of
                            these T&Cs, Epifi, (including its employees,
                            agents or contractors), shall not be liable for
                            any damage (whether direct, indirect or
                            consequential) such as loss of revenue, profit,
                            business and the like which is suffered by the
                            user due to any delay, interruption, suspension,
                            or error of the Bank. The error could be in
                            receiving and processing a request sent from the
                            Platform and/or in formulating and returning
                            responses or messages to and from the
                            telecommunication equipment of the user and the
                            network of any cellular service provider and
                            Epifi’s system (Platform) or any breakdown,
                            interruption, suspension or failure of the
                            telecommunication equipment of the user, The
                            Bank&apos;s systems, Epifi’s systems or the network
                            of any cellular service provider.
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

export default SectionFive;
