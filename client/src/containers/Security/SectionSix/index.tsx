import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../components/Abstract';
import { SECURITY_FIMONEY_MAIL } from '../../../constants/AppConstant';
import {
    BarOne,
    CardHolder,
    BarHolder,
    CardInfo,
    ColoredSpan,
    PrivacyCard,
    PrivacyLastCard,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const EmailBox = styled(ColoredSpan)`
    white-space: nowrap;
`;

const SectionSix = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Responsible Disclosure ✔️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    All of us at Epifi (Epifi Technologies Private Limited)
                    are committed to our user&apos;s data and privacy.
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
                            We blend security at multiple steps within our products with state-of-the-art
                            technology to ensure our systems maintain strong security measures.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            The overall data and privacy security design allow us to defend
                            our systems from various attacks.
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
                            You could submit a bug report to us at&nbsp;
                            <a href={SECURITY_FIMONEY_MAIL}>
                                <EmailBox color='FOREST_GREEN'>
                                    security@fi.money
                                </EmailBox>
                            </a>
                            &nbsp;with detailed steps required to reproduce the vulnerability.
                        </Font>
                    </PrivacyCard>

                    <PrivacyLastCard>
                        <Font
                            tagType='text'
                            font='pSmallVariantOne'
                            color='TUNDORA_2'
                        >
                            We shall put the best of our efforts to investigate and fix
                            the legitimate issues in a reasonable time frame – while
                            requesting you not to disclose it publicly.
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
