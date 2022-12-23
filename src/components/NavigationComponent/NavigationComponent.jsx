import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUsername } from '@redux/slices/userDataSlice';
import {
	MAIN_ROUTE,
} from '@page-components/constants';

import NavigationItemComponent from './NavigationItemComponent';

const NavigationComponent = () => {
	const { pathname } = useLocation();
	const isLogged = useSelector(selectUsername) !== '';

	const loggedRoutes = (
		<NavigationItemComponent linkTo={MAIN_ROUTE} selected={pathname === MAIN_ROUTE}>
			placeholder
		</NavigationItemComponent>
	);

	return (
		<div className="navigation-component">
			<NavigationItemComponent linkTo={MAIN_ROUTE} selected={pathname === MAIN_ROUTE}>
				Main
			</NavigationItemComponent>

			{isLogged && loggedRoutes}
		</div>
	);
};

export default NavigationComponent;
