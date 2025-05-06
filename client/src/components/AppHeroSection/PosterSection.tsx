import React from 'react';
import styled from 'styled-components';

import { Device, WINDOW_SIZE } from '../../Themes/Device';
import { useWindowDimensions } from '../../hooks';
import { Font, Image } from '../Abstract';

import AppPosterSection from './AppPosterSection';

const PosterContent = styled.div<{alignLeft?: boolean}>`
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 0 20px;
    text-align: ${(props) => (props.alignLeft ? 'left' : 'center')};

    @media ${Device.tab} {
        margin-top: 90px;
        margin-bottom: 40px;
        padding: 0;
    }

    @media ${Device.desktop} {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0;
        text-align: left;
    }
`;

const Title = styled(Font)`
    margin-bottom: 15px;

    @media ${Device.tab} {
        margin-bottom: 20px;
    }

    @media ${Device.desktop} {
        max-width: 710px;
        margin-bottom: 40px;
    }
`;

const Description = styled(Font)`
    @media ${Device.desktop} {
        max-width: 600px;
        text-align: left;
    }
`;

const PosterImage = styled(Image)`
    display: block;
    height: 100%;
    width: auto;
    margin: auto;
`;

interface PosterSectionProps {
    title: string;
    description: React.ReactElement;
    mobilePoster: string;
    desktopPoster: string;
    fallbackMobilePoster: string;
    fallbackDesktopPoster: string;
    alignLeft?: boolean;
}

const PosterSection = (props: PosterSectionProps) => {
    const { width } = useWindowDimensions();
    const {
        title, description, mobilePoster, desktopPoster, fallbackMobilePoster,
        fallbackDesktopPoster, alignLeft,
    } = props;

    return (
        <AppPosterSection
            posterGrid={(
                <PosterImage
                    width='auto'
                    loadingType='eager'
                    icon={width < WINDOW_SIZE.DESKTOP ? mobilePoster : desktopPoster}
                    fallBackImage={width < WINDOW_SIZE.DESKTOP ? fallbackMobilePoster : fallbackDesktopPoster}
                />
            )}
        >
            <PosterContent alignLeft={alignLeft}>
                <Title font='h1' tagType='h1' color='WHITE'>
                    {title}
                </Title>
                <Description font='p' tagType='text' color='SILVER_2'>
                    {description}
                </Description>
            </PosterContent>
        </AppPosterSection>
    );
};

PosterSection.defaultProps = { alignLeft: false };

export default PosterSection;
