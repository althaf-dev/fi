import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

const TableTitle = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 155%;
    margin: 40px auto 15px;
    text-align: center;
    max-width: 320px;

    @media ${Device.tab} {
        font-size: 14px;
        line-height: 130%;
        max-width: 450px;
        margin: 60px auto 15px;
    }

    @media ${Device.desktop} {
        font-size: 20px;
        margin: 60px auto 20px;
    }
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 8px;
    width: 320px;
    overflow: scroll;
    margin: 0px auto 15px;

    @media ${Device.tab} {
        border-radius: 12px;
        width: 610px;
        margin: 0px auto 24px;
    }

    @media ${Device.desktop} {
        border-radius: 25px;
        width: 810px;
        margin: 0px auto 40px;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeadRow = styled.tr`
    background-color: ${(props) => props.theme.color.GAINSBORO};
`;

const TableHeadData = styled.th<{ isLastColumn: boolean }>`
    border-right: ${(props) => (props.isLastColumn ? 'unset' : `1px solid ${props.theme.color.SILVER_2}`)};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 155%;
    padding: 12px;
    text-align: left;
    vertical-align: baseline;

    @media ${Device.tab} {
        font-size: 14px;
        line-height: 130%;
        padding: 14px;
    }

    @media ${Device.desktop} {
        font-size: 20px;
        padding: 24px;
    }
`;

const TableBodyRow = styled.tr<{ isLastRow: boolean }>`
    border-top: ${(props) => (props.isLastRow ? `1px solid ${props.theme.color.SILVER_2}` : 'unset')};
`;

const TableBodyData = styled.td<{ isLastRow: boolean, isLastCell: boolean }>`
    border-right: ${(props) => (props.isLastCell ? 'unset' : `1px solid ${props.theme.color.SILVER_2}`)};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: ${(props) => (props.isLastRow ? '700' : '500')};
    font-size: 12px;
    line-height: 155%;
    padding: 12px;

    @media ${Device.tab} {
        font-size: 14px;
        line-height: 130%;
        padding: 14px;
    }

    @media ${Device.desktop} {
        font-size: 20px;
        padding: 24px;
    }
`;

interface TableSectionType {
    title: string;
    headData: {
        name: string
    }[];
    rowData: {
        value: string | number;
    }[][];
}
interface TableSectionProps {
    tableData: TableSectionType;
    removeBorder?: boolean;
}

const TableSection = (props: TableSectionProps) => {
    const { tableData, removeBorder = false } = props;
    const { title: tableTitle, headData: tableHeadData, rowData: tableRowData } = tableData;

    const headDataLength = tableHeadData.length;
    const rowDataLength = tableRowData.length;

    return (
        <>
            <TableTitle>{tableTitle}</TableTitle>
            <Container>
                <Table>
                    <TableHeadRow>
                        {tableHeadData.map((head, index) => (
                            <TableHeadData isLastColumn={headDataLength === index + 1}>{head.name}</TableHeadData>
                        ))}
                    </TableHeadRow>
                    {tableRowData.map((row, index) => {
                        const isLastRow = !removeBorder && rowDataLength === index + 1;

                        return (
                            <TableBodyRow isLastRow={isLastRow}>
                                {row.map((cell, indexOne) => (
                                    <>
                                        <TableBodyData
                                            isLastRow={isLastRow}
                                            isLastCell={row.length === indexOne + 1}
                                        >
                                            {cell.value}
                                        </TableBodyData>
                                    </>
                                ))}
                            </TableBodyRow>
                        );
                    })}
                </Table>
            </Container>
        </>
    );
};

TableSection.defaultProps = {
    removeBorder: false,
};

export default TableSection;
