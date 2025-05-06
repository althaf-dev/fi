/**
 * @file Inner Container for Waitlist
 */

import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

const Wrapper = styled.div`
    height: 100%;
    background-color: ${(props) => props.theme.color.CHARCOAL_GREY};

    body {
        height: 100vh;
    }
    
    @media ${Device.tab} {
        padding: 30px;
        background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    }
    
    @media ${Device.desktop} {
        padding: 75px;
        background: black;
    }
`;

const Modal = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.color.BRIGHT_GRAY};
    position: relative;;
    overflow: hidden;
    margin: auto;
    opacity: unset;

    @media ${Device.tab} {
        border-radius: 30px;
        background-color: ${(props) => props.theme.color.BRIGHT_GRAY};
    }

    @media ${Device.desktop} {
        width: 800px;
    }
`;

type Props = React.HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

const InnerContainer = (props: Props) => {
    const { children } = props;

    return (
        <Wrapper>
            <Modal>
                {children}
            </Modal>
        </Wrapper>
    );
};

InnerContainer.defaultProps = {
    children: null,
};

export default InnerContainer;
