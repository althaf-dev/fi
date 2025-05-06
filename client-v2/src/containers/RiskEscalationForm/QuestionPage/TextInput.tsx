import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const TextInputWrapper = styled.div`
    .container {
        border-radius: 19px;
        background: white;
        padding: 2px;
        padding-top: 11px;
        padding-bottom: 11px;

        .input {
            margin-left: 15px;
        }

        textarea {
            outline: none;
            border: 0px;
            line-height: 30px;
            border-radius: 19px;
            width: 98%;
            font-size: 14px;
            padding-left: 10px;
            height: 30px;
            resize: none;
            color: #312c2c;
            font-family: Gilroy;
        }
    
        .label {
            font-family: Gilroy;
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            letter-spacing: 0.44999998807907104px;
            text-align: left;
            color: #878A8D;
            margin-top: 5px;
            margin-left: 20px;
        }

        .sub-title {
            text-align: right;
        }

        .sub-title span {
            margin-right: 15px;
            font-family: Gilroy;
            font-size: 12px;
        }
    }
`;

function TextInput(props: any) {
    const {
        onChange, textBoxFieldOptions, value, updateValidationState, questionKey
    } = props;

    const inputRef: any = useRef();

    const { max_chars_limit: maxCharsLimit } = textBoxFieldOptions;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= maxCharsLimit) onChange(event.target.value);
        else updateValidationState({ [questionKey]: { message: 'Exceeds allowed character limit.', visible: true } });
    };

    const autoGrow = () => {
        if (inputRef.current && inputRef.current.style && inputRef.current.style.height && inputRef.current.scrollHeight) {
            inputRef.current.style.height = '0px';
            const { scrollHeight } = inputRef.current;
            inputRef.current.style.height = `${scrollHeight}px`;
        }
    };

    useEffect(() => {
        inputRef.current.style.height = '30px';
    }, []);

    return (
        <TextInputWrapper>
            <div className='container'>
                <div className='input'><textarea onChange={handleChange} value={value} onInput={autoGrow} ref={inputRef} /></div>
                <div className='sub-title'>
                    <span>
                        {(value || '').length}
                        /
                        {maxCharsLimit}
                    </span>
                </div>
            </div>
        </TextInputWrapper>
    );
}

export default TextInput;
