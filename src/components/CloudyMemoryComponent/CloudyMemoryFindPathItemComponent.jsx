import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CloudyMemoryFindPathItemComponent = ({
	children,
	onClick,
	selected,
}) => (
	<button
		className={classNames('no-button-css cloudy-memory-find-path-item-component', {
			'cloudy-memory-find-path-item-component--selected': selected,
		})}
		type="button"
		onClick={onClick}>
		{children}
	</button>
);

CloudyMemoryFindPathItemComponent.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	selected: PropTypes.bool,
};

export default CloudyMemoryFindPathItemComponent;
