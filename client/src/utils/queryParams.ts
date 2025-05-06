export const queryParams = (data: string) => {
    if (!data) {
        return {};
    }

    const urlParams = new URLSearchParams(data);
    const entries = urlParams.entries();
    let params = {};

    let result = entries.next();

    while (!result.done) {
        const value = result.value;

        params = {
            ...params,
            [value[0]]: value[1]
        };

        result = entries.next();
    }

    return params;
};
