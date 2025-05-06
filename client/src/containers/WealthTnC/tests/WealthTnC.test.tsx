/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import WealthTnCHome from '../index';

it('should render WealthTnC component', () => {
    const { asFragment } = render(<WealthTnCHome />);
    expect(asFragment()).toMatchSnapshot();
});
