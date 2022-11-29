import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { videoSliceAction } from '../../redux/slices/videoSlice';
import videoApi from '../../utils/api/videoApi';

export const useVideo = (initialFetch = true) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.video.state);
	const { status, popularListVideo, isLoading, error } = state;

	useEffect(() => {
		if (initialFetch) {
			fetchPopularListVideo();
		}
	}, []);

	const fetchPopularListVideo = async () => {
		dispatch(
			videoSliceAction.updateState({
				...state,
				status: 'pending',
				isLoading: true,
			})
		);
		try {
			const video = await videoApi.getVideoMostPopular();
			// setLoading(false);
			dispatch(
				videoSliceAction.updateState({
					...state,
					status: 'idle',
					isLoading: false,
					popularListVideo: video.items,
				})
			);
		} catch (error) {
			dispatch(
				videoSliceAction.updateState({
					...state,
					status: 'fail',
					isLoading: false,
					error: error,
				})
			);
		}
	};

	return { fetchPopularListVideo, isLoading, error, status, popularListVideo };
};
