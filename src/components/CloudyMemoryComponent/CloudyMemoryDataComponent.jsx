import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import {
	getPathDataRequest,
	postPathDataRequest,
} from '@services/cloudy-memory';
import {
	selectSelectedPath,
	setSelectedPathData,
	selectSelectedPathData,
} from '@redux/slices/cloudyMemorySlice';

const debouncedPostPathDataRequest = debounce((path, value) => postPathDataRequest(path, { value }), 500);

const debouncedGetPathDataRequest = debounce((path, callback) => getPathDataRequest(path)
	.then((response) => response.json())
	.then((data) => callback(data)), 500);

const CloudyMemoryDataComponent = () => {
	const dispatch = useDispatch();
	const selectedPath = useSelector(selectSelectedPath);
	const selectedPathData = useSelector(selectSelectedPathData);
	
	useEffect(() => {
		if (selectedPath !== '') {
			debouncedGetPathDataRequest(selectedPath, (data) => dispatch(setSelectedPathData(data)));
		}
	}, [selectedPath, dispatch]);

	const onDataChange = (event) => {
		const { target: { value } } = event;

		if (selectedPath !== '') {
			dispatch(setSelectedPathData(value));

			debouncedPostPathDataRequest(selectedPath, value);
		}
	};
	
	return (
		<div>
			<textarea
				placeholder="No data for this path..."
				className="note-application-component__text-area"
				value={selectedPathData}
				onChange={onDataChange}
				rows="6"
				disabled={selectedPath === ''}>
			</textarea>
		</div>
	);
};

export default CloudyMemoryDataComponent;
