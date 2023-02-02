import React from 'react';
import { useDispatch } from 'react-redux';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import { setModalCreateOpenedAction, addReminderAction } from '@redux/slices/remindersSlice';
import { createReminder } from '@services/terreplein-v2';

const DEFAULT_CREATE_DATA = {
	type: 'completeAtAnyTime',
	time: new Date(),
	location: 'unset',
};

const RemindersCreateFormComponent = () => {
	const dispatch = useDispatch();

	const onSubmitAction = (e) => {
		e.preventDefault();
		
		const formData = new FormData(e.target);
		const requestData = Object.fromEntries(formData);

		createReminder({ ...DEFAULT_CREATE_DATA, ...requestData })
			.then((response) => response.json())
			.then((data) => dispatch(addReminderAction(data)));

		dispatch(setModalCreateOpenedAction(false));
	};

	return (
		<div>
			<FormComponent onSubmit={onSubmitAction}>
				<ManagedFormInputComponent
					label="Reminder text:"
					name="content"
					required />

				<ManagedFormInputComponent
					label="Location:"
					name="location"
					required />
				<FormSubmitComponent />
			</FormComponent>
		</div>
	);
};

export default RemindersCreateFormComponent;
