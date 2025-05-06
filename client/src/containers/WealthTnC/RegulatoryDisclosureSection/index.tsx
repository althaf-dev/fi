import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { Font } from '../../../components';

import { CONSUL_META_INFO_PATH_NAME } from '../../App/constants';
import { selectDynamicConfig } from '../../App/selectors';

import Description from '../Description';
import Card from '../Card';
import TableSection from '../TableSection';

import { SectionContainer } from '../styled';

const REGULATORY_DISCLOSURE_SECTION_DATA = {
    description: {
        firstSection: 'SEBI requires RIA’s to disclose complaint status on their homepage. Pursuant to the same, please note:',
        secondSection: (
            <>
                <b>Average resolution time</b>
                &nbsp;is the sum total of time taken to resolve each complaint in days,
                in the current month divided by total number of complaints resolved in the current month.
            </>
        ),
        thirdSection: (
            <>
                <b>Resolved</b>
                &nbsp;- Inclusive of complaints of previous months resolved in the current month.
                <br />
                <b>Pending</b>
                &nbsp;- Inclusive of complaints pending as on the last day of the month.
            </>
        ),
        fourthSection: (
            <>
                <b>Resolved</b>
                &nbsp;- Inclusive of complaints of previous years resolved in the current year.
                <br />
                <b>Pending</b>
                &nbsp;- Inclusive of complaints pending as on the last day of the year.
            </>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        SEBI regional office address
                        <br />
                        <br />
                        2nd Floor, Jeevan Mangal Building,
                        <br />
                        No.4, Residency Road,
                        <br />
                        Bengaluru - 560025, Karnataka
                        <br />
                        Tel. Board: +91-080-22222262/ 22222264/ 2222 2283
                        <br />
                        E-mail:&nbsp;
                        <a href='mailto:bangalore-lo@sebi.gov.in'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                bangalore-lo@sebi.gov.in
                            </Font>
                        </a>
                    </p>
                ),
            },
            {
                id: 2,
                content: (
                    <p>
                        Principal officer details
                        <br />
                        <br />
                        Jasna Jayan
                        <br />
                        E-mail:&nbsp;
                        <a href='mailto:praneet@epifi.com'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                principalofficer.wealth@epifi.com
                            </Font>
                        </a>
                    </p>
                ),
            },
        ],
    },
};

const RegulatoryDisclosureSection = () => {
    const dynamicConfigInfo = useSelector(selectDynamicConfig(CONSUL_META_INFO_PATH_NAME), shallowEqual);
    const tableData = dynamicConfigInfo?.wealth?.tnc?.complaintData;

    const latestMonthData = tableData?.latestMonthData;
    const monthlyDisposalData = tableData?.monthlyDisposalData;
    const annualDisposalData = tableData?.annualDisposalData;

    return (
        <SectionContainer>
            <Description content={REGULATORY_DISCLOSURE_SECTION_DATA.description.firstSection} />

            {latestMonthData ? <TableSection tableData={latestMonthData} /> : null}

            <Description content={REGULATORY_DISCLOSURE_SECTION_DATA.description.secondSection} />

            {monthlyDisposalData ? <TableSection tableData={monthlyDisposalData} /> : null}
            <Description content={REGULATORY_DISCLOSURE_SECTION_DATA.description.thirdSection} />

            {annualDisposalData ? <TableSection tableData={annualDisposalData} /> : null}
            <Description content={REGULATORY_DISCLOSURE_SECTION_DATA.description.fourthSection} />

            <Card content={REGULATORY_DISCLOSURE_SECTION_DATA.card.content} />
        </SectionContainer>
    );
};

export default RegulatoryDisclosureSection;
