import React from 'react';
import styled from 'styled-components';
import { Device } from '@/Themes/Device';

const CarouselContainer = styled.div`
  display: block;
`;

const CarouselWrapper = styled.div`
  display: flex;
  scroll-behavior: smooth;
  width: 100%;
  overflow-y: scroll;
  height: fit-content;
  gap: 20px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media ${Device.desktop} {
    gap: 40px;
  };
`;

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => (
    <CarouselContainer>
        <CarouselWrapper>{children}</CarouselWrapper>
    </CarouselContainer>
);

export default Carousel;
