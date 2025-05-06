/**
* @file Poster Section
* This component generates a poster image and poster video with a title, description, and logo image
* It can be used to create posters similar to home page posters and cognizant salary account posters
*/
import React, { memo } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { htmlSanitization } from '../../utils';

import { Font, Image } from '../Abstract';
import { AppPosterSectionV2 } from '../index';

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

const LogoHolder = styled.div`
    @media ${Device.tab} {
        width: 80px;
        height: auto;
        margin: 0px auto 20px;
    }

    @media ${Device.desktop} {
        margin: 0px 0px 48px 0px;
    }
`;

const ImageHolder = styled.div`
    @media ${Device.tab} {
        width: 210px;
        height: 50px;
        margin: 20px auto;
    }

    @media ${Device.desktop} {
        margin: 32px 0px 0px 0px;
    }
`;

// TODO(Ankit): need to add mobile and tab styling
interface PosterComponentProps {
    item: any;
}

const PosterComponent = (props: PosterComponentProps) => {
    const { item } = props;
    const {
        title, description, top_image: topImage, bottom_image: bottomImage, poster_image: posterImage,
    } = item;

    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    <Content>
                        <LogoHolder>
                            <Image icon={topImage} alt='logo' fallBackImage={topImage} />
                        </LogoHolder>
                        <Title font='h1VariantFive' tagType='h1' color='WHITE'>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                            />
                        </Title>

                        <Description font='p3' tagType='h2' color='NERO'>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }}
                            />
                        </Description>
                        <ImageHolder>
                            <Image icon={bottomImage} alt='logo' fallBackImage={bottomImage} />
                        </ImageHolder>
                    </Content>
                </ContentContainer>
                {/* <AppPosterSectionV2 posterImage={posterImage} posterVideo={posterVideo} /> */}
                <AppPosterSectionV2 posterImage={posterImage} />
            </Container>
        </Wrapper>
    );
};

export default memo(PosterComponent);
