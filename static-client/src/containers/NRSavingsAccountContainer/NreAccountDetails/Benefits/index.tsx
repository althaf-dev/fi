import React from 'react';

import { ACCOUNT_BENEFITS } from '../../constants';

import {
    Description,
    Icon,
    Item,
    BenefitsColumn,
    BenefitsWrapper
} from './styles';

const Benefits = () => (
    <BenefitsColumn>
        <BenefitsWrapper>
            {
                ACCOUNT_BENEFITS.map((benefit, index) => (
                    <Item key={index}>
                        <Icon src={benefit.icon} alt="" />
                        <Description>{benefit.description}</Description>
                    </Item>
                ))
            }
        </BenefitsWrapper>
    </BenefitsColumn>
);

export default Benefits;
