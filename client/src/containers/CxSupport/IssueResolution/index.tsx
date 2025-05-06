import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
    FI_LINKEDIN_URL, FI_TWITTER_URL, FI_INSTAGRAM_URL, FAQS_URL, TERMS_AND_CONDITIONS_URL, PRIVACY_POLICY_URL,
} from '../../../constants/AppConstant';
import { LOGOS_URL_MAP } from '../../../constants/AssetConstants';

import { Device } from '../../../Themes/Device';
import { queryParams } from '../../../utils/queryParams';
import { Font, Image, Loader } from '../../../components';

import IssueResolutionJson from '../../../assets/json/issue-resolution-response.json';
import { getIssueResolutionFeedbackVerifyStatusAction } from '../actions';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    background-color: ${(props) => props.theme.color.GAINSBORO};
    display: flex;
    flex-direction: column;
`;

const ContainerOne = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    width: 100%;
    padding-top: 34px;
`;

const Section = styled.div`
    max-width: 540px;
    margin: 0px auto;
`;

const LogoWrapper = styled.div`
    cursor: pointer;
    width: 48px;
    height: 48px;
    margin: 0px auto;
`;

const CardSection = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 51px;
    margin: -80px 20px 0;
    padding: 30px;
    position: relative;
    top: 114px;

    @media ${Device.desktop} {
        padding: 36px 65px 40px;
        margin-top: -80px;
    }
`;

const Title = styled(Font)`
    text-align: center;
    margin: 36px auto 0px;
`;

const Description = styled(Font)`
    text-align: center;
    margin: 32px auto 31px;
`;

const ImageWrapper = styled.div`
    width: 240px;
    height: 240px;
    margin: 0px auto;
`;

const ContainerTwo = styled.div`
    background-color: ${(props) => props.theme.color.GAINSBORO};
    padding-top: 140px;
    padding-bottom: 40px;
    flex: 1;
`;

const FooterStyle = styled(Font)`
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    margin-bottom: 18px;
    width: 100%;
    text-align: center;
`;

const FooterTitle = styled(FooterStyle)`
    font-weight: bold;
    margin-top: 32px;
`;

const FooterLinks = styled(FooterStyle)`
    margin-bottom: 32px;
`;

const Link = styled.a`
    color: ${(props) => props.theme.color.FOREST_GREEN};
    text-decoration: underline;
`;

const SocialMediaLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

const SocialMediaImageWrapper = styled.div`
    width: 24px;
    height: 24px;
`;

const DotsStyle = styled.span`
    font-weight: bold;
`;

const currentYear = new Date().getFullYear();

const IssueResolution = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();

    const { ticketId, ans }: any = queryParams(search);

    const issueResolutionFeedback = useSelector(
        (state: any) => state.cxSupportReducer.issueResolutionFeedback,
        shallowEqual,
    );
    const isLoading = useSelector(
        (state: any) => state.cxSupportReducer.isLoading,
        shallowEqual,
    );

    const feedbackInfo = IssueResolutionJson[issueResolutionFeedback] || {};

    const {
        title = '', description = '', image_src: imageSrc = '', fallback_image_src: fallbackImageSrc = '',
    } = feedbackInfo;

    useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(getIssueResolutionFeedbackVerifyStatusAction({ ticketId, answer: ans }));
    }, []);

    if (isLoading) {
        return <Loader isLoading />;
    }

    return (
        <Wrapper>
            <ContainerOne>
                <Section>
                    <LogoWrapper>
                        <a href='/' target='_blank'>
                            <Image icon={LOGOS_URL_MAP.FI_LOGO_V2} alt='Fi Money' />
                        </a>
                    </LogoWrapper>
                    <CardSection>
                        <Title font='emailTitle' tagType='text' color='MINE_SHAFT'>
                            {title}
                        </Title>
                        <Description font='emailDescription' tagType='text' color='GREY_3'>
                            {description}
                        </Description>
                        {imageSrc && (
                            <ImageWrapper>
                                <Image icon={imageSrc} alt='card-image' fallBackImage={fallbackImageSrc} />
                            </ImageWrapper>
                        )}
                    </CardSection>
                </Section>
            </ContainerOne>
            <ContainerTwo>
                <Section>
                    <FooterTitle font='emailFooterText' tagType='text' color='STEEL'>
                        ©&nbsp;
                        {currentYear}
                        &nbsp;epiFi Technologies Pvt. Ltd. All rights reserved
                    </FooterTitle>
                    <FooterLinks font='emailFooterText' tagType='text' color='STEEL'>
                        <Link href={FAQS_URL} target='_blank'>FAQ</Link>
                        <DotsStyle>&nbsp;•&nbsp;</DotsStyle>
                        <Link href={TERMS_AND_CONDITIONS_URL} target='_blank'>Terms and Conditions</Link>
                        <DotsStyle>&nbsp;•&nbsp;</DotsStyle>
                        <Link href={PRIVACY_POLICY_URL} target='_blank'>Privacy Policy</Link>
                    </FooterLinks>
                    <SocialMediaLinks>
                        <span>
                            <a href={FI_LINKEDIN_URL} target='_blank' rel='noreferrer'>
                                <SocialMediaImageWrapper>
                                    <Image icon={LOGOS_URL_MAP.LINKEDIN_GREY} alt='linkedin' />
                                </SocialMediaImageWrapper>
                            </a>
                        </span>

                        <span>
                            <a href={FI_TWITTER_URL} target='_blank' rel='noreferrer'>
                                <SocialMediaImageWrapper>
                                    <Image icon={LOGOS_URL_MAP.TWITTER_GREY} alt='twitter' />
                                </SocialMediaImageWrapper>
                            </a>
                        </span>

                        <span>
                            <a href={FI_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
                                <SocialMediaImageWrapper>
                                    <Image icon={LOGOS_URL_MAP.INSTAGRAM_GREY} alt='instagram' />
                                </SocialMediaImageWrapper>
                            </a>
                        </span>
                    </SocialMediaLinks>
                </Section>
            </ContainerTwo>
        </Wrapper>
    );
};

export default IssueResolution;
