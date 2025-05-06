import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

// const Features = lazy(() => import('../Features'));
const SingleFeaturePage = loadable(() => import('./SingleFeaturePage'));
const NotFound = loadable(() => import('../404Page'));

const FeaturesPages = () => (
    <Routes>
        <Route path=':name' element={<SingleFeaturePage />} />
        {/* <Route
            path=':name'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <SingleFeaturePage />
                </Suspense>
            )}
        /> */}
        {/* <Route
            path='/'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Features />
                </Suspense>
            )}
        /> */}
        <Route path='*' element={<NotFound />} />
    </Routes>
);

export default memo(FeaturesPages);
