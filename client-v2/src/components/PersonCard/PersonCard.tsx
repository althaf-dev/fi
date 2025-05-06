/**
 * @file Person Card Component
 */
import React from 'react';
import styled from 'styled-components';

import { LOGOS_URL_MAP } from '../../constants/AssetConstants';
import { Device } from '../../Themes/Device';

import { Font, Image } from '../Abstract';

const StyledCard = styled.div<{ externalPage?: boolean }>`
    border-radius: 15px;
    background-color: ${(props) => props.theme.color.WHITE};
    width: 300px;
    display: flex;
    overflow: hidden;

    @media ${Device.tab} {
        display: ${(props) => (props.externalPage ? 'flex' : 'block')};
        flex-direction: ${(props) => (props.externalPage ? 'column-reverse' : 'unset')};
        width: 210px;
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.externalPage ? '340px' : '290px')};
    }
`;

const TextHolder = styled.div`
    padding: 20px;

    @media ${Device.desktop} {
        padding: 30px;
    }
`;

const Name = styled(Font)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 140px;

    @media ${Device.tab} {
        width: 170px;
    }

    @media ${Device.desktop} {
        width: 230px;
    }
`;

const Position = styled(Font)`
    /* height: 2em; */
    margin-top: 5px;
    margin-bottom: 20px;

    @media ${Device.tab} {
        margin-top: 4px;
        margin-bottom: 10px;
    }

    @media ${Device.desktop} {
        margin-top: 8px;
        margin-bottom: 20px;
    }
`;

const ExPosition = styled.div`
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
    color: ${(props) => props.theme.color.TEXT_GREY_1};

    @media ${Device.desktop} {
        font-size: 16px;
    }
`;

const ImageHolder = styled.div`
    overflow: hidden;
    min-width: 120px;
    width: 120px;

    @media ${Device.tab} {
        width: 100%;
        min-height: 201px;
        height: 201px;
    }

    @media ${Device.desktop} {
        min-height: 290px;
        height: 290px;
    }
`;

const SocialProfileHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const SocialProfileImageHolder = styled.div`
    width: 40px;
    height: 40px;
`;

interface PersonCardProps {
    profileUrl: string;
    name: string;
    position: string;
    description: string;
    previousInfo: string;
    fallBackImageUrl: string;
    key: string;
    loadingType?: 'lazy' | 'eager';
    externalPage?: boolean;
    socialMediaUrls?: any;
}

const PersonCard = (props: PersonCardProps) => {
    const {
        profileUrl, name, position, description, previousInfo, fallBackImageUrl, key, loadingType, externalPage, socialMediaUrls,
    } = props;
    const { linkedin_url: linkedinUrl, twitter_url: twitterUrl } = socialMediaUrls || {};

    return (
        <StyledCard key={key} externalPage={externalPage}>
            <ImageHolder>
                <Image icon={profileUrl} loadingType={loadingType} alt='team member' fallBackImage={fallBackImageUrl} />
            </ImageHolder>

            <TextHolder>
                <Name title={name} tagType='text' font='h5VariantTwo'>
                    {name}
                </Name>

                <Position tagType='text' font='pSmallVariantTwo' color='SUVA_GREY'>
                    {description ? `${position},` : `${position}`}
                    <br />
                    {description}
                </Position>

                <ExPosition>{previousInfo}</ExPosition>

                {linkedinUrl || twitterUrl ? (
                    <SocialProfileHolder>
                        <a href={linkedinUrl} target='_blank' rel='noreferrer'>
                            <SocialProfileImageHolder>
                                <Image icon={LOGOS_URL_MAP.LINKEDIN_BLUE} loadingType={loadingType} alt='team member' fallBackImage={LOGOS_URL_MAP.LINKEDIN_BLUE} />
                            </SocialProfileImageHolder>
                        </a>

                        <a href={twitterUrl} target='_blank' rel='noreferrer'>
                            <SocialProfileImageHolder>
                                <Image icon={LOGOS_URL_MAP.TWITTER_BLUE} loadingType={loadingType} alt='team member' fallBackImage={LOGOS_URL_MAP.TWITTER_BLUE} />
                            </SocialProfileImageHolder>
                        </a>
                    </SocialProfileHolder>
                ) : null}
            </TextHolder>
        </StyledCard>
    );
};

PersonCard.defaultProps = {
    loadingType: 'lazy',
    externalPage: false,
    socialMediaUrls: null,
};

export default PersonCard;
