/**
 * @file Salary Signup Finish Page
 */

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { LOGOS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';
import {
    trackGTMEvent,
    CLICKED_GET_IT_ON_PLAYSTORE,
    CLICKED_GET_IT_ON_APPSTORE,
} from '../../../events';
import {
    IOS_APP_STORE_URL,
    APP_PLAY_STORE_URL,
} from '../../../constants/AppConstant';
import { useWindowDimensions } from '../../../hooks';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { Font, Image, QRCodeSectionV3 } from '../../../components';
import { FooterContainer } from '../../../components/Waitlist/styled';

import Header from '../Header';
import { WrapperOne, SafeViewBlock } from '../styled';
import { resetSalaryAccountSignupState, sendAppLinkToWhatsapp } from '../actions';
import selectSalaryAccountSignUpReducer from '../selectors';

// eslint-disable-next-line no-var
declare var window: any;

const CompletedImageholder = styled.div`
    height: 148px;
    width: 52px;
`;

const MainContainer = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: ${(props) => props.theme.color.CATSKILL_WHITE};
    padding: 24px;
    border-radius: 21px;
    width: 312px;
    column-gap: 16px;

    @media ${Device.desktop} {
        width: 403px;
    }
`;

const YouAreHereText = styled(Font)``;

const FinshSignUpText = styled(Font)`
    white-space: nowrap;
`;

const ShareInfoText = styled(Font)`
    margin-top: 20px;
`;

const MainContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 8px;
    row-gap: 2px;
`;

const DownloadAppWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;

    @media ${Device.tab} {
        max-width: 610px;
    }
`;

const PlayStoreHolder = styled.div`
    width: 163px;
    height: 48px;
`;

const AppStoreHolder = styled.div`
    width: 145px;
    height: 48px;
    margin-left: 8px;
`;

const LinkWrapper = styled.a`
    cursor: pointer;
`;

const FinishSignupPage = () => {
    const dispatch = useDispatch();

    const { accessToken } = useSelector(
        selectSalaryAccountSignUpReducer,
        shallowEqual,
    );

    const androidOnelinkUrl = useMemo(() => window.oneLinkWebSignUpUrl || APP_PLAY_STORE_URL, []);

    const iosOnelinkUrl = useMemo(() => window.oneLinkWebSignUpUrl || IOS_APP_STORE_URL, []);

    const { width } = useWindowDimensions();

    const onWhatsAppLinkSentPage = () => {
        const payload = {
            accessToken,
        };
        dispatch(sendAppLinkToWhatsapp(payload));
    };

    const onGetTheFiApp = (key) => () => {
        trackGTMEvent(key);
    };

    const onClickPrevButton = () => {
        dispatch(resetSalaryAccountSignupState({}));
    };

    return (
        <WrapperOne className='scrollbar-hide'>
            <Header
                isEntering
                title='To continue, download the Fi app'
                description='Make sure to use the phone with your Fi-registered mobile number'
                onClickPrevButton={onClickPrevButton}
            />
            {width < WINDOW_SIZE.TAB ? (
                <>
                    <MainContainer>
                        <CompletedImageholder>
                            <Image
                                objectType='contain'
                                icon={`${SVGS_URL}success-signup.svg`}
                            />
                        </CompletedImageholder>
                        <MainContentHolder>
                            <ShareInfoText
                                font='titleVariantThree'
                                color='BOMBAY'
                                tagType='label'
                            >
                                Share your info
                            </ShareInfoText>
                            <TextContainer>
                                <YouAreHereText
                                    font='labelVariantTwelve'
                                    color='DINGLEY'
                                    tagType='label'
                                >
                                    You are here
                                </YouAreHereText>
                                <FinshSignUpText
                                    font='titleVariantThree'
                                    color='SHARK1'
                                    tagType='label'
                                >
                                    Use the app & finish sign up
                                </FinshSignUpText>
                            </TextContainer>
                        </MainContentHolder>
                    </MainContainer>
                    <FooterContainer>
                        <DownloadAppWrapper>
                            <LinkWrapper
                                href={androidOnelinkUrl}
                                onClick={onGetTheFiApp(
                                    CLICKED_GET_IT_ON_PLAYSTORE,
                                )}
                                id='salary_signup_footer_playstore_link'
                                className='onelink-salary-sign-up-url'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <PlayStoreHolder>
                                    <Image
                                        icon={LOGOS_URL_MAP.PLAY_STORE_BLACK}
                                        alt='logo'
                                        loadingType='eager'
                                    />
                                </PlayStoreHolder>
                            </LinkWrapper>
                            <LinkWrapper
                                href={iosOnelinkUrl}
                                onClick={onGetTheFiApp(
                                    CLICKED_GET_IT_ON_APPSTORE,
                                )}
                                id='salary_signup_footer_appStore_link'
                                className='onelink-salary-sign-up-url'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <AppStoreHolder>
                                    <Image
                                        icon={LOGOS_URL_MAP.APP_STORE_BLACK}
                                        alt='logo'
                                        loadingType='eager'
                                    />
                                </AppStoreHolder>
                            </LinkWrapper>
                        </DownloadAppWrapper>
                    </FooterContainer>
                </>
            ) : (
                <>
                    <QRCodeSectionV3 onWhatsAppLinkSentPage={onWhatsAppLinkSentPage} />
                    <SafeViewBlock />
                </>
            )}
        </WrapperOne>
    );
};

export default FinishSignupPage;
