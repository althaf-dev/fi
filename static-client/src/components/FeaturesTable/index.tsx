/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/**
 * @file FeaturesTable Component to render tables from JSON data
 */

import React, { useState } from 'react';
import styled from 'styled-components';

import { ICONS_URL_MAP } from '@/constants/AssetConstants';
import { Device } from '@/Themes/Device';
import  htmlSanitization  from '@/utils/htmlSanitization';

import { Font, Image } from '@/components/Abstract';

const Container = styled.div`
    border-radius: 20px;
    padding: 30px 60px 60px;
    display: none;
    margin: 40px auto;
    width: 1150px;
    background-color: ${(props) => props.theme.color.WHITE};
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    font-size: 30px;
    
    @media ${Device.desktop} {
        display: block;
    }
`;

const TableContainer = styled.div<{ tableColumns: number }>`
    display: grid;
    grid-template-columns: ${(props) => (props.tableColumns > 3 ? `repeat(${props.tableColumns - 1}, 1fr)` : `repeat(${props.tableColumns}, 1fr)`)};
    grid-column-gap: 20px;
    grid-row-gap: 60px;
    width: 100%;
    position: relative;
`;

const ScrollText = styled(Font)<{ tableColumns: number }>`
    position: absolute;
    top: 5px;
    right: 5px;
    display: ${(props) => (props.tableColumns > 3 ? 'flex' : 'none')};
    align-items: center;

    @media ${Device.desktop} {
        top: 10px;
        right: 50px;
    }
`;

const ScrollImage = styled.div<{ tableColumns: number }>`
    width: 35px;
    padding: 0 10px;
    display: ${(props) => (props.tableColumns > 3 ? 'flex' : 'none')};

    @media ${Device.desktop} {
        width: 40px;
    }
`;

const TableColumn = styled.div<{ tableColumns: number }>`
    display: grid;
    width: ${(props) => (props.tableColumns > 3 ? '332px' : 'auto')};
`;

const DataColumn = styled.div<{ backgroundColor?: string, hasMultilineText?: boolean, tableColumns: number }>`
    width: ${(props) => (props.tableColumns > 3 ? '332px' : 'auto')};
    background-color: ${(props) => props.backgroundColor || props.theme.color.IVORY};
    border-radius: 20px;
    padding: ${((props) => (props.hasMultilineText ? '0 20px 20px' : '0'))};
`;

const ColumnsContainer = styled.div<{ tableColumns: number }>`
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    width: ${(props) => (props.tableColumns > 3 ? '670px' : 'auto')};
`;

const ColumnData = styled.div`
    padding: 0 20px;
`;

const ShadedCol = styled.div<{ tableColumns: number }>`
    box-sizing: border-box;
    position: absolute;
    height: 95%;
    width: 120px;
    right: 0;
    bottom: 0;
    background: ${(props) => (props.tableColumns > 3 ? 'linear-gradient(90deg, rgba(255,255,255,0) 0%,rgb(255,255,255) 100%)' : 'transparent')};
`;

const TextContainer = styled(Font)`
    padding: 45px 0 0;
`;

const PropertiesCell = styled.div<{ textColor?: string, hasMultilineText?: boolean }>`
    margin: -40px 0;
    display: flex;
    align-items: center;
    color: ${(props) => props.textColor || props.theme.color.BLACK};
`;

const TableCell = styled.div<{ textColor?: string, hasMultilineText?: boolean, customCellHeight?: string }>`
    padding: ${((props) => (props.hasMultilineText ? '0px' : '30px 0px'))};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.textColor || props.theme.color.BLACK};
    text-align: center;
    height: ${((props) => (props.hasMultilineText ? (props.customCellHeight ? props.customCellHeight : '150px') : 'unset'))};
`;

const TableMobile = styled.div`
    display: block;
    position: relative;

    @media ${Device.desktop} {
        display: none;
    }
`;

const TableContainerMobile = styled.div<{ tableColumns: number }>`
    display: grid;
    grid-template-columns: ${(props) => (`repeat(${props.tableColumns - 1}, 1fr)`)};
    overflow-y: hidden;
    overflow-x: auto;
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    padding: 0 10px;
    width: 100%;
    color: ${(props) => props.theme.color.MINE_SHAFT_2};

    @media ${Device.desktop} {
        display: none;
    }
`;

const TableHeaderMobile = styled.div`
    font-family: Gilroy, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.GREY_3};
`;

const TableColumnMobile = styled.div<{ backgroundColor?: string }>`
    background-color: ${(props) => props.backgroundColor || props.theme.color.IVORY};
    padding: 5px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    width: 130px;
`;

const TableCellMobile = styled.div<{ customCellHeightMobile: string }>`
    margin: 10px 0;
    height: ${(props) => props.customCellHeightMobile ?? '100%'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const TableContentMobile = styled.div`
    font-family: Gilroy, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    padding: 5px 0;
`;

const TableItem = styled.div`
    margin: 20px 0px;
    width: 100%;
