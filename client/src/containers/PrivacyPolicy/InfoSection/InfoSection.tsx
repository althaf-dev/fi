import React from 'react';

import { Font } from '../../../components/Abstract';
import {
    SectionContainer,
    Bar,
    WidthHolder,
    InfoTwo,
    PrivacyCard,
    CardHolder,
    PrivacyLastCard,
    DescriptionContainer,
    WidthHolderOne,
} from '../PrivacyStyled/PrivacyStyled';

const InfoSection = () => (
    <>
        <DescriptionContainer>
            <WidthHolderOne>
                <InfoTwo font='p' tagType='text' color='SUVA_GREY'>
                    Long story short, anytime you register on our
                    website/app, you are required to comply with our Privacy
                    Policy.
                    <br />
                    We will use your data for legitimate purposes only while
                    safeguarding your privacy concerns.
                </InfoTwo>
            </WidthHolderOne>

            {/* <CardHolder>
                    <div>
                        <PrivacyCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                This Privacy Policy describes how epiFi handles
                                certain information it may collect and receive
                                from a Customer via the use of its website
                                (https://fi.money). This includes its mobile
                                application available on Android/iOS platforms
                                (collectively referred to as website).
                            </Font>
                        </PrivacyCard>

                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                As a user of our website, you accept this
                                Privacy Policy when you visit our website, sign
                                up for, access, or use our products, services,
                                content, features, technologies or functions
                                offered on our website. It’s also applicable to
                                all our related sites, applications, and
                                services.
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
                                We might also use your data for our legitimate
                                interests or for that of a third party – with
                                whom we share your data after taking your
                                consent. It means using your data for a reason
                                which is in your, epiFi’s or a third party’s
                                legitimate interest and which does not nullify
                                or override your privacy rights.
                            </Font>
                        </PrivacyCard>

                        <PrivacyCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                It is imperative to read everything mentioned
                                under this Privacy Policy in conjunction with
                                our general terms and conditions available at
                                the website.
                            </Font>
                        </PrivacyCard>

                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                If you do not agree to the terms of this policy,
                                we would not be in a position to provide you
                                with our services.
                            </Font>
                        </PrivacyLastCard>
                    </div>
                </CardHolder> */}
        </DescriptionContainer>
        {/* <Bar /> */}
    </>
);

export default InfoSection;
