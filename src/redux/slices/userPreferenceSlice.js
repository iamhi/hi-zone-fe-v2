/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
	feedbackActivated: false,
	remindersActivated: false,
	cloudyMemoryActivated: false,
});

const userPreferenceSlice = createSlice({
	name: 'userPreference',
	initialState,
	reducers: {
		setUserPreferenceAction(state, action) {
			const {
				feedbackActivated,
				remindersActivated,
				cloudyMemoryActivated,
			} = action.payload;

			state.feedbackActivated = feedbackActivated;
			state.remindersActivated = remindersActivated;
			state.cloudyMemoryActivated = cloudyMemoryActivated;
		},

		setFeedbackActivatedAction(state, action) {
			state.feedbackActivated = action.payload;
		},

		setRemindersActivatedAction(state, action) {
			state.remindersActivated = action.payload;
		},

		setCloudyMemoryActivatedAction(state, action) {
			state.cloudyMemoryActivated = action.payload;
		},
	},
});

export const {
	setUserPreferenceAction,
	setRemindersActivatedAction,
	setFeedbackActivatedAction,
	setCloudyMemoryActivatedAction,
} = userPreferenceSlice.actions;

export const selectFeedbackActivated = (state) => state.userPreference.feedbackActivated;

export const selectRemindersActivated = (state) => state.userPreference.remindersActivated;

export const selectCloudyMemoryActivated = (state) => state.userPreference.cloudyMemoryActivated;

export const selectUserPreference = (state) => state.userPreference;

export default userPreferenceSlice.reducer;
