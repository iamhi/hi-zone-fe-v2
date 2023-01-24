import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TitleComponent from '@components/TitleComponent';
import NavigationComponent from '@components/NavigationComponent';
import FooterComponent from '@components/FooterComponent';
import SupportingApplicationComponent from '@components/SupportingApplicationComponent';
import MainRouteComponent from '@page-components/MainRouteComponent';
import SettingsRouteComponent from '@page-components/SettingsRouteComponent';
import RemindersRouteComponent from '@page-components/RemindersRouteComponent';
import FeedbackRouteComponent from '@page-components/FeedbackRouteComponent';

import {
	MAIN_ROUTE,
	SETTINGS_ROUTE,
	REMINDERS_ROUTE,
	FEEDBACK_ROUTE,
} from './constants';

const HomePageComponent = () => (
	<div className="basic-page">
		<div className="home-page">
			<div className="home-page__container home-page__container--left">
			
				<TitleComponent />

				<NavigationComponent />

				<Routes>
					<Route path={MAIN_ROUTE} element={<MainRouteComponent />} />
					<Route path={SETTINGS_ROUTE} element={<SettingsRouteComponent />} />
					<Route path={REMINDERS_ROUTE} element={<RemindersRouteComponent />} />
					<Route path={FEEDBACK_ROUTE} element={<FeedbackRouteComponent />} />
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
