type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

const HEADERS = {
    'Content-Type': 'application/json',
};

const getParams = (params: any) => {
    if (!!params && typeof params === 'object' && params !== null) {
        return (
            '?' +
            Object.keys(params)
                .map(
                    (k) =>
                        encodeURIComponent(k) +
                        '=' +
                        encodeURIComponent(params[k])
                )
                .join('&')
        );
    } else {
        return '';
    }
};

const callApi = (
    url: string,
    method: METHOD,
    headers = null,
    body = null,
    queryParams = null,
    externalCall = false,
) => {
    const newUrl = queryParams ? `${url}${getParams(queryParams)}` : `${url}`;
    // added ? operator to handle the SSR scenario where document is not defined
    const csrfToken = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const options:any = {
        method,
        headers: {},
    };

    if (!externalCall) {
        options.headers = {
            ...HEADERS,
            'csrf-token': csrfToken,
        };
    }

    if (headers) {
        options.headers = {
            ...options.headers,
            ...headers,
        };
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(newUrl, options).then(
        (response) => response.json(),
        (err) => console.error('err', err),
    );
};

export default callApi;
