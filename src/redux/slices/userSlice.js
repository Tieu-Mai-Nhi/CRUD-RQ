import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		state: {
			status: 'idle',
			userInfo: {},
			isLoading: '',
			error: '',
		},
	},
	reducers: {
		updateState(state, action) {
			state.state = action.payload;
		},
	},
});

export const userSliceAction = userSlice.actions;

export default userSlice;
