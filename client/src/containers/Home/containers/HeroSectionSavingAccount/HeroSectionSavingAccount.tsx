import React from 'react';
import styled from 'styled-components';

import {
    Font,
    Flex,
    AppPosterSectionV2,
    PrimaryButton,
} from '../../../../components';
import { Device } from '../../../../Themes/Device';

import { HOME_PAGE_VARIANT_ONE_LINK_URL } from '../../../../constants/AppConstant';
import { ONLINE_SAVINGS_ACCOUNT_HOME_PAGE_VARIANT } from '../../constants';

// eslint-disable-next-line no-var
declare var window: any;

const Wrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;

    @media ${Device.tab} {
        margin-bottom: 0;
    }
`;

const Container = styled.div`
    width: 360px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media ${Device.tab} {
        width: 610px;
    }

    @media ${Device.desktop} {
        width: 1270px;
        flex-direction: row;
        justify-content: center;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 360px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 650px;
    }
`;

const Content = styled.div`
    padding: 25px 20px 0;
    height: max-content;

    @media ${Device.tab} {
        text-align: center;
    }

    @media ${Device.desktop} {
        padding: 0px;
        text-align: left;
        margin-top: 90px;
    }
`;

const Title = styled(Font)`
    margin-bottom: 15px;
    text-align: center;

    @media ${Device.desktop} {
        font-size: 66px; // hack to accommodate long title
        text-align: left;
        margin-bottom: 32px;
    }
`;

const Description = styled(Font)`
    text-align: center;

    @media ${Device.tab} {
        max-width: 420px;
        margin: auto;
    }

    @media ${Device.desktop} {
        padding: 0;
        text-align: left;
        max-width: 644px;
        margin: 0px;
    }
`;

const ButtonWrapper = styled(Flex)`
    display: none;

    @media ${Device.desktop} {
        display: flex;
        margin: 64px 0 0px;
        align-items: center;
    }
`;

const ColoredSpan = styled.span`
    color: ${(props) => props.theme.color.WHITE};
    font-weight: 700;
`;

const HeroSectionV2 = () => (
    <Wrapper>
        <Container>
            <ContentContainer>
                <Content>
                    <Title font='h1VariantFive' tagType='h1' color='WHITE'>
                        The savings account that sorts things out
                    </Title>

                    <Description font='p3' tagType='h2' color='SILVER_2'>
                        Fi gives you a&nbsp;
                        <ColoredSpan>
                            zero-balance savings account
                        </ColoredSpan>
                        &nbsp;on select plans that you can open in 3 minutes, from anywhere.
                        Your savings account gives you a bunch of features that help you understand your money, invest super easily,
                        and make international payments with zero charges on forex.
                    </Description>

                    <ButtonWrapper>
                        <a
                            href={window.oneLinkCommonUrl || HOME_PAGE_VARIANT_ONE_LINK_URL}
                            id='saving_poster_link'
                            className='onelink-common-url'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <PrimaryButton label={ONLINE_SAVINGS_ACCOUNT_HOME_PAGE_VARIANT.ctaLabel} />
                        </a>
                        {/* <a
                            href={window.oneLinkAndroidUrl || playStoreUrl}
                            onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP)}
                            id='saving_poster_playstore_link'
                            className='onelink-android-url'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <PlaystoreHolder>
                                <Image
                                    icon={PlayStoreIcon}
                                    alt='logo'
                                    loadingType='lazy'
                                />
                            </PlaystoreHolder>
                        </a>

                        <a
                            href={window.oneLinkIosUrl || IOS_APP_STORE_URL}
                            onClick={onGetTheFiApp(CLICKED_GET_THE_FI_APP_IOS)}
                            id='saving_poster_appstore_link'
                            className='onelink-ios-url'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <IOSHolder>
                                <Image
                                    icon={AppStoreIcon}
                                    alt='logo'
                                    loadingType='lazy'
                                />
                            </IOSHolder>
                        </a> */}
                    </ButtonWrapper>
                </Content>
            </ContentContainer>
            <AppPosterSectionV2 />
        </Container>
    </Wrapper>
);

export default HeroSectionV2;
