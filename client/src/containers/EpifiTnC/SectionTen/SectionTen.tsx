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

const SectionTen = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Governing Law 📜
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    Details of the legal system we abide by – this is
                    implied because we are an Indian organisation, but it’s
                    always best to specifically mention things.
                    <br />
                    <br />
                    These T&Cs and the use of the Services provided by the
                    Company, shall be governed by the laws of the Republic
                    of India. The mere fact that a user can access the
                    Services in a country other than India shall not be
                    interpreted to imply that the laws of the said country
                    govern these T&Cs or the Services.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionTen;
