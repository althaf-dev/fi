import React from 'react';
import FeaturesPageJson from '../../../assets/json/features-page.json';
import { OrientationType } from '../constants';
import LeftRightOrientation from '../LeftRightOrientation';
import FullOrientation from '../FullOrientation';
import TopBottomOrientation from '../TopBottomOrientation';
import ContainerOrientation from '../ContainerOrientation';
import styled from 'styled-components';
import { Device } from '@/Themes/Device';


const StyledLanding = styled.div`
    margin: auto;
    max-width: 1440px;
    padding-bottom: 56px;

    @media ${Device.tab}{
        padding-bottom: 100px;
    }

    @media ${Device.desktop}{
        padding-bottom: 180px;
    }
`;


function index() {
    const {
        sections,
    } = FeaturesPageJson['instant-loans'] || {};

    const renderLayout = (item:any) => {
        const { container_id: containerId } = item;
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
                layoutSection = <TopBottomOrientation item={item} />;
                break;
            }

            case OrientationType.Container: {
                layoutSection = (
                    <ContainerOrientation
                        item={item}
                        containerId={containerId}
                    />
                );
                break;
            }

            default:
                return null;
        }

        return layoutSection;
    };



    return (
        <>
            <StyledLanding>
               {sections.map((item) => renderLayout(item))}
            </StyledLanding>
          
        </>
    );
}

export default index;
