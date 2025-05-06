/**
 * @file Work Benefit list container
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { SVGS_URL } from '../../../constants/AssetConstants';
import { Device } from '../../../Themes/Device';
import { NAVIGATION_URLS } from '../../../constants/AppConstant';
import {
    trackGTMEvent,
    CLICKED_LEARN_ABOUT_FI_COINS_WEB,
} from '../../../events';

const Title = styled(Font)`
    padding: 2px 5px 0px 5px;
`;

const WorkBenefitsTitle = styled(Font)`
    color: ${(props) => props.theme.color.SHUTTLE_GRAY};
    min-width: 316px;
`;

const WorkBenefitsWrapper = styled.div`
    display: grid;
    row-gap: 32px;
    grid-template-columns: 1fr;
    margin-bottom: 50px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
    }

    @media ${Device.desktop} {
        grid-template-columns: 1fr;
        margin-bottom: 0px;
    }
`;

const Description = styled(Font)`
    padding: 4px 0px 0px 5px;
    color: ${(props) => props.theme.color.SUVA_GREY};

    @media ${Device.phone} {
        max-width: 200px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
    }
`;

const LearnMoreButton = styled(Font)`
    width: 253px;
    height: 56px;
    padding: 14px;
    border: none;
    outline: none;
    transition: 0.1s ease;
    background-color: ${(props) => props.theme.color.CATSKILL_WHITE};
    color: ${(props) => props.theme.color.SHARK1};
    border-radius: 19px;
    display: flex;
    justify-content: center;
    column-gap: 12px;
    align-items: center;

    cursor: pointer;
    letter-spacing: 0.45px;

    &:active {
        transform: scale(0.98);
    }
`;

const WorkBenefitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

const WorkBenefitItemWrapper = styled.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    column-gap: 7px;
`;

const WorkBenefitTitleWrapper = styled.div`
    margin-bottom: 30px;
`;

const WorkBenefitItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const WorkBenefitImageHolder = styled.div`
    background-color: #ffffff;
    border-radius: 15px;
    padding: 10px;
    width: 48px;
    height: 48px;
`;

const LearnMoreHolder = styled.div`
    position: absolute;
    bottom: -100px;
    left: 50px;
`;

const WorkBenefitHeaderLogoHolder = styled.div`
    margin-bottom: 18px;
    height: 54px;
    width: 60px;
`;

const LearnMoreArrownHolder = styled.div`
    height: 11.1px;
    width: 6.3px;
`;

const LearnMoreIconHolder = styled.div`
    height: 16px;
    width: 16px;
`;

interface IWorkBenefitItem {
    title: string;
    subTitle: string;
    image: string;
    height: string;
    width: string;
}

interface IWorkBenefitsProps {
    title: string;
    workBenefitList: IWorkBenefitItem[];
    isMobileView?: boolean;
}

const WorkBenefitSection = (props: IWorkBenefitsProps) => {
    const { workBenefitList, title, isMobileView } = props;
    const [isEntering, setIsEntering] = useState(false);

    useEffect(() => {
        setIsEntering(true);
    }, []);

    const onClickLearnFiCoins = () => {
        trackGTMEvent(CLICKED_LEARN_ABOUT_FI_COINS_WEB);
        window.open(NAVIGATION_URLS.REWARDS.url, '_blank');
    };

    return (
        <WorkBenefitContainer
            className={
                !isEntering
                    ? 'transition transition-start-initial-bottom opacity-initial scrollbar-hide'
                    : 'transition transition-start-final opacity-final scrollbar-hide'
            }
        >
            {isMobileView ? (
                <WorkBenefitHeaderLogoHolder>
                    <Image
                        objectType='contain'
                        icon={`${SVGS_URL}work-benifit-header-icon.svg`}
                    />
                </WorkBenefitHeaderLogoHolder>
            ) : null}
            <WorkBenefitTitleWrapper>
                <WorkBenefitsTitle font='titleVariantTwo' tagType='text'>
                    {title}
                </WorkBenefitsTitle>
            </WorkBenefitTitleWrapper>
            <WorkBenefitsWrapper>
                {workBenefitList?.map((item) => (
                    <WorkBenefitItemWrapper key={item?.image}>
                        <WorkBenefitImageHolder>
                            <Image
                                objectType='contain'
                                icon={item?.image}
                                height={item?.height}
                                width={item?.width}
                            />
                        </WorkBenefitImageHolder>
                        <WorkBenefitItem>
                            <Title font='labelVariantTwelve' tagType='text'>
                                {item?.title}
                            </Title>
                            <Description
                                font='labelVariantThirteen'
                                tagType='text'
                            >
                                {item?.subTitle}
                            </Description>
                        </WorkBenefitItem>
                    </WorkBenefitItemWrapper>
                ))}
            </WorkBenefitsWrapper>
            {!isMobileView ? (
                <LearnMoreHolder onClick={onClickLearnFiCoins}>
                    <LearnMoreButton
                        tagType='button'
                        font='labelVariantTwelve'
                        type='button'
                    >
                        <LearnMoreIconHolder>
                            <Image
                                objectType='contain'
                                icon={`${SVGS_URL}union-coins.svg`}
                            />
                        </LearnMoreIconHolder>
                        Learn about Fi-Coins
                        <LearnMoreArrownHolder>
                            <Image
                                objectType='contain'
                                icon={`${SVGS_URL}vector-storke.svg`}
                            />
                        </LearnMoreArrownHolder>
                    </LearnMoreButton>
                </LearnMoreHolder>
            ) : null}
        </WorkBenefitContainer>
    );
};

WorkBenefitSection.defaultProps = {
    isMobileView: false,
};

export default WorkBenefitSection;
