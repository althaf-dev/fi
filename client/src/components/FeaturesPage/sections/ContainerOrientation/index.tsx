/**
 * @file Features Page FullOrientation Section
 */

import React from 'react';
import styled from 'styled-components';

import { OrientationType } from '../../../../containers/FeaturesPages/constants';
import { RefObject } from '../../../../interfaces/elements';
import { Device } from '../../../../Themes/Device';

import { Font } from '../../../Abstract';

import FullOrientation from '../FullOrientation';
import LeftRightOrientation from '../LeftRightOrientation';
import TopBottomOrientation from '../TopBottomOrientation';

const renderLayout = (item) => {
    let layoutSection;

    switch (item.orientation) {
        case OrientationType.LeftRight: {
            layoutSection = <LeftRightOrientation item={item} />;
            break;
        }

        case OrientationType.Full: {
            layoutSection = <FullOrientation item={item} />;
            break;
        }

        case OrientationType.TopBottom: {
            layoutSection = <TopBottomOrientation item={item} isChildContainer />;
            break;
        }

        default:
            return null;
    }

    return layoutSection;
};

const Wrapper = styled.div<{ bgColor: string }>`
    margin: 50px 20px 0px;
    padding: 40px 15px;
    background: ${(props) => props.bgColor};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${Device.tab} {
        margin: 60px 30px 0px;
        border-radius: 40px;
    }

    @media ${Device.desktop} {
        margin: 80px 40px 0px;
        border-radius: 60px;
    }
`;

const ContainerHeading = styled(Font)<{ headingBgColor: string }>`
    background: ${(props) => props.headingBgColor};
    border-radius: 60px;
    padding: 24px 48px;
    width: max-content;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContainerSubHeading = styled(Font)`
    padding-top: 16px;

    @media ${Device.tab} {
        padding-top: 24px;
    }

    @media ${Device.desktop} {
        padding-top: 40px;
    }
`;

interface ContainerOrientationProps {
    item: any;
    containerId?: any;
    containerRef: RefObject<HTMLDivElement>;
}

const ContainerOrientation = (props: ContainerOrientationProps) => {
    const { item, containerId, containerRef } = props;
    const {
        container_heading: heading, container_subheading: subHeading, sections, bg_color: bgColor, heading_bg_color: headingBgColor,
    } = item;

    return (
        <Wrapper bgColor={bgColor} id={containerId} ref={containerRef}>
            <ContainerHeading font='h2' tagType='h2' color='FOREST_GREEN' headingBgColor={headingBgColor}>
                {heading}
            </ContainerHeading>
            <ContainerSubHeading font='h5VariantSix' tagType='h5' color='SUVA_GREY'>{subHeading}</ContainerSubHeading>
            {sections.map((contItem) => renderLayout(contItem))}
        </Wrapper>
    );
};

ContainerOrientation.defaultProps = {
    containerId: '',
};

export default ContainerOrientation;
