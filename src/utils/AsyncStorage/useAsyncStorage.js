import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAsyncStorage() {
	const getItem = async (key) => {
		try {
			const valueJSON = await AsyncStorage.getItem(key);
			const value = await JSON.parse(valueJSON);
			// console.log(value);
			return value;
		} catch (error) {
			console.log(error);
		}
	};

	const setItem = async (key, data) => {
		const value = JSON.stringify(data);
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log(error);
		}
	};

	const removeItem = async (key) => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		setItem,
		getItem,
		removeItem,
	};
}
