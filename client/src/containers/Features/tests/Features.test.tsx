/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import FeaturesHome from '../index';

it('should render Features component', () => {
    const { asFragment } = render(<FeaturesHome />);
    expect(asFragment()).toMatchSnapshot();
});
