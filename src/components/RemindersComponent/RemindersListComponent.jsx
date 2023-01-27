import React from 'react';
import { useSelector } from 'react-redux';

import { selectRemindersData } from '@redux/slices/remindersSlice';

import RemindersListItemComponent from './RemindersListItemComponent';

const RemindersListComponent = () => {
	const reminders = useSelector(selectRemindersData);

	const reminderListItemComponents = reminders.map(({
		uuid,
		content,
		type,
		status,
		time,
	}) => (
		<RemindersListItemComponent
			content={content}
			type={type}
			status={status}
			time={time}
			key={uuid} />
	));

	return (
		<div className="reminders-list-component">
			{reminderListItemComponents}
		</div>
	);
};

export default RemindersListComponent;
