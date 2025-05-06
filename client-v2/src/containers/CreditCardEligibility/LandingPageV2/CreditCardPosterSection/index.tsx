/**
 * @file Magnifi Eligibility  Poster Section
 */
import React from 'react';
import styled from 'styled-components';
import { CLICKED_CHECK_ELIGIBILITY_INTRO_SCREEN } from '../../../../events/EventName';
import { stepChangeAction } from '@/rtk/components/CreditCard/reducer';
import { trackGTMEvent } from '../../../../events';
import { PAGE_MAP } from '../../constants';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';
import { useAppDispatch } from '@/rtk/hooks';
import { Image } from '@/Abstract';
import { magnifyUrl } from '../constants';
import { PNGS_URL } from '@/constants/AssetConstants';

const CreditCardPoster = styled.div`
    margin: 0 auto;
    height: 100%;
    color: ${(props) => props.theme.color.WHITE};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media ${Device.tab} {
      margin-bottom: 150px;
    }

    @media ${Device.desktop} {
      margin-bottom: 0px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    padding-left: 30px;

    @media ${Device.desktop} {
      width: 45%;
    }
`;

const Header = styled.div`
    width: 100%;
    img {
        margin-top: 20px;
        margin-left: 29px;
    }

    @media ${Device.tab} {
      height: 141px;
      margin: 0 auto;
      width: 100%;

      img {
        margin-top: 35px;
        margin-left: 30px;
      }
    }

    @media ${Device.desktop} {
      height: 171px;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      max-width: 1440px;
      padding-left: 85px;
      padding-right: 85px;

      img {
        margin: 25px;
        margin-top: 40px;
     }
    }
`;

const ImageWrapper = styled.img`
    width: 11px;
    margin-left: 12px;

    @media ${Device.tab} {
      margin-left: 9px;
      width: 24px;
    }
`;

const Description = styled.div`
    color: #F1CE9B;
    text-wrap: nowrap;
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 500,
        size: '20px',
        lineHeight: '24px',
    })};

    @media ${Device.tab} {
      ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 500,
        size: '28px',
        lineHeight: '32px',
    })};
    }

    @media ${Device.desktop} {
      ${MIXINS.FontMixin({
        size: '32px',
        lineHeight: '37px',
    })};
    }
`;

const PosterImageMobile = styled.img`
    height: 397px;
    width: 100%;

    @media ${Device.phone} {
        height: auto;
    }
    @media ${Device.tab} {
        display: none;
    }
`;

