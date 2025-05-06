/**
 * @file GreyWhite Box Container Layout
 */

import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media ${Device.desktop} {
        background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
        padding: 75px;
    }
`;

const Modal = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    max-width: 1290px;
    overflow: hidden;
    background-color: ${(props) => props.theme.color.MYSTIC};

    .desktop-display {
        display: none;
    }

    @media ${Device.desktop} {
        border-radius: 30px;
        display: flex;
        max-height: 750px;

        .desktop-display {
            display: block;
        }
    }
`;

const MainSection = styled.div`
    flex-basis: 64.34%;
    flex-grow: 1;
    height: 100%;
`;

const SecondarySection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 35.65%;
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    background-color: ${(props) => props.theme.color.ATHENS_GRAY};
`;

type Props = React.HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
    rightChild?: ReactNode;
};

const GreyWhiteContainer = ({ children, rightChild }: Props) => (
    <Wrapper>
        <Modal>
            <MainSection className='position-relative'>{children}</MainSection>
            {rightChild && <SecondarySection>{rightChild}</SecondarySection>}
        </Modal>
    </Wrapper>
);

GreyWhiteContainer.defaultProps = {
    children: null,
    rightChild: null,
};

export default GreyWhiteContainer;
