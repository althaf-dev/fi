import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { EXTERNAL_JOBS_URL } from '../../../constants/AppConstant';
import { PNGS_URL, ICONS_URL_MAP } from '../../../constants/AssetConstants';

const Card = styled.div`
    padding: 40px 20px;
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
    text-align: center;

    @media ${Device.tab} {
        display: none;
    }
`;

const ImageHolder = styled.div`
    margin: 30px 0px;
`;

const Button = styled(Font)`
    display: inline-flex;
`;

const ArrowTop = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 10px;
`;

const Description = styled(Font)`
    margin-bottom: 20px;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;
`;

const SeeYourselfCard = () => (
    <Card>
        <Font font='h1VariantOne' tagType='text' color='MINE_SHAFT'>
            See yourself here?
        </Font>

        <ImageHolder>
            <Image icon={`${PNGS_URL}team-mobile.png`} alt='team' loadingType='lazy' />
        </ImageHolder>

        <Description font='h3' tagType='text' color='MINE_SHAFT'>
            Join the team and help us build the future of personal finance.
        </Description>

        <a href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
            <Button tagType='text' font='button' color='GREY_2'>
                <span>VIEW OPEN ROLES</span>

                <ArrowTop>
                    <Image
                        icon={ICONS_URL_MAP.GREY_TOP_RIGHT_ARROW}
                        loadingType='lazy'
                        alt='arrow'
                        objectType='contain'
                    />
                </ArrowTop>
            </Button>
        </a>
    </Card>
);

export default SeeYourselfCard;
