import React, {
    useState, useEffect, useRef, memo,
    ReactElement,
} from 'react';
import { useParams } from "next/navigation";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { WINDOW_SIZE } from '../../../Themes/Device';
import { APP_URLS } from '../../../constants/AppConstant';
import { ICONS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';

import {
    InputLabelVariantOne,
    SliderVariantOne,
    InputVariantOne,
    DropDownVariantOne,
    AppFooter,
    AppHeader,
    StyledContainer,
    Image,
    PrimaryButton,
    TextLabelWithIcon,
    MultiRangeSlider,
    Checkbox,
    Accordion,
    TopSheetStickySection,
} from '../../../components/index';
import { useClickOutside, useWindowDimensions, useCreateMultipleRefs } from '../../../hooks';
import { htmlSanitization } from '../../../utils';

import { trackingPayload } from '../../../components/FAQs/constants';
import NotFound from '../../404Page/index';
import CalculatorInfo from '../../../components/CalculatorInfo';
import {
    selectCalculatorAdditionalInfo, selectCalculatorInfo, selectCalculatorInputFields, selectCalculatorOutputResult, selectCalculatorGraphData,
    selectCalculatorFaqsInfo, selectCalculatorCtaInfo,
} from '../selectors';
import { ComponentType, CALCULATOR_URLS_MAPPING, LIST_OF_MOBILE_DESIGN_V1_CALCULATORS } from '../constants';
import PosterSection from '../PosterSection';
import CalculatorModal from '../CalculatorModal';
import GraphSection from '../GraphSection';
import CalculatorFaqs from '../CalculatorFaqs';
import SingleCalculatorMobile from '../SingleCalculatorMobile';
import MobilePosterSection from '../MobilePosterSection';
import MobileCardSection from '../MobileCardSection';

import {
    CalculatorPosterContainer,
    Container,
    Section,
    AdditionalInformationWrapper,
    AdditionalInformationContainer,
    AdditionalInformationSection,
    Title,
    Description,
    ContentSection,
    LeftSection,
    CalculatorInputsSection,
    StickyGraphSection,
    ViewButton,
    GraphOutput,
    OverlayContainer,
    ToolTipDescription,
    ArrowImageHolder,
    ErrorContainer,
    ButtonHolder,
    Separator,
    Disclaimer,
    OutputContainer,
    Output,
    TextLabelWrapper,
    PositionWrapper,
    MobileSectionWrapper,
    MobileCalculatorLabel,
    MobileCalculatorToolTipInfo,
    CtaWrapper,
    CalculatorAccordionWrapper,
    MobileContentWrapper,
    NestedItemWrapper,
    RightSection,
} from '../styled';
import { setInputValueAction, getSingleCalculatorDataAction, setOutputValueAction } from '../actions';
import { isValidSingleCalcUrl } from '../utils';
import CalculatorBanner from '../CalculatorBanner';

// eslint-disable-next-line no-var
declare var window: any;

interface ParamsObject {
    [key: string]: any
}

interface RenderSingleCalculatorProps {
    internalPageUrl?: string;
}

const RenderSingleCalculator = (props: RenderSingleCalculatorProps) => {
    const { internalPageUrl } = props;

    const params: ParamsObject = useParams();
    const { name: calcNameParam } = params;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [calculatorItem, setCalculatorItem] = useState<any>(null);
    const [graphView, setGraphView] = useState(false);
    const [isStickySectionVisible, setIsStickySectionVisible] = useState(false);
    const [visualType, setVisualType] = useState('graph');
    const [stickSectionVisualType, setStickySectionVisualType] = useState('graph');
    const [errorInfo, setErrorInfo] = useState([]);
    const [activeFaqIndex, setActiveFaqIndex] = useState(-1);
    const [isMobilePosterSectionVisible, setIsMobilePosterSection] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false);

    const stickyRef = useRef(null);
    const inputSectionRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const { width } = useWindowDimensions();

    const calculatorInfo = useSelector(selectCalculatorInfo(), shallowEqual);
    const calculatorInputFields = useSelector(selectCalculatorInputFields(), shallowEqual);
    const calculatorAdditionalInfo = useSelector(selectCalculatorAdditionalInfo(), shallowEqual);
    const calculatorCtaInfo = useSelector(selectCalculatorCtaInfo(), shallowEqual);
    const calculatorFaqsInfo = useSelector(selectCalculatorFaqsInfo(), shallowEqual);
    const outputResult = useSelector(selectCalculatorOutputResult(), shallowEqual);
    const graphData = useSelector(selectCalculatorGraphData(), shallowEqual);

    const hasCalculatorCtaInfo = calculatorCtaInfo && Object.keys(calculatorCtaInfo).length;
    const hasCalculatorFaqsInfo = calculatorFaqsInfo?.length;
    const hasCalculatorAdditionalInfo = calculatorAdditionalInfo?.length;

    const hasMobileDesignV1 = width! < WINDOW_SIZE.TAB && LIST_OF_MOBILE_DESIGN_V1_CALCULATORS.includes(calcNameParam);

    let graphBottomCalculatorInputFields;
    let remaningCalculatorInputFields;

    if (calcNameParam === CALCULATOR_URLS_MAPPING.FIRE_CALCULATOR) {
        graphBottomCalculatorInputFields = calculatorInputFields?.filter((data:any) => data.show_bottom_of_graph);
    }

    if (calcNameParam === CALCULATOR_URLS_MAPPING.FIRE_CALCULATOR && width! < WINDOW_SIZE.TAB) {
        remaningCalculatorInputFields = calculatorInputFields?.filter((data) => !data?.show_bottom_of_graph
            && data.type !== ComponentType.TextLabelWithIcon);
    } else {
        remaningCalculatorInputFields = calculatorInputFields?.filter((data) => !data?.show_bottom_of_graph);
    }

    const fireCalcMobileSectionRef = useCreateMultipleRefs(remaningCalculatorInputFields?.length);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const trackGtagEvent = (pageUrl:string) => {
        if (window.gtag) {
            window.gtag('set', 'page', `/${pageUrl}`);
            window.gtag('send', 'pageview');
        }
    };

    // close the sticky graph when click outside it
    useClickOutside(stickyRef, () => {
        setGraphView(false);
    }, 'click');

    // stop the page scroll if sticky graph is open
    useEffect(() => {
        if (graphView) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [graphView]);

    /**
     * 1. getSingleCalculatorDataAction
     * 2. setInputValueAction
     */

    // trigger an action to render the calculators according to the params
    useEffect(() => {
        if (internalPageUrl) {
            dispatch(getSingleCalculatorDataAction({ value: internalPageUrl }));
        } else {
            dispatch(getSingleCalculatorDataAction({ value: calcNameParam }));

            trackGtagEvent(calcNameParam);
        }
    }, [dispatch, calcNameParam, internalPageUrl]);

    /**
     * calculate the height of inputSection render on the mobile using inputSectionRef
     * take the 40% of the total height to show and hide the sticky output
     */
    const handleScroll = () => {
        const inputSectionHeight = (inputSectionRef?.current?.clientHeight! * 40) / 100;

        setIsStickySectionVisible((prevState) => {
            if (window.pageYOffset > inputSectionHeight || !prevState) {
                return false;
            }

            return true;
        });
    };

    useEffect(() => {
        if (!hasMobileDesignV1) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
     * add onKeyDown event listener on page load
     * run closeModal function if event key is Enter or NumpadEnter
     */
    useEffect(() => {
        const listener = (event:any) => {
            const keyValue = event.key;
            if (keyValue === 'Enter' || keyValue === 'NumpadEnter') {
                event.preventDefault();
                closeModal();
            }
        };
        document.addEventListener('keydown', listener);
        return () => document.removeEventListener('keydown', listener);
    }, []);

    /**
     * graph data structure not take readable value, so we need to create a new copy of the object
     * object is nested so we need JSON.parse and JSON.stringify to create a new copy
     * reference link - https://stackoverflow.com/questions/43509153/spread-operator-vs-json-parsejson-stringify-for-immutable-objects
     */
    const visualData = outputResult && outputResult?.visuals?.[0]?.data;

    const graphOptions = visualData?.options ? JSON.parse(JSON.stringify(outputResult && visualData?.options)) : null;

    const graphInfo = visualData;
    const graphType = visualData?.type;
    const outputSentence = outputResult?.outputSentence;
    const viewVisualSection = outputResult?.visuals?.length > 1;

    const getInputLabelComponent = (item:any) => {
        const { label, more_info: moreInfo } = item;

        return (
            <InputLabelVariantOne
                label={label}
                additionalInfo={moreInfo}
            />
        );
    };

    // Reducer action functions
    const setNewInputValue = (item:any) => (newValue:any): void => {
        dispatch(setInputValueAction({ item, value: newValue }));
    };

    const setOutputValue = (item:any) => (newValue:any): void => {
        dispatch(setOutputValueAction({ item, value: newValue }));
    };

    const getInputComponent = (item:any, hasMultiInput?: boolean) => {
        const {
            input_id: inputId, min_value: minValue, max_value: maxValue, prefix_text: prefixText,
            suffix_text: suffixText, allow_decimal: allowDecimal, debounce_time: debounceTime, value,
            input_mapping: inputMapping, readable_only: readableOnly, min_gap_between_two_inputs: minGapBetweenTwoInputs,
            is_input_inside_another_component: isInputInsideAnotherComponent,
        } = item;

        const inputInfo = {
            inputId, minValue, maxValue, prefixText, suffixText, allowDecimal, debounceTime, value, inputMapping, readableOnly,
        };

        return (
            <InputVariantOne
                item={inputInfo}
                setNewInputValue={setNewInputValue(item)}
                setOutputValue={setOutputValue(item)}
                errorInfo={errorInfo}
                setErrorInfo={setErrorInfo}
                isModalOpen
                hasMultiInput={hasMultiInput}
                minGapBetweenTwoInputs={minGapBetweenTwoInputs}
                hasMobileDesignV1={hasMobileDesignV1}
                isInputInsideAnotherComponent={isInputInsideAnotherComponent}
            />
        );
    };

    const getSliderComponent = (item:any, showComponentInsideStickyGraph?: boolean) => {
        const {
            min_value: minValue, max_value: maxValue, value, debounce_time: debounceTime, step_value: stepValue,
        } = item;
        const sliderInfo = {
            minValue, maxValue, value, debounceTime, stepValue,
        };

        return (
            <SliderVariantOne
                item={sliderInfo}
                setNewInputValue={setNewInputValue(item)}
                setOutputValue={setOutputValue(item)}
                showComponentInsideStickyGraph={showComponentInsideStickyGraph}
            />
        );
    };

    const getMultiSliderComponent = (item:any) => {
        const {
            min_value: minValue, max_value: maxValue, value, debounce_time: debounceTime, step_value: stepValue,
            min_gap_between_two_inputs: minGapBetweenTwoInputs,
        } = item;

        const sliderInfo = {
            minValue, maxValue, value, debounceTime, stepValue, minGapBetweenTwoInputs,
        };

        return (
            <MultiRangeSlider
                item={sliderInfo}
                setNewInputValue={setNewInputValue(item)}
                setOutputValue={setOutputValue(item)}
            />
        );
    };

    const getDropDownComponent = (item:any, hasDropDownWithSearch ?: boolean) => {
        const { options: dropdownListItems, value } = item;

        return (
            <DropDownVariantOne
                value={value}
                options={dropdownListItems}
                setNewInputValue={setNewInputValue(item)}
                setOutputValue={setOutputValue(item)}
                hasDropDownWithSearch={hasDropDownWithSearch}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                hasMobileDesignV1={hasMobileDesignV1}
            />
        );
    };

    const getCheckboxComponent = (item:any) => {
        const { value, checked_value: checkedValue, unchecked_value: uncheckedValue } = item;

        const { is_checked: isChecked } = value;

        const checkboxInfo = {
            isChecked, checkedValue, uncheckedValue,
        };

        return (
            <Checkbox
                item={checkboxInfo}
                setNewInputValue={setNewInputValue(item)}
                setOutputValue={setOutputValue(item)}
            />
        );
    };

    const getAccordionComponent = (item:any, renderComponentBasedOnComponentTypeFuntion:(item:any, index?: number, showComponentInsideStickyGraph?: boolean)=>ReactElement|null) => {
        const { accordion_label: accordionLabel, nested_items: nestedItems } = item;

        const accoridonElements:any[] = [];

        if (nestedItems?.length) {
            nestedItems.forEach((data:any) => {
                const element = renderComponentBasedOnComponentTypeFuntion(data);
                accoridonElements.push(<NestedItemWrapper>{element}</NestedItemWrapper>);
            });
        }

        return (
            <Accordion accordionLabel={accordionLabel} hasMobileDesignV1={hasMobileDesignV1}>
                <CalculatorAccordionWrapper>
                    {accoridonElements}
                </CalculatorAccordionWrapper>
            </Accordion>
        );
    };

    const getToolTipComponent = (description: string) => (
        description ? (
            <ToolTipDescription componentType={calculatorItem?.type}>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }}
                />
            </ToolTipDescription>
        ) : null
    );

    const getTextLableWithIconComponent = (item:any) => {
        const { text, icon_url: iconUrl, fallback_icon_url: fallbackIconUrl } = item;

        return (
            <TextLabelWrapper>
                <TextLabelWithIcon title={text} iconUrl={iconUrl} fallbackIconUrl={fallbackIconUrl} />
            </TextLabelWrapper>
        );
    };

    const getErrorText = (error:any, item:any) => {
        const { first_input_label: firstInputLabel, second_input_label: secondInputLabel } = item || {};

        let errorText = 'Minimum value should be';

        if (error?.firstInputErrorValue) {
            errorText = `${firstInputLabel} should be less than or equal to`;
        } else if (error?.secondInputErrorValue) {
            errorText = `${secondInputLabel} should be greator than or equal to`;
        }

        return errorText;
    };

    const getErrorValue = (error:any, item:any) => {
        let errorValue;

        if (error?.firstInputErrorValue) {
            errorValue = error.firstInputErrorValue;
        } else if (error?.secondInputErrorValue) {
            errorValue = error.secondInputErrorValue;
        } else {
            errorValue = item?.min_value?.value;
        }

        return errorValue;
    };

    const getErrorComponent = (item:any) => (
        errorInfo.map((error:any) => (
            error.errorState && error.errorInputId === item.input_id ? (
                <ErrorContainer>
                    {getErrorText(error, item)}
                    &nbsp;
                    {getErrorValue(error, item)}
                </ErrorContainer>
            ) : null
        ))
    );

    const onNextButtonClick = (index: number) => () => {
        if (fireCalcMobileSectionRef[index + 1]) {
            fireCalcMobileSectionRef[index + 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }

        if (index + 1 === remaningCalculatorInputFields.length) {
            setShowBottomSheet(true);
        }
    };

    const onViewChange = (inView: boolean) => {
        setIsMobilePosterSection(inView);
    };

    const renderComponentBasedOnComponentType = (item:any, index?: number, showComponentInsideStickyGraph?: boolean) => {
        let component;
        let componentOne;
        console.log("input type",item.type)
        switch (item.type) {
            case ComponentType.Input: {
                component = getInputComponent(item);
                break;
            }
            case ComponentType.Slider: {
                component = getInputComponent(item);
                componentOne = getSliderComponent(item);
                break;
            }
            case ComponentType.SliderWithInput: {
                component = getInputComponent(item, false);
                componentOne = getSliderComponent(item, showComponentInsideStickyGraph);
                break;
            }
            case ComponentType.DropDown: {
                component = getDropDownComponent(item);
                break;
            }
            case ComponentType.DropDownWithSearch: {
                component = getDropDownComponent(item, true);
                break;
            }
            case ComponentType.TextLabelWithIcon: {
                component = getTextLableWithIconComponent(item);
                break;
            }
            case ComponentType.MultiRangeSlider: {
                component = getInputComponent(item, true);
                componentOne = getMultiSliderComponent(item);
                break;
            }
            case ComponentType.Checkbox: {
                component = getCheckboxComponent(item);
                break;
            }
            case ComponentType.Accordion: {
                component = getAccordionComponent(item, renderComponentBasedOnComponentType);
                break;
            }

            default:
                return null;
        }

        const mobileView = (
            <>
                {component}
                {getErrorComponent(item)}
                {componentOne}
                {getToolTipComponent(calculatorItem?.more_info)}
                {item.type === ComponentType.Slider || item.type === ComponentType.SliderWithInput ? (
                    <ButtonHolder onClick={closeModal}>
                        <PrimaryButton
                            label='DONE'
                        />
                    </ButtonHolder>
                ) : null}
            </>
        );

        const desktopAndTabView = (
            <>
                {item.type === ComponentType.TextLabelWithIcon || item.type === ComponentType.Accordion ? component : (
                    <ContentSection showComponentInsideStickyGraph={showComponentInsideStickyGraph}>
                        {getInputLabelComponent(item)}
                        {component}
                    </ContentSection>
                )}
                {componentOne}
                {getErrorComponent(item)}
            </>
        );

        if (showComponentInsideStickyGraph) {
            return (
                desktopAndTabView
            );
        }

        if (hasMobileDesignV1) {
            return (
                <>
                    {getErrorComponent(item)}
                    <MobileContentWrapper hasNestedItem={item.has_nested_item}>
                        <MobileCalculatorLabel font='h3VariantThree' tagType='h3' color='MINE_SHAFT'>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(item.label) }}
                            />
                        </MobileCalculatorLabel>
                        {item.more_info ? (
                            <MobileCalculatorToolTipInfo font='pSmallVariantEleven' tagType='p' color='BOMBAY'>
                                <div
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(item.more_info) }}
                                />
                            </MobileCalculatorToolTipInfo>
                        ) : null}
                    </MobileContentWrapper>
                    {component}
                    {componentOne}
                    {item?.has_cta ? (
                        <CtaWrapper>
                            {item?.has_cta.map((cta:any) => (
                                <PrimaryButton
                                    label={cta.label}
                                    onClick={onNextButtonClick(cta.offsetIndex)}
                                    borderRadius='19px'
                                    style={cta?.style}
                                />
                            ))}
                        </CtaWrapper>
                    ) : null}
                </>
            );
        }

        return (
            width! < WINDOW_SIZE.TAB ? mobileView : desktopAndTabView
        );
    };

    const getVisualType = (value: string, isStickySection?: boolean) => () => {
        if (isStickySection) {
            setStickySectionVisualType(value);
        } else {
            setVisualType(value);
        }
    };

    const toggleGraphView = () => {
        setGraphView(!graphView);
    };

    const onVisible = (inView: boolean) => {
        setIsStickySectionVisible(!inView);
    };

    const commonGraphSectionProps = {
        graphView,
        outputResult,
        getVisualType,
        outputSentence,
        visualType,
        graphType,
        graphData,
        graphOptions,
        graphInfo,
        viewVisualSection,
        onVisible,
    };

    const calculatorPosterSection = (
        <CalculatorPosterContainer>
            <AppHeader
                activeMenu='CALCULATORS'
                fontColor='SILVER_2'
                menuColor='WHITE'
                trackingPayload={trackingPayload}
            />
            <PosterSection
                title={calculatorInfo?.name}
                calculatorUrl={calcNameParam}
                hasBreadcrumbs
                description={calculatorInfo?.description}
                bannerData={calculatorCtaInfo}
            />
        </CalculatorPosterContainer>
    );

    const renderMainCalculatorSection = (data:any) => (
        data?.map((item:any) => (
            <CalculatorInputsSection key={item.input_id} componentType={item.type}>
                {width! < WINDOW_SIZE.TAB ? (
                    <SingleCalculatorMobile
                        item={item}
                        setIsModalOpen={setIsModalOpen}
                        setCalculatorItem={setCalculatorItem}
                    />
                ) : renderComponentBasedOnComponentType(item)}
            </CalculatorInputsSection>
        ))
    );

    const graphSection = (
        <>
            {visualData ? (
                <PositionWrapper>
                    <GraphSection
                        commonGraphSectionProps={commonGraphSectionProps}
                        graphBottomCalculatorInputFields={graphBottomCalculatorInputFields}
                        renderComponentBasedOnComponentType={renderComponentBasedOnComponentType}
                    />
                </PositionWrapper>
            ) : (
                <OutputContainer>
                    <Output
                    // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(outputSentence) }}
                    />

                </OutputContainer>
            )}
        </>
    );

    const mobileModalSection = (
        isModalOpen ? (
            <CalculatorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                calculatorItem={calculatorItem}
                calculatorInputFields={calculatorInputFields}
                renderComponentBasedOnComponentType={renderComponentBasedOnComponentType}
            />
        ) : null
    );

    const mainCalculatorSection = (
        <>
            
            <LeftSection ref={inputSectionRef}>
                {renderMainCalculatorSection(remaningCalculatorInputFields)}
                {calculatorCtaInfo?.side_banner === 'left' && (
                    <CalculatorBanner
                        bannerData={calculatorCtaInfo}
                        showOnDesktop
                        sideBanner
                    />
                )}
            </LeftSection>

             <RightSection>
                {graphSection}
                {calculatorCtaInfo?.side_banner === 'right' && (
                    <CalculatorBanner
                        bannerData={calculatorCtaInfo}
                        showOnDesktop
                        sideBanner
                    />
                )}
            </RightSection>
            { mobileModalSection } 
        </>
    );

    const calculatorFAQSSection = (
        <AdditionalInformationWrapper>
            <AdditionalInformationContainer>
                {/* Hide calculatorCTASection if calculatorCtaInfo is an empty object */}
                {calculatorAdditionalInfo?.map((item,i) => (
                    <AdditionalInformationSection key={i}>
                        <Title>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(item.title) }}
                            />
                        </Title>
                        <Description>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(item.content) }}
                            />
                        </Description>
                    </AdditionalInformationSection>
                ))}
                {hasCalculatorFaqsInfo
                    ? (
                        <CalculatorFaqs
                            faqs={calculatorFaqsInfo}
                            activeFaqIndex={activeFaqIndex}
                            setActiveFaqIndex={setActiveFaqIndex}
                        />
                    ) : null}
                <>
                    {hasCalculatorCtaInfo || hasCalculatorFaqsInfo || hasCalculatorAdditionalInfo ? <Separator /> : null}
                    <Disclaimer>
                        Disclaimer: The above content is for informational purposes only and is not meant to be taken as investment,
                        financial, or any other kind of advice. This is not a solicitation, recommendation, endorsement, or offer to buy
                        or sell any securities or other financial instruments.
                    </Disclaimer>
                </>
            </AdditionalInformationContainer>
        </AdditionalInformationWrapper>
    );

    const graphBottomSheetSection = (
        <OverlayContainer graphView={graphView}>
            <StickyGraphSection
                graphView={graphView}
                ref={stickyRef}
            >
                {visualData ? (
                    <ArrowImageHolder onClick={toggleGraphView}>
                        <Image
                            icon={graphView ? ICONS_URL_MAP.DOWN_ARROW : ICONS_URL_MAP.UP_ARROW}
                            loadingType='lazy'
                            alt='arrow icon'
                        />
                    </ArrowImageHolder>
                ) : null }

                <GraphOutput hasMobileDesignV1={hasMobileDesignV1}>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(outputSentence) }}
                    />
                </GraphOutput>
                {graphView ? (
                    <GraphSection
                        commonGraphSectionProps={commonGraphSectionProps}
                        stickSectionVisualType={stickSectionVisualType}
                        isStickySection
                        graphBottomCalculatorInputFields={graphBottomCalculatorInputFields}
                        renderComponentBasedOnComponentType={renderComponentBasedOnComponentType}
                    />
                ) : null}
                {visualData ? (
                    <ViewButton
                        onClick={toggleGraphView}
                        role='button'
                        onKeyPress={toggleGraphView}
                        tabIndex={0}
                        graphView={graphView}
                    >
                        {graphView ? 'view less' : 'view more'}
                    </ViewButton>
                ) : null }
            </StickyGraphSection>
        </OverlayContainer>
    );

    const stickyGraphSection = (
        width! < WINDOW_SIZE.TAB && isStickySectionVisible && visualData ? (
            graphBottomSheetSection
        ) : null
    );

    if (internalPageUrl) {
        return mainCalculatorSection;
    }

    if (hasMobileDesignV1) {
        const {
            name, description, mobile_icon_url: mobileIconUrl, fallback_mobile_icon_url: mobileFallbackIconUrl,
            mobile_top_sheet_description: mobileTopSheetDescription, mobile_poster_label: mobilePosterLabel,
        } = calculatorInfo || {};

        return (
            <StyledContainer>
                <TopSheetStickySection
                    backButtonImageUrl={`${SVGS_URL}arrow-left-grey.svg`}
                    backButtonUrl={APP_URLS.CALCULATORS_PAGE}
                    title={name}
                    description={mobileTopSheetDescription}
                    iconUrl={mobileIconUrl}
                    fallbackIconUrl={mobileFallbackIconUrl}
                />
                <MobileSectionWrapper>
                    <MobilePosterSection
                        title={name}
                        description={description}
                        mobileIconUrl={mobileIconUrl}
                        mobileFallbackIconUrl={mobileFallbackIconUrl}
                        mobilePosterLabel={mobilePosterLabel}
                        onNextButtonClick={onNextButtonClick}
                        onViewChange={onViewChange}
                        loadingType='eager'
                    />
                    <MobileCardSection
                        remaningCalculatorInputFields={remaningCalculatorInputFields}
                        fireCalcMobileSectionRef={fireCalcMobileSectionRef}
                        renderComponentBasedOnComponentType={renderComponentBasedOnComponentType}
                    />
                    <div ref={fireCalcMobileSectionRef[remaningCalculatorInputFields?.length]}>
                        {graphSection}
                    </div>
                </MobileSectionWrapper>
                {calculatorFAQSSection}
                <AppFooter trackingPayload={trackingPayload} hideStickyFooter />
                {!isMobilePosterSectionVisible && showBottomSheet && isStickySectionVisible ? graphBottomSheetSection : null}
            </StyledContainer>
        );
    }

    return (
        <>
            <StyledContainer>
                {calculatorPosterSection}
                <Container>
                    <Section>
                        <CalculatorBanner
                            bannerData={calculatorCtaInfo}
                            showOnDesktop={false}
                        />
                        {mainCalculatorSection}
                    </Section>
                </Container>
                {calculatorFAQSSection}
                <CalculatorInfo />
                <AppFooter trackingPayload={trackingPayload} hideStickyFooter />
                {stickyGraphSection}
            </StyledContainer>
            { mobileModalSection }
        </>
    );
};

interface SingleCalculatorProps {
    internalPageUrl?: string;
}

const SingleCalculator = (props: SingleCalculatorProps) => {
    const { internalPageUrl } = props;
    const params: ParamsObject = useParams();
    const { name: calcNameParam } = params;

    // TODO: need to remove this once fire calc calculation logic is fixed
    if (calcNameParam === CALCULATOR_URLS_MAPPING.FIRE_CALCULATOR) {
        return <NotFound />;
    }

    

    if (isValidSingleCalcUrl(calcNameParam) || internalPageUrl) 
        return (
            <RenderSingleCalculator internalPageUrl={internalPageUrl} />)

    return <NotFound />;
};

SingleCalculator.defaultProps = {
    internalPageUrl: '',
};

RenderSingleCalculator.defaultProps = {
    internalPageUrl: '',
};

export default memo(SingleCalculator);
