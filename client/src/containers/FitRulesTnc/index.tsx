import React from 'react';

import { Section } from './styled';

import ContentSection from './ContentSection';
import { FitRulesTncContentArray } from './constants';

const FitRulesTnc = () => (
    <Section>
        {FitRulesTncContentArray.map((content) => (
            <ContentSection content={content} />
        ))}
    </Section>
);

export default FitRulesTnc;
