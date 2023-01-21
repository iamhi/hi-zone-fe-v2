import { configureStore } from '@reduxjs/toolkit';

import userDataSlice from './slices/userDataSlice';
import userPreferenceSlice from './slices/userPreferenceSlice';

export const store = configureStore({
	reducer: {
		userData: userDataSlice,
		userPreference: userPreferenceSlice,
	},
});
