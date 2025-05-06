/**
 * Contains the map of endpoints < -- > service name for logging status codes at service name level in prometheus.
 */

const FAQ_ROUTE = '/api/v1/faq';
const FAQ_ROUTE_V2 = '/api/v2/faq';
const WAITLIST_ROUTE = '/api/v1/waitlist';
const INSIGHTS_ROUTE = '/api/v1/insights';
const AUTH_ROUTE = '/api/v1/auth';
const UTILS_ROUTE = '/api/v1/utils';
const AUTH_FACTOR_ROUTE = '/api/v1/auth-factor';
const COMMUNITY_ROUTE = '/api/v1/community';
const EXTERNAL_COMMUNITY_ROUTE = '/external-api/v1/community';
const META_INFO_ROUTE = '/api/v1/meta-info';
const CONSUL_ROUTE = '/api/v1/consul';
const GOOGLE_SHEET_ROUTE = '/api/v1/google-sheet';
const CX_SUPPORT_ROUTE = '/api/v1/cx-support';
const STORIES_ROUTE = '/stories';

// Add a new object with name and routes if not already present.
const services = [
    { name: 'faq', mainRoute: FAQ_ROUTE },
    { name: 'faq', mainRoute: FAQ_ROUTE_V2 },
    { name: 'waitlist', mainRoute: WAITLIST_ROUTE },
    { name: 'insights', mainRoute: INSIGHTS_ROUTE },
    { name: 'auth', mainRoute: AUTH_ROUTE },
    { name: 'utils', mainRoute: UTILS_ROUTE },
    { name: 'auth-factor', mainRoute: AUTH_FACTOR_ROUTE },
    { name: 'community', mainRoute: COMMUNITY_ROUTE },
    { name: 'external-community', mainRoute: EXTERNAL_COMMUNITY_ROUTE },
    { name: 'meta-info', mainRoute: META_INFO_ROUTE },
    { name: 'consul', mainRoute: CONSUL_ROUTE },
    { name: 'google-sheet', mainRoute: GOOGLE_SHEET_ROUTE },
    { name: 'cx-support', mainRoute: CX_SUPPORT_ROUTE },
    { name: 'stories', mainRoute: STORIES_ROUTE },
];

const getServiceName = (endpoint) => {
    const reqService = services.find((service) => endpoint.includes(service.mainRoute));

    if (reqService) return reqService.name;

    return 'new-service';
};

module.exports = {
    getServiceName,
};
