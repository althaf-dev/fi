/**
 * @file SingleFeaturePage
 */

import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import FeaturesPageJson from '../../../assets/json/features-page.json';
import { scrollIntoSection } from '../../../utils/scrollEvents';
import {
    AppHeader, StyledContainer, AppFooter, StyledLanding, PosterContainer,
    FeaturesPagePosterSection, LeftRightOrientation, FullOrientation, TopBottomOrientation,
    SecureMoneySection, Loader,
} from '../../../components';
import { ContainerOrientation } from '../../../components/FeaturesPage';

import { transformDataAccordingFeaturePageCarousel, transformUSStocksCollectionsData } from '../../../utils';

import NotFound from '../../404Page';

import { OrientationType, COLLECTION_IDS, ActionNames } from '../constants';
import { isValidSingleFeaturePageUrl } from '../utils';
import {
    selectHasUSStocksData, selectUSStocksData, selectLoader, selectHasCollections, selectCollections,
    selectCollectionDetails, selectHasCollectionDetails, selectCollectionId,
} from '../selectors';
import { getUSStocksDetailsAction, getUSStocksCollectionListAction, getUSStocksCollectionDetailsAction } from '../actions';
import { APP_URLS, NAVIGATION_URLS } from '../../../constants/AppConstant';

interface ParamsObject {
    [key: string]: any
}

const FeaturePagePosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.DARK_GREY};
`;

const FOOTER_MAP_PAGE = ['mutual-funds', 'connect-all-your-bank-accounts'];

const RenderSingleFeaturePage = () => {
    const params: ParamsObject = useParams();
    const location = useLocation();
    const containerRef = useRef(null);

    const dispatch = useDispatch();

    const { name: featurePageNameParam } = params;
    const pathName = location?.pathname;

    const isLoading = useSelector(selectLoader, shallowEqual);
    const hasUSStocksData = useSelector(selectHasUSStocksData, shallowEqual);
    const usStocksData = useSelector(selectUSStocksData, shallowEqual);
    const hasCollectionsData = useSelector(selectHasCollections, shallowEqual);
    const collectionsData = useSelector(selectCollections, shallowEqual);
    const hasCollectionDetails = useSelector(selectHasCollectionDetails, shallowEqual);
    const collectionDetails = useSelector(selectCollectionDetails, shallowEqual);
    const collectionId = useSelector(selectCollectionId, shallowEqual);

    const webCollectionUSStocksData = usStocksData[COLLECTION_IDS.WEB_COLLECTION];
    const hasWebCollectionUSStockData = hasUSStocksData[COLLECTION_IDS.WEB_COLLECTION];

    useEffect(() => {
        if (pathName === NAVIGATION_URLS.US_STOCKS.url && !hasWebCollectionUSStockData) {
            dispatch(getUSStocksDetailsAction({ collectionId: COLLECTION_IDS.WEB_COLLECTION }));
            dispatch(getUSStocksCollectionListAction());
        }
    }, [featurePageNameParam, dispatch]);

    useEffect(() => {
        // If hash routing is present, do not scroll to top of the page
        if (location.hash) return;

        window.scrollTo(0, 0);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        // call function only after the React component has rendered on the DOM
        if (containerRef.current) {
            scrollIntoSection(location.hash);
        }
    }, [location, containerRef]);

    useEffect(() => {
        if (hasCollectionsData) {
            const { collection_id: _collectionId } = collectionsData[0];

            dispatch(getUSStocksCollectionDetailsAction({ collectionId: _collectionId }));
        }
    }, [hasCollectionsData]);

    // In the FeaturesPageJson wherever webp images are not added that means png is better option than web in terms of size
    const { active_menu: activeMenu, poster, sections } = FeaturesPageJson[featurePageNameParam] || {};

    /**
     * Memoized sections based on USS details.
     * Check if USS details exist
     * Find the index of the section with a specific ID
     * Construct data according to the UI
     *
     * @constant {Array} sectionsMemo - Memoized sections with updated USS details.
     */
    const sectionsMemo = useMemo(() => {
        if (hasWebCollectionUSStockData) {
            const sectionIndex = sections.findIndex((item) => item.section_id === '52a61e8d-1e34-4b58-b463-31d8fdc343fb');

            const transformData = transformDataAccordingFeaturePageCarousel(webCollectionUSStocksData);

            const ussDetailsUIData = {
                section_id: '52a61e8d-1e34-4b58-b463-31d8fdc343fb',
                orientation: OrientationType.TopBottom,
                top: {
                    type: 'heading',
                    data: {
                        title: 'Add Apple, Microsoft, Tesla, Nike and more to your portfolio',
                    },
                },
                bottom: {
                    type: 'carousel_varinat_one',
                    data: {
                        list: transformData,
                        navigationUrl: APP_URLS.US_STOCKS,
                    },
                },
            };

            sections[sectionIndex] = ussDetailsUIData;
        }

        if (hasCollectionsData && hasCollectionDetails) {
            const sectionIndex = sections.findIndex((item) => item.section_id === 'd830f6fc-3f58-494e-b409-f2352c95ab7c');

            const data = transformUSStocksCollectionsData(collectionsData, collectionDetails, collectionId);

            const ussCollectionUIData = {
                section_id: 'd830f6fc-3f58-494e-b409-f2352c95ab7c',
                orientation: OrientationType.TopBottom,
                top: {
                    type: 'heading',
                    data: {
                        title: 'Not sure what to buy?<br/>Pick from these collections',
                    },
                },
                bottom: {
                    type: 'category_tags',
                    data: {
                        actionName: ActionNames.GET_US_STOCKS_COLLECTION_DETAILS_ACTION,
                        categories: data,
                        dynamicComponent: true,
                    },
                },
            };

            sections[sectionIndex] = ussCollectionUIData;
        }

        return [...sections];
    }, [hasWebCollectionUSStockData, hasCollectionsData, hasCollectionDetails, sections, collectionId, collectionDetails]);

    const {
        title, description, show_secure_money_section: showSecureMoneySection, subDescription,
        subText, tag, subLogo, multiLogo, poster_image: posterImage, poster_video: posterVideo,
        lottie_data: lottieData, v2, button_text: buttonText, button_url: buttonUrl, multiLogoTwo, benefitsData, multiLogoThird, multiLogoFourth,
    } = poster || {};

    const renderLayout = (item) => {
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

    // case of invalid urls
    if (!FeaturesPageJson[featurePageNameParam]) {
        return null;
    }

    return (
        <StyledContainer>
            {pathName === NAVIGATION_URLS.US_STOCKS.url ? <Loader isLoading={isLoading} /> : null}
            <FeaturePagePosterContainer>
                <AppHeader activeMenu={activeMenu} />
                <FeaturesPagePosterSection
                    title={title}
                    description={description}
                    subText={subText}
                    multiLogo={multiLogo}
                    tag={tag}
                    subLogo={subLogo}
                    multiLogoTwo={multiLogoTwo}
                    multiLogoThird={multiLogoThird}
                    multiLogoFourth={multiLogoFourth}
                    benefitsData={benefitsData}
                    // posterSubText={posterSubText}
                    posterImage={posterImage}
                    posterVideo={posterVideo}
                    lottieData={lottieData}
                    subDescription={subDescription}
                    buttonText={buttonText}
                    buttonUrl={buttonUrl}
                    v2={v2}
                />
            </FeaturePagePosterContainer>
            <StyledLanding>
                {sectionsMemo.map((item) => renderLayout(item))}
                {showSecureMoneySection ? <SecureMoneySection /> : null }
            </StyledLanding>
            <AppFooter showSecondaryContent={FOOTER_MAP_PAGE.some((page) => page === featurePageNameParam)} />
        </StyledContainer>
    );
};

const SingleFeaturePage = () => {
    const params: ParamsObject = useParams();

    const location = useLocation();
    const pathName = location?.pathname;
    /**
     * example url = http://localhost:8080/us-stocks
     * Pathname returns the url excluding the localhost, so here the pathname is us-stocks
     * (pathName === NAVIGATION_URLS.US_STOCKS.url)
     * above code checks if the pathname from the url and navigation constant that we have declared is same.
     * featurePageNameParam from params is validated with end point in the single feature page json and that particular page is displayed.
     */
    let { name: featurePageNameParam } = params;

    if (pathName === NAVIGATION_URLS.US_STOCKS.url) {
        featurePageNameParam = 'us-stocks';
    }

    if (isValidSingleFeaturePageUrl(featurePageNameParam)) return <RenderSingleFeaturePage />;

    return <NotFound />;
};

export default SingleFeaturePage;
