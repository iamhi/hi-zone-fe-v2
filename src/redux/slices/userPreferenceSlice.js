/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
	feedbackActivated: false,
	remindersActivated: false,
});

const userPreferenceSlice = createSlice({
	name: 'userPreference',
	initialState,
	reducers: {
		setUserPreferenceAction(state, action) {
			const {
				feedbackActivated,
				remindersActivated,
			} = action.payload;

			state.feedbackActivated = feedbackActivated;
			state.remindersActivated = remindersActivated;
		},

		setFeedbackActivatedAction(state, action) {
			state.feedbackActivated = action.payload;
		},

		setRemindersActivatedAction(state, action) {
			state.remindersActivated = action.payload;
		},
	},
});

export const {
	setUserPreferenceAction,
	setRemindersActivatedAction,
	setFeedbackActivatedAction,
} = userPreferenceSlice.actions;

export const selectFeedbackActivated = (state) => state.userPreference.feedbackActivated;

export const selectRemindersActivated = (state) => state.userPreference.remindersActivated;

export const selectUserPreference = (state) => state.userPreference;

export default userPreferenceSlice.reducer;
