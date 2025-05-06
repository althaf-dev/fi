import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';

// import { Loader } from '../../components';
const IssueResolution = loadable(() => import('./IssueResolution'));

const CxSupport = () => (
    <Routes>
        <Route path='issue-resolution' element={<IssueResolution />} />
        {/* <Route
            path='issue-resolution'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <IssueResolution />
                </Suspense>
            )}
        /> */}
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
);

export default memo(CxSupport);
