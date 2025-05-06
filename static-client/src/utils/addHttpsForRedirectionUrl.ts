function formatUrl(url: string) {
    if (!/^https?:\/\//i.test(url)) {
        return `https://${url}`;
    }
    return url;
}
 
export default formatUrl
