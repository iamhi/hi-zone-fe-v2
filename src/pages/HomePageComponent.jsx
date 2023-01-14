import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TitleComponent from '@components/TitleComponent';
import NavigationComponent from '@components/NavigationComponent';
import MainRouteComponent from '@page-components/MainRouteComponent';
import FooterComponent from '@components/FooterComponent';
import SupportingApplicationComponent from '@components/SupportingApplicationComponent';

import {
	MAIN_ROUTE,
} from './constants';

const HomePageComponent = () => (
	<div className="basic-page">
		<div className="home-page">
			<div className="home-page__container home-page__container--left">
			
				<TitleComponent />

				<NavigationComponent />

				<Routes>
					<Route path={MAIN_ROUTE} element={<MainRouteComponent />} />
				</Routes>
			</div>

			<div className="home-page__container home-page__container--right">
				<SupportingApplicationComponent />
			</div>

			<div className="home-page__footer">
				<FooterComponent />
			</div>
		</div>
	</div>
);

export default HomePageComponent;
