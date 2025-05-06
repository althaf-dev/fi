/**
 * @file Features Page FullOrientation Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';

import RenderComponent from '../../RenderComponent';

const Wrapper = styled.div`
    margin: 50px auto 0px;
    padding: 0 20px;

    @media ${Device.tab} {
        margin: 60px auto 0px;
    }

    @media ${Device.desktop} {
        margin: 80px auto 0px;
    }
`;

interface FullOrientationprops {
     item: any;
}

const FullOrientation = (props: FullOrientationprops) => {
    const { item } = props;

    return (
        <Wrapper>
            <RenderComponent info={item.full} />
        </Wrapper>
    );
};

export default FullOrientation;
