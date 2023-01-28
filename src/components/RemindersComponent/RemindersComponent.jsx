import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchReminders } from '@services/terreplein-v2';
import { isUserLoggedIn } from '@redux/slices/userDataSlice';
import { setRemindersDataAction } from '@redux/slices/remindersSlice';

import RemindersListComponent from './RemindersListComponent';
import RemindersCreateButtonComponent from './RemindersCreateButtonComponent';

const RemindersComponent = () => {
	const dispatch = useDispatch();
	const userLoggedIn = useSelector(isUserLoggedIn);

	useEffect(() => {
		if (userLoggedIn) {
			fetchReminders()
				.then((response) => response.json())
				.then((data) => dispatch(setRemindersDataAction(data)));
		}
	}, [userLoggedIn, dispatch]);

	return (
		<>
			<RemindersCreateButtonComponent />

			<RemindersListComponent />
		</>
	);
};
export default RemindersComponent;
