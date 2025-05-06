/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { RenderOptions, RenderResult, render } from '@testing-library/react';
import Theme from '../Themes/Theme';
import { RootState } from '../store/reducers';
import getStore from './store';

type CustomOptions = RenderOptions & DeepPartial<RootState>;
type AllTheProvidersProps = {
    // eslint-disable-next-line react/require-default-props
    children?: ReactElement;
};
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

const customRender = (ui: ReactElement, options?: CustomOptions): RenderResult => {
    const store = getStore((options as DeepPartial<RootState>));
    const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }: AllTheProvidersProps) => (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                {children}
            </ThemeProvider>
        </Provider>
    );
    return render(ui, { wrapper: AllTheProviders, ...(options as RenderOptions) });
};

export { customRender as render };
