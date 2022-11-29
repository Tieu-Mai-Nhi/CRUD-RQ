import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 10,
		flex: 1,
	},
	form: {
		width: '100%',
		textAlign: 'center',
		alignItems: 'center',
	},
	action: {
		marginTop: 20,
	},
	logIn: {
		marginTop: 50,
		marginBottom: 20,
		width: '80%',
		backgroundColor: 'red',
		height: 50,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	signIn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	google: {
		flexDirection: 'row',
		width: '80%',
		backgroundColor: 'white',
		borderColor: 'red',
		borderWidth: 1,
		height: 50,
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 80,
	},
	iconGoogle: {
		width: 26,
		height: 26,
		marginRight: 8,
	},
});

export default styles;
