import React from 'react';

import {
    CardInfo,
    SectionContainer,
    TitleText,
    TitleTextHolder,
    WidthHolder,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionThree = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <TitleText tagType='text' font='h1'>
                        Eligibility ✅
                    </TitleText>
                </TitleTextHolder>
                <WidthHolder>
                    <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                        Your eligibility for the Company's rewards programme
                        isn't based on your compliance with these
                        reward-specific T&Cs alone. You must also meet the
                        eligibility criteria for each offer.
                        <br />
                        <br />
                        Each reward's details, and individual eligibility T&Cs,
                        appear on the Offers page of the Platform. Offers
                        provided to a particular user may vary from
                        user-to-user. You agree to read the offer T&Cs
                        applicable to your offer – as provided in your Epifi app
                        or Platform account carefully.
                        <br />
                        <br />
                        Please note that our Platform users residing in the
                        State of Tamil Nadu are not eligible to participate in
                        specific rewards or offers, as per the applicable laws
                        in Tamil Nadu. Thus, users residing in Tamil Nadu are
                        requested not to participate in offers relating to cash
                        backs, etc.
                    </CardInfo>
                </WidthHolder>
            </SectionContainer>
        </>
    );
};

export default SectionThree;
