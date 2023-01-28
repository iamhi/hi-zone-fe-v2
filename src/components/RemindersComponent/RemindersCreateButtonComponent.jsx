import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import ButtonComponent from '@common-components/ButtonComponent';
import {
	selectCreateModalOpened,
	setModalCreateOpenedAction,
} from '@redux/slices/remindersSlice';

import RemindersCreateFormComponent from './RemindersCreateFormComponent';

const RemindersCreateButtonComponent = () => {
	const dispatch = useDispatch();
	const modelOpened = useSelector(selectCreateModalOpened);

	const closePopup = () => {
		dispatch(setModalCreateOpenedAction(false));
	};

	const onClickAction = () => {
		dispatch(setModalCreateOpenedAction(true));
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
