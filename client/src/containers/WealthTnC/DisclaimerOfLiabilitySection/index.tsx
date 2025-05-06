import React from 'react';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const DISCLAIMER_OF_LIABILITY_SECTION_DATA = {
    title: 'Disclaimer of Liability ⚠️️',
    description: {
        content: 'The platform functions round the clock. Yet, Epifi shall not remain accountable for service outages during specific scenarios. Our reasons range from natural disasters to your phone getting stolen and everything in between.',
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        Epifi and AMC shall not be responsible for any failure on the user’s part to utilise the services
                        if they are not within the geographical range within which the services are offered. Further,
                        under no circumstance shall the company be held liable if the services are not available for
                        reasons including but not limited to:
                        <br />
                        <br />
                        a. Natural calamities;
                        <br />
                        <br />
                        b. Legal restraints;
                        <br />
                        <br />
                        c. System error;
                        <br />
                        <br />
                        d. Faults in the telecommunication network;
                        <br />
                        <br />
                        e. Other Network failure reasons; or
                        <br />
                        <br />
                        f. Any other cause beyond our control.
                    </p>
                ),
            },
            {
                id: 2,
                content: 'In no event shall Epifi be liable for any loss or unavailability of, or damage or alteration to data, unauthorised access of, lost revenue, lost profits, failure to realise expected savings, damage to reputation, business interruption, downtime costs, or any indirect, incidental, consequential, special, punitive, exemplary or any similar type of damages arising out of or in any way related to these T&Cs or the use or the inability to use the content, weblink, services, or platform by the users , even if advised of the possibility of such damages.',
            },
            {
                id: 3,
                content: (
                    <p>
                        The user shall immediately inform the company either through the self-help tools available on
                        the platform (or by contacting our customer support staff) if they have reason to believe that:
                        <br />
                        <br />
                        a. their mobile phone number has been allotted to another person;
                        <br />
                        <br />
                        b. there has been an unauthorised transaction in their account; or
                        <br />
                        <br />
                        c. that their mobile phone is lost or compromised.
                    </p>
                ),
            },
            {
                id: 4,
                content: 'You also agree that Epifi will not be liable for the loss or damage of confidential information or data of the users arising because of an event or a series of related events that is beyond the control of Epifi including failures or problems with the internet, attempted hacker attacks, hacker attacks, denial of service attacks, virus or malicious software attacks or infections and other events of like nature.',
            },
        ],
    },
};

const DisclaimerOfLiabilitySection = () => (
    <SectionContainer>
        <Title content={DISCLAIMER_OF_LIABILITY_SECTION_DATA.title} />
        <Description content={DISCLAIMER_OF_LIABILITY_SECTION_DATA.description.content} />
        <Card content={DISCLAIMER_OF_LIABILITY_SECTION_DATA.card.content} />
    </SectionContainer>
);

export default DisclaimerOfLiabilitySection;
