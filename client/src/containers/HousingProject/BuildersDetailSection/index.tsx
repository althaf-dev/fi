/**
 * @file Housing Page BuilderDetails Section
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import { Device, WINDOW_SIZE } from '../../../Themes/Device';

import { Font, Image, PrimaryButton } from '../../../components';
import { useWindowDimensions, useIsSSR } from '../../../hooks';
import { htmlSanitization } from '../../../utils';

import { housingDetails } from '../constant';

const Wrapper = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    max-width: 320px;
    margin: 0px auto 30px;

    @media ${Device.tab} {
        max-width: 590px;
    }

    @media ${Device.desktop} {
        border-radius: 40px;
        margin: 0px auto 70px;
        max-width: 995px;
    }
`;

const Container = styled.div`
    padding: 25px;

    @media ${Device.desktop} {
        padding: 70px 75px;
    }
`;

const TitleSection = styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
    margin-bottom: 9px;

    @media ${Device.desktop} {
        gap: 10px;
        margin-bottom: 31px;
    }
`;

const IconHolder = styled.div`
    width: 14px;
    height: 14px;

    @media ${Device.desktop} {
        width: 47px;
        height: 47px;
    }
`;

const BuilderCompanyName = styled(Font)``;

const Separator = styled.div`
    background: ${(props) => props.theme.color.FOREST_GREEN};
    width: 42px;
    height: 2px;

    @media ${Device.desktop} {
        width: 140px;
        height: 4px;
    }
`;

const BuilderName = styled(Font)`
    margin: 15px 0px;

    @media ${Device.desktop} {
        margin: 36px 0px;
    }
`;

const PropertyDetailsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 18px 50px;

    @media ${Device.desktop} {
        grid-template-columns: 2fr 1fr;
        grid-gap: 35px 0px;
    }
`;

const Heading = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-bottom: 8px;

    @media ${Device.desktop} {
        gap: 8px;
        margin-bottom: 28px;
    }
`;

const Subtext = styled(Font)``;

const Description = styled(Font)`
    text-align: start;
`;

const ImageHolder = styled.div`
    width: 9px;

    @media ${Device.desktop} {
        width: 18px;
    }
`;

const Divider = styled.hr`
    width: 281px;
    margin: 0px auto;
    border 1px solid ${(props) => props.theme.color.ONYX};

    @media ${Device.desktop} {
        width: 928px;
    }
`;

const Amenitites = styled(Font)`
    margin-bottom: 17px;

    @media ${Device.desktop} {
        margin-bottom: 57px;
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px 30px;

    @media ${Device.desktop} {
        grid-gap: 70px 90px;
    }
`;

const CardsImageHolder = styled.div`
    width: 28px;
    height: 28px;
    margin: 0px auto;

    @media ${Device.desktop} {
        width: 91px;
        height: 91px;
    }
`;

const CardsTitle = styled(Font)`
    margin-top: 8px;
    text-align: center;

    @media ${Device.desktop} {
        margin-top: 28px;
    }
`;

const LocationSpecificSection = styled(Font)`
    margin-bottom: 17px;

    @media ${Device.desktop} {
        margin-bottom: 57px;
    }
`;

const LocationImageHolder = styled.div`
    width: 100%;
    height: 196px;
    margin-bottom: 12px;

    @media ${Device.desktop} {
        height: 648px;
        margin-bottom: 28px;
    }
`;

const Address = styled(Font)`
    text-align: center;
`;

const ButtonHolder = styled.div`
    width: 210px;
    margin: 15px auto 0px;

    @media ${Device.tab} {
        width: 300px;
    }

    @media ${Device.desktop} {
        margin: 30px auto 0px;
        width: 412px;
    }
`;

const BuildersDetailSection = () => {
    const { builderCompanyDetails, builderDetails } = housingDetails;
    const { comapnyName, image_src: imageSrc, fallback_image_src: fallbackImageSrc } = builderCompanyDetails;
    const {
        name, propertyDetails, amenititesDetails, mapDetails,
    } = builderDetails;

    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();

    return (
        <Wrapper>
            <Container>
                <TitleSection>
                    <IconHolder>
                        <Image
                            icon={imageSrc}
                            fallBackImage={fallbackImageSrc}
                            alt='icon'
                            loadingType='lazy'
                        />
                    </IconHolder>
                    <BuilderCompanyName font='h3VariantNine' tagType='text' color='GREY_3'>{comapnyName}</BuilderCompanyName>
                </TitleSection>
                <Separator />
                <BuilderName font='cardTitleVariantTen' tagType='text' color='MINE_SHAFT'>{name}</BuilderName>
                <PropertyDetailsSection>
                    {propertyDetails.map((ele) => (
                        <div>
                            <Heading>
                                <ImageHolder>
                                    <Image
                                        icon={ele.image_src}
                                        fallBackImage={ele.fallback_image_src}
                                        alt='icon'
                                        loadingType='lazy'
                                    />
                                </ImageHolder>
                                <Subtext font='cardTitleVariantTwelve' tagType='text' color='FOREST_GREEN'>{ele.title}</Subtext>
                            </Heading>
                            <Description font='cardTitleVariantEleven' tagType='text' color='GREY_3'>
                                <div
                                // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.description) }}
                                />
                            </Description>
                        </div>
                    ))}
                </PropertyDetailsSection>
            </Container>
            <Divider />
            <Container>
                <Amenitites font='cardTitleVariantTen' tagType='text' color='MINE_SHAFT'>Amenitites</Amenitites>
                <Cards>
                    {amenititesDetails.map((ele) => (
                        <div>
                            <CardsImageHolder>
                                <Image
                                    icon={ele.image_src}
                                    fallBackImage={ele.fallback_image_src}
                                    alt='icon'
                                    loadingType='lazy'
                                />
                            </CardsImageHolder>
                            <CardsTitle font='cardTitleVariantEleven' tagType='text' color='GREY_3'>
                                <div
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.title) }}
                                />
                            </CardsTitle>
                        </div>
                    ))}
                </Cards>
            </Container>
            <Divider />
            <Container>
                <LocationSpecificSection font='cardTitleVariantTen' tagType='text' color='MINE_SHAFT'>
                    Let’s get specific
                </LocationSpecificSection>
                <a href={mapDetails.location_url} target='_blank' rel='noreferrer'>
                    <LocationImageHolder>
                        <Image
                            icon={mapDetails.image_src}
                            fallBackImage={mapDetails.fallback_image_src}
                            alt='map'
                            loadingType='lazy'
                            borderRadius={!isSSR && width < WINDOW_SIZE.DESKTOP ? '10px' : '34px'}
                        />
                    </LocationImageHolder>
                </a>
                <Address font='descriptionVariantOne' tagType='text' color='GREY_3'>{mapDetails.address}</Address>
                <ButtonHolder>
                    <a href={mapDetails.cta_info.url} target='_blank' rel='noreferrer'>
                        <PrimaryButton
                            label={mapDetails.cta_info.title}
                            fontVariant='buttonVariantTwo'
                        />
                    </a>
                </ButtonHolder>
            </Container>
        </Wrapper>
    );
};

export default memo(BuildersDetailSection);
