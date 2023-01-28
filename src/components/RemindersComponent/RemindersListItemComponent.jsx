import React from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from '@common-components/ButtonComponent';

const RemindersListItemComponent = ({
	uuid,
	content,
	type,
	status,
	time,
	onCompleteAction,
	onViewDetailsAction,
}) => (
	<div className="reminders-list-item-component">
		<div className="reminders-list-item-component__content">
			{content}
		</div>

		<div className="reminders-list-item-component__status">
			{status}
		</div>

		<div className="reminders-list-item-component__type">
			{type}
		</div>

		<div className="reminders-list-item-component__time">
			{time}
		</div>

		<div className="reminders-list-item-component__actions">
			{
				status === 'active'
		&& (
			<ButtonComponent onClick={onCompleteAction(uuid)}>
				Complete
			</ButtonComponent>
		)
			}
			<ButtonComponent onClick={onViewDetailsAction(uuid)}>
				View details
			</ButtonComponent>
		</div>
	</div>
);

RemindersListItemComponent.propTypes = {
	uuid: PropTypes.string,
	content: PropTypes.string,
	type: PropTypes.string,
	status: PropTypes.string,
	time: PropTypes.string,
	onCompleteAction: PropTypes.func,
	onViewDetailsAction: PropTypes.func,
};

export default RemindersListItemComponent;
