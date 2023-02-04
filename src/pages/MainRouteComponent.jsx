import React from 'react';
import { useSelector } from 'react-redux';

import { selectUsername } from '@redux/slices/userDataSlice';

const LOGGED_IN_TEXT = 'Welcome to Hi-zone-app.\n\nSelect application from the Navigation bar\n\nAdd new applications from the settings tab.';
const LOADING_TEXT = 'loading';

const AboutRouteComponent = () => {
	const isLogged = useSelector(selectUsername) !== '';

	return (
		<>
			<h1>MainComponent</h1>

			<pre>
				{ isLogged ? LOGGED_IN_TEXT : LOADING_TEXT }
			</pre>
		</>
	);
};

export default AboutRouteComponent;
