/**
 * @file This custom hook is created so that we can simply intialize with respective container onChangeSalaryAccountSignUpValue action and
 *  with the return function of the hook we can pass the id and value then it will change the data in reducer.
 */

import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';

type PayloadItem = { [key: string]: any };

type OnChangeValueCb = (payload: PayloadItem) => AnyAction;

const useOnChangeReducerValue = (onChangeValueCb: OnChangeValueCb) => {
    const dispatch = useDispatch();

    const onChangeReducerValue = (payload: PayloadItem) => {
        dispatch(onChangeValueCb(payload));
    };

    return onChangeReducerValue;
};

export default useOnChangeReducerValue;
