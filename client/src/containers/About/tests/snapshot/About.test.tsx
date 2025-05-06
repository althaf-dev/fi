/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../../testing/test-utils';
import AboutHome from '../../index';

it('should render About component', () => {
    const { asFragment } = render(<AboutHome />);
    expect(asFragment()).toMatchSnapshot();
});
