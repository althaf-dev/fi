import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

// import { Loader } from '../../components';

const CalculatorList = loadable(() => import('./CalculatorList'));
const SingleCalculator = loadable(() => import('./SingleCalculator'));

const Calculator = () => (
    <Routes>
        <Route path=':name' element={<SingleCalculator />} />
        <Route path='/' element={<CalculatorList />} />
        {/* this is not getting used due to SSR restrictions
        <Route
            path=':name'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <SingleCalculator />
                </Suspense>
            )}
        />
        <Route
            path='/'
            element={(
                <Suspense fallback={<Loader isLoading />}>
                    <CalculatorList />
                </Suspense>
            )}
        />
        */}
    </Routes>
);

export default memo(Calculator);
