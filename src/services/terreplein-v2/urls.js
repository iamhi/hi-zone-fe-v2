const PROTOCOL = 'HTTPS://';

const DOMAIN = 'api.ibeenhi.com';

const API = '/hi-zone-api';

const AUTHENTICATION_V2_SERVICE_URL = `${PROTOCOL}${DOMAIN}${API}/terreplein-v2`;

const USER_PREFERENCE_URL = `${AUTHENTICATION_V2_SERVICE_URL}/userPreference`;

const FEEDBACK_URL = `${AUTHENTICATION_V2_SERVICE_URL}/feedback`;

const REMINDERS_URL = `${AUTHENTICATION_V2_SERVICE_URL}/reminder`;

export const getSetUserPreferenceUrl = () => USER_PREFERENCE_URL;

export const getFetchUserPreferenceUrl = () => USER_PREFERENCE_URL;

export const getFeedbackUrl = () => FEEDBACK_URL;

export const getRemindersUrl = () => REMINDERS_URL;
