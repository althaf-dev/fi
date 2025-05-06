/* eslint no-else-return: [0] */
/**
 * @file Features Page LeftRightOrientation Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../Abstract';

import RenderComponent from '../../Features/RenderComponent';

const Wrapper = styled.div`
    padding: 50px 20px 0px;
    width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 768px;
        padding: 60px 40px 0px 40px;
    }

    @media ${Device.desktop} {
        width: 1290px;
        padding: 120px 70px 0px;
    }
`;

const Container = styled.div<{ contentLeftType: string, contentRightType: string }>`
    display: flex;
    flex-direction: ${(props) => {
        // hardcoded condition for Payments page where images need to be above the accordion containers
        if (props.contentLeftType === 'accordions' && props.contentRightType === 'image') {
            return 'column-reverse';
        } else if (props.contentLeftType === 'image' && props.contentRightType === 'accordions') {
            return 'column';
        } else if (props.contentLeftType === 'image') {
            return 'column-reverse';
        }

        return 'column';
    }};

    @media ${Device.tab} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const Title = styled(Font)`
    text-align: center;
    padding-bottom: 35px;

    @media ${Device.tab} {
        padding-bottom: 60px;
    }
`;

interface LeftRightOrientationProps {
    item: any;
}

const LeftRightOrientation = (props: LeftRightOrientationProps) => {
    const { item } = props;

    return (
        <Wrapper>
            {
                item.metadata
                    ? (
                        <Title font='h1VariantThree' tagType='text'>{item.metadata.title}</Title>
                    ) : <></>
            }
            <Container contentLeftType={item.left.type} contentRightType={item.right.type}>
                <RenderComponent info={item.left} />
                <RenderComponent info={item.right} />
            </Container>
        </Wrapper>
    );
};

export default LeftRightOrientation;
