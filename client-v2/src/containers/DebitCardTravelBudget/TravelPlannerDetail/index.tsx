/**
 * @file TravelPlannerDetail
 * This file defines a component that displays the detailed travel planner including the estimated budget,
 * trip details, daily expenses, travel offers, and promotion cards.
 */

import React, { useEffect } from 'react';

import { getTravelBudget } from '@/rtk/components/debitCardTravelBudget/saga';
import { setErrorMessage } from '@/rtk/components/debitCardTravelBudget/reducer';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';

import { BudgetCard, BudgetContent } from './styles';
import PromotionCard from './PromotionCard';
import TotalExpense from './TotalExpense';
import TripDetails from './TripDetails';
import DailyExpenses from './DailyExpenses';
import TravelOffers from './TravelOffers';
import ActionButtons from './ActionButtons';

interface TravelPlannerDetailProps {
    // Function to set the title of the parent component
    setTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

/**
 * The TravelPlannerDetail component displays various sections of the travel planner,
 * including the estimated budget, trip details, daily expenses, travel offers, and promotion cards.
 * It also manages the title of the parent component based on its lifecycle.
 *
 * @param {TravelPlannerDetailProps} props - The props for the TravelPlannerDetail component.
 */
const TravelPlannerDetail = ({ setTitle }: TravelPlannerDetailProps) => {
    const dispatch = useAppDispatch();
    const { country } = useAppSelector((state) => state?.travelBudget);
    /**
     * Initiates the process to get the travel budget based on the selected country.
     * It dispatches the getTravelBudget action and handles promise resolution and rejection.
     */
    const getBudget = () => new Promise((resolve, reject) => {
        try {
            dispatch(getTravelBudget(constructPayloadWithCommonInfo({
                country: country?.name,
                resolve,
                reject,
            })));
        } catch (e) {
            reject(e);
        }
    });

    // Sets the title on component mount and fetches the budget. Resets the title on component unmount.
    useEffect(() => {
        setTitle('Estimated budget');
        getBudget().catch(() => {
            setTimeout(() => {
                dispatch(setErrorMessage({ error: '' }));
            }, 2000);
        });
        return () => setTitle(null);
    }, []);

    return (
        <BudgetCard>
            <BudgetContent id='travelBudgetScreen'>
                <TotalExpense />
                <TripDetails />
                <DailyExpenses />
                <TravelOffers />
                <PromotionCard />
            </BudgetContent>
            <ActionButtons />
        </BudgetCard>
    );
};

export default TravelPlannerDetail;
