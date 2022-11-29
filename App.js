import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<StatusBar
					barStyle="dark-content"
					hidden={false}
					backgroundColor="#00BCD4"
					translucent={true}
				/>
				<Navigation />
			</SafeAreaView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
