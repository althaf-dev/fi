/**
 * @file Toast
 * This file defines a Toast component that displays a message within styled containers.
 */

import React from 'react';

import { ToastContainer, ToastMessage } from './styles';

/**
 * Props for the Toast component.
 */
interface ToastProps {
    message: string; // The message to be displayed in the toast.
}

/**
 * Toast component that displays a message.
 *
 * This component renders a message inside a styled ToastContainer and ToastMessage components.
 * It is a functional component that takes in a `message` prop and displays it.
 *
 * @param {ToastProps} props - The props for the Toast component.
 * @returns {JSX.Element} The Toast component with the message displayed.
 */
const Toast = ({ message }: ToastProps) => (
    <ToastContainer>
        <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
);

export default Toast;
