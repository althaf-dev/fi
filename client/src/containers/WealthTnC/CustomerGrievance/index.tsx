import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';
import TableSection from '../TableSection';

import { SectionContainer } from '../styled';

const CUSTOMER_GRIEVANCE_DATA = {
    title: 'Customer Grievance',
    description: {
        content: (
            <p>
                For this policy,
                <b>`Grievances or complaints`</b>
                includes any communication that expresses dissatisfaction.
                It could be concerning our conduct or any act of omission, commission or deficiency of service.
                And by nature, any communication which requires a solution/support.
                <br />
                However, it does not include the following:
                <br />
                <br />
                (a) complaints that are incomplete or unspecific;
                <br />
                (b) communications that offer suggestions;
                <br />
                (c) communications seeking guidance or explanation.
            </p>
        ),
    },
};

const OUR_AIM_SECTION_DATA = {
    description: {
        title: 'Our Aim',
        content: (
            <p>
                We aim to be a customer-centric company and believe in providing our customers with the best experiences/services.
                Our approach toward customer grievance redressal covers the parameters mentioned below:
            </p>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        a. Customers are treated fairly and transparently — without bias at all times;
                        <br />
                        <br />
                        b. Complaints raised by customers are attended to with utmost importance and courtesy. And always in a time-bound manner;
                        <br />
                        <br />
                        c. Develop and maintain an adequate and timely organisational framework to promptly
                        address and resolve customer grievances fairly and equitably
                        <br />
                        <br />
                        d. Customers are made fully aware of avenues for grievance redressal;
                        <br />
                        &nbsp;&nbsp;• within the organisation (ensuring adequate procedures are in place for expeditious grievance redressal);
                        <br />
                        &nbsp;&nbsp;• with the SEBI (SCORES) app.
                        <br />
                        <br />
                        e. Customer grievances pertaining to financial products in which investments have been made based on investment advice shall
                        fall within the purview of the regulator of such financial products.
                        <br />
                        <br />
                        f. We have established an adequate and efficient monitoring mechanism to oversee the functioning of the
                        grievance redressal function.
                    </p>
                ),
            },
        ],
    },
};

const COMPLAINT_MECHANISM_SECTION_DATA = {
    description: {
        title: 'Complaint Mechanism',
        content: (
            <p>
                Customers can contact our 24x7 customer service team (i.e. customer care executive) via
            </p>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        • e-mail at&nbsp;
                        <a href='mailto:help@fi.care'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                help@fi.care
                            </Font>
                        </a>
                        &nbsp;or
                        <br />
                        <br />
                        • by making a call to our customer care executive at 080-47485490 or
                        <br />
                        <br />
                        • via in-app chat
                        <br />
                        <br />
                        All of which aim to provide timely resolution to queries/complaints across channels.
                        Post receipt of the queries/complaints, the customer service team shall send a response to the customers
                        acknowledging the complaint. The customers can also request a call back for a query, and we would be happy
                        to reach out to the customer.
                        <br />
                        <br />
                        In the unlikely event that a customer&apos;s issue remains unresolved to their satisfaction for up to 30 days —
                        the customer can file a complaint with the SEBI (SCORES) at&nbsp;
                        <a href='http://scores.gov.in' target='_blank' rel='noreferrer'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                http://scores.gov.in
                            </Font>
                        </a>
                        &nbsp;Alternately, they may also write to any of the regional SEBI offices&nbsp;
                        <a href='https://www.sebi.gov.in/department/regional-offices-43/contact.html' target='_blank' rel='noreferrer'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                https://www.sebi.gov.in/department/regional-offices-43/contact.html.
                            </Font>
                        </a>
                        &nbsp;Customers may also access SCORES through the SCORES mobile application, available for free here:
                        <br />
                        <a href='https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330' target='_blank' rel='noreferrer'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330
                            </Font>
                        </a>
                        <br />
                        Customers can also opt for online resolution of the dispute on the SMART ODR Portal at&nbsp;
                        <a href='https://smartodr.in' target='_blank' rel='noreferrer'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                https://smartodr.in
                            </Font>
                        </a>
                        &nbsp;For details on the process, please click&nbsp;
                        <a href='https://www.sebi.gov.in/legal/master-circulars/dec-2023/master-circular-for-online-resolution-of-disputes-in-the-indian-securities-market_80236.html' target='_blank' rel='noreferrer'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                here.
                            </Font>
                        </a>
                    </p>
                ),
            },
        ],
    },
};

const OurAimSectionWrapper = styled.div`
    margin-top: 40px;

    @media ${Device.tab} {
        margin-top: 60px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
    }
`;

const EscalationMatrixData = {
    title: 'Escalation Matrix',
    headData: [
        { name: 'Details of designation' },
        { name: 'Contact Person Name' },
        { name: 'Address where the physical address location' },
        { name: 'Contact No.' },
        { name: 'Email-ID' },
        { name: 'Working hours when complainant can call' },
    ],
    rowData: [
        [
            { value: 'Customer Care' },
            { value: 'Alok Kumar Singh' },
            { value: 'Salarpuria Sattva Knowledge Court, Survey No. 77, Plot no.9, 06th Floor, Doddenakundi, KR Puram Hobli Bangalore East Taluk Bangalore KA 560048 IN' },
            { value: '080-47485490' },
            { value: 'help@fi.care' },
            { value: '10:30 AM - 5:30 PM' },
        ],
        [
            { value: 'Head of Customer Care' },
            { value: 'Srinivas Rokkam' },
            { value: 'Same as above' },
            { value: '080-45234395' },
            { value: 'escalationsdesk@fi.care' },
            { value: '10:30 AM - 5:30 PM' },
        ],
        [
            { value: 'Compliance Officer' },
            { value: 'Raghuvamsi Meka' },
            { value: 'Same as above' },
            { value: '080-45234396' },
            { value: 'compliance.wealth@epifi.com' },
            { value: '10:30 AM - 5:30 PM' },
        ],
        [
            { value: 'Whole Time Director' },
            { value: 'Sumit Gwalani' },
            { value: 'Same as above' },
            { value: '080-45234397' },
            { value: 'bod.wealth@epifi.com' },
            { value: '10:30 AM - 5:30 PM' },
        ],
        [
            { value: 'Principal Officer' },
            { value: 'Jasna Jayan' },
            { value: 'Same as above' },
            { value: '080-45234398' },
            { value: 'principalofficer.wealth@epifi.com' },
            { value: '10:30 AM - 5:30 PM' },
        ],
    ],
};

const CustomerGrievance = () => (
    <SectionContainer>
        <Title content={CUSTOMER_GRIEVANCE_DATA.title} />
        <Description content={CUSTOMER_GRIEVANCE_DATA.description.content} />

        <OurAimSectionWrapper>
            <Description
                title={OUR_AIM_SECTION_DATA.description.title}
                content={OUR_AIM_SECTION_DATA.description.content}
            />
            <Card content={OUR_AIM_SECTION_DATA.card.content} addBottomMargin />
        </OurAimSectionWrapper>

        <Description
            title={COMPLAINT_MECHANISM_SECTION_DATA.description.title}
            content={COMPLAINT_MECHANISM_SECTION_DATA.description.content}
        />
        <Card content={COMPLAINT_MECHANISM_SECTION_DATA.card.content} addBottomMargin />
        <TableSection tableData={EscalationMatrixData} removeBorder />
    </SectionContainer>
);

export default CustomerGrievance;
