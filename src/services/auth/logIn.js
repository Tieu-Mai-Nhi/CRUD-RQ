import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userSliceAction } from '../../redux/slices/userSlice';
import useAsyncStorage from '../../utils/AsyncStorage/useAsyncStorage';

export function useLogin() {
	const { getItem } = useAsyncStorage();
	// const [isLoading, setLoading] = useState();
	// const [error, setError] = useState();
	const navigation = useNavigation();
	const state = useSelector((state) => state.user.state);
	const { status, userInfo, isLoading, error } = state;
	const dispatch = useDispatch();

	const login = async (data) => {
		dispatch(
			userSliceAction.updateState({
				...state,
				isLoading: true,
			})
		);
		getItem('user').then((userInfoAsync) => {
			// console.log('userInfoAsync: ', userInfoAsync);
			if (
				data.Username == userInfoAsync.username &&
				data.Password == userInfoAsync.password
			) {
				Keyboard.dismiss();
				setTimeout(() => {
					// setLoading(false);
					dispatch(
						userSliceAction.updateState({
							...state,
							userInfo: userInfoAsync,
							isLoading: false,
							error: null,
						})
					);
				}, 3000);
			} else {
				Keyboard.dismiss();
				// setError('Không đúng user hoặc password');
				dispatch(
					userSliceAction.updateState({
						...state,
						error: 'Không đúng user hoặc password',
					})
				);
			}
		});
	};

	return {
		login,
		isLoading,
		error,
	};
}
