/**
 * @file B2BSalaryAccount Page Routes file
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const NotFound = loadable(() => import('../404Page'));

const CognizantSalaryAccount = loadable(() => import('./CognizantSalaryAccount'));

const B2BSalaryAccount = () => (
    <Routes>
        <Route path='cognizant' element={<CognizantSalaryAccount />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
);

export default B2BSalaryAccount;
