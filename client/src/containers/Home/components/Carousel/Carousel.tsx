import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useWindowDimensions } from '../../../../hooks';
import { WINDOW_SIZE } from '../../../../Themes/Device';

const settings = {
    infinite: true,
    centerMode: true,
    cssEase: 'linear',
    autoplay: true,
    // speed: 6000,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 3,
    centerPadding: '92px',
    arrows: false,
    pauseOnHover: true,

    responsive: [
        {
            breakpoint: 1439,
            settings: {
                slidesToShow: 3,
                centerPadding: '92px',
            },
        },
        {
            breakpoint: 1290,
            settings: {
                slidesToShow: 3,
                centerPadding: '120px',
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                centerPadding: '60px',
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                centerPadding: '242px',
            },
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 1,
                centerPadding: '450px',
            },
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                centerPadding: '120px',
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerPadding: '70px',
            },
        },
        {
            breakpoint: 385,
            settings: {
                slidesToShow: 1,
                centerPadding: '55px',
            },
        },
    ],
};

const Wrapper = styled.div`
    overflow: hidden;
`;

const Slider = styled.div<any>`
    display: flex;
    overflow-x: scroll;

    /* To hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const Carousel = () => {
    const scroll = useRef(null);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (scroll && scroll.current) {
            if (width < WINDOW_SIZE.TAB) {
                // For making the right and left card peek for mobile case
                scroll.current.scrollLeft =
                    250 - (window.screen.width - 250) / 2;
            } else if (
                width >= WINDOW_SIZE.TAB &&
                width < WINDOW_SIZE.DESKTOP
            ) {
                // For making the right and left card peek for tablet case

                scroll.current.scrollLeft =
                    284 - (window.screen.width - 284) / 2;
            } else {
                if (window.screen.width >= 1440) {
                    scroll.current.scrollLeft = 425 - (1440 - 3 * 425) / 2;
                } else {
                    // For making the right and left card peek for desktop case

                    scroll.current.scrollLeft =
                        425 - (window.screen.width - 3 * 425) / 2;
                }
            }
        }
    }, [width]);
    return (
        <Wrapper>
            <Slider ref={scroll}>
                <div />
            </Slider>
        </Wrapper>
    );
};
export default Carousel;
