import React from 'react';

import FooterItemComponent from './FooterItemComponent';

const footerContent = {
	messages: [
		{
			key: 'footer-content-label-1',
			message: '',
		},
		{
			key: 'footer-content-label-2',
			message: 'Find the full code on:',
		},
		{
			key: 'footer-content-label-3',
			message: 'https://github.com/iamhi/hi-zone-fe',
		},
		{
			key: 'footer-content-label-3.1',
			message: '',
		},
		{
			key: 'footer-content-label-4',
			message: 'Leave feedback on:',
		},
		{
			key: 'footer-content-label-4.1',
			message: 'http://localhost:8080/hi-zone-api/feedback',
		},
		{
			key: 'footer-content-label-4.2',
			message: '',
		},
		{
			key: 'footer-content-label-5',
			message: 'Use my email: "example@email.com" for direct contact',
		},
	],
};

const FooterComponent = () => (
	<div className="footer-component">
		{footerContent.messages.map(({ key, message }) => <FooterItemComponent key={key}>{message}</FooterItemComponent>)}
	</div>
);

export default FooterComponent;
