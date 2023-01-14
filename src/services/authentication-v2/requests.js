import {
	postCall,
} from '@services/shared/calls';

import {
	getLoginUrl,
	getMeUrl,
	getRefreshUrl,
} from './urls';

export const loginRequest = ({ username, password }) => postCall(getLoginUrl(), {
	username,
	password,
});

export const meRequest = () => postCall(getMeUrl());

export const refreshRequest = () => postCall(getRefreshUrl());
