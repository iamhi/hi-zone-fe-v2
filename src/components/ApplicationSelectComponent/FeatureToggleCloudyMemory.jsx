import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import FormInputComponent from '@common-components/FormInputComponent';
import {
	selectCloudyMemoryActivated,
	setCloudyMemoryActivatedAction,
} from '@redux/slices/userPreferenceSlice';

const FeatureToggleCloudyMemory = ({
	scheduleSave,
}) => {
	const dispatch = useDispatch();
	const feedbackActivated = useSelector((state) => selectCloudyMemoryActivated(state));
	
	const onChangeAction = (e) => {
		dispatch(setCloudyMemoryActivatedAction(e.target.checked));

		scheduleSave();
	};

	return (
		<FormInputComponent
			label="Toggle cloudy memory feautre"
			type="checkbox"
			checked={feedbackActivated}
			onChange={onChangeAction}
			customInputCss="form-checkbox-component__input"
			customLabelCss="form-checkbox-component__label"
			name="toggle-feedback-feature-checkbox" />
	);
};

FeatureToggleCloudyMemory.propTypes = {
	scheduleSave: PropTypes.func,
};

export default FeatureToggleCloudyMemory;
