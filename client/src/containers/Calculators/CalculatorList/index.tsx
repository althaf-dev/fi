import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer,
    StyledLanding, SecureMoneySection,
} from '../../../components';
import { CALCULATORS_PAGE_TRACKING_PAYLOAD as trackingPayload } from '../../../events/constants';

import PosterSection from '../PosterSection';
import { selectAllCalculators } from '../selectors';
import { CALCULATOR_URLS_MAPPING } from '../constants';

import CalculatorCard from './CalculatorCard';
import { ListContainer } from './styled';

const CalculatorPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const posterSectionObj = {
    title: 'Calculators',
    description: 'Life can be hard. Doing the math shouldn’t be. Use any of our calculators to get a perspective on financial decisions you’re about to make. Take them with a grain of salt, sort things out.',
};

// eslint-disable-next-line no-var
declare var window: any;

const CalculatorList = () => {
    const allCalculatorsList = useSelector(selectAllCalculators(), shallowEqual);

    const trackGtagEvent = () => {
        if (window.gtag) {
            window.gtag('set', 'page', '/calculator');
            window.gtag('send', 'pageview');
        }
    };

    useEffect(() => {
        trackGtagEvent();
        window.scrollTo(0, 0);
    }, []);

    const modifiedAllCalculatorsListTop5 = [...allCalculatorsList?.slice(0, 5).map((listItem) => ({ ...listItem, loadingType: 'eager' }))];
    const modifiedAllCalculatorsListAfter5 = [...allCalculatorsList?.slice(5, allCalculatorsList.length).map((listItem) => ({ ...listItem, loadingType: 'lazy' }))];
    const modifiedAllCalculatorsList = [...modifiedAllCalculatorsListTop5, ...modifiedAllCalculatorsListAfter5];

    return (
        <StyledContainer>
            <CalculatorPosterContainer>
                <AppHeader
                    activeMenu='CALCULATORS'
                    fontColor='SILVER_2'
                    menuColor='WHITE'
                    trackingPayload={trackingPayload}
                />
                <PosterSection
                    title={posterSectionObj.title}
                    description={posterSectionObj.description}
                    hasCalculatorListPage
                />
            </CalculatorPosterContainer>
            <StyledLanding>
                <ListContainer>
                    {modifiedAllCalculatorsList.map((value) => {
                        const {
                            calculator_id: calculatorId, url, icon_url: iconUrl, fallback_icon_url: fallbackIconUrl, name, description, loadingType,
                        } = value;

                        // TODO: need to remove this once fire calc calculation logic is fixed
                        if (url === CALCULATOR_URLS_MAPPING.FIRE_CALCULATOR) {
                            return null;
                        }

                        return (
                            <div key={calculatorId}>
                                <CalculatorCard
                                    url={url}
                                    iconUrl={iconUrl}
                                    fallbackIconUrl={fallbackIconUrl}
                                    name={name}
                                    description={description}
                                    loadingType={loadingType}
                                />
                            </div>
                        );
                    })}
                </ListContainer>
            </StyledLanding>
            <SecureMoneySection />
            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default CalculatorList;
