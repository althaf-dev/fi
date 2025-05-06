/**
 * @file FinePrintText
 * Component that renders fine print text like T&C conditions apply
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Device } from '../../Themes/Device';

import { IFinePrint } from '../types';
import { Font } from '../Abstract';

const FinePrintTextContainer = styled(Font)`
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
    text-align: ${(props) => (props.type && props.type === 'sme' ? 'center' : 'right')};

    @media ${Device.tab} {
        margin-bottom: 0;
        text-align: right;
    }
`;

interface IFinePrintText {
    data: IFinePrint;
    type?: string | undefined | null;
}

const FinePrintText = (props: IFinePrintText) => {
    const { data, type = null } = props;
    const {
        font, color, text, url,
    } = data;

    return (
        <>
            {text ? (
                <FinePrintTextContainer font={font} tagType='text' color={color} onClick={() => window.open(url)} type={type}>
                    {text}
                </FinePrintTextContainer>
            ) : null }
        </>
    );
};

FinePrintText.defaultProps = {
    type: null,
};

export default memo(FinePrintText);
