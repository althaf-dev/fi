import React from 'react';

import {
    // Bar,
    // CardFooterInfo,
    CardInfo,
    CardInfoOne,
    ColoredSpan,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
    BarHolder,
    BarOne,
} from '../PrivacyStyled/PrivacyStyled';

const DefinitionSection = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Definitions 📖
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    For purposes of this Policy,
                    <ColoredSpan color='MINE_SHAFT'>
                            &nbsp;“Personal Data”&nbsp;
                    </ColoredSpan>
                    refers to any piece of information that we, as a Company, can use to verify you
                    as a real-life human being. For example, an e-mail ID linked to your social media accounts.
                </CardInfo>
                <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                    <ColoredSpan color='MINE_SHAFT'>
                            &nbsp;“Sensitive Personal Data”&nbsp;
                    </ColoredSpan>
                    translates to any highly confidential information – i.e. records not available in the public
                    domain – that you provide to us.
                </CardInfo>
                <CardInfoOne font='p' tagType='text' color='SUVA_GREY'>
                    Besides these, any information that is freely available, accessible in the public domain,
                    furnished under the Right to Information Act, 2005 or any other law for the time being in
                    force – shall not be regarded as Sensitive Personal Data or information.
                </CardInfoOne>
            </WidthHolderOne>
            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default DefinitionSection;
