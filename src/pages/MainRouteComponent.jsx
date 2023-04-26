import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUsername } from '@redux/slices/userDataSlice';
import { getLandingPage } from '@components/LandingPathSelectComponent';

const LOGGED_IN_TEXT = 'Welcome to Hi-zone-app.\n\nSelect application from the Navigation bar.\n\nAdd new applications from the settings tab.';
const LOADING_TEXT = 'loading';

const MainRouteComponent = () => {
	const isLogged = useSelector(selectUsername) !== '';
	const [initialLogin, setInitialLogin] = useState(!isLogged);
	const navigate = useNavigate();

	useEffect(() => {
		const landingPage = getLandingPage();
		
		if (isLogged && landingPage != null && landingPage !== '' && initialLogin) {
			navigate(landingPage);
			setInitialLogin(false);
		}
	}, [isLogged, navigate]);

	return (
		<>
			<h1>MainComponent</h1>

			<pre>
				{ isLogged ? LOGGED_IN_TEXT : LOADING_TEXT }
			</pre>
		</>
	);
};

export default MainRouteComponent;
