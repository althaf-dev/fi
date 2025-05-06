export const getRefLink = (pathname: string) => {
    // Check if the URL is external (starts with 'http' or 'https')
    const isExternal = /^https?:\/\//.test(pathname);

    // If it's an external URL, return it as is
    if (isExternal) {
        return pathname;
    }

    // Otherwise, construct the internal URL based on the host
    const newHost = window.location.hostname === 'localhost' ? 'http://localhost:8080' : window.location.origin;
    return newHost + pathname;
};