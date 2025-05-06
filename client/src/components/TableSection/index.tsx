/**
 * @file TableSection
 *
 * @summary This component renders a table with a customizable title, description, and data.
 *
 * @description The component takes a tableData prop, which is an object containing the following properties:
 *
 * @props {string} tableData.title - The title of the table.(optional)
 * @props {string} tableData.description - The description of the table.(optional)
 * @props {Array} tableData.headData - An array of objects containing the table header data.
 * @props {Array} tableData.rowData - A two-dimensional array of objects, each containing a 'value' property representing
 * the value of a cell in the table. Each element in the outer array represents a row, and each element in the
 * inner array represents a cell in that row.
 * @props {string} tableData.moreInfo - More information about the table.(optional)
 * @props {boolean} tableData.disableLastRowLine - Before the last row, no horizontal line will be added.(optional)
 *
 * @returns {JSX.Element} The rendered table section component.
*/

import React, { memo } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';
import { htmlSanitization } from '../../utils';

import { Font } from '../Abstract';

const TableTitle = styled(Font)`
    margin-bottom: 4px;

    @media ${Device.desktop} {
        margin-bottom: 12px;
    }
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    border-radius: 19px;
    overflow: scroll;
    margin: 16px auto;

    @media ${Device.desktop} {
        border-radius: 28px;
        margin: 40px auto;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeadRow = styled.tr`
    background-color: ${(props) => props.theme.color.NERO};
`;

const TableHeadData = styled.th`
    ${MIXINS.FontMixin({ weight: 600, size: '10px', lineHeight: '12px' })};
    color: ${(props) => props.theme.color.SILVER_2};
    text-align: left;
    padding: 15px 12px;
    vertical-align: baseline;

    @media ${Device.tab} {
        padding: 14px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, lineHeight: '14px' })};
        padding: 24px 48px;
    }
`;

const TableBodyRow = styled.tr<{ isLastRow: boolean }>`
    border-top: ${(props) => (props.isLastRow ? `1px solid ${props.theme.color.GREY_2}` : 'unset')};
`;

const TableBodyData = styled.td`
    ${MIXINS.FontMixin({ weight: 600, size: '12px' })};
    color: ${(props) => props.theme.color.WHITE};
    padding: 15px 12px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '24px' })};
        padding: 24px 48px;
    }
`;

interface TableSectionType {
    headData: {
        name: string
    }[];
    rowData: {
        value: string;
    }[][];
    title?: string;
    description?: string;
    moreInfo?: string;
    disableLastRowLine?: boolean;
}

interface TableSectionProps {
    tableData: TableSectionType;
}

const TableSection = (props: TableSectionProps) => {
    const { tableData } = props;
    const {
        title: tableTitle, description: tableDescription, headData: tableHeadData, rowData: tableRowData, moreInfo: tableMoreInfo,
        disableLastRowLine,
    } = tableData;

    const rowDataLength = tableRowData.length;

    return (
        <>
            {tableTitle ? <TableTitle font='h2VariantNine' tagType='h2' color='WHITE' dangerouslySetInnerHTML={{ __html: htmlSanitization(tableTitle) }} /> : null}
            {tableDescription ? <TableTitle font='workingInfo' tagType='p' color='SILVER_2' dangerouslySetInnerHTML={{ __html: htmlSanitization(tableDescription) }} /> : null}
            <Container>
                <Table>
                    <TableHeadRow>
                        {tableHeadData.map((head) => (
                            <TableHeadData dangerouslySetInnerHTML={{ __html: htmlSanitization(head.name) }} />
                        ))}
                    </TableHeadRow>
                    {tableRowData.map((row, index) => {
                        const isLastRow = rowDataLength === index + 1 && !disableLastRowLine;

                        return (
                            <TableBodyRow isLastRow={isLastRow}>
                                {row.map((cell) => (
                                    <TableBodyData dangerouslySetInnerHTML={{ __html: htmlSanitization(cell.value) }} />
                                ))}
                            </TableBodyRow>
                        );
                    })}
                </Table>
            </Container>
            {tableMoreInfo ? <TableTitle font='workingInfo' tagType='p' color='GREY_2' dangerouslySetInnerHTML={{ __html: htmlSanitization(tableMoreInfo) }} /> : null}
        </>
    );
};

export default memo(TableSection);
