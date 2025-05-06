// /* eslint-disable @typescript-eslint/no-unused-vars */
// /**
//  * @file FinancialCharts: Index page for different types of financial charts
//  */
// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';

// import Loader from '../../components/Loader';
// import { useIsSSR } from '../../hooks';
// import { ClientPlatform } from '@/interfaces/mobile';
// import { queryParams } from '../../utils/queryParams';

// import NotFound from '../404Page';

// import FinLineChart from './LineChart';
// import FinMultiChart from './MultiChart';

// interface QueryParams {
//     clientPlatform?: ClientPlatform;
// }

// const FinancialCharts = () => {
//     const isSSR = useIsSSR();

//     const location = useLocation();

//     const params: QueryParams = queryParams(location.search);
//     const { clientPlatform } = params;

//     if (isSSR) return <Loader isLoading />;

//     return (
//         <Routes>
//             <Route path='/line-chart' element={<FinLineChart clientPlatform={clientPlatform} />} />
//             <Route path='/multi-chart' element={<FinMultiChart clientPlatform={clientPlatform} colors={{}} />} />
//             <Route path='*' element={<NotFound />} />
//         </Routes>
//     );
// };

// export default FinancialCharts;
