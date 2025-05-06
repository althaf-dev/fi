import React from 'react';
import PosterSection from '../PosterSection';
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
        active_menu: activeMenu,
        poster,
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
                        containerRef={containerRef}
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

    const {
        title,
        description,
        show_secure_money_section: showSecureMoneySection,
        subText,
        tag,
        subLogo,
        multiLogo,
        poster_image: posterImage,
        poster_video: posterVideo,
        lottie_data: lottieData,
        multiLogoTwo,
        multiLogoThird,
        multiLogoFourth,
    } = poster || {};

    return (
        <>
            <PosterSection
                title={title}
                description={description}
                subText={subText}
                multiLogo={multiLogo}
                tag={tag}
                subLogo={subLogo}
                multiLogoTwo={multiLogoTwo}
                multiLogoThird={multiLogoThird}
                multiLogoFourth={multiLogoFourth}
                // posterSubText={posterSubText}
                posterImage={posterImage}
                posterVideo={posterVideo}
                lottieData={lottieData}
            />
           
          
        </>
    );
}

export default index;
