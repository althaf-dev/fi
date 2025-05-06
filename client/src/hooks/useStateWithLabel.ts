import { useDebugValue, useState } from 'react';

/*
    This custom hook is created so that we can easily debug differentiate state variables in react dev tools.
    By default, all useState() hooks show the same variable name as 'State'. Hence it is difficult to debug if we are looking
    for a particular state variable. Using this hook, we can pass a variable name which makes it easier for debugging.
    Reference: https://stackoverflow.com/a/58579953/12760031
*/
const useStateWithLabel = (initialValue, variableName) => {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${variableName}: ${value}`);
    return [value, setValue];
};

export default useStateWithLabel;
