import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex: direction: column;
  overflow: hidden;
  align-items: center;
  flex: 2;
  max-width: 500px;
  justify-content: center;
`;

const SlidesWrapper = styled.div<{ activeIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
  max-width: 500px;
  height: auto;
  object-fit: contain;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: 350px;
  }
`;

const SlideContainer = styled.div`
  position: relative;
`;

const DesktopSlideImg = styled.img`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  max-width: 500px;
  height: auto;

   @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: none;
  }
`;

const MobileSlideImg = styled.img`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  width: 350px;
  height: auto;

   @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: block;
  }
`;

const NavigationButton = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  ${({ direction }) => direction === 'prev' && 'left: 10px;'}
  ${({ direction }) => direction === 'next' && 'right: 10px;'}

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: none;
  }
`;

const DesktopSlideAmount = styled.p`
  position: absolute;
  top: 16%;
  left: 7%;
  background: transparent;
  padding: 10px 15px;
  font-size: 16px;
  z-index: 2;
  width: 70%;
  max-width: 500px;
  outline: none;
  font-family: Gilroy;
  font-size: 42px;
  font-weight: 600;
  line-height: 40px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: 90%;
    font-size: 14px;
    display: none;
  }
`;

const MobileSlideAmount = styled.p`
   position: absolute;
  top: 45%;
  left: 2%;
  background: transparent;
  padding: 10px 15px;
  z-index: 2;
  width: 70%;
  max-width: 500px;
  outline: none;
  display: none;
  font-family: Gilroy;
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  align-items: center;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: inline-block;
  }
`;

const DesktopSlideText = styled.p`
  position: absolute;
  top: 8%;
  left: 5%;
  background: transparent;
  padding: 10px 15px;
  z-index: 2;
  width: 80%;
  max-width: 500px;
  outline: none;
  font-family: Gilroy;
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: 90%;
    font-size: 14px;
    display: none;
  }
`;

const MobileSlideText = styled.p`
  position: absolute;
  top: 10%;
  left: 2%;
  background: transparent;
  padding: 10px 15px;
  z-index: 2;
  width: 70%;
  max-width: 500px;
  outline: none;
  display: none;
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: inline-block;
  }
`;

const CarouselWrapper = styled.div`
  max-width: 500px;
  overflow: hidden;
`;

export {
    CarouselContainer,
    SlidesWrapper,
    SlideContainer,
    DesktopSlideImg,
    MobileSlideImg,
    NavigationButton,
    DesktopSlideAmount,
    MobileSlideAmount,
    DesktopSlideText,
    MobileSlideText,
    CarouselWrapper
};
