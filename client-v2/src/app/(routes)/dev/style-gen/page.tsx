/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StylePropertiesGenerator } from '@/components/RenderComponent/utils';

const defaultState = {
    styleStr: '',
    key: 'main',
    defaultProp: '',
};
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 16px;
    }
`;
const SubWrapper = styled.div`
    display: flex;
    align-items: center;
    & > * {
        margin-right: 16px;
    }
`;
function Page() {
    const [state, setState] = useState(defaultState);
    const [result, setResult] = useState({});

    const onChange = (evt: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
        const { name, value } = evt.target;
        setState((pre) => ({ ...pre, [name]: value }));
    };

    const handleClick = () => {
        let parsedDefaultProp;

        if (state.defaultProp) {
            parsedDefaultProp = JSON.parse(state.defaultProp);
        }
        const res = StylePropertiesGenerator(state.styleStr, state.key, parsedDefaultProp);
        const parsedRes = JSON.parse(JSON.stringify(res));

        setResult(parsedRes);
    };

    return (
        <div>
            <Container>
                <Wrapper>
                    <SubWrapper>
                        <input id='style-gen-key' name='key' value={state.key} onChange={onChange} />
                        <textarea name='defaultProp' value={state.defaultProp} onChange={onChange} />
                    </SubWrapper>
                    <textarea style={{ height: '300px' }} name='styleStr' value={state.styleStr} onChange={onChange} />
                </Wrapper>
                <button type='button' onClick={handleClick}>Submit</button>
            </Container>
            <div style={{ whiteSpace: 'pre', fontFamily: 'monospace', padding: '16px' }}>
                {JSON.stringify(result, null, 4)}
            </div>
        </div>
    );
}

export default Page;
