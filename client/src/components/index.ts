import Input from './Input/Input';
// import InputLabel from './Input/InputLabel';
import StyledInput from './Input/StyledInput';
// import LottiePlayer from './LottiePlayer/LottiePlayer';
// import OTPInput from './OtpInput/OtpInput';
import AppHeader from './AppHeader';
import AppFixHeader from './AppFixHeader/AppFixHeader';
import AppPhoneFixHeader from './AppPhoneFixHeader/AppPhoneFixHeader';
import AppFooter from './AppFooter';
import AppMenuDesktopBar from './AppMenuDesktopBar/AppMenuDesktopBar';
import AppStickyFooter from './AppStickyFooter/AppStickyFooter';
import AppSection from './AppSection/AppSection';
import AppPosterSection from './AppHeroSection/AppPosterSection';
import AppPosterSectionV2 from './AppHeroSection/AppPosterSectionV2';
import PosterSection from './AppHeroSection/PosterSection';
// import DropDown from './DropDown/DropDown';
import Logo from './Logo/Logo';
import {
    StyledContainer,
    StyledLanding,
    PosterContainer,
    HomePosterContainer,
    HamBurgerContainer,
    IOSButton,
} from './StyledContainer';
import {
    Flex,
    Font,
    PrimaryButton,
    SecondaryButton,
    IconButton,
    Arrow,
    Link,
    Image,
    GoogleButton,
    ArrowButton,
} from './Abstract';
import PersonCard from './PersonCard/PersonCard';
import AppImageGridSection from './AppImageGridSection/AppImageGridSection';
import Loader from './Loader';
import InputLabelVariantOne from './InputLabelVariantOne';
import SliderVariantOne from './SliderVariantOne';
import InputVariantOne from './InputVariantOne';
import DropDownVariantOne from './DropDownVariantOne';
import GraphDetails from './Graph/GraphDetails';
import ThreePosterBottomImageSection from './ThreePosterBottomImageSection';
import ImageReverseSection from './ImageReverseSection';
import SecureMoneySection from './SecureMoneySection';
import NumberInput from './NumberInput';
import GreyWhiteContainer from './GreyWhiteContainer';
// moved this from Waitlist container
import { ArrowWrapper, CenterText, MarginAuto, Middle } from './Waitlist/components/CommonStyle';
// moved this from Home container
import ReplayButton from './ReplayButton';
import AppAssistanceCard from './AppAssistanceCard';
import FiPronouncedCard from './FiPronouncedCard';
import SpeechIcon from './SpeechIcon';
import ViewPortModal from './ViewPortModal';
import PosterComponent from './PosterComponent';
import FiCardSection from './FiCardSection';
import QRCodeSection from './AppMenuDesktopBar/QRCodeSection';
import QRCodeSectionV3 from './AppMenuDesktopBar/QRCodeSectionV3';
import TextLabelWithIcon from './TextLabelWithIcon';
import MultiRangeSlider from './MultiRangeSlider';
import Checkbox from './Checkbox';
import TopSheetStickySection from './TopSheetStickySection';
import Accordion from './Accordion';
import LogoSlider from './LogoSlider';

import { FeaturesPagePosterSection, LeftRightOrientation, FullOrientation, TopBottomOrientation } from './FeaturesPage';

import InputLabelVariantOneVOne from './InputLabelVariantOneVOne';
import TableSection from './TableSection';
import CenteredSpinner from './CenteredSpinner';
import AccordionGroup from './AccordionGroup';
import Breadcrumbs from './Breadcrumbs';
import GraphSection from './GraphSection';
import ShowMoreContent from './ShowMoreContent';
import { CarouselVariantOne } from './FeaturesPage/components';
import PosterVideoSection from './AppHeroSection/PosterVideoSection';
import FAQs from './FAQs';
import Carousel from './Carousel';
import { LeftArrow, RightArrow } from './Carousel/Arrows';
import Pagination from './Pagination';
import InfiniteScroll from './InfiniteScroll';

export {
    // Abstract
    Flex,
    Font,
    Image,
    PrimaryButton,
    SecondaryButton,
    IconButton,
    Link,
    Arrow,
    GoogleButton,
    ArrowButton,
    // Components
    Input,
    // LottiePlayer,
    // OTPInput,
    // InputLabel,
    StyledInput,
    AppHeader,
    AppFixHeader,
    AppMenuDesktopBar,
    AppPhoneFixHeader,
    AppFooter,
    AppStickyFooter,
    AppSection,
    AppPosterSection,
    AppPosterSectionV2,
    PosterSection,
    PersonCard,
    // DropDown,
    // Styled Container
    StyledContainer,
    StyledLanding,
    PosterContainer,
    HomePosterContainer,
    HamBurgerContainer,
    AppImageGridSection,
    Logo,
    IOSButton,
    Loader,
    InputLabelVariantOne,
    SliderVariantOne,
    InputVariantOne,
    DropDownVariantOne,
    GraphDetails,
    ThreePosterBottomImageSection,
    ImageReverseSection,
    FeaturesPagePosterSection,
    LeftRightOrientation,
    TopBottomOrientation,
    FullOrientation,
    SecureMoneySection,
    ArrowWrapper,
    CenterText,
    MarginAuto,
    Middle,
    NumberInput,
    ReplayButton,
    AppAssistanceCard,
    FiPronouncedCard,
    SpeechIcon,
    ViewPortModal,
    PosterComponent,
    FiCardSection,
    QRCodeSection,
    GreyWhiteContainer,
    QRCodeSectionV3,
    TextLabelWithIcon,
    MultiRangeSlider,
    Checkbox,
    TopSheetStickySection,
    Accordion,
    InputLabelVariantOneVOne,
    TableSection,
    CenteredSpinner,
    AccordionGroup,
    Breadcrumbs,
    GraphSection,
    ShowMoreContent,
    CarouselVariantOne,
    FAQs,
    LogoSlider,
    PosterVideoSection,
    Carousel,
    LeftArrow,
    RightArrow,
    Pagination,
    InfiniteScroll,
};
