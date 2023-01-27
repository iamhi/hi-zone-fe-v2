import React from 'react';
import PropTypes from 'prop-types';

const RemindersListItemComponent = ({
	content,
	type,
	status,
	time,
}) => (
	<div className="reminders-list-item-component">
		<div className="reminders-list-item-component_content">
			{content}
		</div>

		<div className="reminders-list-item-component__status">
			{status}
		</div>

		<div className="reminders-list-item-component_type">
			{type}
		</div>

		<div className="reminders-list-item-component_time">
			{time}
		</div>
	</div>
);

RemindersListItemComponent.propTypes = {
	content: PropTypes.string,
	type: PropTypes.string,
	status: PropTypes.string,
	time: PropTypes.string,
};

export default RemindersListItemComponent;
