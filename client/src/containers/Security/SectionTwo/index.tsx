import React from 'react';
import {
    BarOne,
    CardFooterInfo,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    SectionContainerOne,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionTwo = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Host Security 🔒
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    We use industry-leading solutions around anti-virus,
                    anti-malware, intrusion prevention systems, and
                    intrusion detection systems. We also apply the same
                    standards for file integrity monitoring, application
                    control, application and audit log aggregation, and
                    automated patching.
                    <br />
                    <br />
                    All our servers are secured and hardened as per the
                    Center for Internet Security (CIS) Benchmarks.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionTwo;
