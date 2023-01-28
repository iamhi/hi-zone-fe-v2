import React from 'react';
import { useDispatch } from 'react-redux';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import { setModalOpened, addReminderAction } from '@redux/slices/remindersSlice';
import { createReminder } from '@services/terreplein-v2';

const DEFAULT_CREATE_DATA = {
	type: 'completeAtAnyTime',
	time: new Date(),
	location: 'unset',
};

const RemindersFormComponent = () => {
	const dispatch = useDispatch();

	const onSubmitAction = (e) => {
		e.preventDefault();
		
		const formData = new FormData(e.target);
		const requestData = Object.fromEntries(formData);
		
		createReminder({ ...requestData, ...DEFAULT_CREATE_DATA })
			.then((response) => response.json())
			.then((data) => dispatch(addReminderAction(data)));

		dispatch(setModalOpened(false));
	};

	return (
		<div>
			<FormComponent onSubmit={onSubmitAction}>
				<ManagedFormInputComponent
					label="Reminder text:"
					name="content"
					required />

				<FormSubmitComponent />
			</FormComponent>
		</div>
	);
};

export default RemindersFormComponent;
