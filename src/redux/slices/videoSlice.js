import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
	name: 'video',
	initialState: {
		state: {
			status: 'idle',
			isLoading: '',
			error: '',
			popularListVideo: [],
		},
	},
	reducers: {
		updateState: (state, action) => {
			state.state = action.payload;
		},

		removeVideo: (state, action) => {
			const videoIdRemoved = action.payload;
			state.state.popularListVideo = state.state.popularListVideo.filter(
				(video) => video.id !== videoIdRemoved
			);
		},
		updateVideo: (state, action) => {
			state.state.popularListVideo.map((video) => {
				if (video.id == action.payload.id) {
					video.snippet.title = action.payload.title;
				}
			});
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchPopularListVideo.fulfilled, (state, action) => {
	// 		state.popularListVideo = action.payload.items;
	// 		state.status = 'idle';
	// 	});
	// },
});

// export const fetchPopularcListVideo = createAsyncThunk(
// 	'video/fetchPopularListVideo',
// 	async () => {
// 		const video = await videoApi.getVideoMostPopular();
// 		return video;
// 	}
// );

export const videoSliceAction = videoSlice.actions;
export default videoSlice;
