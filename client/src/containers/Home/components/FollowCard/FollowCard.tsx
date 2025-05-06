import React from 'react';
import styled from 'styled-components';
import { Device } from '../../../../Themes/Device';
import { Font, Image } from '../../../../components/Abstract';
import Instagram from '../../../../assets/svgs/instagram.svg';
import LinkedIn from '../../../../assets/svgs/linkedin.svg';
import Twitter from '../../../../assets/svgs/twitter.svg';

const CardWrapper = styled.div`
    width: 100%;
    padding: 40px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.color.WHITE};

    @media ${Device.desktop} {
        border-radius: 30px;
        padding: 69px;
        height: 100%;
    }
`;

const Text = styled(Font)`
    max-width: 172.5px;
    margin: auto;
    text-align: center;

    @media ${Device.tab} {
        max-width: 100%;
    }

    @media ${Device.desktop} {
        text-align: left;
        max-width: 370px;
        margin: 0px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    max-width: 165px;
    margin: 40px auto 0;
    justify-content: space-between;

    @media ${Device.tab} {
        max-width: 205px;
        margin: 30px auto 0;
    }

    @media ${Device.desktop} {
        max-width: 100%;
        flex-direction: column;
        height: 230px;
        margin: 58px 0 0;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    @media ${Device.desktop} {
        &:not(:last-child) {
            margin: 0 0 40px 0;
        }
    }
`;

const Icon = styled.div`
    width: 34.89px;
    height: 34.89px;

    @media ${Device.tab} {
        width: 32px;
        height: 32px;
    }

    @media ${Device.desktop} {
        width: 50px;
        height: 50px;
    }
`;

const SocialText = styled(Font)`
    display: none;

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }

    @media ${Device.desktop} {
        display: block;
        margin-left: 30px;
    }
`;

const InstagramText = styled(SocialText)`
    color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const TwitterText = styled(SocialText)`
    color: ${(props) => props.theme.color.PICTON_BLUE};
`;

const LinkedinText = styled(SocialText)`
    color: ${(props) => props.theme.color.HIPPIE_BLUE};
`;

interface FollowCardProps {
    onLinkClick?: (value: 'instagram' | 'linkedin' | 'twitter') => void;
}

const FollowCard = (props: FollowCardProps) => (
    <CardWrapper>
        <Text font='h1' tagType='text'>
            Follow us for a chance to win your fi.nite code.
        </Text>

        <ButtonContainer>
            <IconWrapper onClick={() => props.onLinkClick('instagram')}>
                <Icon>
                    <Image
                        loadingType='lazy'
                        icon={Instagram}
                        alt='Instagram'
                        objectType='contain'
                    />
                </Icon>
                <InstagramText font='h4' tagType='text'>
                    Instagram
                </InstagramText>
            </IconWrapper>
            <IconWrapper onClick={() => props.onLinkClick('twitter')}>
                <Icon>
                    <Image
                        loadingType='lazy'
                        icon={Twitter}
                        alt='Twitter'
                        objectType='contain'
                    />
                </Icon>
                <TwitterText font='h4' tagType='text'>
                    Twitter
                </TwitterText>
            </IconWrapper>
            <IconWrapper onClick={() => props.onLinkClick('linkedin')}>
                <Icon>
                    <Image
                        loadingType='lazy'
                        icon={LinkedIn}
                        alt='LinkedIn'
                        objectType='contain'
                    />
                </Icon>
                <LinkedinText font='h4' tagType='text'>
                    LinkedIn
                </LinkedinText>
            </IconWrapper>
        </ButtonContainer>
    </CardWrapper>
);

FollowCard.defaultProps = {
    onLinkClick: () => {},
};

export default FollowCard;
