import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

// import { Loader } from '../../components';

const FaqArticles = loadable(() => import('./FaqArticles'));
const FaqCategory = loadable(() => import('./FaqCategory'));
const FaqFolders = loadable(() => import('./FaqFolders'));

const FAQ = () => (
    <Routes>
        <Route path=':name/:folderTitle/:articleTitle' element={<FaqArticles />} />
        <Route path=':name' element={<FaqFolders />} />
        <Route path='/' element={<FaqCategory />} />
        {/* <Route
            path=':name/:folderTitle/:articleTitle'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Landing><FaqArticles /></Landing>
                </Suspense>
            )}
        />
        <Route
            path=':name'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Landing><FaqFolders /></Landing>
                </Suspense>
            )}
        />
        <Route
            path='/'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <Landing><FaqCategory /></Landing>
                </Suspense>
            )}
        /> */}
    </Routes>
);

export default memo(FAQ);
