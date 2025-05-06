/**
 * @file Poster Section
 */
import React from 'react';
import styled from 'styled-components';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';

const CreditCardPoster = styled.div`
    margin: 0 auto;
    height: 100%;
    color: ${(props) => props.theme.color.WHITE};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${Device.tab} {
      margin-bottom: 150px;
    }

    @media ${Device.desktop} {
      margin-bottom: 312px;
    }
`;

const Wrapper = styled.div`
    width: 100%;

    @media ${Device.desktop} {
      width: 45%;
    }
`;

const Header = styled.div`
    width: 100%;
    img {
        margin-top: 20px;
        margin-left: 42px;
    }

    @media ${Device.tab} {
      display: flex;
      justify-content: space-between;
      height: 141px;
      align-items: center;
      margin: 0 auto;
      width: 80%;

    img {
        margin-top: 20px;
        margin-left: 2px;
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
    }
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.WHITE};
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

    @media ${Device.tab} {
        display: none;
    }
`;

const LineBreak = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00b899 0%, #18191b 90%);
    margin: 24px 0 24px;

    @media ${Device.tab} {
        width: 80%;
        height: 2px;
        margin: 36px 0 39px;
        background: linear-gradient(90deg, #18191b 0%, #00b899 40%, #18191b 90%);
    }
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
    display: flex;
    gap: 12px;
    padding-bottom: 16px;
    align-items: center;

    @media ${Device.desktop} {
        gap: 24px;
    }
`;

const Title = styled.h1`
    color: ${(props) => props.theme.color.WHITE};
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
        size: '64px',
        lineHeight: '76px',
    })};
        padding-bottom: 33px;
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
        height: 574px;
        width: 656px;
    }
`;

const PosterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 80%;
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

interface IPosterSectionProps {
  posterSectionData: {
    headerData?: {
      fiLogo?: string;
      amplifiLogo?: string;
    };
    posterData?: {
      title?: string;
      description?: string;
      posterImageDesktop?: string;
      posterImageMobile?: string;
    };
    benefitsData?: {
      id?: string;
      title?: string;
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

    return (
        <CreditCardPoster>
            <Header>
                <FiWrapper src={headerData?.fiLogo} alt='FI Logo' />
            </Header>
            <PosterWrapper>
                <Wrapper>
                    <Title>{posterData?.title}</Title>
                    <Description>{posterData?.description}</Description>
                    <LineBreak />
                    {benefitsData?.map((data) => (
                        <MapWrapper key={data.id}>
                            <IconWrapper src={data.icon} />
                            <BenefitsTitle>{data.title}</BenefitsTitle>
                        </MapWrapper>
                    ))}
                </Wrapper>
                <PosterImageDesktop src={posterData?.posterImageDesktop} />
            </PosterWrapper>
            <PosterImageMobile src={posterData?.posterImageMobile} />
        </CreditCardPoster>
    );
};

export default CreditCardPosterSection;
