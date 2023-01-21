import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import FormComponent from '@common-components/FormComponent';
import { selectUserPreference } from '@redux/slices/userPreferenceSlice';
import { setUserPreference } from '@services/terreplein-v2';

import FeatureToggleFeedback from './FeatureToggleFeedback';
import FeatureToggleReminders from './FeatureToggleReminders';

const ApplicationSelectComponent = () => {
	const [shouldTriggerSave, setShouldTriggerSave] = useState(false);
	const userPreference = useSelector(selectUserPreference);

	const triggerSave = () => {
		setUserPreference(userPreference);
	};

	const scheduleSave = () => {
		setShouldTriggerSave(true);
	};

	useEffect(() => {
		if (shouldTriggerSave) {
			triggerSave();

			setShouldTriggerSave(false);
		}
	}, [shouldTriggerSave]);

	return (
		<FormComponent>
			<FeatureToggleFeedback scheduleSave={scheduleSave} />

			<FeatureToggleReminders scheduleSave={scheduleSave} />
		</FormComponent>
	);
};

export default ApplicationSelectComponent;
