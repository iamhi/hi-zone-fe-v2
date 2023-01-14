import React from 'react';
import { useDispatch } from 'react-redux';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import FormResetComponent from '@common-components/FormResetComponent';
import FormButtonGroupComponent from '@common-components/FormButtonGroupComponent';
import { userLoginAction } from '@redux/slices/userDataSlice';
import { loginRequest } from '@services/authentication-v2';

const LoginFormComponent = () => {
	const dispatch = useDispatch();

	const onSubmit = async (e) => {
		e.preventDefault();
		
		const formData = new FormData(e.target);
		const requestData = Object.fromEntries(formData);
		
		loginRequest(requestData)
			.then((response) => response.json())
			.then((data) => dispatch(userLoginAction(data)));
	};

	return (
		<FormComponent
			onSubmit={onSubmit}>

			<ManagedFormInputComponent
				label="Username:"
				required
				placeholder="username"
				name="username" />

			<ManagedFormInputComponent
				type="password"
				placeholder="password"
				name="password"
				required
				label="Password:" />
			
			<FormButtonGroupComponent>
				<FormSubmitComponent />
				<FormResetComponent />
			</FormButtonGroupComponent>
		</FormComponent>
	);
};

export default LoginFormComponent;
