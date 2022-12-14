import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import videoSlice from './slices/videoSlice';

const store = configureStore({
	reducer: {
		video: videoSlice.reducer,
		user: userSlice.reducer,
	},
});

export default store;
