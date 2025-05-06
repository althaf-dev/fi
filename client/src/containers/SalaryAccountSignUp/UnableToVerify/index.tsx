/**
 * @file Unable To Verify Section is used to redirect to app store or play store to continue on fi app.
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { CenterText, Link } from '../../../components';
import QRCodeSectionV2 from '../../../components/AppMenuDesktopBar/QRCodeSectionV2';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { useWindowDimensions } from '../../../hooks';
import { CLICKED_TRY_IT_ON_APP_WEB, SCANNED_QR_APP_DOWNLAOD_WEB, trackGTMEvent } from '../../../events';
import { getDeviceOs } from '../../../device';
import { APP_PLAY_STORE_URL_V2, IOS_APP_STORE_URL } from '../../../constants/AppConstant';

import { sendAppLinkToWhatsapp } from '../actions';
import selectSalaryAccountSignUpReducer from '../selectors';

// eslint-disable-next-line no-var
declare var window: any;

const FacingIssueFooter = styled(CenterText)`
    position: relative;
    margin-top: 12px;
    margin-bottom: 10px;

    @media ${Device.desktop} {
        margin-bottom: 0px;
    }
`;

interface UnableToVerifyProps {
    contentText: string;
    linkText: string;
    showQRCodeModal: boolean;
}

const UnableToVerify = (props :UnableToVerifyProps) => {
    const dispatch = useDispatch();

    const {
        contentText,
        linkText,
        showQRCodeModal,
    } = props;

    const {
        accessToken,
    } = useSelector(selectSalaryAccountSignUpReducer, shallowEqual);

    const [isQRCodeShown, setIsQRCodeShown] = useState(false);

    const deviceOS = getDeviceOs();

    const { width } = useWindowDimensions();

    const showQRCode = () => {
        if (showQRCodeModal && width >= WINDOW_SIZE.TAB) {
            setIsQRCodeShown(true);
        }
    };

    const hideQRCode = () => {
        setIsQRCodeShown(false);
    };

    const onWhatsAppLinkSentPage = () => {
        const payload = {
            accessToken,
        };
        dispatch(sendAppLinkToWhatsapp(payload));
    };

    const redirectToUrl = (URL) => {
        const url = window.oneLinkWebSignUpUrl || URL;
        window.open(url, '_blank', 'noopener');
    };

    const redirectToAppStore = () => {
        if (width < WINDOW_SIZE.TAB || !showQRCodeModal) {
            trackGTMEvent(CLICKED_TRY_IT_ON_APP_WEB);
            redirectToUrl(deviceOS === 'ios' ? IOS_APP_STORE_URL : APP_PLAY_STORE_URL_V2);
        }
    };

    useEffect(() => {
        if (isQRCodeShown) {
            trackGTMEvent(SCANNED_QR_APP_DOWNLAOD_WEB);
        }
    }, [isQRCodeShown]);

    return (
        <FacingIssueFooter font='titleVariantThree' tagType='text' color='GREY_3'>
            {contentText}
            {' '}
            <Link
                style={{ position: 'relative' }}
                linkType='inline'
                font='titleVariantThree'
                onClick={redirectToAppStore}
                onMouseOver={showQRCode}
                onMouseLeave={hideQRCode}
            >
                {linkText}
                <QRCodeSectionV2
                    isQRCodeShown={isQRCodeShown}
                    showQRCode={showQRCode}
                    hideQRCode={hideQRCode}
                    onSendWhatsAppLink={onWhatsAppLinkSentPage}
                    qrBottomAlign='45px'
                />
            </Link>
        </FacingIssueFooter>
    );
};

export default UnableToVerify;
