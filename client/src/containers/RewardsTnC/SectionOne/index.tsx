import React from 'react';

import {
    Bar,
    CardFooterInfo,
    SectionContainer,
    TitleText,
    TitleTextHolder,
    WidthHolder,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionOne = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <TitleText tagType='text' font='h1'>
                        General Terms 📖
                    </TitleText>
                </TitleTextHolder>
                <WidthHolder>
                    <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                        You agree that your participation in our rewards
                        programme establishes that you've understood and agreed
                        to these reward-specific T&Cs. The reward-specific T&Cs
                        form a binding legal agreement between you and the
                        Company. Having said this, please note that this is a
                        discretionary programme of the Company.
                        <br />
                        At our sole discretion, we reserve the right to
                        disqualify any user who does not meet the offer
                        requirements to discontinue or change any offer or
                        reward programme at any time. Sometimes, for cause,
                        including but not limited to: any misuse of the offer,
                        fraud, suspicious transaction or activity, and under any
                        legal requirement or applicable rules and regulations.
                        We also reserve the right to discontinue or change any
                        offer or reward programme at any time, at our sole
                        discretion.
                    </CardFooterInfo>
                </WidthHolder>
            </SectionContainer>
            <Bar />
        </>
    );
};

export default SectionOne;
