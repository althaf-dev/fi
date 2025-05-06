'use client';

import dynamic from 'next/dynamic';
import Button from './Button';

export default Button;

export const DynamicButton = dynamic(() => import('./DynamicButton'), { ssr: true });
