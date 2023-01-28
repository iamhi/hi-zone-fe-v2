import React from 'react';
import { useDispatch } from 'react-redux';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import { setModalOpened } from '@redux/slices/remindersSlice';

const RemindersFormComponent = () => {
	const dispatch = useDispatch();

	const onSubmitAction = (e) => {
		e.preventDefault();
		
		const formData = new FormData(e.target);
		const requestData = Object.fromEntries(formData);

		console.warn({ requestData });
		
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
