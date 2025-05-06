import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';

const EmailVerification = loadable(() => import('./EmailVerification'));

const CustomerAuth = () => (
    <Routes>
        <Route path='email-verification' element={<EmailVerification />} />
        <Route element={<Navigate to='/' />} />
    </Routes>
);

export default CustomerAuth;
