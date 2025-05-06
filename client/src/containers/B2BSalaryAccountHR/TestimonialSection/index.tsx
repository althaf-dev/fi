import React from 'react';
import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const CarouselWrapper = styled.div`
    display: flex;
    scroll-behavior: smooth;
    width: 100%;
    overflow-y: scroll;
    height: fit-content;
    gap: 20px;
    align-items: center;
    flex-direction: row;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media ${Device.desktop} {
        gap: 40px;
    }
`;

const CarouselItem = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    display: flex;
    width: 250px;
    height: auto;
    justify-content: flex-start;
    flex-shrink: 0;
    border-radius: 25px;
    border-top: 0;
    position: relative;
    margin-top: 50px;
    &:first-child {
      margin-left: 10%;
    }
    &:last-child {
      margin-right: 10%;
    }

    @media ${Device.tab} {
        width: 400px;
        margin-top: 50px;
        padding-left: 20px;
    }

    @media ${Device.desktop} {
        width: 583px;
        height: auto;
        margin-top: 90px;
        padding-left: 20px;
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 32px;
    position: absolute;
    top: -4%;

    @media ${Device.tab} {
        width: 80px;
        height: 50px;
        top: -7%;
    }

    @media ${Device.desktop} {
        width: 101px;
        height: 64px;
        top: -4%;
    }
`;

const Wrapper = styled.div`
    padding: 35px 32px 20px 20px;

    @media ${Device.desktop} {
        padding: 70px 40px;
    }
`;

const CarouselName = styled.div`
    padding-bottom: 10px;
    color: ${(props) => props.theme.color.GRAY_7};
    ${MIXINS.FontMixin({
        font: 'gilroy',
        weight: 700,
        size: '18px',
        lineHeight: '22px',
    })};

    @media ${Device.desktop} {
        padding-bottom: 6px;
        ${MIXINS.FontMixin({
        size: '33px',
        lineHeight: '40px',
    })};
        }
`;

const CarouselTitle = styled.div`
  color: ${(props) => props.theme.color.GRAY_7};
  ${MIXINS.FontMixin({
        font: 'gilroy',
        weight: 500,
        size: '17px',
        lineHeight: '12px',
    })};

  @media ${Device.desktop} {
      ${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '40px',
    })};
     }
`;

const CarouselDescription = styled.div`
    padding-bottom: 20px;
    height: 250px;
    color: ${(props) => props.theme.color.SHARK1};
    ${MIXINS.FontMixin({
        font: 'gilroy',
        weight: 500,
        size: '14px',
        lineHeight: '23px',
    })};

    @media ${Device.tab} {
      padding-bottom: 30px;
      ${MIXINS.FontMixin({
        size: '18px',
        lineHeight: '28px',
    })};
    }

    @media ${Device.desktop} {
        padding-bottom: 40px;
        ${MIXINS.FontMixin({
        size: '25px',
        lineHeight: '40px',
    })};
        height: 290px;
    }
`;

const TestimonialSectionContainer = styled.div`
    margin: 0 auto;
    padding-bottom: 41px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${Device.tab} {
        padding-bottom: 89px;
        max-width: 100%;
    }
`;

const TestimonialSectionTitle = styled.div`
    padding-bottom: 20px;
    text-align: center;
    max-width: 360px;
    ${MIXINS.FontMixin({
        font: 'gilroy',
        weight: 600,
        size: '32px',
        lineHeight: '38px',
    })};
    color: ${(props) => props.theme.color.SHARK1};

    @media ${Device.tab} {
        max-width: 768px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ size: '48px', lineHeight: '51px' })};
    }
`;

const LineBreak = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #F7A800 0%, #FFFFFF 90%);
    margin-bottom: 24px;

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

interface ITestimonialSectionProps {
  data: {
    title: string;
    list: {
      id: number;
      icon: string;
      content: string;
      name: string;
      designation?: string;
    }[];
  };
}

const TestimonialSection = ({ data }: ITestimonialSectionProps) => {
    const { title, list } = data;

    return (
        <TestimonialSectionContainer>
            <TestimonialSectionTitle>{title}</TestimonialSectionTitle>

            <CarouselWrapper>
                {list.map((Data) => (
                    <CarouselItem key={Data.id}>
                        <Wrapper>
                            <Icon src={Data.icon} />
                            <CarouselDescription>{Data.content}</CarouselDescription>
                            <LineBreak />
                            <CarouselName>{Data.name}</CarouselName>
                            <CarouselTitle>{Data.designation}</CarouselTitle>
                        </Wrapper>
                    </CarouselItem>
                ))}
            </CarouselWrapper>
        </TestimonialSectionContainer>
    );
};

export default React.memo(TestimonialSection);
