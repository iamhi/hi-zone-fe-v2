import React, { useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import ButtonComponent from '@common-components/ButtonComponent';
import PopupDisplayComponent from '@common-components/PopupDisplayComponent';

import NavigationListComponent from './NavigationListComponent';

const NavigationComponent = () => {
	const [showList, setShowList] = useState(false);
	const { pathname } = useLocation();

	const showMenuAction = () => {
		setShowList(true);
	};

	const hideMenuAction = () => {
		setShowList(false);
	};

	return (
		<>
			<div className="navigation-component navigation-component--mobile">
				<div className="navigation-component__current-path">
					{pathname}
				</div>
				<ButtonComponent
					onClick={showMenuAction}
					customCss={classNames('navigation-component__toggle-button', {
						'navigation-component__toggle-button--active': showList,
					})}>
					<i className="fa-solid fa-bars"></i>
				</ButtonComponent>

				{
					showList && (
						<PopupDisplayComponent backgroundClick={hideMenuAction}>
							<NavigationListComponent hideMenuAction={hideMenuAction} showList={showList} />
						</PopupDisplayComponent>
					)
				}
			</div>

			<div className="navigation-component navigation-component--desktop">
				<NavigationListComponent hideMenuAction={hideMenuAction} showList={showList} />
			</div>
		</>
	);
};

export default NavigationComponent;
