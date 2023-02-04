/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
	selected: '',
	data: [],
	createModalOpened: false,
	viewDetailsModalOpened: false,
});

const remindersSlice = createSlice({
	name: 'reminders',
	initialState,
	reducers: {
		setRemindersDataAction(state, action) {
			state.data = action.payload;
		},

		setModalCreateOpenedAction(state, action) {
			state.createModalOpened = action.payload;
		},

		addReminderAction(state, action) {
			state.data.unshift(action.payload);
		},

		setModalViewDetailsOpenedAction(state, action) {
			state.viewDetailsModalOpened = action.payload;
		},

		completeReminderAction(state, action) {
			state.data = state.data.map((reminder) => (reminder.uuid === action.payload
				? {
					...reminder,
					status: 'done',
				}
				: reminder));
		},
	},
});

export const {
	setRemindersDataAction,
	setModalCreateOpenedAction,
	addReminderAction,
	setModalViewDetailsOpenedAction,
	completeReminderAction,
} = remindersSlice.actions;

export const selectRemindersData = (state) => state.reminders.data;

export const selectCreateModalOpened = (state) => state.reminders.createModalOpened;

export const selectViewReminderDetails = (state) =>
	state.reminders.data.find((reminder) =>
		reminder.uuid === state.reminders.viewDetailsModalOpened) || {};

export default remindersSlice.reducer;
