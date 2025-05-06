/**
 * @file TravelPlannerLanding
 * This file defines the main component for the travel budget planner application. It orchestrates the display
 * of the budget calculator and popular destinations, handling navigation and data fetching for travel destinations.
 */

import React, { useEffect } from 'react';

import { Country, setCountry, setErrorMessage } from '@/rtk/components/debitCardTravelBudget/reducer';
import { getDestinations } from '@/rtk/components/debitCardTravelBudget/saga';
import { useAppDispatch } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';

import BudgetCalculator from './BudgetCalculator';
import PopularDestinations from './PopularDestinations';

import { PageDivider, MainContent } from './styles';

interface TravelBudgetPlannerProps {
  // Function to change the current page view
  setPage: (page: number) => void;
}

/**
 * The TravelBudgetPlanner component serves as the main entry point for the travel budget planner application.
 * It displays the budget calculator and a list of popular destinations. It handles navigation between different
 * views of the application and initiates the fetching of travel destinations data.
 *
 * @param {TravelBudgetPlannerProps} props - The properties required by the TravelBudgetPlanner component.
 */
const TravelPlannerLanding = ({ setPage }: TravelBudgetPlannerProps) => {
    const dispatch = useAppDispatch();

    /**
     * Handles the action to calculate the budget, navigating the user to the budget calculation page.
     */
    const handleCalculateBudget = () => {
        setPage(2);
    };

    /**
     * Handles clicks on popular destination cards by setting the selected country and navigating to the budget calculation page.
     *
     * @param {Country} country - The country object associated with the clicked destination card.
     */
    const handlePopularDestinationClick = (country: Country) => {
        dispatch(setCountry({ country }));
        setPage(2);
    };

    /**
     * Initiates the fetching of travel destinations data. It dispatches an action to get destinations and handles
     * promise resolution and rejection.
     */
    const getTravelDestinations = () => new Promise((resolve, reject) => {
        try {
            dispatch(getDestinations(constructPayloadWithCommonInfo({
                resolve,
                reject,
            })));
        } catch (e) {
            reject(e);
        }
    });

    // Fetches travel destinations data on component mount.
    useEffect(() => {
        getTravelDestinations().catch(() => {
            setTimeout(() => {
                dispatch(setErrorMessage({ error: '' }));
            }, 2000);
        });
    }, []);

    return (
        <>
            <MainContent>
                <BudgetCalculator onCalculate={handleCalculateBudget} />
                <PageDivider />
                <PopularDestinations onDestinationClick={handlePopularDestinationClick} />
            </MainContent>
        </>
    );
};

export default TravelPlannerLanding;
