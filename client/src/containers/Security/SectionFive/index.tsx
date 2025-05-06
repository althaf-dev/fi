import React from 'react';
import {
    BarOne,
    CardFooterInfo,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionFive = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Vulnerability Assessment and Penetration Testing 🔎
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    We have an in-house network security team which uses
                    industry-leading products to conduct manual and
                    automated Vulnerability Assessment and Penetration
                    Testing activities
                    <br />
                    <br />
                    We employ both static application security testing and
                    dynamic application security testing. Both get
                    incorporated into our continuous integration /
                    continuous deployment pipeline
                    <br />
                    <br />
                    We will bring in auditors certified by Computer
                    Emergency Response Team (CERT-IN) to do periodic
                    external testing and audits.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionFive;
