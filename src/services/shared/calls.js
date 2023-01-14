export const getCall = (url) => fetch(url, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	credentials: 'include',
});

export const postCall = (url, body = {}) => fetch(url, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	credentials: 'include',
	body: JSON.stringify(body),
});

export const putCall = (url, body = {}) => fetch(url, {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	credentials: 'include',
	body: JSON.stringify(body),
});
