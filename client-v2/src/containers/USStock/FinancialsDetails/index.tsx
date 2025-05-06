/**
 * @file FinancialsDetails
 * Show the FinancialsDetails of the us stock
 */
import React, { memo } from 'react';

import GraphSection from '../../../components/GraphSection';

import DecisionFactorsCard from '../DecisionFactorsCard';
import { IFinancialDetail } from '../types';

interface IFinancialsDetailsProps {
    details: IFinancialDetail;
}

const FinancialsDetails = (props: IFinancialsDetailsProps) => {
    const { details } = props;
    const { data, text } = details || {};

    return (
        <DecisionFactorsCard title={text} key={text}>
            <GraphSection data={data} />
        </DecisionFactorsCard>
    );
};

export default memo(FinancialsDetails);
