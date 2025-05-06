/**
 * @file This file contains a common utilly functions that are used across all the places
 */

/**
 * This function is responsible for getting the middle element from the list of elements.
 * @param {HTMLElement} parentElement - The HTML parent element.
 * @returns {HTMLDivElement} Middle HTML element.
 */

export const getMiddleElementInList = (parentElement: HTMLElement): HTMLDivElement => {
    const { children } = parentElement;
    return children[Math.floor((children?.length - 1) / 2)] as HTMLDivElement;
};

/**
 * This function is responsible for getting the default middle scroll left offset from the list of elements.
 * @param {HTMLElement} parentElement - The HTML parent element.
 * @returns {number} Default scroll left offset.
 */

export const getDefaultMiddleScrollLeftOffSet = (parentElement: HTMLElement) => {
    const middleElement = getMiddleElementInList(parentElement);
    // if total List width is less than parentElement width then scroll left offset not needed.
    const isFitContainer = (middleElement.offsetWidth * parentElement.children.length) < parentElement.offsetWidth;
    let defaultScrollLeft = 0;

    if (!isFitContainer) {
        defaultScrollLeft = (middleElement.offsetLeft - (middleElement.offsetWidth / 2));
    }

    return defaultScrollLeft;
};
