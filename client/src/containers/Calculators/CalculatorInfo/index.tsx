/**
* Calculator Information Component
* @file Renders a responsive grid/carousel of calculator cards with navigation controls.
* Features:

* - Mobile view: Full sliding gid display
* - Desktop view: Sliding carousel with navigation arrows
* - Dynamic card width adjustment based on viewport
* - Pagination controls with ITEMS_PER_PAGE limit
*/
import React, { useState, useEffect } from 'react';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import calculatorsData from '../../../assets/json/all-calculators.json';
import { ITEMS_PER_PAGE } from './constants';
import {
    CalculatorCard,
    CalculatorContainer,
    CalculatorIcon,
    CalculatorLink,
    CalculatorName,
    CalculatorTitle,
    NavigationButtonRight,
    NavigationButtonLeft,
    GridWrapper,
    AnimatedCalculatorGrid,
    SlideContainer,
    CalculatorGrid,
} from './styles';

const CalculatorInfo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideOffset, setSlideOffset] = useState(0);
    const [cardWidth, setCardWidth] = useState(180);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateLayout = () => {
            const mobile = window.matchMedia('(max-width: 767px)').matches;
            setIsMobile(mobile);

            if (window.matchMedia('(min-width: 1024px)').matches) {
                setCardWidth(372);
            } else if (window.matchMedia('(min-width: 768px)').matches) {
                setCardWidth(324);
            } else {
                setCardWidth(180);
            }
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setSlideOffset((prev) => prev + cardWidth);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < calculatorsData.length - ITEMS_PER_PAGE) {
            setCurrentIndex((prev) => prev + 1);
            setSlideOffset((prev) => prev - cardWidth);
        }
    };

    return (
        <CalculatorContainer>
            <CalculatorTitle>More calculators</CalculatorTitle>
            <GridWrapper>
                {!isMobile && (
                    <NavigationButtonLeft
                        src={ICONS_URL_MAP.LEFT_ARROW}
                        onClick={handlePrevClick}
                        visibility={currentIndex === 0 ? 'hidden' : 'visible'}
                    />
                )}

                {isMobile ? (
                    <CalculatorGrid>
                        {calculatorsData.map((calculator) => {
                            // TODO: removed when fire calculator logic is fixed
                            if (calculator.url === 'fire-calculator') {
                                return null;
                            }
                            return (
                                <CalculatorLink
                                    key={calculator.calculator_id}
                                    href={calculator.url}
                                >
                                    <CalculatorCard>
                                        <CalculatorIcon
                                            src={calculator.icon_url}
                                            alt={calculator.name}
                                        />
                                        <CalculatorName>{calculator.name}</CalculatorName>
                                    </CalculatorCard>
                                </CalculatorLink>
                            );
                        })}
                    </CalculatorGrid>
                ) : (
                    <AnimatedCalculatorGrid>
                        <SlideContainer offset={slideOffset}>
                            {calculatorsData.map((calculator) => {
                                // TODO: removed when fire calculator logic is fixed
                                if (calculator.url === 'fire-calculator') {
                                    return null;
                                }
                                return (
                                    <CalculatorLink
                                        key={calculator.calculator_id}
                                        href={calculator.url}
                                    >
                                        <CalculatorCard>
                                            <CalculatorIcon
                                                src={calculator.icon_url}
                                                alt={calculator.name}
                                            />
                                            <CalculatorName>{calculator.name}</CalculatorName>
                                        </CalculatorCard>
                                    </CalculatorLink>
                                );
                            })}
                        </SlideContainer>
                    </AnimatedCalculatorGrid>
                )}

                {!isMobile && (
                    <NavigationButtonRight
                        src={ICONS_URL_MAP.RIGHT_ARROW}
                        onClick={handleNextClick}
                        visibility={currentIndex >= calculatorsData.length - ITEMS_PER_PAGE ? 'hidden' : 'visible'}
                    />
                )}
            </GridWrapper>
        </CalculatorContainer>
    );
};

export default CalculatorInfo;
