import {
	getCall,
	postCall,
	putCall,
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
	cloudyMemoryActivated,
}) => postCall(getSetUserPreferenceUrl(), {
	feedbackActivated,
	remindersActivated,
	cloudyMemoryActivated,
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

export const completeReminder = (uuid, {
	completeType,
	comment,
}) => putCall(`${getRemindersUrl()}/${uuid}/complete`, {
	uuid,
	completeType,
	comment,
});
