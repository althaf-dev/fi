import React from 'react';

import { Font } from '../../../components';

import Title from '../Title';
import Description from '../Description';

import { SectionContainer } from '../styled';

const GENERAL_TERMS_SECTION_DATA = {
    title: 'General Terms 📖',
    description: {
        content: (
            <p>
                These general terms provide the outline of your access to the weblink:&nbsp;
                <a href='/'>
                    <Font font='p' tagType='span' color='FOREST_GREEN'>
                        https://fi.money.
                    </Font>
                </a>
                &nbsp;It consists of the mobile application (available in Android and iOS) by the name of
                “Epifi” (collectively, “Platform”, and all mini-links within). It also covers the use of
                Services (as defined below) provided to you (“You”, and “User” as the context may require)
                (as specified beneath) by Epifi Wealth Private Limited (“Epifi”, “Company”, “We”, “Our” and “Us”
                as the context may require). By accessing or using our weblink, services, platform, or
                mini-links, including all our content or information shared there (“Our Content”), you
                acknowledge that you have read, understood and agreed to be bound by our T&Cs. We politely
                insist that you read these T&Cs carefully. We only grant you a limited, exclusive,
                non-assignable, and non-transferable license to access our content on the express condition that
                you have agreed to abide by our T&Cs.
                <br />
                <br />
                In addition to these T&Cs, our weblink, platform, or services may also contain separate terms
                and conditions. We recommend that you read those additional terms and conditions carefully too.
                By accessing our content, you agree to be bound by those terms and conditions as well.
                <br />
                <br />
                What do these terms provide?
            </p>
        ),
    },
};

const GeneralTermsSection = () => (
    <SectionContainer>
        <Title content={GENERAL_TERMS_SECTION_DATA.title} />
        <Description content={GENERAL_TERMS_SECTION_DATA.description.content} />
    </SectionContainer>
);

export default GeneralTermsSection;
