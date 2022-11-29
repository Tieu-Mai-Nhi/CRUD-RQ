import { useSelector } from 'react-redux';

export const useUser = () => {
	const userInfo = useSelector((state) => state.user.state.userInfo);
	console.log('userInfo: ', userInfo);
	return { userInfo };
};
