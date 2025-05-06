/**
 * @file TripDetails
 * This file defines a component that allows users to input and modify details of their trip,
 * including country, travel style, dates, and number of people. It also handles displaying
 * a bottom sheet for each detail for the user to make selections.
 */

import React, { useState } from 'react';

import {
    setTravelStyle, setCountry, setDates, setPeopleCount, setErrorMessage,
    Country
} from '@/rtk/components/debitCardTravelBudget/reducer';
import { getTravelBudget } from '@/rtk/components/debitCardTravelBudget/saga';
import { DEBIT_CARD_TRAVEL_IMG_URL_MAP } from '@/constants/AssetConstants';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';

import { convertDates, search } from '../../utils';
import TravelDateSelector from '../../TravelDateSelector';
import TravellerCountSelector from '../../TravellerCountSelector';
import TravelStyleSelector from '../../TravelStyleSelector';
import DestinationSelector from '../../TravelDestinationSelector';
import BottomSheet from '../../BottomSheet';

import {
    DetailIcon, DetailItem, DetailText, DetailsList, DetailsNote, DetailsWrapper
} from '../styles';
import {
    TRIP_DETAILS_ITEM_TYPE, TRIP_DETAILS_ITEM_TYPE_TO_BOTTOM_SHEET_TITLE_MAP,
} from '../constants';

/**
 * TripDetails component allows users to input and modify their trip details.
 * It manages state for bottom sheet visibility, selected values, and queries for destination selection.
 */
