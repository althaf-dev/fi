import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { PosterSection } from '../../../components';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const WealthTncLink = styled.span`
    color: ${(props) => props.theme.color.FOREST_GREEN};
    cursor: pointer;
`;

const EpifiTnCPosterSection = () => {
    const navigate = useNavigate();

    return (
        <PosterSection
            title='Terms & Conditions'
            description={(
                <>
                    You didn&apos;t skip this section! As a gesture of our appreciation, here&apos;s a one-liner
                    description of epiFi&apos;s Terms & Conditions:
                    <br />
                    To establish what you can expect from us, as you use epiFi&apos;s services, and what we require from
                    you. We urge you to keep on reading, as it&apos;s vital that you know, understand and comprehend our
                    terms and conditions (“T&Cs”).
                    <br />
                    <br />
                    You can read more about epiFi Wealth&apos;s T&Cs&nbsp;
                    <WealthTncLink onClick={() => navigate('/wealth/TnC')}>here</WealthTncLink>
                    .
                </>
            )}
            mobilePoster={`${WEBP_URL}panda-mobile-poster.webp`}
            desktopPoster={`${WEBP_URL}panda-desktop-poster.webp`}
            fallbackMobilePoster={`${PNGS_URL}panda-mobile-poster.png`}
            fallbackDesktopPoster={`${PNGS_URL}panda-desktop-poster.png`}
            alignLeft
        />
    );
};

export default EpifiTnCPosterSection;
