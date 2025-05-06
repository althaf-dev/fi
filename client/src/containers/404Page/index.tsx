/**
 * @file 404 Not Found Page
 * custom 404 Not Found page for broken links
 */

import React from 'react';
import styled from 'styled-components';

import {
    AppHeader, StyledContainer, PosterContainer, Image, Font, AppFooter,
} from '../../components';
import { Device } from '../../Themes/Device';

import { EPIFI_ICONS_S3_URL } from '../../constants/AssetConstants';

const Wrapper = styled.div`
    height: calc(100vh - 305.6px);
    margin: 30px;
    padding: 24px;
    border-radius: 15px;

    @media ${Device.tab} {
        height: 100%;
        margin: 0 76px 152px;
        padding: 0 76px 76px;
        border-radius: 30px;
    }
`;

const NotFoundContainer = styled(StyledContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const NotFoundPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const ContentContainer = styled.div`
    width: 240px;
    height: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${Device.tab} {
        width: 430px;
        margin-top: 75px;
    }
`;

const ImageContainer = styled.div`
    height: 178px;

    @media ${Device.tab} {
        height: 326px;
    }
`;

const Link = styled.a`
    color: ${(props) => props.theme.color.FOREST_GREEN};
`;

const notFoundCatImg = `${EPIFI_ICONS_S3_URL}/assets/pngs/not-found-cat.png`;

const NotFound = () => (
    <NotFoundContainer>
        <NotFoundPosterContainer>
            <AppHeader />
        </NotFoundPosterContainer>
        <Container>
            <Wrapper>
                <ContentContainer>
                    <ImageContainer>
                        <Image icon={notFoundCatImg} alt='Page Not Found' loadingType='eager' />
                    </ImageContainer>
                    <Font font='h2VariantEight' tagType='text' color='WHITE'>
                        A kitty has nine lives but this page has none
                    </Font>
                    <br />
                    <br />
                    <Font font='pSmallVariantNine' tagType='text' color='SUVA_GREY'>
                        The page you’ve searched for doesn’t exist anymore, or an error occurred.
                        <br />
                        <br />
                        Have some time on your hands? Check out our
                        <Link href='/blog'> blog </Link>
                        or head to our
                        <Link href='/'> home page </Link>
                        to get better with your money today.
                        <br />
                        <br />
                        Happy searching!
                    </Font>
                </ContentContainer>
            </Wrapper>
        </Container>
        <AppFooter hideStickyFooter noPadding />
    </NotFoundContainer>
);

export default NotFound;
