/* eslint-disable no-undef, import/no-extraneous-dependencies */
import React from 'react';
import { expect, jest } from '@jest/globals';

import { useLocation } from 'react-router-dom';
import { render } from '../../../testing/test-utils';
import HomePage from '../index';

describe('HomePage Component', () => {
    it('should render homePage component', () => {
        (useLocation as jest.Mock).mockImplementation(() => ({
            pathname: '/',
        }));
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render openSavingsAccountOnline component', () => {
        (useLocation as jest.Mock).mockImplementation(() => ({
            pathname: '/open-savings-account-online',
        }));
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render digitalBankingInIndia component', () => {
        (useLocation as jest.Mock).mockImplementation(() => ({
            pathname: '/digital-banking-in-india',
        }));
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render bestNeobankInIndia component', () => {
        (useLocation as jest.Mock).mockImplementation(() => ({
            pathname: '/best-neobank-in-india',
        }));
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
