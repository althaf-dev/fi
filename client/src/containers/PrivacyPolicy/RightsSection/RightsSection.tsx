import React from 'react';

import { Font } from '../../../components/Abstract';
import { PRIVACY_FIMONEY_MAIL } from '../../../constants/AppConstant';
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
    ColoredSpan,
    PrivacyCard,
    BarHolder,
    BarOne,
} from '../PrivacyStyled/PrivacyStyled';

const RightsSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Know your rights 🔗
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    In addition to being able to update and correct your Personal Data, you may also have other data
                    protection rights. This revolves around what you can let us do (or not do) with your information.
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
                            For example, if we have collected and processed your Personal Data with your consent, then
                            you have the right to withdraw your consent at any time stating your reasons or concerns.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You also have a right to ask for a copy of your
                            personal data in a portable (machine-readable)
                            format. You can also say no to us using your
                            personal data for direct marketing and in
                            certain other ‘legitimate interest’
                            circumstances.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            As per the existing legal regulations, specific
                            data fields (such as name, address etc.) would be locked once you enter that.
                            There would be a separate procedure to modify such information,
                            you can find out further details by contacting us through the self help tools in the app.
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
                            Withdrawing your consent will not affect the
                            lawfulness of any processing we carried out
                            before your withdrawal, nor will it affect
                            processing of your personal data carried out in
                            reliance on other lawful grounds other than
                            consent.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            We will keep your personal data for as long as it is needed to carry out the purposes
                            we&apos;ve described above, or as otherwise required by law. Generally, this means we will
                            keep your personal data as long as your account is active or as needed to provide our
                            services. If you cancel/ deactivate/ unsubscribe your account with us, we are not under
                            any obligation to retain your information. However, we may retain your information for
                            twenty-four (24) months (post cancellation/ deactivation), as our business practice.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            you can make any of these requests by contacting us at&nbsp;
                            <a href={PRIVACY_FIMONEY_MAIL}>
                                <ColoredSpan color='FOREST_GREEN'>
                                    privacy@fi.money
                                </ColoredSpan>
                            </a>
                            . We will respond to all requests in accordance
                            with the applicable laws.
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

export default RightsSection;
