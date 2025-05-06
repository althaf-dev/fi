/**
 * @file Form Input with error message container
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Flex, Image, Font } from '../../../components';
import { SVGS_URL } from '../../../constants/AssetConstants';
import MIXINS from '../../../Themes/mixins';

const Input = styled.input`
    width: 100%;
    outline: 0;
    border: none;
    padding-bottom: 8px;
    border-bottom: 1px solid ${(props) => props.theme.color.SILVER_2};
    cursor: pointer;
    color: ${(props) => props.theme.color.MINE_SHAFT};
    caret-color: ${(props) => props.theme.color.DARK_GREEN};
    ${MIXINS.FontMixin({ weight: 600, lineHeight: '24px' })};

    &:focus {
        border-bottom: 2px solid ${(props) => props.theme.color.FOREST_GREEN};
    }

    &::placeholder {
        color: ${(props) => props.theme.color.SUVA_GREY};
    }

    @media ${Device.tab} {
        padding-bottom: 12px;
        ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '20px' })};
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '24px' })};
    }
`;

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 24px;
`;

const ErrorWrapper = styled(Flex)`
    align-items: baseline;
    margin-top: 10px;
`;

const StatusIconWrapper = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 0;
`;

const ErrorMessage = styled(Font)``;

const FormInput = (props: any) => {
    const { errorMessage, value, ...restProps } = props;
    return (
        <InputContainer>
            <Input
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...restProps}
                value={value}
            />

            {value ? (
                <StatusIconWrapper>
                    <Image
                        loadingType='lazy'
                        icon={!errorMessage ? `${SVGS_URL}circle-check2.svg` : `${SVGS_URL}red-alert-circle.svg`}
                        alt='check'
                    />
                </StatusIconWrapper>
            ) : null}

            {errorMessage ? (
                <ErrorWrapper>
                    <ErrorMessage
                        font='label'
                        tagType='label'
                        color='ERROR_RED'
                    >
                        {errorMessage}
                    </ErrorMessage>
                </ErrorWrapper>
            ) : null}
        </InputContainer>
    );
};

export default React.memo(FormInput);
