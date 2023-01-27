/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const SCREEN = Object.freeze({
	INITIAL: 'initial',
	LISTING: 'listing',
	CREATING: 'creating',
	VIEWING: 'viewing',
	EDITING: 'editing',
});

const initialState = Object.freeze({
	selected: '',
	data: [],
	screen: SCREEN.INITIAL,
});

const remindersSlice = createSlice({
	name: 'reminders',
	initialState,
	reducers: {
		setRemindersDataAction(state, action) {
			state.data = action.payload;
		},
		setRemindersScreen(state, action) {
			state.screen = action.payload;
		},
	},
});

export const {
	setRemindersDataAction,
} = remindersSlice.actions;

export const selectRemindersData = (state) => state.reminders.data;

export default remindersSlice.reducer;
