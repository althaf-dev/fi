import React from 'react';

const useRunAfterUpdate = () => {
    const afterPaintRef = React.useRef<any>(null);
    React.useLayoutEffect(() => {
        if (afterPaintRef.current) {
            afterPaintRef.current();
            afterPaintRef.current = null;
        }
    });
    const runAfterUpdate = (fn: any) => { afterPaintRef.current = fn; };
    return runAfterUpdate;
};

export default useRunAfterUpdate;
