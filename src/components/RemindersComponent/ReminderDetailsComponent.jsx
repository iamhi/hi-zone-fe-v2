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
			<div className="reminder-details-component">
				<div className="reminder-details-component__info-section">
					<div className="reminder-details-componentn__info-section__content">
						{content}
					</div>
					<div className="reminder-details-componentn__info-section__time">
						{`${type} ${time}`}
					</div>
					<div className="reminder-details-componentn__info-section__status">
						{`Status: ${status}`}
					</div>
					{
						location
					!== (
						<div className="reminder-details-componentn__info-section__location">
							{`Location: ${location}`}
						</div>
					)
					}
				</div>

				<div className="reminder-details-component__complete-section">
					{
						completeType !== 'incomplete'
						&& (
							<>
								<div className="reminder-details-componenet__complete-section__complete-comment">
									{completeComment}
								</div>
								<div className="reminder-details-componenet__complete-section__completed-at">
									{`Completed at: ${completedAt}`}
								</div>
							</>
						)
					}
					
					<div className="reminder-details-componenet__complete-section__complete-type">
						{completeType}
					</div>
				</div>
				
				<div className="reminder-details-component__date-section">
					<div className="reminder-details-component__created-at">
						{`Created at: ${createdAt}`}
					</div>
					<div className="reminder-details-component__updated-at">
						{`Updated at: ${updatedAt}`}
					</div>
				</div>
			</div>
		</PopupDisplayComponent>
	);
};

export default ReminderDetailsComponent;
