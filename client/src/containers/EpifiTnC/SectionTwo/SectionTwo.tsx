import React from 'react';

import {
    // Bar,
    BarOne,
    CardFooterInfo,
    // SectionContainer,
    SectionContainerOne,
    // TitleText,
    TitleTextOne,
    TitleTextHolder,
    // WidthHolder,
    WidthHolderOne,
} from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

const SectionTwo = () => (
    <>
        <SectionContainerOne>
            <TitleTextHolder>
                <TitleTextOne tagType='text' font='h1'>
                    ‘You’ and ‘Us’ 🤝
                </TitleTextOne>
            </TitleTextHolder>

            <WidthHolderOne>
                <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                    As part of our endeavour to provide you with the best
                    and updated Services, we continuously strive to improve
                    them. Occasionally, this means we add or remove features
                    and functionalities; increase or decrease limits to our
                    Services; start offering new Services or stop providing
                    old ones. If we make any material change(s) that
                    negatively impact your use of our Services, we will
                    provide you reasonable advance notice. This is to make
                    sure that you are not caught off-guard during such rare
                    instances, you can also expect an opportunity to export
                    your content from your account on our Platform.
                    <br />
                    <br />
                    The permission we provide you to use our Services
                    continues as long as you meet your responsibilities.
                    One of which is ‘follow appropriate conduct’ – essentially
                    means to create and sustain a respectful environment for
                    everyone using the Platform. If you find that others
                    aren’t observing the rules of conduct, we will provide
                    you with an option to report such abuse.
                </CardFooterInfo>
                <BarOne />
            </WidthHolderOne>
        </SectionContainerOne>
    </>
);

export default SectionTwo;