const LineBreak = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #F1CE9B 0%, #25130B 90%);
    margin: 24px 0 24px;

    @media ${Device.tab} {
        width: 80%;
        height: 2px;
        margin: 36px 0 39px;
        background: linear-gradient(90deg, #F1CE9B 0%, #25130B 90%);
    }
`;

const BenefitsTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BenefitsTitle = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '14px',
        lineHeight: '18px',
    })};

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '22px',
        lineHeight: '28px',
    })};
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '25px',
        lineHeight: '32px',
    })};
    }
`;

const IconWrapper = styled.img`
    border-radius: 50%;
    height: 28px;
    width: 28px;

    @media ${Device.tab} {
        height: 50px;
        width: 50px;
    }
`;

const MapWrapper = styled.div`
    .container {
        display: flex;
        gap: 12px;
        padding-bottom: 16px;
        align-items: center;
    }

    .sub-logo {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        height: 40px;
        margin-top: -8px;
    }

    .sub-logo img{
        object-fit: contain;
    }

    .sub-title {
        display: none;
    }

    @media ${Device.desktop} {
        gap: 24px;

        .sub-logo {
            display: none;
        }

        .sub-title {
            display: block;
            position: relative;
        }

        .sub-title .text{
            color: #F6E1C1;
            font-family: Inter;
            font-size: 17px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0px;
            text-align: left;
            display: inline-block;
            margin-left: 61px;
            position: absolute;
            top: -23px;
            font-family: Gilroy;
        }
    }
`;

const Button = styled.button`
    outline: none;
    border: none;
    background: linear-gradient(180deg, #985A27 0%, #BA6F3A 100%);
    border-radius: 20px;
    cursor: pointer;
    padding: 12px 0;
    width: 214px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0 7px 0 #F1CE9B;
    ${MIXINS.FontMixin({
        size: '14px',
        font: 'Gilroy',
        weight: 600,
        lineHeight: '16px',
    })}
    color: ${(props) => props.theme.color.WHITE};

    @media ${Device.tab} {
        border-radius: 14px;
        padding: 14px 0;
        width: 356px;
        ${MIXINS.FontMixin({ size: '18px', lineHeight: '24px' })}
    }

    @media ${Device.desktop} {
        border-radius: 18px;
        padding: 17px 0;
        width: 456px;
        ${MIXINS.FontMixin({ size: '24px', lineHeight: '27px' })}
    }
`;

const Title = styled.div`
    background-color: #F9ECC8;
    background: radial-gradient(#FBF3E6 0%, #F1CE9B 100%);
    -webkit-background-clip: text !important;
    -moz-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    -moz-text-fill-color: transparent !important;
    text-wrap: nowrap;
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 700,
        size: '32px',
        lineHeight: '34px',
    })};
    padding-bottom: 16px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        weight: 600,
        size: '44px',
        lineHeight: '56px',
    })};
        padding-bottom: 23px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '52px',
        weight: 700,
        lineHeight: '76px',
    })};
        padding-bottom: 26px;
    }
`;

const SubTitle = styled.div`
    color: #F1CE9B;
    font-weight: 700;
    font-size: 12px;
    border-radius: 9.192px;
    padding: 4px 8px;
    border: 1px solid #F1CE9B;
    display: flex;
    align-items: center;
    margin: 0px 0px 15px 20px;
    text-wrap: nowrap;

    @media ${Device.desktop} {
        margin: 0px 0px 20px 20px;
    }
`;

const TitleWrapper = styled.div`
    display:flex;
    align-items: center;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 10;
    padding: 30px;
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(24, 25, 27, 0) 0%,
        #201207 50%,
        #201207 100%
    );

    @media ${Device.desktop} {
        padding: 70px;
    }
`;

const ButtonDescription = styled.div`
    color: #fff;
    ${MIXINS.FontMixin({
        font: 'inter',
        weight: 700,
        size: '12px',
        lineHeight: '14px',
    })};
    padding-top: 16px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '12px',
        lineHeight: '18px',
        weight: 700,
    })};
    }
`;

const FiWrapper = styled.img`
    display: block;
    height: 25px;
    width: 25px;

    @media ${Device.tab} {
        display: block;
        height: 41px;
        width: 41px;
    }

    @media ${Device.desktop} {
        display: block;
        height: 51px;
        width: 51px;
    }
`;

const PosterImageDesktop = styled.img`
    display: none;

    @media ${Device.tab} {
        display: block;
        height: 474px;
        width: 556px;
    }

    @media ${Device.desktop} {
        height: auto;
        width: 656px;
    }
`;

const PosterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    padding-top: 40px;


    @media ${Device.tab} {
        padding-top: 20px;
        flex-direction: column;
    }

    @media ${Device.desktop} {
        flex-direction: row;
        width: 100%;
        max-width: 1440px;
        padding-left: 85px;
        padding-right: 85px;
    }
`;

const CompliantText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        color: #D48647;
        width: 334px;
        margin-top: 35px;
    }


    @media ${Device.desktop} {
        .text {
            width: 100%;
            font-size: 16px;
            margin-top: 69px;
            margin-bottom: 69px;
        }
    }
`;

interface IPosterSectionProps {
    posterSectionData: {
      headerData?: {
        fiLogo?: string;
      };
      posterData?: {
        title?: string;
        subTitle?: string;
        description?: string;
        posterImageDesktop?: string;
        posterImageMobile?: string;
      };
      benefitsData?: {
        id?: string;
        title?: string;
        subTitle?: string;
        icon?: string;
      }[];
      eligibilityData?: {
        btnTitle?: string;
        icon?: string;
        btnDescription?: string;
      };
    }[];
  }

const CreditCardPosterSection: React.FC<IPosterSectionProps> = ({
    posterSectionData,
}) => {
    const { headerData } = posterSectionData[0] || {};
    const { posterData } = posterSectionData[1] || {};
    const { benefitsData } = posterSectionData[2] || {};
    const { eligibilityData } = posterSectionData[3] || {};

    const dispatch = useAppDispatch();
    const onButtonClick = () => {
        dispatch(stepChangeAction(PAGE_MAP.MOBILE_VERIFICATION));
        trackGTMEvent(CLICKED_CHECK_ELIGIBILITY_INTRO_SCREEN);
    };

    return (
        <>
            <CreditCardPoster>
                <Header>
                    <FiWrapper src={headerData?.fiLogo} alt='FI Logo' />
                </Header>
                <PosterWrapper>
                    <Wrapper>
                        <TitleWrapper>
                            <Title>{posterData?.title}</Title>
                            <SubTitle>{posterData?.subTitle}</SubTitle>
                        </TitleWrapper>
                        <Description>{posterData?.description}</Description>
                        <LineBreak />
                        {benefitsData?.map((data: any) => (
                            <MapWrapper key={data.id}>
                                <div className='container'>
                                    <IconWrapper src={data.icon} />
                                    <BenefitsTitleWrapper>
                                        <BenefitsTitle>{data.title}</BenefitsTitle>
                                    </BenefitsTitleWrapper>
                                </div>
                                {data?.subTitle && (
                                    <div className='sub-logo'>
                                        <Image
                                            icon={`${PNGS_URL}magnifi-brands.png`}
                                            alt='Branding image'
                                            width='200px'
                                        />
                                    </div>
                                )}
                                {data?.subTitle && (
                                    <div className='sub-title'>
                                        <div className='text'>On Zomato, Ajio, BookMyShow and Blinkit</div>
                                    </div>
                                )}
                            </MapWrapper>
                        ))}
                    </Wrapper>
                    <PosterImageDesktop src={posterData?.posterImageDesktop} />
                </PosterWrapper>
                <PosterImageMobile src={magnifyUrl('magnifi-card-mobile.png')} />
                <ButtonWrapper>
                    <Button onClick={onButtonClick}>
                        {eligibilityData?.btnTitle}
                        <ImageWrapper src={eligibilityData?.icon} />
                    </Button>
                    <ButtonDescription>{eligibilityData?.btnDescription}</ButtonDescription>
                </ButtonWrapper>
            </CreditCardPoster>
            <CompliantText>
                <div className='text'>
                    Brand names and logos used are for illustrative purposes only.
                    We do not endorse these brands neither do these brands endorse us.
                </div>
            </CompliantText>
        </>
    );
};

export default CreditCardPosterSection;
