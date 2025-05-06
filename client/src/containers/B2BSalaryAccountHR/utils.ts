/**
 * @file Util functions for B2B Salary account
 */

import { REGEX_BLOCK_GMAIL, REGEX_BLOCK_HOTMAIL, REGEX_BLOCK_REDIF, REGEX_BLOCK_YAHOO } from '../../utils/RegexPattern';

import { SALARY_ACCOUNT_FORM_ID, PAGE_TYPE, EVENT_MAP } from './constant';
import { trackGTMEvent } from '../../events';

// redirect to salary account form
export const redirectToSalaryForm = () => {
    document.getElementById(SALARY_ACCOUNT_FORM_ID).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
};

// salary account form validation error messages
export const getErrorMessage = (name: string, value: string) => {
    switch (name) {
        case 'number': {
            if (value.length >= 1 && value.length !== 10) {
                return 'Please enter 10 digits';
            }
            break;
        }
        case 'workEmailId': {
            if (value.length >= 1
             && (
                 !REGEX_BLOCK_GMAIL.test(value)
                || !REGEX_BLOCK_YAHOO.test(value)
                || !REGEX_BLOCK_REDIF.test(value)
                || !REGEX_BLOCK_HOTMAIL.test(value)
             )) {
                return 'Looks like a personal id. Please enter your work email Id';
            }
            break;
        }
        default:
            return '';
    }

    return '';
};

export const fireTrackingEvents = (type: string, eventName: string, eventProps: any) => {
    try {
        trackGTMEvent(EVENT_MAP[PAGE_TYPE[type].label][eventName], eventProps);
    } catch (err: any) {
        console.error(err);
    }
};
