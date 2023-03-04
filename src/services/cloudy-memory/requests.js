import {
	getCall,
	postCall,
	deleteCall,
} from '@services/shared/calls';

import {
	getFetchPathsUrl,
	getFetchPathDataUrl,
	getDeletePathDataUrl,
	getPostPathDataUrl,
} from './urls';

export const getAllPathsRequest = () => getCall(getFetchPathsUrl());

export const getPathDataRequest = (path) => getCall(getFetchPathDataUrl(path));

export const postPathDataRequest = (path, {
	value,
}) => postCall(getPostPathDataUrl(path), {
	value,
});

export const deletePathDataRequest = (path) => deleteCall(getDeletePathDataUrl(path));
