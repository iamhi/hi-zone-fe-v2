import React from 'react';

import FormComponent from '@common-components/FormComponent';
import FormTextareaComponent from '@common-components/FormTextareaComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import FormResetComponent from '@common-components/FormResetComponent';
import FormButtonGroupComponent from '@common-components/FormButtonGroupComponent';
import { sendFeedback } from '@services/terreplein-v2';

const SendFeedbackComponent = () => {
	const onSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const requestData = Object.fromEntries(formData);

		sendFeedback(requestData).then((_) => {
			e.target.reset();
		});
	};

	return (
		<FormComponent onSubmit={onSubmit}>
			<FormTextareaComponent
				label="Message:"
				placeholder="I want a feature like..."
				name="content" />

			<FormButtonGroupComponent>
				<FormSubmitComponent />
				<FormResetComponent />
			</FormButtonGroupComponent>
		</FormComponent>
	);
};

export default SendFeedbackComponent;
