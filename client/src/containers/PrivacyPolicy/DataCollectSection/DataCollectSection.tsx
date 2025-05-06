import React from 'react';

import { Font } from '../../../components/Abstract';
import { GOOGLE_API_SERVICES_USER_DATA_POLICY_URL } from '../../../constants/AppConstant';
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
    ColoredSpan,
    BarHolder,
    BarOne,
} from '../PrivacyStyled/PrivacyStyled';

const DataCollectSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    What data do we collect? 💾
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    We intend to provide services and features that meet your needs. To do so, when you use our
                    website, we collect Personal Data required by law from time to time. We would collect the following
                    data from you –
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
                            <ColoredSpan color='MINE_SHAFT'>
                                Device Information:&nbsp;
                            </ColoredSpan>
                            Information such as device ID, pages accessed, installed apps, IP address, mobile network, operating system
                            or a unique identifier. We will link your mobile phone number with your device. This helps
                            us analyse how our app works, fix any issues, keep the app safe and ensure a seamless
                            experience for you.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            <ColoredSpan color='MINE_SHAFT'>
                                Personal Data:&nbsp;
                            </ColoredSpan>
                            Such as name, date of birth, residential status, postal address, e-mail address, mobile number, PAN details etc.
                            This helps us fulfil our legal obligations which require us to confirm your identity.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            <ColoredSpan color='MINE_SHAFT'>
                                Location information: &nbsp;
                            </ColoredSpan>
                            If you have authorized tracking which will help us provide you location-based services and
                            protect you against fraud.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The use and transfer to any other app of
                            information received from Google APIs will
                            adhere to&nbsp;
                            <a
                                href={GOOGLE_API_SERVICES_USER_DATA_POLICY_URL}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <ColoredSpan color='FOREST_GREEN'>
                                    Google API Services User Data Policy
                                </ColoredSpan>
                            </a>
                            , including the Limited Use requirements.
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
                            <ColoredSpan color='MINE_SHAFT'>
                                Cookies:&nbsp;
                            </ColoredSpan>
                            Cookies aid us in recognizing you as a customer and remember your preferences so we can
                            personalize our services. Cookies are required to prevent fraud and ensure the security of
                            websites we control. You are free to decline our Cookies if your browser permits this.
                            However, that may not guarantee you a seamless user experience.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            <ColoredSpan color='MINE_SHAFT'>
                                Salary Information:
                            </ColoredSpan>
                            So that we can provide you with a customized experience based on your financial appetite.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            <ColoredSpan color='MINE_SHAFT'>
                                Epifi Chat conversations:
                            </ColoredSpan>
                            Information you give us through Epifi chat so we can help you.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            Any other information that is required to be collected as per specific mandate
                            from any bank or as a legal requirement in India.
                        </Font>
                    </PrivacyCard>
                </div>
            </CardHolder>
            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default DataCollectSection;
