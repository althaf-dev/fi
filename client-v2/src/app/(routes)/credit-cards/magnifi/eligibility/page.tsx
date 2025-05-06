'use client';

import React from 'react';
import CreditCardEligibility from '@/containers/CreditCardEligibility';
import { CREDIT_CARD_TYPE } from '@/constants/AppConstant';

export default function CreditCardHome() {
    return (<CreditCardEligibility type={CREDIT_CARD_TYPE.MAGNIFI} />);
}
