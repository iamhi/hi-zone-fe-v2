import {
	getCall,
	postCall,
} from '@services/shared/calls';

import {
	getSetUserPreferenceUrl,
	getFetchUserPreferenceUrl,
	getFeedbackUrl,
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
