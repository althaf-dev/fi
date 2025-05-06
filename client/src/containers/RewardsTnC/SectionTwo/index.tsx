import React from 'react';

import {
    Bar,
    CardFooterInfo,
    SectionContainer,
    TitleText,
    TitleTextHolder,
    WidthHolder,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionTwo = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <TitleText tagType='text' font='h1'>
                        User and Epifi 🤝
                    </TitleText>
                </TitleTextHolder>
                <WidthHolder>
                    <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                        User understands that the reward amount for their Smart
                        Deposit is a discretionary sum – which will be given to
                        them by Epifi Technologies Private Limited (Epifi). The
                        sum will be allocated by Epifi exclusively for
                        depositing in their Smart Deposit account (in their
                        name) with Epifi's partner bank.
                        <br />
                        <br />
                        Accordingly, User hereby grants and confirms the
                        existence of the right of lien and set-off for the
                        amount received by the User from Epifi (as a reward) for
                        deposit in their Smart Deposit account. At its sole
                        discretion and without notice to the User, the Company
                        may utilise the amount received by the User, as a
                        reward, towards their Smart Deposit account with Epifi's
                        partner bank.
                    </CardFooterInfo>
                </WidthHolder>
            </SectionContainer>
            <Bar />
        </>
    );
};

export default SectionTwo;
