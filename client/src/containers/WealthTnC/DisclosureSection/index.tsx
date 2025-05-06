import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectDynamicConfig } from '../../App/selectors';
import { CONSUL_META_INFO_PATH_NAME } from '../../App/constants';
import TableSection from '../TableSection';
import { SectionContainer } from '../styled';
import Title from '../Title';
import { DISCLOSURE_SECTION_DATA } from '../constants';

const DisclosureSection = () => {
    const dynamicConfigInfo = useSelector(selectDynamicConfig(CONSUL_META_INFO_PATH_NAME), shallowEqual);
    const tableData = dynamicConfigInfo?.wealth?.tnc?.complaintData;

    const disclosureData = tableData?.disclosureData || DISCLOSURE_SECTION_DATA;
    return (
        <SectionContainer>
            <Title content={disclosureData.title} />
            <TableSection tableData={{ ...disclosureData, title: '' }} removeBorder />
        </SectionContainer>
    );
};

export default DisclosureSection;
