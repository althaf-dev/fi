/**
 * @file useCreateMultipleRefs - This hook creates an array of refs with a specified length
 */
import { useMemo, useRef, createRef } from 'react';

const useCreateMultipleRefs = (numberOfRefs: number) => {
    // Create a mutable ref to store the array of refs
    const ref = useRef<any>([]);

    useMemo(() => {
        // Create an array with numberOfRefs items, filled with null values
        const numberOfRefsArray = new Array(numberOfRefs).fill(null);

        // Create a new array of refs using createRef method
        ref.current = numberOfRefsArray.map(() => createRef());
    }, [numberOfRefs]);

    return ref.current;
};

export default useCreateMultipleRefs;
