import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@/rtk/hooks';

const FormWrapper = styled.div`
    margin-top: 10px;
    font-family: Gilroy;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: gray;
`;

const IntroScreenWrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
    .title {
        font-family: Gilroy;
        font-size: 32px;
        font-weight: 600;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        color: #313234;
    }

    .message div {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #878A8D;
        margin-top: 30px;
    }

`;

function InvalidFrom() {
    const { screens } = useAppSelector((state: any) => state.riskForm);

    const { message, title } = screens.errorScreen || {};

    return (
        <>
            <FormWrapper>
                <div>{ title || 'Invalid Form' }</div>
            </FormWrapper>

            {
                message && title && (
                    <IntroScreenWrapper>
                        <div className='message'>
                            {
                                Array.isArray(message) && message.map((item: string) => <div>{item}</div>)
                            }
                        </div>
                    </IntroScreenWrapper>
                )

            }
        </>
    );
}

export default InvalidFrom;
