const LANDING_PAGE_STORAGE_ITEM = 'hi-zone-user-control-landing-page';

export const setLandingPage = (pageName) => localStorage.setItem(LANDING_PAGE_STORAGE_ITEM, pageName);

export const getLandingPage = () => localStorage.getItem(LANDING_PAGE_STORAGE_ITEM) || '';
