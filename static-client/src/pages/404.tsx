/**
 * @file 404 Not Found Page
 * custom 404 Not Found page for broken links
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-error
 */

import React from 'react';

import { Image, Font } from '@/components/Abstract';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

import { NOT_FOUND_IMG } from '../constants/AssetConstants';
import {
    Link,
    ImageContainer,
    ContentContainer,
    Container,
    NotFoundPosterContainer,
    NotFoundContainer,
    Wrapper,
} from '../containers/NotFound/styles';

const NotFound = () => (
    <NotFoundContainer>
        <NotFoundPosterContainer>
            <AppHeader />
        </NotFoundPosterContainer>
        <Container>
            <Wrapper>
                <ContentContainer>
                    <ImageContainer>
                        <Image icon={NOT_FOUND_IMG} alt='Page Not Found' loadingType='eager' />
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
