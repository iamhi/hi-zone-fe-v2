import React from 'react';

import FormInputComponent from '@common-components/FormInputComponent';

const FeatureToggleFeedback = () => {
	console.warn('placeholder');

	return (
		<FormInputComponent
			label="Toggle feedback feautre"
			required
			type="checkbox"
			customInputCss="form-checkbox-component__input"
			customLabelCss="form-checkbox-component__label"
			name="toggle-feedback-feature-checkbox" />
	);
};

export default FeatureToggleFeedback;
