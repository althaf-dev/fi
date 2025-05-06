/**
 * @file B2BSalaryAccountHR Right choice Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';

import { Title } from '../styled';
import { StyledLink } from '../../../components/styled';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import { HOME_PAGE_URL } from '../constant';
import MIXINS from '../../../Themes/mixins';

const PosterSection = styled.div`
    text-align: center;
    max-width: 360px;
    margin: 0px auto;
    padding: 20px;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0px 40px 0px 40px;
    }

    @media ${Device.desktop} {
        text-align: left;
        max-width: 1290px;
        margin-bottom: 106px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 20px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    @media ${Device.desktop} {
        grid-gap: 38px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    width: 100%;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 216px;
    }

    @media ${Device.desktop} {
        width: 358px;
    }
`;

const ImageHolder = styled.div`
    width: 150px;
    height: 48px;
    margin: 24px auto 14px;

    @media ${Device.tab} {
        width: 150px;
        height: 56px;
        margin: 40px auto 20px;
    }

    @media ${Device.desktop} {
        width: 150px;
        height: 72px;
        margin: 66px auto 32px;
    }
`;

const SubImageHolder = styled(ImageHolder)`
    margin: 0 auto 20px;
    width: 180px;
    height: 46px;

    @media ${Device.tab} {
        width: 180px;
        height: 64px;
        margin: 0 auto 30px;
    }
`;

const Text = styled(Font)`
    text-align: center;
    margin: 0px auto 24px;
    width: 240px;

    @media ${Device.tab} {
        width: 168px;
    }

    @media ${Device.desktop} {
        width: 298px;
    }
`;

const Subtext = styled(Text)`
    margin: 0 auto;
    width: 240px;

    @media ${Device.tab} {
        width: 168px;
    }

   @media ${Device.desktop} {
      width: 298px;
   }
`;

const Description = styled(Font)`
    max-width: 100%;
    margin: 30px auto 0px;
    text-align: center;

    @media ${Device.tab} {
        max-width: 610px;
    }

   @media ${Device.desktop} {
       margin: 60px auto 0px;
       max-width: 684px;
   }
`;

const ArrowWrapper = styled.span`
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-left: 3px;
    vertical-align: middle;

   @media ${Device.desktop} {
      height: 21px;
      width: 21px;
      margin-left: 11px;
   }
`;

const Link = styled(StyledLink)`
    text-decoration: underline;
    text-underline-position: under;
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '20px', lineHeight: '24px',
    })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '36px', lineHeight: '39.6px',
    })};
     }
`;

interface IRightChoiceSectionProps {
  data: {
    title: string;
    subTitle?: string;
    list: {
      id: number;
      icon: {
        imageSrc: string;
        fallbackImageSrc: string;
      };
      subIcon: {
        imageSrc?: string;
        fallbackImageSrc?: string;
      };
      title: string;
      description: string;
      subTitle?: string;
    }[];
  };
}

const RightChoiceSection = (props: IRightChoiceSectionProps) => {
    const { data } = props;
    const { title, list, subTitle } = data;

    return (
        <PosterSection>
            <Title font='cardTitleVariantFour' tagType='h1' color='MINE_SHAFT'>
                {title}
            </Title>
            <Container>
                {list.map((ele) => (
                    <Card key={ele.id}>
                        <ImageHolder>
                            <Image
                                objectType='contain'
                                alt='card-image'
                                loadingType='lazy'
                                icon={ele?.icon?.imageSrc}
                                fallBackImage={ele?.icon?.fallbackImageSrc}
                            />
                        </ImageHolder>
                        {ele?.subTitle ? (
                            <Subtext
                                font='pSmallVariantTen'
                                tagType='text'
                                color='LIGHT_GREY'
                            >
                                {ele?.subTitle}
                            </Subtext>
                        ) : null}
                        {ele?.subIcon?.imageSrc ? (
                            <SubImageHolder>
                                <Image
                                    objectType='contain'
                                    alt='card-image'
                                    loadingType='lazy'
                                    icon={ele?.subIcon?.imageSrc}
                                />
                            </SubImageHolder>
                        ) : null}

                        {ele?.title ? (
                            <Text
                                font='cardTitleVariantTwo'
                                tagType='text'
                                color='LIGHT_GREY'
                            >
                                {ele?.title}
                            </Text>
                        ) : null}

                        {ele?.description ? (
                            <Text font='pSmallVariantTen' tagType='text' color='LIGHT_GREY'>
                                {ele?.description}
                            </Text>
                        ) : null}
                    </Card>
                ))}
            </Container>

            {subTitle ? (
                <Description font='p' tagType='p' color='SUVA_GREY'>
                    <Link url={`${HOME_PAGE_URL}`} isExternal>
                        {subTitle}
                        <ArrowWrapper>
                            <Image
                                loadingType='lazy'
                                icon={ICONS_URL_MAP.TOP_RIGHT_ARROW_GREEN}
                                alt='arrow'
                                objectType='contain'
                            />
                        </ArrowWrapper>
                    </Link>
                </Description>
            ) : null}
        </PosterSection>
    );
};

export default React.memo(RightChoiceSection);
