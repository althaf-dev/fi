import React from 'react';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const COMMUNICATION_FROM_EPIFI_SECTION_DATA = {
    title: 'Communication from Epifi 📞',
    description: {
        content: 'Occasionally, we will contact you to convey critical information. No, we promise not to blitzkrieg your device with notifications. We’ll reach out only when essential. This section is regarding that.',
    },
    card: {
        content: [
            {
                id: 1,
                content: 'The user agrees to receive alerts, notifications, offers, discounts, and other such general communication messages via text messages, WhatsApp messages, push notifications, by emails, or various other modes of communication as indicated by Epifi, as a part of the user’s use of the services.',
            },
            {
                id: 2,
                content: 'The user shall not hold the company liable for any loss, damages, claim, or expense, including legal costs, incurred or suffered by the user on account of such facility.',
            },
            {
                id: 3,
                content: 'The user shall immediately inform the company if the user observes any error in the information provided in the alert. Subsequently, we will make the best possible efforts to rectify the error as early as possible.',
            },
        ],
    },
};

const CommunicationFromEpifiSection = () => (
    <>
        <SectionContainer>
            <Title content={COMMUNICATION_FROM_EPIFI_SECTION_DATA.title} />
            <Description content={COMMUNICATION_FROM_EPIFI_SECTION_DATA.description.content} />
            <Card content={COMMUNICATION_FROM_EPIFI_SECTION_DATA.card.content} />
        </SectionContainer>
    </>
);

export default CommunicationFromEpifiSection;
