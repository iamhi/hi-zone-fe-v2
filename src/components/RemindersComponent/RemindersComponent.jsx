import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import { fetchReminders } from '@services/terreplein-v2';
import { isUserLoggedIn } from '@redux/slices/userDataSlice';
import {
	setRemindersDataAction,
	selectModelOpened,
	setModalOpened,
} from '@redux/slices/remindersSlice';

import RemindersListComponent from './RemindersListComponent';
import RemindersCreateButtonComponent from './RemindersCreateButtonComponent';
import RemindersFormComponent from './RemindersFormComponent';

const RemindersComponent = () => {
	const dispatch = useDispatch();
	const userLoggedIn = useSelector(isUserLoggedIn);
	const modelOpened = useSelector(selectModelOpened);

	useEffect(() => {
		if (userLoggedIn) {
			fetchReminders()
				.then((response) => response.json())
				.then((data) => dispatch(setRemindersDataAction(data)));
		}
	}, [userLoggedIn, dispatch]);

	const closePopup = () => {
		dispatch(setModalOpened(false));
	};

	return (
		<>
			<RemindersCreateButtonComponent />
			<RemindersListComponent />
			{modelOpened
				&& (
					<PopupDisplayComponent backgroundClick={closePopup}>
						<RemindersFormComponent />
					</PopupDisplayComponent>
				)}
		</>
	);
};
export default RemindersComponent;
