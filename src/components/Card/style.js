import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	card: {
		marginBottom: 10,
	},
	content: {
		padding: 10,
	},
	imageCard: {
		width: '100%',
		height: 215,
		position: 'relative',
	},
	avt: {
		width: 36,
		height: 36,
		borderRadius: 36,
		marginHorizontal: 12,
	},

	title: {
		color: '#0A0A0A',
		fontWeight: '500',
		marginBottom: 8,
	},

	viewer: {
		color: '#6C6C6C',
		fontWeight: '500',
	},

	timeContainer: {
		backgroundColor: '#000',
		opacity: 0.7,
		width: 60,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		position: 'absolute',
		right: 10,
		top: -40,
	},

	time: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 10,
	},
});

export default styles;
