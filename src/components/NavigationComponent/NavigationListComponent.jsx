import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { selectUsername } from '@redux/slices/userDataSlice';
import {
	MAIN_ROUTE,
	SETTINGS_ROUTE,
} from '@page-components/constants';

import NavigationItemComponent from './NavigationItemComponent';
import FeedbackNavigationItemComponent from './FeedbackNavigationItemComponent';
import RemindersNavigationItemComponent from './RemindersNavigationItemComponent';
import CloudyMemoryNavigationItemComponent from './CloudyMemoryNavigationItemComponent';

const NavigationListComponent = ({
	desktopMode,
	hideMenuAction,
}) => {
	const { pathname } = useLocation();
	const [previousPath] = useState(pathname);
	const isLogged = useSelector(selectUsername) !== '';
	
	const loggedRoutes = (
		<>
			<RemindersNavigationItemComponent pathname={pathname} />
			<FeedbackNavigationItemComponent pathname={pathname} />
			<CloudyMemoryNavigationItemComponent pathname={pathname} />
		</>
	);

	useEffect(
		() => {
			if (previousPath !== pathname) {
				hideMenuAction();
			}
		},
		[
			pathname,
			hideMenuAction,
			previousPath,
		]
	);

	return (
		<div className={classNames('navigation-list-component', { 'navigation-list-component--desktop': desktopMode })}>
			<NavigationItemComponent linkTo={MAIN_ROUTE} selected={pathname === MAIN_ROUTE}>
				Main
			</NavigationItemComponent>
	
			{isLogged && loggedRoutes}
		
			<NavigationItemComponent linkTo={SETTINGS_ROUTE} selected={pathname === SETTINGS_ROUTE}>
				Settings
			</NavigationItemComponent>
		</div>
	);
};

NavigationListComponent.propTypes = {
	desktopMode: PropTypes.bool,
	hideMenuAction: PropTypes.func,
};

export default NavigationListComponent;
