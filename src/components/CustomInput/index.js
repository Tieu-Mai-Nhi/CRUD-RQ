import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import styles from './style';

const CustomInput = ({ error, control, name, rules, secureTextEntry }) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, onBlur, value },
				fieldState: { error },
			}) => {
				return (
					<View style={styles.container}>
						<Text style={{ marginBottom: 8, fontWeight: '600' }}>
							{name}
						</Text>
						<TextInput
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							style={[
								styles.input,
								{ borderColor: error ? 'red' : '#393E46' },
							]}
							placeholderTextColor="#929292"
							secureTextEntry={secureTextEntry}
						></TextInput>
						{error && <Text style={styles.error}>{error.message}</Text>}
					</View>
				);
			}}
		/>
	);
};

export default CustomInput;
