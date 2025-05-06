import React from 'react';

import ToolTip from '../../../components/ToolTipVariantOne';

import {
    Wrapper,
    Section,
    Separator,
    TableSeparator,
    Label,
    LabelValue,
    LabelContainer,
} from './styled';

interface TableDetailsProps {
    tableData: any;
    isStickySection?: boolean
}

const TableDetails = (props: TableDetailsProps) => {
    const { tableData, isStickySection } = props;

    const { length } = tableData;

    return (
        <>
            <Wrapper isStickySection={isStickySection}>
                {tableData.map((list:any, index:number) => (
                    <>
                        <Section>
                            <div>
                                <Label isStickySection={isStickySection}>{list.label}</Label>
                            </div>
                            <LabelContainer>
                                <LabelValue isStickySection={isStickySection}>{list.value}</LabelValue>
                                <ToolTip tooltipText={list.moreInfo} isTableView />
                            </LabelContainer>
                        </Section>
                        {length !== index + 1 ? <Separator /> : null}
                    </>
                ))}
            </Wrapper>
            {/* <TableSeparator /> */}
        </>
    );
};

export default TableDetails;
