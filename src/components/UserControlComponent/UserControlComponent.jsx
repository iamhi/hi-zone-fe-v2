import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import LoginFormComponent from '@components/LoginFormComponent';
import { isUserLoggedIn, userLoginAction, userLogoutAction } from '@redux/slices/userDataSlice';
import { refreshTokensCall, meTokenCall } from '@services/authentication-v2';

const UserControlComponent = () => {
	const dispatch = useDispatch();
	const userLoggedIn = useSelector(isUserLoggedIn);
	// Create a timer that checks if the access token is still valid
	// Or request new tokens every 15 mins
	useEffect(() => {
		refreshTokensCall().then((_) => {
			meTokenCall()
				.then((response) => response.json())
				.then((data) => dispatch(userLoginAction(data)));
		}).catch((_) => dispatch(userLogoutAction()));
	}, []);

	if (userLoggedIn) {
		return null;
	}

	return (
		<PopupDisplayComponent>
			<LoginFormComponent />
		</PopupDisplayComponent>
	);
};

export default UserControlComponent;
