import React from 'react';

import FormComponent from '@common-components/FormComponent';

import FeatureToggleFeedback from './FeatureToggleFeedback';
import FeatureToggleReminders from './FeatureToggleReminders';

const ApplicationSelectComponent = () => (
	<FormComponent>
		<FeatureToggleFeedback />

		<FeatureToggleReminders />
	</FormComponent>
);

export default ApplicationSelectComponent;
