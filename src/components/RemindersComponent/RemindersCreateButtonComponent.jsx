import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import ButtonComponent from '@common-components/ButtonComponent';
import {
	selectModelOpened,
	setModalOpened,
} from '@redux/slices/remindersSlice';

import RemindersCreateFormComponent from './RemindersCreateFormComponent';

const RemindersCreateButtonComponent = () => {
	const dispatch = useDispatch();
	const modelOpened = useSelector(selectModelOpened);

	const closePopup = () => {
		dispatch(setModalOpened(false));
	};

	const onClickAction = () => {
		dispatch(setModalOpened(true));
	};

	return (
		<>
			<ButtonComponent onClick={onClickAction} customCss="reminders-create-button-component">
				Create reminder
			</ButtonComponent>

			{modelOpened
				&& (
					<PopupDisplayComponent backgroundClick={closePopup}>
						<RemindersCreateFormComponent />
					</PopupDisplayComponent>
				)}
		</>
	);
};

export default RemindersCreateButtonComponent;
