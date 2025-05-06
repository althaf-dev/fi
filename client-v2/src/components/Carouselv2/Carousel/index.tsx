import React, { useState, FC } from 'react';
import {
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
} from './styles';

interface Slide {
    src: string;
    alt: string;
    amount: number;
    text: string;
}

interface CarouselProps {
    mobileSlides: Slide[];
    desktopSlides: Slide[];
}

const Carousel: FC<CarouselProps> = ({ mobileSlides, desktopSlides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? mobileSlides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === mobileSlides.length - 1 ? 0 : prevIndex + 1));
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const formatAmount = (amount: number): string => {
        try {
            const formatter = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
            return formatter.format(amount);
        } catch (error) {
            return '₹0';
        }
    };
    return (
        <>
            <CarouselContainer>
                <CarouselWrapper>
                    <SlidesWrapper activeIndex={activeIndex}>
                        {desktopSlides.map((slide) => (
                            <SlideContainer key={slide.src}>
                                <DesktopSlideImg src={slide.src} alt={slide.alt} />
                                <DesktopSlideAmount>
                                    {formatAmount(slide.amount)}
                                </DesktopSlideAmount>
                                <DesktopSlideText>
                                    {slide.text}
                                </DesktopSlideText>
                            </SlideContainer>
                        ))}
                        {mobileSlides.map((slide) => (
                            <SlideContainer key={slide.src}>
                                <MobileSlideImg src={slide.src} alt={slide.alt} />
                                <MobileSlideAmount>
                                    {formatAmount(slide.amount)}
                                </MobileSlideAmount>
                                <MobileSlideText>
                                    {slide.text}
                                </MobileSlideText>
                            </SlideContainer>
                        ))}
                    </SlidesWrapper>
                    <NavigationButton direction='prev' onClick={handlePrev}>
                        &#8249;
                    </NavigationButton>
                    <NavigationButton direction='next' onClick={handleNext}>
                        &#8250;
                    </NavigationButton>
                </CarouselWrapper>
            </CarouselContainer>
        </>
    );
};

export default Carousel;
