/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import { TnCHome } from '../index';

it('should render TnC component', () => {
    const { asFragment } = render(<TnCHome />);
    expect(asFragment()).toMatchSnapshot();
});
