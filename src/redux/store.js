import { configureStore } from '@reduxjs/toolkit';

import userDataSlice from './slices/userDataSlice';
import userPreferenceSlice from './slices/userPreferenceSlice';
import remindersSlice from './slices/remindersSlice';
import cloudyMemorySlice from './slices/cloudyMemorySlice';

export const store = configureStore({
	reducer: {
		userData: userDataSlice,
		userPreference: userPreferenceSlice,
		reminders: remindersSlice,
		cloudyMemory: cloudyMemorySlice,
	},
});
