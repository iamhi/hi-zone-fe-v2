import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonComponent from '@common-components/ButtonComponent';
import {
	setSelectedPath,
	selectSelectedPath,
} from '@redux/slices/cloudyMemorySlice';
import { deletePathDataRequest } from '@services/cloudy-memory';

const CloudyMemoryDeletePathComponent = () => {
	const dispatch = useDispatch();
	const selectedPath = useSelector(selectSelectedPath);

	const deleteSelectedPathAction = () => {
		deletePathDataRequest(selectedPath);
		dispatch(setSelectedPath(''));
	};
	
	return (
		<div className="cloudy-memory-delete-path-component">
			<ButtonComponent
				customCss="cloudy-memory-delete-path-component__button"
				onClick={deleteSelectedPathAction}>
				Delete selected path
			</ButtonComponent>
		</div>
	);
};

export default CloudyMemoryDeletePathComponent;
