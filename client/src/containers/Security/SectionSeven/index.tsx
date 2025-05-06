import React from 'react';
import styled from 'styled-components';

import { Font } from '../../../components';
import { PRIVACY_FIMONEY_MAIL } from '../../../constants/AppConstant';
import { useWindowDimensions, useIsSSR } from '../../../hooks';
import { WINDOW_SIZE } from '../../../Themes/Device';
import {
    CardFooterInfo,
    CardHolder,
    CardInfo,
    CardMiddleInfo,
    ColoredSpan,
    PrivacyCard,
    PrivacyLastCard,
    SectionContainerOne,
    // TitleText,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    TitleTextOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const EmailBox = styled(ColoredSpan)`
    white-space: nowrap;
`;

const SectionSeven = () => {
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    return (
        <>
            <SectionContainerOne>
                <TitleTextHolder>
                    <TitleTextOne tagType='text' font='h1'>
                        Privacy Practices 🔑
                    </TitleTextOne>
                </TitleTextHolder>

                <WidthHolderOne>
                    <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                        We will never rent or sell your information or data to
                        anyone. We never use or transfer your data for serving
                        ads, including retargeting, personalised, or
                        interest-based advertising. We will use your data for
                        legitimate purposes only while safeguarding your privacy
                        concerns.
                        <br />
                        <br />
                        We will never provide any part of your information to
                        anyone unless explicitly agreed by you. We would be
                        sharing your information primarily with
                    </CardInfo>
                </WidthHolderOne>

                <CardHolder>
                    <div>
                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                a. members of epiFi (including our
                                affiliates/subsidiaries and business partners)
                                for providing you content, products, customer
                                support etc.
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
                                b. financial institutions and partner banks and
                                the like.
                            </Font>
                        </PrivacyLastCard>
                    </div>
                </CardHolder>

                <WidthHolderOne>
                    <CardMiddleInfo font='p' tagType='text' color='SUVA_GREY'>
                        By way of example, some of the uses of your Personal
                        Data would include
                    </CardMiddleInfo>
                </WidthHolderOne>

                <CardHolder>
                    <div>
                        <PrivacyCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                a. Providing additional services, including
                                customer support
                            </Font>
                        </PrivacyCard>

                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                {!isSSR && width < WINDOW_SIZE.DESKTOP
                                    ? 'b. Processing transactions and verifying your identity (including during account creation and password reset processes)'
                                    : 'c. Contacting you through a voice call or SMS or email'}
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
                                {!isSSR && width < WINDOW_SIZE.DESKTOP
                                    ? 'c. Contacting you through a voice call or SMS or email'
                                    : 'b. Processing transactions and verifying your identity (including during account creation and password reset processes)'}
                            </Font>
                        </PrivacyCard>

                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                d. Providing, and customising, offers for you
                            </Font>
                        </PrivacyLastCard>
                    </div>
                </CardHolder>

                <WidthHolderOne>
                    <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                        You have the right to de-link your Gmail account with
                        the application at any time and/ or delete account
                        information obtained from Gmail by writing to&nbsp;
                        <a href={PRIVACY_FIMONEY_MAIL}>
                            <EmailBox color='FOREST_GREEN'>
                                privacy@fi.money
                            </EmailBox>
                        </a>
                        . &nbsp;
                        <br />
                        <br />
                        Please refer to our&nbsp;
                        <a href='/privacy' target='_blank'>
                            <EmailBox color='FOREST_GREEN'>
                                Privacy Policy
                            </EmailBox>
                        </a>
                        &nbsp;for more information.
                    </CardFooterInfo>
                </WidthHolderOne>
            </SectionContainerOne>
        </>
    );
};

export default SectionSeven;
