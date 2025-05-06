import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import SeeYourselfCard from './SeeYourselfCard';
import { Font, Image } from '../../../components';
import { EXTERNAL_JOBS_URL } from '../../../constants/AppConstant';
import { WEBP_URL, PNGS_URL, ICONS_URL_MAP } from '../../../constants/AssetConstants';

const Container = styled.div`
    margin-top: 60px;

    @media ${Device.tab} {
        margin-top: 80px;
    }

    @media ${Device.desktop} {
        margin-top: 120px;
    }
`;

const GridHolder = styled.div`
    display: none;

    @media ${Device.tab} {
        margin: auto;
        filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.1));
        border-radius: 20px;
        overflow: hidden;
        height: 400px;
        width: 600px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }

    @media ${Device.desktop} {
        width: 1290px;
        height: 673px;
        grid-template-rows: 329px 344px;
    }
`;

const TopText = styled(Font)`
    padding: 63px 40px;
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    @media ${Device.desktop} {
        padding: 98px 144px 98px 80px;
    }
`;

const BottomTextHolder = styled.div`
    padding: 40px 25px;
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};

    @media ${Device.desktop} {
        padding: 95px 80px;
    }
`;

const BottomText = styled(Font)`
    margin-bottom: 26px;
`;

const Button = styled(Font)`
    display: inline-flex;
`;

const ArrowTop = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 10px;
`;

const CardGridSection = () => (
    <Container>
        {/* only for mobile devices */}
        <SeeYourselfCard />

        {/* only for tablet & desktop devices */}
        <GridHolder>
            <TopText tagType='text' font='h1VariantFour' color='PATTERNS_BLUE_TWO'>
                See yourself here?
            </TopText>
            <Image icon={`${WEBP_URL}team-desktop-2.webp`} alt='team' loadingType='lazy' fallBackImage={`${PNGS_URL}team-desktop-2.png`} />
            <Image icon={`${WEBP_URL}team-desktop.webp`} alt='team' loadingType='lazy' fallBackImage={`${PNGS_URL}team-desktop.png`} />
            <BottomTextHolder>
                <BottomText tagType='text' font='h4VariantThree' color='MINE_SHAFT'>
                    Join the team and help us build the future of personal finance
                </BottomText>
                <a href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
                    <Button tagType='text' font='button' color='GREY_2'>
                        <span>VIEW OPEN ROLES</span>

                        <ArrowTop>
                            <Image icon={ICONS_URL_MAP.GREY_TOP_RIGHT_ARROW} loadingType='lazy' alt='arrow' objectType='contain' />
                        </ArrowTop>
                    </Button>
                </a>
            </BottomTextHolder>
        </GridHolder>
    </Container>
);

export default CardGridSection;
