import {
	UserOperationsApi,
	UserLoginRequest,
	TokenOperationsApi,
} from 'hi_zone_authentication_v2_api';

const operationsApiInstance = new UserOperationsApi();
const tokenOperationsApiInstance = new TokenOperationsApi();

export const loginCall = ({ username, password }) => new Promise((resolve, reject) => {
	const userLoginRequest = new UserLoginRequest();

	userLoginRequest.username = username;
	userLoginRequest.password = password;

	operationsApiInstance.login(userLoginRequest, (error, data, _) => {
		if (error) {
			return reject(error);
		}
		
		return resolve(data);
	});
});

export const refreshTokensCall = () => new Promise((resolve, reject) => {
	tokenOperationsApiInstance.refreshTokens(undefined, (error, data, _) => {
		if (error) {
			return reject(error);
		}

		return resolve(data);
	});
});

export const meTokenCall = () => new Promise((resolve, reject) => {
	tokenOperationsApiInstance.me(undefined, (error, data, _) => {
		if (error) {
			return reject(error);
		}

		return resolve(data);
	});
});
// Me call
