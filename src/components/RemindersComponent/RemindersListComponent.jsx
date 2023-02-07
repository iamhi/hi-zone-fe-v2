import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { completeReminder } from '@services/terreplein-v2';
import {
	selectRemindersData,
	setModalViewDetailsOpenedAction,
	completeReminderAction,
} from '@redux/slices/remindersSlice';

import RemindersListItemComponent from './RemindersListItemComponent';
import ReminderDetailsComponent from './ReminderDetailsComponent';

const RemindersListComponent = () => {
	const dispatch = useDispatch();
	const reminders = useSelector(selectRemindersData);

	const onCompleteAction = (uuid) => () => {
		completeReminder(uuid, { comment: 'unset', completeType: 'completed' })
			.then((response) => response.json())
			.then((data) => dispatch(completeReminderAction(data)));
	};

	const onViewDetailsAction = (uuid) => () => {
		dispatch(setModalViewDetailsOpenedAction(uuid));
	};

	const reminderListItemComponents = reminders.map(({
		uuid,
		content,
		type,
		status,
		time,
	}) => (
		<RemindersListItemComponent
			uuid={uuid}
			content={content}
			type={type}
			status={status}
			time={time}
			onViewDetailsAction={onViewDetailsAction}
			onCompleteAction={onCompleteAction}
			key={uuid} />
	));

	return (
		<>
			<div className="reminders-list-component">
				{reminderListItemComponents}
			</div>

			<ReminderDetailsComponent />
		</>
	);
};

export default RemindersListComponent;
