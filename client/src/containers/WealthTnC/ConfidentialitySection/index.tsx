import React from 'react';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const CONFIDENTIALITY_SECTION_DATA = {
    title: 'Confidentiality 🔒',
    description: {
        content: 'Never disclose private information that you come across while using our platform; it reflects poorly on all of us. Unless, of course, it’s because of something drastic like a court order!',
    },
    card: {
        content: [
            {
                id: 1,
                content: 'The user agrees not to directly or indirectly disclose or attempt to use or personally benefit from any non-public information that they may learn on the platform or through our services and hold such non-public information strictly on a confidential basis. This obligation shall continue until the non-public information becomes publicly known — if a user is compelled by a court order or any other legal/statutory authority to divulge the company’s confidential information (or the services). In that case, the user agrees to notify and cooperate with the company promptly and diligently in protecting such data to the extent possible under applicable.',
            },
            {
                id: 2,
                content: (
                    <p>
                        The company would access, preserve, and disclose the user’s information if required to do
                        so by law, or if the company believes (in good faith) that it is reasonably necessary in
                        order to:
                        <br />
                        <br />
                        a. respond to claims asserted against the company or to comply with a legal process;
                        <br />
                        <br />
                        b. prevent fraud, risk assessment, investigation, user and platform support, product
                        development, debugging purposes and protecting the rights, property, or safety of the
                        company (and its affiliates), its users, or members of the public.
                    </p>
                ),
            },
        ],
    },
};

const ConfidentialitySection = () => (
    <SectionContainer>
        <Title content={CONFIDENTIALITY_SECTION_DATA.title} />
        <Description content={CONFIDENTIALITY_SECTION_DATA.description.content} />
        <Card content={CONFIDENTIALITY_SECTION_DATA.card.content} />
    </SectionContainer>
);

export default ConfidentialitySection;