const TripDetails = () => {
    const dispatch = useAppDispatch();

    // State for managing the bottom sheet's visibility and type
    const [bottomSheetType, setBottomSheetType] = useState<string>('');
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState<boolean>(false);

    // State for managing the selected value in bottom sheets
    const [selectedValue, setSelectedValue] = useState<string | object | number | null>(null);

    // State for managing country search query in the destination selector
    const [countryQuery, setCountryQuery] = useState<string>('');

    // State for managing the list of destinations based on the search query
    const [destinationList, setDestinationList] = useState<{ flag: string, name: string }[] | null>(null);

    // Extracting trip details from the global state
    const {
        country, travelStyle, peopleCount, dates, travelDestinations
    } = useAppSelector((state) => state?.travelBudget);

    // Extracting countries from travel destinations
    const { countries } = travelDestinations || {};

    // Mapping trip detail types to their respective icons and text
    const details: { [key: string]: { icon: string; text: string } } = {
        country: {
            icon: DEBIT_CARD_TRAVEL_IMG_URL_MAP.LOCATION,
            text: (country || {})?.name || '',
        },
        travelStyle: {
            icon: DEBIT_CARD_TRAVEL_IMG_URL_MAP.RUPEE,
            text: (travelStyle || {})?.label || '',
        },
        dates: {
            icon: DEBIT_CARD_TRAVEL_IMG_URL_MAP.CALENDAR,
            text: convertDates(dates || {}),
        },
        people: {
            icon: DEBIT_CARD_TRAVEL_IMG_URL_MAP.PEOPLE,
            text: `${peopleCount || 2} people`,
        },
    };

    /**
     * Initiates the process to get the travel budget based on the provided payload.
     * It dispatches the getTravelBudget action and handles promise resolution and rejection.
     */
    const getBudget = (payload: any) => new Promise((resolve, reject) => {
        try {
            dispatch(getTravelBudget(constructPayloadWithCommonInfo({
                ...payload,
                resolve,
                reject,
            })));
        } catch (e) {
            reject(e);
        }
    });

    /**
     * Handles confirmation of trip details by dispatching actions to update the global state
     * and fetching the budget based on the updated details.
     */
    const onTripDetailsConfirm = (payload: object) => {
        const commonPayload = {
            country: country?.name,
            travelStyle: travelStyle?.value,
            peopleCount,
            startDate: dates?.arrival,
            endDate: dates?.departure,
        };
        getBudget({
            ...commonPayload,
            ...payload,
        }).catch(() => {
            setTimeout(() => {
                dispatch(setErrorMessage({ error: '' }));
            }, 2000);
        });
    };

    /**
     * Renders the appropriate bottom sheet content based on the type of trip detail being modified.
     */
    const renderBottomSheetData = (type: string) => {
        switch (type) {
            case TRIP_DETAILS_ITEM_TYPE.country: {
                return (
                    <DestinationSelector
                        setSelectedDestination={setSelectedValue as (destination?: Country) => void}
                        selectedDestination={selectedValue as Country}
                        onConfirm={(destination) => {
                            dispatch(setCountry({ country: destination }));
                            onTripDetailsConfirm({
                                country: destination?.name,
                            });
                            setBottomSheetType('');
                        }}
                        setIsVisible={setIsBottomSheetVisible}
                        destinations={
                            (countryQuery && destinationList) || countries || []
                        }
                    />
                );
            }
            case TRIP_DETAILS_ITEM_TYPE.travelStyle: {
                return (
                    <TravelStyleSelector
                        onConfirm={(selectedTravelStyle: { label: string; value: string } | null) => {
                            dispatch(setTravelStyle({ travelStyle: selectedTravelStyle }));
                            onTripDetailsConfirm({
                                travelStyle: selectedTravelStyle?.value,
                            });
                            setBottomSheetType('');
                        }}
                        setIsVisible={setIsBottomSheetVisible}
                        setSelectedTravelStyle={setSelectedValue}
                        selectedTravelStyle={selectedValue as { label: string; value: string } | null}
                    />
                );
            }
            case TRIP_DETAILS_ITEM_TYPE.dates: {
                return (
                    <TravelDateSelector
                        onConfirm={(travelDates: { arrival?: string, departure?: string} | null) => {
                            dispatch(setDates({ dates: travelDates }));
                            onTripDetailsConfirm({
                                startDate: travelDates?.arrival,
                                endDate: travelDates?.departure,
                            });
                            setBottomSheetType('');
                        }}
                        setIsVisible={setIsBottomSheetVisible}
                        setSelectedDates={setSelectedValue}
                        selectedDates={selectedValue as { arrival: string, departure: string } | null}
                    />
                );
            }
            case TRIP_DETAILS_ITEM_TYPE.people: {
                return (
                    <TravellerCountSelector
                        onConfirm={(count: number | null) => {
                            dispatch(setPeopleCount({ peopleCount: count }));
                            onTripDetailsConfirm({
                                peopleCount: count,
                            });
                            setBottomSheetType('');
                        }}
                        setIsVisible={setIsBottomSheetVisible}
                        setSelectedPeopleCount={setSelectedValue}
                        selectedPeopleCount={selectedValue as number | null}
                    />
                );
            }
            default: {
                return '';
            }
        }
    };

    /**
     * Renders a trip detail item, which when clicked, opens the corresponding bottom sheet for modification.
     */
    const renderDetailItem = (type: string) => {
        const detail = details[type];
        let onClick = () => { };
        switch (type) {
            case TRIP_DETAILS_ITEM_TYPE.country: {
                onClick = () => {
                    setSelectedValue(country as { name: string, flag: string });
                    setBottomSheetType(TRIP_DETAILS_ITEM_TYPE.country);
                    setIsBottomSheetVisible(true);
                };
                break;
            }
            case TRIP_DETAILS_ITEM_TYPE.travelStyle: {
                onClick = () => {
                    setSelectedValue(travelStyle as { label: string, value: string });
                    setBottomSheetType(TRIP_DETAILS_ITEM_TYPE.travelStyle);
                    setIsBottomSheetVisible(true);
                };
                break;
            }
            case TRIP_DETAILS_ITEM_TYPE.dates: {
                onClick = () => {
                    setSelectedValue(dates);
                    setBottomSheetType(TRIP_DETAILS_ITEM_TYPE.dates);
                    setIsBottomSheetVisible(true);
                };
                break;
            }
            case TRIP_DETAILS_ITEM_TYPE.people: {
                onClick = () => {
                    setSelectedValue(peopleCount as number);
                    setBottomSheetType(TRIP_DETAILS_ITEM_TYPE.people);
                    setIsBottomSheetVisible(true);
                };
                break;
            }
            default: {
                break;
            }
        }

        return (
            <DetailItem onClick={onClick}>
                <DetailIcon src={detail?.icon} alt='' />
                <DetailText>{detail.text}</DetailText>
            </DetailItem>
        );
    };

    return (
        <DetailsWrapper>
            <DetailsList>
                {renderDetailItem(TRIP_DETAILS_ITEM_TYPE.country)}
                {renderDetailItem(TRIP_DETAILS_ITEM_TYPE.travelStyle)}
                {renderDetailItem(TRIP_DETAILS_ITEM_TYPE.dates)}
                {renderDetailItem(TRIP_DETAILS_ITEM_TYPE.people)}
            </DetailsList>
            <BottomSheet
                isVisible={isBottomSheetVisible}
                onClose={() => {
                    setIsBottomSheetVisible(false);
                    setSelectedValue(null);
                    setBottomSheetType('');
                }}
                showSearchBar={bottomSheetType === TRIP_DETAILS_ITEM_TYPE.country}
                query={countryQuery}
                onQueryChange={(query) => {
                    setCountryQuery(query);
                    if (!query) {
                        setDestinationList(null);
                        return;
                    }
                    const searchResults = search(
                        (countryQuery.length < query.length && destinationList) || countries || [],
                        query,
                    );
                    setDestinationList(searchResults as { flag: string, name: string }[]);
                }}
                title={TRIP_DETAILS_ITEM_TYPE_TO_BOTTOM_SHEET_TITLE_MAP[bottomSheetType]}
            >
                {renderBottomSheetData(bottomSheetType)}
            </BottomSheet>
            <DetailsNote>
                This budget is an estimate based on average spends made by users with
                similar spends as you.
            </DetailsNote>
        </DetailsWrapper>
    );
};

export default TripDetails;
