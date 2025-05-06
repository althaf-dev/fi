// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Font } from '../../../components';

import {
    // Bar,
    BarHolder,
    BarOne,
    CardHolder,
    CardInfo,
    ColoredSpan,
    PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextHolder,
    TitleTextOne,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionSix = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Rights of Usage & Data Rights ✔️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    From breaching the T&Cs to duplicating portions of the
                    Platform, and everything in between.
                    <br />
                    Here are absolute NO-NOs that every user should be aware of.
                    <br />
                    Some necessary content permissions that you grant us while
                    signing up for our Platform.
                    <br />
                    Our logo and brand name are ours alone. We’d appreciate it
                    if you don’t mess with it. Thanks!
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
                            If we reasonably believe that you are violating the
                            T&Cs, we reserve the right to deny you access to the
                            Services. In such extreme term-breach scenarios – we
                            may even terminate accounts, remove or edit content
                            at any time without notice to the user concerned.
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You also agree not to reproduce, duplicate,
                            copy, sell, resell, display, or exploit the
                            Platform or any of its portions or any
                            intellectual property owned by and belonging to
                            Epifi (including its trademarks, Epifi and the
                            Epifi logo), without an explicitly granted
                            written permission from the Company.
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            You agree and consent that we may publish/share any
                            anonymised data for research/product enhancement, or
                            associated purposes. As part of this data sharing,
                            any personal information that could identify you
                            will be removed or changed (i.e. anonymised).
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
                            You understand that your personal information (including your credit information)
                            may be transferred to other parties, to provide you with our services, and you consent
                            to such transfers. You allow us to verify your credit bureau presence with a CIC, and in
                            turn, permit CICs to establish your credit report’s availability with them. For more
                            information on securely & respectfully we do this, please refer to our
                            <a href='/privacy' target='_blank'>
                                <ColoredSpan color='FOREST_GREEN'>
                                    &nbsp;Privacy Policy.&nbsp;
                                </ColoredSpan>
                            </a>
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            We respect your right to ownership of your data
                            which is created or stored by you on the Platform.
                            You acknowledge to grant Epifi the permission to
                            access, copy, distribute, store, transmit, reformat,
                            publicly display, and publicly perform your content
                            as per these T&Cs.
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

export default SectionSix;
