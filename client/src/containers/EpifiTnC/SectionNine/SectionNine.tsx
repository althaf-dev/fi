import React from 'react';

import {
    // Bar,
    BarOne,
    CardFooterInfo,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextHolder,
    TitleTextOne,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionNine = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Indemnity 🔗
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    If we were in kindergarten, this is the part where we
                    tell you, &apos;Told you so!&apos;. Forced analogy aside, the long
                    sentence below states that you agree to not hold us
                    liable in a court of law.
                    <br />
                    Mostly if – something goes wrong because of your actions
                    on our App or Platform.
                    <br />
                    <br />
                    In consideration of the Company providing the Services,
                    you agree to indemnify and keep harmless the Company
                    (including its affiliates) from (and against) all
                    actions, claims, demands, proceedings, loss, damages,
                    costs, charges and expenses that the Company may incur,
                    at any time, as a consequence of your acting on or
                    omitting or refusing to act on any instruction(s) given
                    by the Company for use of the Services.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionNine;
