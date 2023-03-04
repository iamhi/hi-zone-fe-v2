import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import { selectSelectedPath } from '@redux/slices/cloudyMemorySlice';
import { getAllPathsRequest } from '@services/cloudy-memory';

import CloudyMemoryFindPathItemComponent from './CloudyMemoryFindPathItemComponent';

const CloudyMemoryFindPathComponent = ({
	onSelectItem,
	onBackgroundClick,
}) => {
	const selectedPath = useSelector(selectSelectedPath);
	const [paths, setPaths] = useState([]);

	useEffect(() => {
		getAllPathsRequest()
			.then((response) => response.json())
			.then((data) => setPaths(data));
	}, []);

	const findPathItems = paths.map((path) => (
		<CloudyMemoryFindPathItemComponent
			key={path}
			onClick={() => onSelectItem(path)}
			selected={path === selectedPath}>
			{path}
		</CloudyMemoryFindPathItemComponent>
	));

	return (
		<PopupDisplayComponent
			backgroundClick={onBackgroundClick}
			customContentCss="cloudy-memory-find-path-component__popup">
			<div className="cloudy-memory-find-path-component">
				{findPathItems}
			</div>
		</PopupDisplayComponent>
	);
};

CloudyMemoryFindPathComponent.propTypes = {
	onSelectItem: PropTypes.func,
	onBackgroundClick: PropTypes.func,
};

export default CloudyMemoryFindPathComponent;
