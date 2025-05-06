/**
 * @file Webform Layout
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { WrapperOne } from '../../MinKycClosedAccount/styled';
import { FooterContainer } from '../../../components/Waitlist/styled';
import Header from '../Header';

const InputWrapper = styled.div`
    padding-bottom: 20px;
    
    @media ${Device.phone} {
        width: 80%;
    }

    @media ${Device.tab} {
        width: 60%;
    }

    @media ${Device.desktop} {
        width: 30%;
    }
`;

interface WebformLayoutInterface {
    title?: string,
    description?: string,
    onClickPrevButton?: () => void,
    logoImage?: boolean,
    Content: React.ReactElement,
    Footer: React.ReactElement,
    isEnteringBackground?: boolean,
}

const WebformLayout = (props: WebformLayoutInterface) => {
    const {
        Content, Footer, isEnteringBackground, title, description, onClickPrevButton, logoImage,
    } = props;
    return (
        <WrapperOne
            className={
                !isEnteringBackground
                    ? 'transition transition-start-initial-bottom opacity-initial scrollbar-hide'
                    : 'transition transition-start-final opacity-final scrollbar-hide'
            }
        >
            <Header
                isEntering={isEnteringBackground}
                title={title}
                description={description}
                onClickPrevButton={onClickPrevButton}
                logoImage={logoImage}
            />
            <InputWrapper>
                {Content}
            </InputWrapper>
            <FooterContainer>
                {Footer}
            </FooterContainer>
        </WrapperOne>
    );
};

WebformLayout.defaultProps = {
    isEnteringBackground: true,
    logoImage: true,
    onClickPrevButton: null,
    description: '',
    title: '',
};

export default WebformLayout;
