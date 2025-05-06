/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect } from '@jest/globals';

import { render } from '../../../testing/test-utils';
import EpifiTnC from '../index';

it('should render EpifiTnC component', () => {
    const { asFragment } = render(<EpifiTnC />);
    expect(asFragment()).toMatchSnapshot();
});
