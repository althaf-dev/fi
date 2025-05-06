/**
 * @file Home/index.ts
 * Contains the Unique Identification of different components in Home Page
 *
 * Format must be of the form : <screen_name>/<parent_component>/<element_type>/<slug>
 */
import { ElementTypes } from '..';

const ScreenName = 'HomeScreen';

const Components = {
    Root: 'Root',
    HomeScreenLayout: 'HomeScreenLayout',
    HeroSection: 'Section1',
    NavBarContainer: 'NavBarContainer',
    ArrowWrapperContainer: 'ArrowWrapperContainer',
    ForAllThingsWrapper: 'ForAllThingsWrapper',
    HeroSectionV2Wrapper: 'HeroSectionV2Wrapper',
    HeroSectionV2Container: 'HeroSectionV2WrapperContainer',
    HeroSectionV2ContentContainer: 'HeroSectionV2ContentContainer',
    HeroSectionV2Content: 'HeroSectionV2Content',
    ButtonWrapper: 'ButtonWrapper',
    HomePageVariantLandingSection: 'HomePageVariantLandingSection',
    HomePageLandingSection: 'HomePageLandingSection',
};

const HomeComponentUniqueIds = {
    HomeScreenLayout: `${ScreenName}/${Components.Root}/${ElementTypes.Container}/${Components.HomeScreenLayout}`,
    HeroSection: `${ScreenName}/${Components.HomeScreenLayout}/${ElementTypes.Container}/${Components.HeroSection}`,
    NavBarElements: `${ScreenName}/${Components.NavBarContainer}`,
};

export { HomeComponentUniqueIds, ScreenName, Components };
