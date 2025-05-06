/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import RewardsTnCHome from '../index';

it('should render RewardsTnC component', () => {
    const { asFragment } = render(<RewardsTnCHome />);
    expect(asFragment()).toMatchSnapshot();
});
