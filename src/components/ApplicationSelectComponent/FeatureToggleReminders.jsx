import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FormInputComponent from '@common-components/FormInputComponent';
import {
	selectRemindersActivated,
	setRemindersActivatedAction,
} from '@redux/slices/userPreferenceSlice';

const FeatureToggleReminders = ({
	scheduleSave,
}) => {
	const dispatch = useDispatch();
	const remindersActivated = useSelector((state) => selectRemindersActivated(state));
	
	const onChangeAction = (e) => {
		dispatch(setRemindersActivatedAction(e.target.checked));

		scheduleSave();
	};

	return (
		<FormInputComponent
			label="Toggle feedback feautre"
			type="checkbox"
			value={remindersActivated}
			onChange={onChangeAction}
			customInputCss="form-checkbox-component__input"
			customLabelCss="form-checkbox-component__label"
			name="toggle-feedback-feature-checkbox" />
	);
};

FeatureToggleReminders.propTypes = {
	scheduleSave: PropTypes.func,
};

export default FeatureToggleReminders;
