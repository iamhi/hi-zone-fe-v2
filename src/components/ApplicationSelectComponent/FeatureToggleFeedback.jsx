import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FormInputComponent from '@common-components/FormInputComponent';
import {
	selectFeedbackActivated,
	setFeedbackActivatedAction,
} from '@redux/slices/userPreferenceSlice';

const FeatureToggleFeedback = ({
	scheduleSave,
}) => {
	const dispatch = useDispatch();
	const feedbackActivated = useSelector((state) => selectFeedbackActivated(state));
	
	const onChangeAction = (e) => {
		dispatch(setFeedbackActivatedAction(e.target.checked));

		scheduleSave();
	};

	return (
		<FormInputComponent
			label="Toggle feedback feautre"
			required
			type="checkbox"
			value={feedbackActivated}
			onChange={onChangeAction}
			customInputCss="form-checkbox-component__input"
			customLabelCss="form-checkbox-component__label"
			name="toggle-feedback-feature-checkbox" />
	);
};

FeatureToggleFeedback.propTypes = {
	scheduleSave: PropTypes.func,
};

export default FeatureToggleFeedback;
