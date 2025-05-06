import React from 'react';

import { Font } from '../../../components/Abstract';
import {
    // Bar,
    CardInfo,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    CardHolder,
    PrivacyCard,
    CardMiddleInfo,
    BarHolder,
    BarOne,
} from '../PrivacyStyled/PrivacyStyled';

const InformationUsedSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    How is your information used? 📁
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    Epifi primarily collects your Personal Data to provide you with a secure, smooth,
                    and efficient experience on our website. Not only does this help us personalize and
                    improve your experience, but the additional information also helps prevent misuse.
                    <br />
                    <br />
                    Wherever possible, Epifi will indicate the data fields as either required or are optional.
                    However, if you are unable to provide the required information we need, we may not be able
                    to provide you with the product or service you have requested.
                    <br />
                    <br />
                    Provided that we get your consent, we may also use your Personal Data for other lawful purposes
                    which we will tell you about. By way of example, some of the uses of your Personal Data
                    would include -
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
                            Providing additional services including customer support.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Generating and maintaining your profile on the Epifi app.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Contacting you through any communication channel, including but not limited to
                            Voice Call, SMS, Email, etc. — in accordance with applicable laws.
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
                            Processing transactions and verifying your identity (including during account creation
                            and password reset processes).
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Remedying fraud or other potentially prohibited or illegal activities and
                            detecting/preventing violations of policies or applicable user agreements.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Providing you offers and customizing offers for you.
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <CardMiddleInfo font='p' tagType='text' color='SUVA_GREY'>
                    Any data which a user provides via his/her/their email
                    inbox (from mail provider) will be
                </CardMiddleInfo>
            </WidthHolderOne>

            <CardHolder>
                <div>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Used only to provide direct features mentioned
                            on the app or website.
                        </Font>
                    </PrivacyLastCard>
                </div>

                <div>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Any further use of this data will be done only
                            after taking consent from the user.
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

export default InformationUsedSection;
