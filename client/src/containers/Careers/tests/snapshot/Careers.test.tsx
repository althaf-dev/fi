/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../../testing/test-utils';
import CareersHome from '../../index';

it('Should render Careers component', () => {
    const { asFragment } = render(<CareersHome />);
    expect(asFragment()).toMatchSnapshot();
});
