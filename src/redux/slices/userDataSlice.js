/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
	uuid: '',
	username: '',
	roles: [],
	email: '',
});

const userDataSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		userLoginAction(state, action) {
			state.uuid = action.payload.uuid;
			state.username = action.payload.username;
			state.roles = action.payload.roles;
			state.email = action.payload.email;
		},
		userLogoutAction(state) {
			state.uuid = initialState.uuid;
			state.username = initialState.username;
			state.roles = initialState.roles;
			state.email = initialState.email;
		},
	},
});

export const {
	userLoginAction,
	userLogoutAction,
} = userDataSlice.actions;

export const selectUserUuid = (state) => state.userData.uuid;

export const selectUsername = (state) => state.userData.username;

export const selectRoles = (state) => state.userData.roles;

export const selectEmail = (state) => state.userData.email;

export const selectIsAdmin = (state) => state.userData.roles.includes('ADMIN');

export const isUserLoggedIn = (state) => state.userData.uuid !== initialState.uuid;

export default userDataSlice.reducer;
