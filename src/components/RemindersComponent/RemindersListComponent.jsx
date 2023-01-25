import React from 'react';

import RemindersListItemComponent from './RemindersListItemComponent';

const RemindersListComponent = () => {
	const reminders = [
		{
			uuid: 'f34976be-f00f-48f1-a03c-ba13f6961f1e',
			createdBy: 'iamhi',
			content: 'Reminder to finish this application',
			time: '2023-01-25T00:44:37.586Z',
			location: null,
			type: 'completeAtAnyTime',
			status: 'active',
			completeType: 'incomplete',
			completeComment: null,
			completedAt: null,
			createdAt: '2023-01-25T00:46:31.277616Z',
			updatedAt: '2023-01-25T00:46:31.277620Z',
		},
		{
			uuid: '23374073-d63a-4432-82ec-e1013ff4f7b2',
			createdBy: 'iamhi',
			content: 'new content',
			time: '2023-01-25T01:01:28.859Z',
			location: '',
			type: 'completeAtAnyTime',
			status: 'active',
			completeType: 'incomplete',
			completeComment: null,
			completedAt: null,
			createdAt: '2023-01-25T00:46:01.428513Z',
			updatedAt: '2023-01-25T01:01:56.707858Z',
		},
	];

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
