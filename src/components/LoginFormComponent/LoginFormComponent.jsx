import React from 'react';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import FormResetComponent from '@common-components/FormResetComponent';
import FormButtonGroupComponent from '@common-components/FormButtonGroupComponent';

const LoginFormComponent = () => (
	<FormComponent
		onSubmit={(e) => {
			e.preventDefault();
		
			const formData = new FormData(e.target);
			const requestData = Object.fromEntries(formData);
		
			console.warn({ requestData });
		}}>
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

export default LoginFormComponent;
