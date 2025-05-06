'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Colors from './Colors';
import { Device } from './Device';
import Typography from './Typography';

export type ThemeType = {
    textAlign: any;
    fontFamily: any;
    color: typeof Colors;
    device: any;
    typography: any;
};

export const Theme: ThemeType = {
    textAlign: ['left', 'center', 'right'],
    fontFamily: ['"Inter", sans-serif;', '"Gilroy", sans-serif;'],
    color: Colors,
    device: Device,
    typography: Typography,
};

// export default Theme;

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    );
}
