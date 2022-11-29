import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../screen/Home';
import { useUser } from '../services/user';
import LoginStack from './LoginStack';

const Stack = createNativeStackNavigator();
export default function Navigation() {
	const { userInfo } = useUser();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{Object.values(userInfo).length === 0 ? (
					<Stack.Screen name="LoginStack" component={LoginStack} />
				) : (
					<Stack.Screen name="Home" component={Home} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