`;

const Divider = styled.div <{ index: number }>`
    width: 12px;
    height: 1px;
    background-color: ${(props) => props.theme.color.ONYX};
    margin: 0 0 10px;
    display: ${(props) => (props.index === 0 ? 'none' : 'block')};
`;

interface FeaturesTableProps {
    data: any;
}

export default function FeaturesTable(props: FeaturesTableProps) {
    const { data } = props;
    const {
        has_multiline_text: hasMultilineText,
        custom_cell_height: customCellHeight,
        custom_cell_height_mobile: customCellHeightMobile,
        bottom_text: bottomText,
    } = data;

    // Add 1 to the number of columns to account for the properties column
    const [tableColumns] = useState(data.columns.length + 1);

    return (
        <>
            <Container>
                <TableContainer tableColumns={tableColumns}>
                    <ScrollText tagType='text' font='h5VariantSix' color='FOREST_GREEN' tableColumns={tableColumns}>
                        SCROLL TO VIEW MORE
                        <ScrollImage tableColumns={tableColumns}>
                            <Image icon={ICONS_URL_MAP.LEFT_SCROLL_ARROW} loadingType='lazy' alt='scroll left' />
                        </ScrollImage>
                    </ScrollText>
                    <TableColumn tableColumns={tableColumns}>
                        <PropertiesCell>{data.properties.header}</PropertiesCell>
                        {data.properties.column_data.map((item: any) => {
                            const { text_color: textColor } = data?.properties;

                            return (
                                <PropertiesCell textColor={textColor}>{item}</PropertiesCell>
                            );
                        })}
                    </TableColumn>
                    {
                        tableColumns > 3
                            ? (
                                <ColumnsContainer tableColumns={tableColumns}>
                                    <ShadedCol tableColumns={tableColumns} />
                                    {data.columns.map((colData: any) => (
                                        <ColumnData>
                                            <TableCell hasMultilineText={hasMultilineText} textColor={colData.text_color} customCellHeight={customCellHeight}>{colData.header}</TableCell>
                                            <DataColumn backgroundColor={colData.background_color} hasMultilineText={hasMultilineText} tableColumns={tableColumns}>
                                                {colData.column_data.map((item: any) => (
                                                    <TableCell hasMultilineText={hasMultilineText} customCellHeight={customCellHeight}>
                                                        <div
                                                        // eslint-disable-next-line react/no-danger
                                                            dangerouslySetInnerHTML={{ __html: htmlSanitization(item) }}
                                                        />
                                                        {/* {item} */}
                                                    </TableCell>
                                                ))}
                                            </DataColumn>
                                        </ColumnData>
                                    ))}
                                </ColumnsContainer>
                            )
                            : data.columns.map((colData: any) => (
                                <div>
                                    <TableCell hasMultilineText={hasMultilineText} textColor={colData.text_color} customCellHeight={customCellHeight}>{colData.header}</TableCell>
                                    <DataColumn backgroundColor={colData.background_color} hasMultilineText={hasMultilineText} tableColumns={tableColumns}>
                                        {colData.column_data.map((item: any) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <TableCell hasMultilineText={hasMultilineText} customCellHeight={customCellHeight}>
                                                <div
                                                    // eslint-disable-next-line react/no-danger
                                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(item) }}
                                                />
                                                {/* {item} */}
                                            </TableCell>
                                        ))}
                                    </DataColumn>
                                </div>
                            ))
                    }
                </TableContainer>

                <TextContainer tagType='text' font='h6VariantOne' color='GREY_2'>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(bottomText) }}
                    />
                </TextContainer>
            </Container>

            <TableMobile>
                <ScrollText tagType='text' font='pSmall' color='FOREST_GREEN' tableColumns={tableColumns}>
                    SCROLL TO VIEW MORE
                    <ScrollImage tableColumns={tableColumns}>
                        <Image icon={ICONS_URL_MAP.LEFT_SCROLL_ARROW} loadingType='lazy' alt='scroll left' />
                    </ScrollImage>
                </ScrollText>
                <TableContainerMobile tableColumns={tableColumns}>
                    {data.columns.map((colData: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <TableItem>
                            <TableContentMobile>{colData.header}</TableContentMobile>
                            <TableColumnMobile backgroundColor={colData.background_color}>
                                {data.properties.column_data.map((_key: any, index: any) => (
                                    <>
                                        <Divider index={index} />
                                        <TableCellMobile customCellHeightMobile={customCellHeightMobile}>
                                            <TableHeaderMobile>{data.properties.column_data[index]}</TableHeaderMobile>
                                            <TableContentMobile>
                                                <div
                                                // eslint-disable-next-line react/no-danger
                                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(colData.column_data[index]) }}
                                                />
                                            </TableContentMobile>
                                        </TableCellMobile>
                                    </>
                                ))}
                            </TableColumnMobile>
                        </TableItem>
                    ))}
                </TableContainerMobile>
                <TextContainer tagType='text' font='h5VariantSix' color='GREY_2'>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(bottomText) }}
                    />
                </TextContainer>
            </TableMobile>
        </>
    );
}
