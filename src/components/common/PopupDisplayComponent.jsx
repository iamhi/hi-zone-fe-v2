/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const PopupDisplayComponent = ({
	children,
	backgroundClick = () => {},
	customContainerCss,
	customBackgroundCss,
	customContentCss,
}) => (
	<div className={`popup-display-component ${customContainerCss}`}>
		<div className={`popup-display-component__background ${customBackgroundCss}`} onClick={backgroundClick}>
			<div className={`popup-display-component__content ${customContentCss}`} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	</div>
);

PopupDisplayComponent.propTypes = {
	backgroundClick: PropTypes.func,
	children: PropTypes.node,
	customContainerCss: PropTypes.string,
	customBackgroundCss: PropTypes.string,
	customContentCss: PropTypes.string,
};

export default PopupDisplayComponent;
