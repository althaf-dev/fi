import React from 'react';

const useRunAfterUpdate = () => {
    const afterPaintRef = React.useRef(null);
    React.useLayoutEffect(() => {
        if (afterPaintRef.current) {
            afterPaintRef.current();
            afterPaintRef.current = null;
        }
    });
    const runAfterUpdate = (fn) => (afterPaintRef.current = fn);
    return runAfterUpdate;
};

export default useRunAfterUpdate;
