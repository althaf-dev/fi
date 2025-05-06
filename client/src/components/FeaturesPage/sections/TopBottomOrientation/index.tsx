/**
 * @file Features Page TopBottomOrientation Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';

import RenderBasicComponent from '../../RenderBasicComponent';

const Container = styled.div<{isChildContainer?: boolean, isMobileDisabled?: boolean}>`
    padding: ${(props) => (props.isChildContainer ? '0' : '50px 20px 0px')};
    max-width: 360px;
    margin: 0px auto;
    display: ${(props) => (props.isMobileDisabled ? 'none' : 'block')};

    @media ${Device.tab} {
        max-width: 768px;
        /* padding: 60px 40px 0px 40px; */
        padding: ${(props) => (props.isChildContainer ? '0' : '60px 40px 0px 40px')};
    }

    @media ${Device.desktop} {
        max-width: 1290px;
        /* padding: 120px 70px 0px; */
        padding: ${(props) => (props.isChildContainer ? '0' : '120px 70px 0px')};
        display: block;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media ${Device.tab} {
        justify-content: space-between;
        align-items: center;
    }
`;

interface TopBottomOrientationProps {
    item: any;
    isChildContainer?: boolean;
}

const TopBottomOrientation = (props: TopBottomOrientationProps) => {
    const { item, isChildContainer } = props;
    const { is_mobile_disabled: isMobileDisabled } = item;

    return (
        <Container isChildContainer={isChildContainer} isMobileDisabled={isMobileDisabled}>
            <Wrapper>
                <RenderBasicComponent info={item.top} />
                <RenderBasicComponent info={item.bottom} />
            </Wrapper>
        </Container>
    );
};

TopBottomOrientation.defaultProps = {
    isChildContainer: false,
};

export default TopBottomOrientation;
