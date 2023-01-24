import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { REMINDERS_ROUTE } from '@page-components/constants';
import { selectRemindersActivated } from '@redux/slices/userPreferenceSlice';

import NavigationItemComponent from './NavigationItemComponent';

const RemindersNavigationItemComponent = ({
	pathname,
}) => {
	const activated = useSelector((state) => selectRemindersActivated(state));
	
	if (!activated) {
		return null;
	}

	const selected = REMINDERS_ROUTE === pathname;

	return (
		<NavigationItemComponent linkTo={REMINDERS_ROUTE} selected={selected}>
			Reminders
		</NavigationItemComponent>
	);
};

RemindersNavigationItemComponent.propTypes = {
	pathname: PropTypes.string,
};

export default RemindersNavigationItemComponent;
