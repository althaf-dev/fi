/* eslint-disable no-undef */
describe('render the home page', () => {
    it('renders correctly', () => {
        cy.visit('http://localhost:8080');
        cy.percySnapshot();
    });
});

/*
import React from 'react';
import { mount } from '@cypress/react';
import AboutHome from '../../src/containers/About/Landing';
import { render } from '../../src/testing/test-utils';

describe('render the home page', () => {
    it('renders correctly', () => {
        mount(render(<AboutHome />));
        cy.percySnapshot();
    });
});
*/
