import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import useAsyncStorage from '../../utils/AsyncStorage/useAsyncStorage';

export function useSignUp() {
	const navigation = useNavigation();
	// const [userDataList, setUserDataList] = useState([]);
	const { setItem, getItem, removeItem } = useAsyncStorage();

	const signUp = async (data) => {
		const userToBeSaved = {
			username: data.Username,
			password: data.Password,
		};
		// await getItem('user').then((users) => {
		// 	let savedUsers = [];
		// 	savedUsers.push(userToBeSaved);

		// 	console.log(savedUsers);
		// 	setItem('user', savedUsers);
		// 	// removeItem('user');
		// });
		setItem('user', userToBeSaved);

		Keyboard.dismiss();
		navigation.goBack();
	};

	return {
		signUp,
	};
}
