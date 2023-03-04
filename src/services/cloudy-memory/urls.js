const PROTOCOL = 'HTTPS://';

const DOMAIN = 'api.ibeenhi.com';

const API = '/hi-zone-api';

const CLOUDY_MEMORY_SERVICE_URL = `${PROTOCOL}${DOMAIN}${API}/cloudy-memory`;

const PATHS_URL = `${CLOUDY_MEMORY_SERVICE_URL}/paths`;

export const getFetchPathsUrl = () => PATHS_URL;

export const getFetchPathDataUrl = (path) => `${CLOUDY_MEMORY_SERVICE_URL}?path=${path}`;

export const getPostPathDataUrl = (path) => `${CLOUDY_MEMORY_SERVICE_URL}?path=${path}`;

export const getDeletePathDataUrl = (path) => `${CLOUDY_MEMORY_SERVICE_URL}?path=${path}`;
