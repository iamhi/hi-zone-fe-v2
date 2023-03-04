import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { CLOUDY_MEMORY_ROUTE } from '@page-components/constants';
import { selectCloudyMemoryActivated } from '@redux/slices/userPreferenceSlice';

import NavigationItemComponent from './NavigationItemComponent';

const CloudyMemoryNavigationItemComponent = ({
	pathname,
}) => {
	const activated = useSelector((state) => selectCloudyMemoryActivated(state));
	
	if (!activated) {
		return null;
	}

	const selected = CLOUDY_MEMORY_ROUTE === pathname;

	return (
		<NavigationItemComponent linkTo={CLOUDY_MEMORY_ROUTE} selected={selected}>
			CloudyMemory
		</NavigationItemComponent>
	);
};

CloudyMemoryNavigationItemComponent.propTypes = {
	pathname: PropTypes.string,
};

export default CloudyMemoryNavigationItemComponent;
