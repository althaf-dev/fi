import React from 'react';

import Title from '../Title';
import Description from '../Description';

import { SectionContainer } from '../styled';

const ASSIGNMENT_SECTION_DATA = {
    title: 'Assignment ✅',
    description: {
        content: (
            <p>
                After you sign up to use our services, you are legally bound to comply with our T&C&apos;s.
                <br />
                <br />
                • You will not assign or transfer any rights, obligations, or privileges you have under these T&Cs
                without the prior written consent of Epifi. These T&Cs are binding on your valid successors and
                permitted assigns. Any assignment or transfer in violation of this clause will be deemed void.
            </p>
        ),
    },
};

const AssignmentSection = () => (
    <SectionContainer>
        <Title content={ASSIGNMENT_SECTION_DATA.title} />
        <Description content={ASSIGNMENT_SECTION_DATA.description.content} />
    </SectionContainer>
);

export default AssignmentSection;
