import React from 'react';
import { useDispatch } from 'react-redux';

import ButtonComponent from '@common-components/ButtonComponent';
import { setModalOpened } from '@redux/slices/remindersSlice';

const RemindersCreateButtonComponent = () => {
	const dispatch = useDispatch();

	const onClickAction = () => {
		dispatch(setModalOpened(true));
	};

	return (
		<ButtonComponent onClick={onClickAction} customCss="reminders-create-button-component">
			Create reminder
		</ButtonComponent>
	);
};

export default RemindersCreateButtonComponent;
