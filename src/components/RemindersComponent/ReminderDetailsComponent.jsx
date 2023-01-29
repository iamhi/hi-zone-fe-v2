import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import {
	selectViewReminderDetails,
	setModalViewDetailsOpenedAction,
} from '@redux/slices/remindersSlice';

const ReminderDetailsComponent = () => {
	const dispatch = useDispatch();
	const {
		uuid,
		content,
		time,
		type,
		status,
		completeType,
		completeComment,
		completedAt,
		location,
		createdAt,
		updatedAt,
	} = useSelector(selectViewReminderDetails);

	const closeViewDetailsAction = () => {
		dispatch(setModalViewDetailsOpenedAction(false));
	};

	if (!uuid) {
		return null;
	}

	return (
		<PopupDisplayComponent backgroundClick={closeViewDetailsAction}>
			<div>
				<div>
					{content}
				</div>
				<div>
					{`${type} ${time}`}
				</div>
				<div>
					{`Status: ${status}`}
				</div>
				<div>
					{completeType}
				</div>
				<div>
					{completeComment}
				</div>
				<div>
					{`CompletedAt: ${completedAt}`}
				</div>
				<div>
					{`Location: ${location}`}
				</div>
				<div>
					{`Created at: ${createdAt}`}
				</div>
				<div>
					{`Updated at: ${updatedAt}`}
				</div>
			</div>
		</PopupDisplayComponent>
	);
};

export default ReminderDetailsComponent;
