import React from 'react';

import { Font } from '../../../components/Abstract';
import {
    BarOne,
    // CardFooterInfo,
    CardHolder,
    BarHolder,
    CardInfo,
    // ColoredSpan,
    PrivacyCard,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionOne = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Cloud Infrastructure ☁️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    We host our website on Amazon Web Services (AWS), which provides a secure and
                    scalable technology platform.
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
                            Our infrastructure is launched in compliance with AWS’ Well-Architected
                            Framework and incorporates best practices from the AWS Cloud Adoption Framework from the
                            security perspective.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            All communication between the Platform and our servers stay protected via 2048bit encrypted
                            HTTPS protocol. Anyone or anything, including a supercomputer that attempts to pry, may take
                            years to get the decryption combination using a trial-error method.
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
                            We use HTTPS protocol for our website and mobile applications (referred to as “Platform”).
                            It lets us securely transmit sensitive data over the internet.
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            To improve cybersecurity, we also have strict network segmentation and isolation
                            of environments and services in place. Translation: During untoward scenarios, we can
                            limit the impact within tiny sections while the overall system remains unaffected.
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

export default SectionOne;
