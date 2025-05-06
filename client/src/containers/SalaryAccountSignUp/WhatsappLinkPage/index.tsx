/**
 * @file Sent whatsapp link page
 */

import React from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Link } from '../../../components/Abstract';
import { LOGOS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';
import { Device } from '../../../Themes/Device';
import { CenterText, Image } from '../../../components';

import { sendAppLinkToWhatsapp } from '../actions';
import selectSalaryAccountSignUpReducer from '../selectors';

const LinkWrapper = styled(CenterText)`
    margin-top: 40px;
`;

const MainContentHolder = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ImageHolder = styled.div`
    margin-bottom: 30px;
    height: 50px;
    width: 50px;
`;

export const Title = styled(CenterText)`
    padding: 0px 130px 0px;
`;

export const Wrapper = styled.div`
    padding: 20px 0px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const LogoHolder = styled.div`
    top: 40px;
    position: absolute;
    width: 28px;
    height: 28px;
    margin: 20px auto 30px;

    @media ${Device.desktop} {
        width: 44px;
        height: 44px;
        margin: 20px auto 20px;
    }
`;

const WhatsappLinkPage = () => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector(
        selectSalaryAccountSignUpReducer,
        shallowEqual,
    );

    const onWhatsAppLinkSentPage = () => {
        const payload = {
            accessToken,
        };
        dispatch(sendAppLinkToWhatsapp(payload));
    };

    return (
        <Wrapper>
            <LogoHolder>
                <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='logo' />
            </LogoHolder>
            <MainContentHolder>
                <ImageHolder>
                    <Image
                        icon={`${SVGS_URL}check-icon.svg`}
                        objectType='contain'
                    />
                </ImageHolder>
                <Title tagType='text' font='titleVariantOne'>
                    Download link sent to your
                </Title>
                <Title tagType='text' font='titleVariantOne'>
                    Fi-registered mobile number
                </Title>
                <LinkWrapper font='p6VariantOne' tagType='text' color='GREY_3'>
                    Didn’t receive the link?
                    {' '}
                    <Link linkType='inline' font='p6VariantOne' onClick={onWhatsAppLinkSentPage}>
                        Resend
                    </Link>
                </LinkWrapper>
            </MainContentHolder>
        </Wrapper>
    );
};

export default WhatsappLinkPage;
