const DEFAULT_FEAUTRE_FEEDBACK = 'true';
const DEFAULT_FEAUTRE_REMINDERS = 'false';

const STORAGE_ITEM_FEATURE_FEEDBACK = 'hi-zone-settings-feature-feedback-activated';
const STORAGE_ITEM_FEATURE_REMINDERS = 'hi-zone-settings-feature-reminders-activated';

if (localStorage.getItem(STORAGE_ITEM_FEATURE_FEEDBACK) === null) {
	localStorage.setItem(STORAGE_ITEM_FEATURE_FEEDBACK, DEFAULT_FEAUTRE_FEEDBACK);
}

if (localStorage.getItem(STORAGE_ITEM_FEATURE_REMINDERS) === null) {
	localStorage.setItem(STORAGE_ITEM_FEATURE_REMINDERS, DEFAULT_FEAUTRE_REMINDERS);
}

export const isFeedbackActivated = () => localStorage.getItem(STORAGE_ITEM_FEATURE_FEEDBACK) === 'true';

export const setFeedbackActivated = (activated) => localStorage.setItem(STORAGE_ITEM_FEATURE_FEEDBACK, `${activated}`);

export const isRemindersActivated = () => localStorage.getItem(STORAGE_ITEM_FEATURE_FEEDBACK) === 'true';

export const setRemindersActivated = (activated) => localStorage.setItem(STORAGE_ITEM_FEATURE_REMINDERS, `${activated}`);
