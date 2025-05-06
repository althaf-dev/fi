import React from 'react';
import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';

import {
    // Bar,
    CardHolder,
    // CardFooterInfo,
    CardInfo,
    PrivacyCard,
    PrivacyLastCard,
    // SectionContainer,
    // TitleText,
    TitleTextHolder,
    // WidthHolder,
    SectionContainerOne,
    TitleTextOne,
    WidthHolderOne,
    BarOne,
    BarHolder,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const CardFooterInfoOne = styled(Font)`
    margin-top: 40px;
    margin-bottom:40px;

    @media ${Device.tab} {
        margin-top: 60px;
        margin-bottom:60px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
        margin-bottom:40px;
    }
`;

const SectionEight = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Disclaimer of Liability ⚠️️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    The Platform functions round the clock. Yet, Epifi shall
                    not remain accountable for Service outage during
                    specific scenarios. Our reasons range from natural
                    disasters to your phone getting stolen, and everything
                    in between.
                    <br />
                    <br />
                    Epifi shall not be responsible for any failure on the
                    part of the user to utilise the Services, in case they
                    are not within the geographical range within which the
                    Services are offered. Further, under no circumstance,
                    shall the Company be held liable if the Services are not
                    available for reasons including but not limited to:
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
                            a. Natural calamities
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            c. Legal restraints
                        </Font>
                    </PrivacyCard>
                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            e. System error
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
                            b. Faults in the telecommunication network
                        </Font>
                    </PrivacyCard>

                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            d. Other Network failure reasons
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            f. Any other cause beyond our control
                        </Font>
                    </PrivacyLastCard>
                </div>
            </CardHolder>

            <WidthHolderOne>
                <CardFooterInfoOne font='p' tagType='text' color='SUVA_GREY'>
                    The user shall immediately inform the Company either
                    through the self-help tools available on the Platform or
                    by contacting our customer support staff if they have
                    reason to believe that:
                </CardFooterInfoOne>
            </WidthHolderOne>
            <CardHolder>
                <div>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            a. Their mobile phone number has been
                            allotted to another person
                        </Font>
                    </PrivacyCard>
                    <PrivacyCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            c. Their mobile phone has been lost or
                            compromised.
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
                            b. There has been an unauthorised
                            transaction in their account
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

export default SectionEight;
