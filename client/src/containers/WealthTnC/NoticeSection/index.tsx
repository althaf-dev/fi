import React from 'react';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const NOTICE_SECTION_DATA = {
    title: 'Notice 📋️',
    description: {
        content: 'How this Company may send or receive a legal notice and the various forms of notice dispatch. Also – in the rare occasion that a user isn’t satisfied with our Services – here’s how they should write in.',
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        The Company may give notice to the user, under these T&Cs, electronically to the user’s
                        mailbox (regarded as being in writing), or may also deliver the notice by hand or by
                        registered post to the address provided by the user. In case you need to write to us,
                        do so to the Company address. Our office is at:
                        <br />
                        <br />
                        Epifi Wealth Private Limited,
                        <br />
                        Salarpuria Sattva Knowledge Court,
                        <br />
                        Survey No.77, Plot no. 9, 06th Floor,
                        <br />
                        Doddenakundi, KR Puram Hobli,
                        <br />
                        Bangalore East - 560048
                    </p>
                ),
            },
            {
                id: 2,
                content: 'The Company may provide notice of a general nature regarding the Services, Platform and T&Cs, which apply to all users on its Platform. The Company may also employ customised messages sent to the user over their mobile phone via Short Messaging Service. Such notices are deemed to have been served individually to each user.',
            },
        ],
    },
};

const NoticeSection = () => (
    <SectionContainer>
        <Title content={NOTICE_SECTION_DATA.title} />
        <Description content={NOTICE_SECTION_DATA.description.content} />
        <Card content={NOTICE_SECTION_DATA.card.content} />
    </SectionContainer>
);

export default NoticeSection;
