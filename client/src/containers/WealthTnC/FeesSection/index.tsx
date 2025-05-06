import React from 'react';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const FEES_SECTION_DATA = {
    title: 'Fees 💸',
    description: {
        content: 'We believe in complete transparency. There are no hidden fees on our platform. Our nominal charges, wherever specified, are for the services. Nevertheless, we do have specific terms regarding them.',
    },
    card: {
        content: [
            {
                id: 1,
                content: 'The company may, if required by law, change any fee or charge or institute new fees. The user agrees to pay all charges so levied – provided there is an intimation of the prices before the change.',
            },
            {
                id: 2,
                content: 'The company would determine the fee to be paid by a user in its sole discretion, and any fees charged will be inclusive of all applicable taxes, which the user will be liable to pay.',
            },
        ],
    },
};

const FeesSection = () => (
    <SectionContainer>
        <Title content={FEES_SECTION_DATA.title} />
        <Description content={FEES_SECTION_DATA.description.content} />
        <Card content={FEES_SECTION_DATA.card.content} />
    </SectionContainer>
);

export default FeesSection;
