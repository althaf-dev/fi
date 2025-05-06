import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

/**
 * @param ref
 * @param handler
 * @param listenerType
 * attach a listener to the document
 * when click on dom it run the listener function
 */
const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void,
    listenerType: string,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const element = ref?.current;
            if (element && !element.contains(event?.target as Node)) {
                handler(event);
            }
        };

        (document as any).addEventListener(listenerType, listener);

        return () => {
            (document as any).removeEventListener(listenerType, listener);
        };
    }, [ref, handler, listenerType]);
};

export default useClickOutside;
