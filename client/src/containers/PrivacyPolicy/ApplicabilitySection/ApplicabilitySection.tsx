import React from 'react';

// import { Font } from '../../../components/Abstract';
import {
    // Bar,
    CardInfo,
    CardInfoOne,
    // CardCenterText,
    // PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    BarOne,
} from '../PrivacyStyled/PrivacyStyled';

const ApplicabilitySection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Applicability of this policy ✔️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    By mere use of the website, you expressly consent to our use and disclosure of your personal
                    information (all forms of information, physical and digital including Sensitive Personal Data)
                    as per this Privacy Policy.
                </CardInfo>
                <CardInfoOne font='p' tagType='text' color='SUVA_GREY'>
                    As it is your data, you have the right to know how this Privacy Policy applies to you.
                    If at any point in time, an individual provides data or other information about someone
                    other than himself or herself, the individual warrants that they have that person’s consent
                    to provide such information for the purpose specified.
                </CardInfoOne>
                <BarOne />
            </WidthHolderOne>
            {/* <WidthHolder>
                    <CardCenterText>
                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                As it is your data, you have the right to know how this Privacy Policy applies to you.
                                <br />
                                <br />
                                If at any point in time, an individual provides data or other information about someone
                                other than himself or herself, the individual warrants that they have that person’s consent
                                to provide such information for the purpose specified.
                            </Font>
                        </PrivacyLastCard>
                    </CardCenterText>
                </WidthHolder> */}
        </SectionContainerOne>
    </>
);

export default ApplicabilitySection;
