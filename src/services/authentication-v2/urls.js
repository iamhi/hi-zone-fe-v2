const PROTOCOL = 'HTTPS://';

const DOMAIN = 'api.ibeenhi.com';

const API = '/hi-zone-api';

const AUTHENTICATION_V2_SERVICE_URL = `${PROTOCOL}${DOMAIN}${API}/authentication-v2`;

const TOKEN_ME_URL = `${AUTHENTICATION_V2_SERVICE_URL}/token/me`;
const TOKEN_REFRESH_URL = `${AUTHENTICATION_V2_SERVICE_URL}/token/refresh`;
const TOKEN_INVALIDATE_URL = `${AUTHENTICATION_V2_SERVICE_URL}/token/invalidate`;

const USER_LOGIN_URL = `${AUTHENTICATION_V2_SERVICE_URL}/user/login`;
const USER_ROLE_URL = `${AUTHENTICATION_V2_SERVICE_URL}/user/role`;
const USER_REGISTER_URL = `${AUTHENTICATION_V2_SERVICE_URL}/user/register`;

export const getMeUrl = () => TOKEN_ME_URL;
export const getRefreshUrl = () => TOKEN_REFRESH_URL;
export const getInvalidateUrl = () => TOKEN_INVALIDATE_URL;
export const getLoginUrl = () => USER_LOGIN_URL;
export const getRoleUrl = () => USER_ROLE_URL;
export const getRegisterUrl = () => USER_REGISTER_URL;
