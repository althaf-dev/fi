/* eslint-disable import/prefer-default-export */

import { HEADER_NAVBAR_HEIGHT } from './Constants';

/**
 * return true if page scroll to the bottom of the document
 * * @returns {boolean}
 */
export const scrollEndOfPage = () => {
    if ((globalThis.window?.innerHeight + globalThis.window?.scrollY) >= document.body.offsetHeight) {
        return true;
    }

    return false;
};

/**
 * return true if page scroll to the top of the document
 * @returns {boolean}
 */
export const scrollTopOfPage = () => {
    if (globalThis.window?.scrollY === 0) {
        return true;
    }

    return false;
};

/**
 * Scrolls to a particular section of a page if it has hash routing in the URL
 * Has an offset of 101px from the top of the container to accommodate the sticky header nav bar at the top
 * @param elementId The ID of the element in the DOM to which the scroll needs to happen
 * @returns void
 */
export const scrollIntoSection = (elementId: string): void => {
    if (!elementId) return;

    const element = document.getElementById(elementId);

    if (!element) return;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    // scroll 101px above the container so that the top navbar does not hide the text of the container
    const offsetPosition = elementPosition - HEADER_NAVBAR_HEIGHT;

    globalThis.window?.scrollTo({
        behavior: 'smooth',
        top: offsetPosition,
    });
};
