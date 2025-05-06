import React from 'react';
import { Font } from '../..';
import { StyledCard, Title, FooterLink } from './Styled';

const SeeMoreCard = () => (
    <StyledCard>
        <div>
            <Title tagType='text' font='h3'>
                See yourself here?
            </Title>
            <Font tagType='text' font='pSmallVariantTwo' color='WHITE'>
                Join the team and help us build the future of personal finance.
            </Font>
        </div>
        <div>
            <a href='/teams' target='_blank'>
                <FooterLink
                    tagType='span'
                    font='pSmallVariantTwo'
                    color='WHITE'
                >
                    Meet the whole team
                </FooterLink>
            </a>
        </div>
    </StyledCard>
);

export default SeeMoreCard;
