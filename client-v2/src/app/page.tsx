/**
 * @file app landing page as per app router
 */

import React from 'react';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

export default async function Page() {
    return (
        <div style={{
            background: 'gray'
        }}
        >
            <AppHeader />
            <AppFooter />
        </div>
    );
}
