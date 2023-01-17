import React from 'react';

import FormInputComponent from '@common-components/FormInputComponent';

import {
	isRemindersActivated,
	setRemindersActivated,
} from './userApplicationPreference';

const FeatureToggleReminders = () => {
	console.warn('placeholder');
	const toggle = () => {
		setRemindersActivated(!isRemindersActivated());
	};

	return (
		<FormInputComponent
			label="Toggle reminder feautre"
			required
			customInputCss="form-checkbox-component__input"
			customLabelCss="form-checkbox-component__label"
			type="checkbox"
			value={isRemindersActivated()}
			onChange={toggle}
			name="toggle-reminders-feature-checkbox" />
	);
};

export default FeatureToggleReminders;
