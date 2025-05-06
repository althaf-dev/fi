import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Device } from '../../../../Themes/Device';
import { Font, PrimaryButton } from '../../../../components/Abstract';

const InputWrapper = styled.div`
    padding: 20px;
    width: 240px;
    background-color: ${(props) => props.theme.color.WHITE};
    margin: 20px auto 0;
    border-radius: 10px;

    @media ${Device.tab} {
        padding: 30px;
        width: 100%;
        margin: 30px auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media ${Device.desktop} {
        padding: 20px;
        border-radius: 10px;
    }
`;

const InputContainer = styled(Font)`
    background-color: ${(props) => props.theme.color.TRANSPARENT};
    border: none;
    outline: none;
    width: 200px;
    display: flex;
    justify-content: center;
    margin: auto;
    letter-spacing: 0.2em;
    text-align: center;
    margin-bottom: 15px;

    @media ${Device.tab} {
        margin: 0px;
        width: 235px;
        text-align: left;
    }
`;

const Button = styled.div`
    min-width: 95px;
`;

interface FiniteInputProps {
    onRedeem?: (code: string) => void;
    apiInProgress?: boolean;
    onCodeChange?: (code: string) => void;
}

const FiniteInput = (props: FiniteInputProps) => {
    const [code, setCode] = useState('');
    const [disableInput, setDisableInput] = useState(false);

    const onCodeChange = (value: string) => {
        props.onCodeChange(value);
        if (!(value.length > 9)) {
            setCode(value);
        }
    };

    useEffect(() => setDisableInput(props.apiInProgress), [
        props.apiInProgress,
    ]);

    return (
        <InputWrapper>
            <InputContainer
                disabled={props.apiInProgress}
                value={code}
                tagType='input'
                type='text'
                font='h4'
                onChange={(e: any) => {
                    onCodeChange(e.target.value);
                }}
                autoFocus={true}
            />

            <Button>
                <PrimaryButton
                    disabled={!code || code.length < 9 || props.apiInProgress}
                    label='redeem'
                    onClick={() => {
                        props.onRedeem(code);
                    }}
                />
            </Button>
        </InputWrapper>
    );
};

FiniteInput.defaultProps = {
    onRedeem: () => {},
    onCodeChange: () => {},
};

export default FiniteInput;
