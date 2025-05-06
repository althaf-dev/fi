'use client'
import React from 'react';
import Image from 'next/image';
import Font from '../Font/Font';

import {
    Section,
    TextHolder,
    ImageHolder,
    GridHolder,
    GridHolderContainer,
    FooterLink,
    FooterLinkHolder,
    Description,
} from './Styled';
import PersonCard from '../PersonCard/PersonCard';
import { EXTERNAL_JOBS_URL } from '../../constants/AppConstant';
import { ICONS_URL_MAP } from '../../constants/AssetConstants';

import SeeMoreCard from './SeeMoreCard/SeeMoreCard';
import { EMPLOYEE_DATA } from './EmployData';

const AboutTeamSection = () => (
    <Section>
        <TextHolder>
            <Font font='h1' tagType='h2' color='MINE_SHAFT'>
                Meet the team
            </Font>

            <Description tagType='h3' font='p3' color='SUVA_GREY'>
                An eccentric group of individuals, who genuinely believe they
                can revolutionise money management.
            </Description>
        </TextHolder>
        <GridHolderContainer>
            <span />
            <div>
                <GridHolder length={EMPLOYEE_DATA.length}>
                    {EMPLOYEE_DATA.map((value: any) => (
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
            <span />
        </GridHolderContainer>

        <FooterLinkHolder>
            <a href={EXTERNAL_JOBS_URL} target='_blank' rel='noreferrer'>
                <FooterLink>
                    VIEW OPEN ROLES&nbsp;
                    <ImageHolder>
                        <Image
                            src={ICONS_URL_MAP.EXTERNAL_LINK}
                            alt='link'
                            layout='responsive'
                            width={30}
                            height={30}
                        />
                    </ImageHolder>
                </FooterLink>
            </a>
        </FooterLinkHolder>
    </Section>
);

export default AboutTeamSection;
