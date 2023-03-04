import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormInputComponent from '@common-components/FormInputComponent';
import {
	selectSelectedPath,
	setSelectedPath,
} from '@redux/slices/cloudyMemorySlice';

import CloudyMemoryPathSelectComponent from './CloudyMemorySelectPathComponent';
import CloudyMemoryDeletePathComponent from './CloudyMemoryDeletePathComponent';

const CloudyMemoryPathComponent = () => {
	const dispatch = useDispatch();
	const selectedPath = useSelector(selectSelectedPath);

	const onPathChanged = (event) => {
		dispatch(setSelectedPath(event.target.value));
	};

	return (
		<div className="cloudy-memory-path-component">
			<FormInputComponent
				label=""
				onChange={onPathChanged}
				placeholder="Selected path"
				name="path"
				customInputCss="cloudy-memory-path-component__input"
				value={selectedPath} />

			<CloudyMemoryPathSelectComponent />

			<CloudyMemoryDeletePathComponent />
		</div>
	);
};

export default CloudyMemoryPathComponent;
