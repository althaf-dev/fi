import React from 'react';

import Title from '../Title';
import Description from '../Description';

import { SectionContainer } from '../styled';

const YOU_AND_US_SECTION_DATA = {
    title: '‘You’ and ‘Us’ 🤝',
    description: {
        content: (
            <p>
                As part of our endeavour to provide you with the best and updated services, we continuously
                strive to improve them. Occasionally, this means we add or remove features and functionalities;
                increase or decrease limits to our services; start offering new services or stop providing old
                ones. If we make any material change(s) that negatively impact your use of our services, we
                will provide you with reasonable advance notice. This is to ensure that you are not caught
                off-guard during such rare instances.
            </p>
        ),
    },
};

const YouAndUsSection = () => (
    <SectionContainer>
        <Title content={YOU_AND_US_SECTION_DATA.title} />
        <Description content={YOU_AND_US_SECTION_DATA.description.content} />
    </SectionContainer>
);

export default YouAndUsSection;
