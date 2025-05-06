/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import FeesHome from '../index';

it('should render Fees component', () => {
    const { asFragment } = render(<FeesHome />);
    expect(asFragment()).toMatchSnapshot();
});
