import React from 'react';

import Title from '../Title';
import Description from '../Description';

import { SectionContainer } from '../styled';

const GOVERNING_LAW_SECTION_DATA = {
    title: 'Governing Law 📜',
    description: {
        content: (
            <p>
                Details of the legal system we abide by – this is implied because we are an Indian
                organisation, but it’s always best to specifically mention things.
                <br />
                <br />
                • These T&Cs and the use of our company’s services shall be governed by the laws of the
                Republic of India. The mere fact that a user can access the services in a country other than
                India shall not be interpreted to imply that the laws of the said country govern these T&Cs or
                the services.
            </p>
        ),
    },
};

const GoverningLawSection = () => (
    <SectionContainer>
        <Title content={GOVERNING_LAW_SECTION_DATA.title} />
        <Description content={GOVERNING_LAW_SECTION_DATA.description.content} />
    </SectionContainer>
);

export default GoverningLawSection;
