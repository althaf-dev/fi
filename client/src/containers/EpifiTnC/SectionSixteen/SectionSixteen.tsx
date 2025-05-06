import React from 'react';

import {
    CardFooterInfo,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionSixteen = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    Miscellaneous Terms 🚀
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    Just so we’re clear, you also must be aware of our
                    miscellaneous terms before signing up.
                    <br />
                    <br />
                    The Company shall not be liable for any breach of these
                    T&Cs, due to any force-majeure event such as an act of
                    God, fire, lightning, explosion, flood, inclement
                    weather conditions, power failures, failure in any
                    communication systems, equipment breakdown, strikes,
                    lock-out or any other cause beyond the control of the
                    Company.
                    <br />
                    <br />
                    If any part of these T&Cs is determined to be invalid or
                    unenforceable pursuant to applicable law, then the
                    invalid or unenforceable provision will be deemed
                    superseded by a valid, enforceable provision that most
                    closely matches the intent of the original provision and
                    the remainder of the T&Cs shall continue in effect.
                </CardFooterInfo>
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionSixteen;
