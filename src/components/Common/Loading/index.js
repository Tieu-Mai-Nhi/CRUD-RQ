import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const AppLoader = () => {
	return (
		<View style={[styles.container, StyleSheet.absoluteFill]}>
			<LottieView
				style={styles.icon}
				source={{
					uri: 'https://assets8.lottiefiles.com/packages/lf20_p8bfn5to.json',
				}}
				autoPlay
				loop
			/>
		</View>
	);
};

export default AppLoader;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		opacity: 0.9,
		zIndex: 100,
		flex: 1,
	},
	icon: {
		width: 150,
		height: 150,
	},
});
