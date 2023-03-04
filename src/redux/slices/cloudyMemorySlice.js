/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = Object.freeze({
	selectedPath: '',
	selectedPathData: '',
	paths: [],
});

const cloudyMemorySlice = createSlice({
	name: 'cloudyMemory',
	initialState,
	reducers: {
		setSelectedPath(state, action) {
			const newSelectedPath = action.payload;

			if (state.selectedPath !== newSelectedPath) {
				state.selectedPath = action.payload;
				state.selectedPathData = initialState.selectedPathData;
			}
		},
		setPaths(state, action) {
			state.paths = action.payload;
		},
		setSelectedPathData(state, action) {
			state.selectedPathData = action.payload;
		},
	},
});

export const {
	setSelectedPath,
	setSelectedPathData,
	setPaths,
} = cloudyMemorySlice.actions;

export const selectSelectedPath = (state) => state.cloudyMemory.selectedPath;

export const selectSelectedPathData = (state) => state.cloudyMemory.selectedPathData;

export const selectPaths = (state) => state.cloudyMemory.paths;

export default cloudyMemorySlice.reducer;
