/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import 'regenerator-runtime/runtime';

const mockUseLocationValue = {
    pathname: '/testroute',
    search: '',
    hash: '',
    state: null,
};

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockImplementation(() => mockUseLocationValue),
    useNavigate: () => mockedNavigate,
    // eslint-disable-next-line react/jsx-filename-extension
    Link: () => <div />,
}));
global.fetch = jest.fn(() => Promise.resolve());
global.scrollTo = jest.fn();

jest.mock('react-lottie');
jest.mock('../components/LottiePlayer/LottiePlayer', () => {
    const LottiePlayer = () => <div />;
    return {
        __esModule: true,
        default: LottiePlayer,
    };
});

jest.mock('../Api/', () => ({ callApi: jest.fn(() => Promise.resolve()) }));

jest.mock('react-intersection-observer', () => ({
    InView: () => <div />,
}));
