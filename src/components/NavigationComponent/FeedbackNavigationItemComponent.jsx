import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FEEDBACK_ROUTE } from '@page-components/constants';
import { selectFeedbackActivated } from '@redux/slices/userPreferenceSlice';

import NavigationItemComponent from './NavigationItemComponent';

const FeedbackNavigationItemComponent = ({
	pathname,
}) => {
	const feedbackActivated = useSelector((state) => selectFeedbackActivated(state));
	
	if (!feedbackActivated) {
		return null;
	}

	const selected = FEEDBACK_ROUTE === pathname;

	return (
		<NavigationItemComponent linkTo={FEEDBACK_ROUTE} selected={selected}>
			Feedback
		</NavigationItemComponent>
	);
};

FeedbackNavigationItemComponent.propTypes = {
	pathname: PropTypes.string,
};

export default FeedbackNavigationItemComponent;
