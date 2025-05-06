'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { NextPage } from 'next';
import {
    MainContainer,
    StateImage,
    PreferencesPanel,
    FiLogo,
    InfoContainer,
    Outline,
    UnsubscribeButton,
    SavePreferencesButton
} from './styles';
import ToggleInput from '@/components/ToggleInput';
import { EMAIL_UNSUBSCRIBE_URL_MAP, LOGOS_URL_MAP } from '@/constants/AssetConstants';

const UnsubscribePage: NextPage = () => {
    const technicalErrorMessage = 'Uh-oh! Technical issue detected. Please try to unsubscribe later.';
    const successMessage = 'Thanks, we\'ve recorded your response';
    type AreaData = {
        area: string;
        index: number;
        label: string;
        subscribed: boolean;
    };
    const { FI_LOGO } = LOGOS_URL_MAP;
    const { DOVE, SUCCESS_HAND, DIGGING_DOG } = EMAIL_UNSUBSCRIBE_URL_MAP;

    type UserPreferenceData = {
        userId: string;
        areas: AreaData[],
    }

    const searchParams = useSearchParams();
    const userId = searchParams.get('id') || '';
    const source = searchParams.get('source') || '';
    const areas = searchParams.getAll('areas').filter((areaItem:string) => areaItem && areaItem.trim());

    const API_DOMAIN = '';
    const UNSUBSCRIBE_ENDPOINT = `${API_DOMAIN}/api/v1/email/unsubscribe`;
    const GET_PREFERENCES_ENDPOINT = `${UNSUBSCRIBE_ENDPOINT}/areas`;

    type Message = {
        iconUrl: string;
        text: string;
        hasMessage: boolean;
    };

    const [message, setMessage] = useState<Message>({ iconUrl: '', text: '', hasMessage: false });
    const [hasData, setHasData] = useState<boolean>(false);
    const [isUnsubscribeLoading, setIsUnsubscribeLoading] = useState<boolean>(true);
    const [isPreferenceLoading, setIsPreferenceLoading] = useState<boolean>(false);
    const [isInvoked, setIsInvoked] = useState<boolean>(false);
    const [isUpdatePreference, setIsUpdatePreference] = useState<boolean>(false);
    const [sourceMedium, setSourceMedium] = useState<string>('');

    const [userPreferenceData, setUserPreferenceData] = useState<UserPreferenceData>({
        userId,
        areas: [],
    });

    const addLabel = (response: { user_id: string; areas: any; }) => {
        const data:UserPreferenceData = {
            userId: response.user_id,
            areas: [],
        };

        response.areas.forEach((areaData: { area: string; subscribed: any; }, index: number) => {
            const splitLabels = areaData.area.split('_');
            for (let i = 0; i < splitLabels.length; i += 1) {
                splitLabels[i] = splitLabels[i].charAt(0).toUpperCase() + splitLabels[i].slice(1).toLowerCase();
            }
            data.areas.push({
                area: areaData.area,
                label: splitLabels.join(' '),
                subscribed: areaData.subscribed,
                index,
            });
        });
        return data;
    };

    const isValidParams = () => {
        if (!userId || !userId.trim()) {
            return false;
        }

        return !(!source || !source.trim());
    };

    const preferenceDataToPayload = (preference: UserPreferenceData, areasScoped:string[]) => (JSON.stringify({
        user_id: preference.userId,
        source,
        areas: areasScoped,
    }));

    const setDataObtained = () => {
        setIsUnsubscribeLoading(false);
        setIsPreferenceLoading(false);
        setHasData(true);
    };

    const getPreferences = () => {
        fetch(`${GET_PREFERENCES_ENDPOINT}?${new URLSearchParams({
            user_id: userId,
            source
        })}`, {
            method: 'GET',
        }).then((getResponse) => {
            if (!getResponse.ok) {
                throw new Error(technicalErrorMessage);
            }
            return getResponse.json();
        }).then((result) => {
            setUserPreferenceData(addLabel(result.data));
            setHasData(true);
        }).catch(() => {
            setHasData(false);
        })
            .finally(() => {
                setDataObtained();
            });
    };

    const postDirectUnsubscribe = () => {
        fetch(UNSUBSCRIBE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: preferenceDataToPayload(userPreferenceData, areas),
        }).then((response) => {
            if (response.ok) {
                getPreferences();
            } else {
                throw new Error(technicalErrorMessage);
            }
        }).catch((error) => {
            setMessage({
                hasMessage: true,
                iconUrl: DIGGING_DOG,
                text: error.message,
            });
        })
            .finally(() => {
                setIsUnsubscribeLoading(false);
            });
    };

    useEffect(() => {
        if (isInvoked) {
            return;
        }

        setIsInvoked(true);

        if (!isValidParams()) {
            setMessage({
                iconUrl: DIGGING_DOG,
                text: technicalErrorMessage,
                hasMessage: true,
            });
            setIsUnsubscribeLoading(false);
            setHasData(false);
            return;
        }

        setSourceMedium(source.toLowerCase() === 'moengage' ? 'EMAILS' : 'MESSAGES');

        if (areas.length === 0) {
            setIsUpdatePreference(true);
            getPreferences();
        } else {
            postDirectUnsubscribe();
        }
    }, []);

    const toggleInputChange = (areaData: AreaData) => {
        const updatedValue = !userPreferenceData.areas[areaData.index].subscribed;
        userPreferenceData.areas[areaData.index].subscribed = updatedValue;
        // this is needed to re-render the preference after user selects the value.
        setUserPreferenceData({ ...userPreferenceData });
    };

    const disableAllAreas = () => {
        const preferenceData = { ...userPreferenceData };
        preferenceData.areas.forEach((area:AreaData) => {
            area.subscribed = false;
        });
        setUserPreferenceData(preferenceData);
    };

    const savePreferences = () => {
        const areasToBeUnsubscribed = userPreferenceData.areas.filter((areaData:AreaData) => !areaData.subscribed)
            .map((areaData:AreaData) => areaData.area);
        fetch(UNSUBSCRIBE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: preferenceDataToPayload(userPreferenceData, areasToBeUnsubscribed),
        }).then((response) => {
            // const data = response.json();
            if (response.ok) {
                setMessage({
                    iconUrl: SUCCESS_HAND,
                    text: successMessage,
                    hasMessage: true,
                });
            } else {
                throw new Error(technicalErrorMessage);
            }
        }).catch((error) => {
            setMessage({
                hasMessage: true,
                iconUrl: DIGGING_DOG,
                text: error.message,
            });
        })
            .finally(() => {
                setIsUnsubscribeLoading(false);
            });
    };

    return (
        <MainContainer>
            <div style={{ paddingTop: '15px' }}>
                <FiLogo src={FI_LOGO} alt='Fi Logo' width='32' height='32' />
            </div>
            <div>
                {
                    !(isUnsubscribeLoading || isPreferenceLoading) && hasData && !message.hasMessage && (
                        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                            <StateImage src={DOVE} alt='Fi Logo' width='164' height='105' />
                            <div>
                                {
                                    isUpdatePreference && (
                                        <div style={{
                                            margin: '20px 12vw 5vw 12vw',
                                        }}
                                        >
                                            <div>
                                                <p style={{ fontSize: '16px', marginTop: '20px' }}>Update your preferences</p>
                                            </div>
                                            <div>
                                                <p style={{
                                                    fontSize: '12px',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    color: '#6A6D70',
                                                    marginTop: '5px'
                                                }}
                                                >
                                                    Tap & choose what updates you&apos;d like to receive from us
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    !isUpdatePreference && (
                                        <div style={{
                                            margin: '20px 12vw 5vw 12vw',
                                        }}
                                        >
                                            <div>
                                                <p style={{ fontSize: '16px', marginTop: '20px' }}>You&apos;re unsubscribed</p>
                                                <p style={{ fontSize: '12px', marginTop: '5px', color: '#F6F9FD' }}>Thanks for taking the time to do this</p>
                                            </div>
                                            <div>
                                                <p style={{
                                                    fontSize: '12px',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    color: '#6A6D70',
                                                    marginTop: '30px',
                                                }}
                                                >
                                                    Choose what updates you&apos;d like to receive from us
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <PreferencesPanel>
                                <Outline>
                                    <div style={{
                                        textAlign: 'left',
                                        margin: '20px 0px 15px 22px',
                                        fontFamily: 'Inter',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                    }}
                                    >
                                        {sourceMedium}
                                        &nbsp;ABOUT:
                                    </div>
                                    {userPreferenceData.areas.map((areaData: AreaData) => (
                                        <div key={areaData.area}>
                                            <ToggleInput
                                                label={areaData.label}
                                                id={areaData.area}
                                                value={areaData.subscribed}
                                                onChange={() => {
                                                    toggleInputChange(areaData);
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Outline>
                            </PreferencesPanel>
                            <div>
                                <div>
                                    <UnsubscribeButton onClick={disableAllAreas}>UNSUBSCRIBE ALL</UnsubscribeButton>
                                    <SavePreferencesButton onClick={savePreferences}>SAVE PREFERENCES</SavePreferencesButton>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    !(isUnsubscribeLoading || isPreferenceLoading) && message.hasMessage && (
                        <InfoContainer>
                            <StateImage src={message.iconUrl} alt='Fi Logo' width='164' height='105' />
                            <p>{ message.text }</p>
                        </InfoContainer>
                    )
                }
                {
                    (isUnsubscribeLoading || isPreferenceLoading) && (
                        <InfoContainer>
                            <div>Pleas wait...</div>
                        </InfoContainer>
                    )
                }
            </div>
        </MainContainer>
    );
};

export default UnsubscribePage;
