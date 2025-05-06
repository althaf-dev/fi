/* eslint-disable import/prefer-default-export */
/**
 * @param callback
 * @param wait
 */

export const debounce = (callback: (...args: any[])=> void, wait: number) => {
    let timer: any;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, wait);
    };
};
