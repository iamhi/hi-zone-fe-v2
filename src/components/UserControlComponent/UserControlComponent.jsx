import React from 'react';
import { useSelector } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import LoginFormComponent from '@components/LoginFormComponent';
import { isUserLoggedIn } from '@redux/slices/userDataSlice';

const UserControlComponent = () => {
	const userLoggedIn = useSelector(isUserLoggedIn);

	// Attempt to get new token from refresh
	// Attempt to login with access token
	// Create a timer that checks if the access token is still valid
	// Or request new tokens every 15 mins
	
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
