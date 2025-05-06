/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import SecurityHome from '../index';

it('should render Security component', () => {
    const { asFragment } = render(<SecurityHome />);
    expect(asFragment()).toMatchSnapshot();
});
