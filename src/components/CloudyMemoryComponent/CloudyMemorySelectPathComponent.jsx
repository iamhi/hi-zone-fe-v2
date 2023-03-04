import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ButtonComponent from '@common-components/ButtonComponent';
import { setSelectedPath } from '@redux/slices/cloudyMemorySlice';
import CloudyMemoryFindPathComponent from './CloudyMemoryFindPathComponent';

const CloudyMemorySelectPathComponent = () => {
	const dispatch = useDispatch();
	const [selectingPath, setSelectingPath] = useState(false);

	const openFindPathPopup = () => {
		setSelectingPath(true);
	};

	const closeFindPathPopup = () => {
		setSelectingPath(false);
	};

	const findPathPopupItemSelect = (path) => {
		dispatch(setSelectedPath(path));
		closeFindPathPopup();
	};
	
	return (
		<div className="cloudy-memory-select-path-component">
			<ButtonComponent
				customCss="cloudy-memory-select-path-component__button"
				onClick={openFindPathPopup}>
				Find path
			</ButtonComponent>
			{ selectingPath && <CloudyMemoryFindPathComponent onSelectItem={findPathPopupItemSelect} onBackgroundClick={closeFindPathPopup} /> }
		</div>
	);
};

export default CloudyMemorySelectPathComponent;
