/**
 * @file CalculatorVOne
 *
 * @summary This component is used to specifically design to render a credit card rewards calculator
 *
 * @returns {JSX.Element}
 *
 * TODO: Need to Remove this code once decoupling of calculator will complete.
 */

import React, { useRef, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import Colors from '../../Themes/Colors';
import { ICONS_URL_MAP } from '../../constants/AssetConstants';
import { APP_URLS } from '../../constants/AppConstant';
import { htmlSanitization } from '../../utils';
import {
    AppFooter, AppHeader, SecureMoneySection, TableSection, StyledContainer, Image,
} from '../../components';

import {
    selectCalculatorInputFields, selectCalculatorOutputResult,
} from '../Calculators/selectors';
import { getSingleCalculatorDataAction } from '../Calculators/actions';
import { CALCULATOR_URLS_MAPPING } from '../Calculators/constants';
import {
    Output,
    OutputContainerVOne,
    TableWrapper,
    CalculatorWrapper,
    LeftSectionVOne,
    SectionVOne,
    ValuebackWrapper,
    ValuebackBreadcrumbs,
    BreadcrumbText,
    ValuebackImageHolder,
    ValuebackTitle,
    ValuebackDescription,
    ValubackCalculatorTitle,
} from '../Calculators/styled';

import NotFound from '../404Page';

import RenderMainCalculatorSection from './RenderMainCalculatorSection';

interface ParamsObject {
    [key: string]: any
}

const CalculatorVOne = () => {
    const params: ParamsObject = useParams();
    const { name: calcNameParam } = params;
    const inputSectionRef = useRef(null);
    const dispatch = useDispatch();

    const calculatorInputFields = useSelector(selectCalculatorInputFields(), shallowEqual);
    const outputResult = useSelector(selectCalculatorOutputResult(), shallowEqual);

    const outputSentence = outputResult?.outputSentence;

    const tableData = outputResult?.tableData;

    const showTableData = tableData && Object.keys(tableData)?.length > 0;

    // trigger an action to render the calculators according to the params
    useEffect(() => {
        dispatch(getSingleCalculatorDataAction({ value: calcNameParam }));
    }, [dispatch, calcNameParam]);

    /**
     * This code prevent to access any other calculator page using the URL /apply-credit-card-online/:name
     * by checking whether the calcNameParam URL parameter is equal to CALCULATOR_URLS_MAPPING.CREDIT_CARD_VALUEBACK_CALCULATOR
     */
    if (calcNameParam !== CALCULATOR_URLS_MAPPING.CREDIT_CARD_VALUEBACK_CALCULATOR) {
        return <NotFound />;
    }

    return (
        <StyledContainer bgColor={Colors.DARK_BLACK}>
            <AppHeader />
            <SectionVOne>
                {/* TODO (Ankit): Need to remove all valueback html and styling once iframe issue resolved in webflow */}
                <ValuebackWrapper>
                    <ValuebackBreadcrumbs>
                        <a href={APP_URLS.CREDIT_CARD_PAGE}>
                            <BreadcrumbText>
                                Credit Card
                            </BreadcrumbText>
                        </a>
                        <ValuebackImageHolder>
                            <Image
                                icon={ICONS_URL_MAP.FADE_RIGHT_ARROW}
                                loadingType='lazy'
                                alt='arrow icon'
                            />
                        </ValuebackImageHolder>
                        <BreadcrumbText>
                            Valueback
                        </BreadcrumbText>
                    </ValuebackBreadcrumbs>

                    <ValuebackTitle>
                        Get 5% valueback on your spends
                    </ValuebackTitle>
                    <ValuebackDescription>
                        Valueback is the rupee value of the benefits you will receive. You can get 5% or more of your annual spends using this card.
                    </ValuebackDescription>
                </ValuebackWrapper>

                <ValuebackWrapper>
                    <ValubackCalculatorTitle>
                        See how much you can earn
                    </ValubackCalculatorTitle>
                    <CalculatorWrapper>
                        <LeftSectionVOne ref={inputSectionRef}>
                            <RenderMainCalculatorSection data={calculatorInputFields} />
                        </LeftSectionVOne>
                        <OutputContainerVOne>
                            <Output
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(outputSentence) }}
                            />
                        </OutputContainerVOne>
                    </CalculatorWrapper>
                </ValuebackWrapper>

                <ValuebackWrapper>
                    <TableWrapper>
                        {showTableData ? <TableSection tableData={tableData} /> : null}
                    </TableWrapper>
                </ValuebackWrapper>
                <SecureMoneySection bgColor={Colors.DARK_BLACK} headingColor={Colors.WHITE} />
            </SectionVOne>
            <AppFooter hideStickyFooter />
        </StyledContainer>
    );
};

export default memo(CalculatorVOne);
