import { configureStore } from '@reduxjs/toolkit';

import userDataSlice from './slices/userDataSlice';
import userPreferenceSlice from './slices/userPreferenceSlice';
import remindersSlice from './slices/remindersSlice';

export const store = configureStore({
	reducer: {
		userData: userDataSlice,
		userPreference: userPreferenceSlice,
		reminders: remindersSlice,
	},
});
