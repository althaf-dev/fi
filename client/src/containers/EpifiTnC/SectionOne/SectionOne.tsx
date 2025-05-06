import React from 'react';

import { Font } from '../../../components/Abstract';
import {
    // Bar,
    CardHolder,
    CardInfo,
    ColoredSpan,
    // PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    WidthHolderOne,
    BarHolder,
    BarOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionOne = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    General Terms 📖
                </TitleTextOne>
            </TitleTextHolder>
            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    These general terms provide the outline of your access
                    to the weblink:
                    <a href='/'>
                        <ColoredSpan color='FOREST_GREEN'>
                            https://fi.money.&nbsp;
                        </ColoredSpan>
                    </a>
                    It consists of the mobile application (available in
                    Android and iOS) by the name of “Epifi” (collectively,
                    “Platform”, and all mini-links within). It also covers
                    the use of Services (as defined below) provided to you,
                    “Company”, “We”, “Our” and “Us” as the context may
                    require).(“You”, and “User” as the context may require)
                    (as specified beneath) by Epifi Technologies Private
                    Limited (“Epifi”).
                    <br />
                    <br />
                    What do these terms provide?
                </CardInfo>
            </WidthHolderOne>
            <CardHolder>
                <div>
                    {/* <PrivacyCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                By agreeing to these T&Cs, you also agree to the
                                T&Cs of Epifi Capital Private Limited, Epifi
                                Wealth Private Limited and Epifi Money Private
                                Limited (all of which is accessible here
                                <a href='#' target='_blank'>
                                    <ColoredSpan color='FOREST_GREEN'>
                                        &nbsp;[hyperlink]&nbsp;
                                    </ColoredSpan>
                                </a>
                                ). To clarify, these are sister concerns of
                                Epifi (similar management), and thus We rely on
                                them for providing you with the Services. (For
                                example, ‘We will seek assistance from Epifi
                                Wealth to get a User’s C-KYC data’).
                            </Font>
                        </PrivacyCard> */}

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The Company reserves the right to vary and
                            revise the T&Cs. They may do so by posting the
                            revised terms on the Platform. It may happen
                            without prior notice sent to the user. Besides
                            these terms, we also publish a Privacy Policy,
                            and additional service-specific
                            T&Cs, including those from third parties for
                            using our Services.
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
                            What Services, you ask? We provide a broad range
                            of Services, including our app (available in
                            Android and iOS) and our website (
                            <a href='/' target='_blank'>
                                <ColoredSpan color='FOREST_GREEN'>
                                    https://fi.money
                                </ColoredSpan>
                            </a>
                            ). Although we permit you to use our Services,
                            we retain any and all intellectual property
                            rights we have in the Services.
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

export default SectionOne;
