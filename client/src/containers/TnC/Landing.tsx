import React, { useEffect, useRef } from 'react';

import {
    AppFooter,
    PosterContainer,
    StyledContainer,
    StyledLanding,
} from '../../components';
import {
    PosterSection,
    InfoSection,
    CardSection,
    FooterInfoOne,
    MenuSection,
} from './index';

// eslint-disable-next-line no-var
declare var window: any;

const trackingPayload = {
    flow_name: 'waitlist',
    channel: 'waitlist',
    page_name: 'tnc page',
};

const Landing = () => {
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const myRef4 = useRef(null);

    const trackGtagEvent = () => {
        if (window.gtag) {
            window.gtag('set', 'page', '/waitlist/T&C');
            window.gtag('send', 'pageview');
        }
    };

    useEffect(() => {
        trackGtagEvent();
        window.scrollTo(0, 0);
    }, []);

    const onTitleClick = (state: 1 | 2 | 3 | 4) => {
        switch (state) {
            case 2:
                myRef2.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;
            case 3:
                myRef3.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;
            case 4:
                myRef4.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;

            default:
                myRef1.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;
        }
    };

    return (
        <StyledContainer>
            <PosterContainer>
                <PosterSection />
            </PosterContainer>

            <StyledLanding>
                <MenuSection onTitleClick={onTitleClick} />
                <div ref={myRef1}>
                    <InfoSection />
                </div>
                <div ref={myRef2}>
                    <CardSection />
                </div>
                <div ref={myRef3}>
                    <FooterInfoOne />
                </div>
                {/* <div ref={myRef4}>
                    <FooterInfoTwo />
                </div> */}
            </StyledLanding>

            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default Landing;
