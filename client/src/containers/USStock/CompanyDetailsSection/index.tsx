/**
 * @file CompanyDetailsSection
 * Show the details of the company listed on us stocks
 */
import React, { memo } from 'react';

import { ShowMoreContent } from '../../../components';
import { htmlSanitization } from '../../../utils';

import { ICompanyDetails } from '../types';
import DecisionFactorsCard from '../DecisionFactorsCard';

import {
    Description, DetailsWrapper, Text, Value, Detail,
} from './styled';

interface ICompanyDetailsSectionProps {
    details: ICompanyDetails;
}

const CompanyDetailsSection = (props: ICompanyDetailsSectionProps) => {
    const { details } = props;
    const {
        text, subText, description, data,
    } = details || {};

    return (
        <DecisionFactorsCard title={text} symbol={subText}>
            <Description>
                <ShowMoreContent description={description} linesToShow={3} />
            </Description>
            <DetailsWrapper>
                {data?.map((item) => (
                    <Detail key={item?.text}>
                        <Text dangerouslySetInnerHTML={{ __html: htmlSanitization(item.text) }} />
                        <Value dangerouslySetInnerHTML={{ __html: htmlSanitization(item.value) }} />
                    </Detail>
                ))}
            </DetailsWrapper>
        </DecisionFactorsCard>
    );
};

export default memo(CompanyDetailsSection);
