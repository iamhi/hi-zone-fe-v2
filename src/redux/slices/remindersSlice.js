/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
	selected: '',
	data: [],
	modalOpened: false,
});

const remindersSlice = createSlice({
	name: 'reminders',
	initialState,
	reducers: {
		setRemindersDataAction(state, action) {
			state.data = action.payload;
		},
		setModalOpened(state, action) {
			state.modalOpened = action.payload;
		},
		addReminder(state, action) {
			state.data.push(action.payload);
		},
	},
});

export const {
	setRemindersDataAction,
	setModalOpened,
	addReminder,
} = remindersSlice.actions;

export const selectRemindersData = (state) => state.reminders.data;

export const selectModelOpened = (state) => state.reminders.modalOpened;

export default remindersSlice.reducer;
