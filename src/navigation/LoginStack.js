import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LogIn from '../screen/Auth/LogIn';
import SignUp from '../screen/Auth/SignUp';

const Stack = createNativeStackNavigator();
export default function LoginStack() {
	return (
		<Stack.Navigator
			initialRouteName="LogIn"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="LogIn" component={LogIn} />
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	);
}
