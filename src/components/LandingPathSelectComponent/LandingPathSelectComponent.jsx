import React, { useEffect, useState } from 'react';

import FormInputComponent from '@common-components/FormInputComponent';

import { setLandingPage, getLandingPage } from './landingPageStorage';

const LandingPathSelectComponent = () => {
	const [landingPageValue, setLandingPageValue] = useState(getLandingPage());

	const onPathChanged = (event) => {
		setLandingPageValue(event.target.value);
	};

	useEffect(() => {
		setLandingPage(landingPageValue);
	}, [landingPageValue]);

	return (
		<FormInputComponent
			label="Set landing path"
			onChange={onPathChanged}
			placeholder="Type path"
			name="path"
			value={landingPageValue} />
	);
};

export default LandingPathSelectComponent;
