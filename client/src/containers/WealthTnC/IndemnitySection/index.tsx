import React from 'react';

import Title from '../Title';
import Description from '../Description';

import { SectionContainer } from '../styled';

const INDEMNITY_SECTION_DATA = {
    title: 'Indemnity 🔗',
    description: {
        content: (
            <p>
                If we were in kindergarten, this is the part where we tell you, ’Told you so!’.
                <br />
                Forced analogy aside, the long sentence below states that you agree to not hold us liable in a
                court of law.
                <br />
                Mostly if – something goes wrong because of your actions on our App or Platform.
                <br />
                <br />
                • In consideration of the company providing the services, you agree to indemnify, defend, save,
                keep indemnified and hold harmless the company (including its affiliates) from (and against) all
                actions, claims, demands, proceedings, loss, damages, costs, charges and expenses that the
                company may incur (including reasonable attorney fees, expenses, and other charges), at any
                time, as a consequence of your acting on or omitting or refusing to act on any instruction(s)
                given by the company for the use of the services.
            </p>
        ),
    },
};

const IndemnitySection = () => (
    <SectionContainer>
        <Title content={INDEMNITY_SECTION_DATA.title} />
        <Description content={INDEMNITY_SECTION_DATA.description.content} />
    </SectionContainer>
);

export default IndemnitySection;
