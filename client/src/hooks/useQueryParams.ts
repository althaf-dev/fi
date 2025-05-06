import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * This hook returns the query params of the current url as [key,value] pairs.
 */
const useQueryParams = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQueryParams;
