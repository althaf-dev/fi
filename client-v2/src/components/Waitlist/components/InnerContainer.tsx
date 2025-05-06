/**
 * @file Inner Container for Waitlist
 */

import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Device, MAX_WIDTH_MEDIA_SCREENS } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';
import { Image } from '../../Abstract';

const Wrapper = styled.div`
    ${MIXINS.FlexMixin({})};
    height: 100%;
    background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    
    @media ${Device.tab} {
        padding: 30px;
        background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    }
    
    @media ${Device.desktop} {
        padding: 75px;
    }
`;

const Modal = styled.div<{ isModalOpen?: boolean }>`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.color.SHARK2};
    position: relative;
    max-width: 1290px;
    overflow: hidden;
    margin: auto;
    opacity: ${(props) => (props.isModalOpen ? '0.3' : 'unset')};

    @media ${Device.tab} {
        border-radius: 30px;
        background-color: ${(props) => props.theme.color.NERO};
    }

    @media ${Device.desktop} {
        display: flex;
        max-height: 750px;
    }
`;

const MainSectionContainer = styled.div` 
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'space-between' })};   
    position: relative;
    max-width: 360px;
    height: 100%;
    margin: auto;

    @media ${Device.tab} {
        width: 610px;
        border-radius: 30px;
    } 

    @media ${Device.desktop} {
        min-width: 65%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    } 
`;

const MainSection = styled.div`
    padding: 20px;
    height: 100%;

    @media ${Device.tab} {
        padding: 20px 0px;
    } 

    @media ${Device.desktop} {
        padding: 40px 120px;
    } 
`;

const SecondarySection = styled.div`
    ${MIXINS.FlexMixin({})};
    overflow: hidden;
    background-color: ${(props) => props.theme.color.EERIE_BLACK};
    flex: 1;

    @media screen and ${MAX_WIDTH_MEDIA_SCREENS.tab} {
        display: none;
    }
`;

type Props = React.HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
    isModalOpen?: boolean;
    imageUrl: string;
};

const InnerContainer = (props: Props) => {
    const { isModalOpen, children, imageUrl } = props;

    return (
        <Wrapper>
            <Modal isModalOpen={isModalOpen}>
                <MainSectionContainer>
                    <MainSection>{children}</MainSection>
                </MainSectionContainer>
                <SecondarySection><Image icon={imageUrl} width='100%' height='100%' alt='Fi Credit Card' /></SecondarySection>
            </Modal>
        </Wrapper>
    );
};

InnerContainer.defaultProps = {
    children: null,
    isModalOpen: false,
};

export default InnerContainer;
