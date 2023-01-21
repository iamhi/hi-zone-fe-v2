import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import LoginFormComponent from '@components/LoginFormComponent';
import { refreshRequest, meRequest } from '@services/authentication-v2';
import { fetchUserPreference } from '@services/terreplein-v2';
import {
	isUserLoggedIn,
	userLoginAction,
	userLogoutAction,
	shouldRefresh,
	setRefreshAction,
} from '@redux/slices/userDataSlice';

const UserControlComponent = () => {
	const dispatch = useDispatch();
	const userLoggedIn = useSelector(isUserLoggedIn);
	const refreshTokens = useSelector(shouldRefresh);
	// Create a timer that checks if the access token is still valid
	// Or request new tokens every 15 mins
	useEffect(() => {
		if (refreshTokens) {
			dispatch(setRefreshAction(false));

			refreshRequest().then((_) => {
				meRequest()
					.then((response) => response.json())
					.then((data) => dispatch(userLoginAction(data)));
			}).catch((_) => dispatch(userLogoutAction()));
		}
	}, [dispatch, refreshTokens]);

	if (userLoggedIn) {
		fetchUserPreference();
		return null;
	}

	return (
		<PopupDisplayComponent>
			<LoginFormComponent />
		</PopupDisplayComponent>
	);
};

export default UserControlComponent;
