import React, { useEffect, useState } from 'react';
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
import {
	setUserPreferenceAction,
} from '@redux/slices/userPreferenceSlice';

const UserControlComponent = () => {
	const dispatch = useDispatch();
	const userLoggedIn = useSelector(isUserLoggedIn);
	const refreshTokens = useSelector(shouldRefresh);
	const [initialLoginAttempt, setInitialLoginAttempt] = useState(false);

	// Create a timer that checks if the access token is still valid
	// Or request new tokens every 15 mins

	useEffect(() => {
		if (refreshTokens) {
			dispatch(setRefreshAction(false));

			refreshRequest().then((_) => {
				meRequest()
					.then((response) => response.json())
					.then((data) => dispatch(userLoginAction(data)));
			}).catch((_) => dispatch(userLogoutAction()))
				.finally((__) => setInitialLoginAttempt(true));
		}
	}, [dispatch, refreshTokens]);

	useEffect(() => {
		if (userLoggedIn) {
			fetchUserPreference()
				.then((response) => response.json())
				.then((data) => dispatch(setUserPreferenceAction(data)));
		}
	}, [userLoggedIn, dispatch]);

	if (userLoggedIn || !initialLoginAttempt) {
		return null;
	}

	return (
		<PopupDisplayComponent>
			<LoginFormComponent />
		</PopupDisplayComponent>
	);
};

export default UserControlComponent;
