import React from 'react';
import {
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	TextInput,
} from 'react-native';

const Input = ({
	value,
	handleChangeText,
	placeholder,
	handleSubmitEdit,
	autoFocus,
}) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			keyboardVerticalOffset={64}
		>
			<ScrollView>
				<TextInput
					value={value}
					onChangeText={handleChangeText}
					onSubmitEditing={handleSubmitEdit}
					placeholder={placeholder}
					autoFocus={autoFocus}
					style={styles.input}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default Input;

const styles = StyleSheet.create({
	input: {
		border: 1,
		width: '100%',
		height: 40,
	},
});
