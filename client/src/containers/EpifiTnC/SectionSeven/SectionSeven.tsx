import React from 'react';

import {
    BarHolder,
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

const SectionSeven = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Notice 📋️
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    How this Company may send or receive a legal notice and
                    the various forms of notice dispatch. Also – in the rare
                    occasion that a user isn’t satisfied with our Services –
                    here’s how they should write in.
                    <br />
                    <br />
                    The Company may give notice to the user, under these
                    T&Cs, electronically to the user&apos;s mailbox
                    (regarded as being in writing), or may also deliver the
                    notice by hand or by registered post to the address provided
                    by the user. In case you need to write to us, do so to
                    the Company address. Our office is at:
                    <br />
                    <br />
                    Epifi Technologies Private Limited,
                    <br />
                    No.293, Indiqube Gamma,
                    <br />
                    154/172, Outer Ring Road,
                    <br />
                    Kadubeesanahalli, Bengaluru,
                    <br />
                    Karnataka 560103.
                    <br />
                    <br />
                    The Company may provide notice of a general nature
                    regarding the Services, Platform and T&Cs, which apply
                    to all users on its Platform. The Company may also
                    employ customised messages sent to the user over their
                    mobile phone via Short Messaging Service. Such notices
                    are deemed to have been served individually to each
                    user.
                </CardFooterInfo>
            </WidthHolderOne>
            <BarHolder>
                <BarOne />
            </BarHolder>
        </SectionContainerOne>
    </>
);

export default SectionSeven;
