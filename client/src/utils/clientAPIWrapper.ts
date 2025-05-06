import 'whatwg-fetch';

class ClientAPIWrapper {
    headers: {}

    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
        };
    }

    // not getting used as of now
    setHeaders(key, value) {
        this.headers = {
            ...this.headers,
            [key]: value,
        };
    }

    getHeaders() {
        return this.headers;
    }

    static isUnauthorized(response) {
        return response.status === 401;
    }

    static async checkStatusAndExtractData(response) {
        // successful responses
        if (response.status >= 200 && response.status < 300) {
            if (response.status === 204 || response.status === 205) {
                return null;
            }

            return response.json();
        }

        // 504 Gateway Timeout Error
        if (response.status === 504) {
            // exposes an error event with two params name & message
            throw new Error('Gateway Timeout Error, please try again!');
        }

        // client & server errors
        const error = await response.json();

        // TODO: need to move redirect logic from app saga
        /*
        if (ClientAPIWrapper.isUnauthorized(response)) {
            window.location.replace(error.loginUrl);
        }
        */

        throw error;
    }

    executeCall(method, url, body, headers) {
        const csrfTokenMetaTag = document?.querySelector('meta[name="csrf-token"]');
        let csrfToken;

        if (csrfTokenMetaTag) {
            csrfToken = csrfTokenMetaTag?.getAttribute('content');
        }

        const options = {
            method,
            headers: { ...this.getHeaders(), ...headers },
            body: JSON.stringify(body),
        };

        if (csrfToken) {
            options.headers['csrf-token'] = csrfToken;
        }

        return fetch(url, options)
            .then(ClientAPIWrapper.checkStatusAndExtractData);
    }

    get(url, body = undefined, headers = null) {
        return this.executeCall('GET', url, body, headers);
    }

    post(url, body = {}, headers = {}) {
        return this.executeCall('POST', url, body, headers);
    }

    put(url, body = {}, headers = {}) {
        return this.executeCall('PUT', url, body, headers);
    }

    delete(url, body = {}, headers = {}) {
        return this.executeCall('DELETE', url, body, headers);
    }
}

const clientAPIWrapperInstance = new ClientAPIWrapper();
Object.freeze(clientAPIWrapperInstance);

export default clientAPIWrapperInstance;
