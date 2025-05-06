/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import PrivacyPolicyHome from '../index';

it('should render Privacy Policy component', () => {
    const { asFragment } = render(<PrivacyPolicyHome />);
    expect(asFragment()).toMatchSnapshot();
});
