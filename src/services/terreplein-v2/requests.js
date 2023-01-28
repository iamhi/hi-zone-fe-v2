import {
	getCall,
	postCall,
} from '@services/shared/calls';

import {
	getSetUserPreferenceUrl,
	getFetchUserPreferenceUrl,
	getFeedbackUrl,
	getRemindersUrl,
} from './urls';

export const setUserPreference = ({
	feedbackActivated,
	remindersActivated,
}) => postCall(getSetUserPreferenceUrl(), {
	feedbackActivated,
	remindersActivated,
});

export const fetchUserPreference = () => getCall(getFetchUserPreferenceUrl());

export const sendFeedback = ({
	content,
}) => postCall(getFeedbackUrl(), {
	content,
});

export const fetchReminders = () => getCall(getRemindersUrl());

export const createReminder = ({
	content,
	type,
	time,
	location,
}) => postCall(getRemindersUrl(), {
	content,
	type,
	time,
	location,
});
