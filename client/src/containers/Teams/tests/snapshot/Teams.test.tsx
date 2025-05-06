/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../../testing/test-utils';
import TeamsHome from '../../index';

it('should render Teams component', () => {
    const { asFragment } = render(<TeamsHome />);
    expect(asFragment()).toMatchSnapshot();
});
