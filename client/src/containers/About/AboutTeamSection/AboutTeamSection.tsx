import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components/Abstract';
import { Device } from '../../../Themes/Device';
import { Section } from '../AboutStyled/AboutStyled';

import { PersonCard } from '../../../components';
import { EXTERNAL_JOBS_URL } from '../../../constants/AppConstant';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

import SeeMoreCard from './SeeMoreCard';
import { EMPLOYEE_DATA } from './EmployData';

const Description = styled(Font)`
    margin-top: 15px;

    @media ${Device.desktop} {
        margin-top: 20px;
    }
`;

const TextHolder = styled.div`
    text-align: center;
    width: 330px;
    margin: auto;
    padding: 20px 20px 40px;

    @media ${Device.tab} {
        width: 490px;
        padding: 30px 30px 40p;
    }

    @media ${Device.desktop} {
        padding: 40px 40px 60px;
        width: 700px;
    }
`;

const FooterLinkHolder = styled.div`
    display: flex;
    justify-content: center;
    margin: 42px 20px;

    @media ${Device.tab} {
        margin: 40px;
    }

    @media ${Device.desktop} {
        margin-top: 60px;
    }
`;

const FooterLink = styled.div`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: 0.45px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.color.GREY_2};

    @media ${Device.desktop} {
        font-size: 20px;
    }
`;

const ImageHolder = styled.div`
    height: 0.8em;
    width: 0.8em;
`;

const GridHolderContainer = styled.div`
    display: grid;
    overflow-x: auto;
    grid-template-columns: 20px auto 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${Device.tab} {
        grid-template-columns: 80px auto 80px;
    }

    @media ${Device.desktop} {
        grid-template-columns: 100px auto 100px;
    }
`;

const GridHolder = styled.div<{ length: number }>`
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: row;
    grid-template-columns: repeat(
        ${(props) => Math.ceil(props.length / 2)},
        300px
    );
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${Device.tab} {
        grid-gap: 15px;
        grid-template-columns: repeat(
            ${(props) => Math.ceil(props.length / 2)},
            210px
        );
    }

    @media ${Device.desktop} {
        grid-gap: 30px;
        grid-template-columns: repeat(
            ${(props) => Math.ceil(props.length / 2)},
            290px
        );
    }
`;

const AboutTeamSection = () => (
    <Section>
        <TextHolder>
            <Font font='h1' tagType='h2' color='MINE_SHAFT'>
                Meet the team
            </Font>

            <Description tagType='h3' font='p3' color='SUVA_GREY'>
                An eccentric group of individuals, who genuinely believe they can revolutionise money management.
            </Description>
        </TextHolder>
        <GridHolderContainer>
            <span></span>
            <div>
                <GridHolder length={EMPLOYEE_DATA.length}>
                    {EMPLOYEE_DATA.map((value) => (
                        <PersonCard
                            key={value.name}
                            profileUrl={value.profileUrl}
                            name={value.name}
                            position={value.position}
                            description={value.description}
                            previousInfo={value.previousInfo}
                            fallBackImageUrl={value.fallBackImageUrl}
                        />
                    ))}
                    <SeeMoreCard />
                </GridHolder>
            </div>
            <span></span>
        </GridHolderContainer>

        <FooterLinkHolder>
            <a href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
                <FooterLink>
                    VIEW OPEN ROLES&nbsp;
                    <ImageHolder>
                        <Image
                            loadingType='lazy'
                            icon={ICONS_URL_MAP.EXTERNAL_LINK}
                            alt='link'
                        />
                    </ImageHolder>
                </FooterLink>
            </a>
        </FooterLinkHolder>
    </Section>
);

export default AboutTeamSection;
