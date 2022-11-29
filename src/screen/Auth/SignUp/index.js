import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../../../components/CustomInput';
import { regexEmail } from '../../../constants';
import { useSignUp } from '../../../services/auth/signUp';

import styles from './style';

const SignUp = () => {
	const { control, handleSubmit, watch } = useForm();
	const pass = watch('Password');
	const { signUp } = useSignUp();

	const onSubmit = (data) => {
		signUp(data);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={styles.container}
				// behavior="position"
				// keyboardVerticalOffset={40}
			>
				<Text
					style={{
						paddingVertical: 20,
						fontSize: 16,
					}}
				>
					Đăng Ký
				</Text>
				{/* <KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					// enabled
					// keyboardVerticalOffset={40}
					style={{ flex: 1 }}
				> */}
				<CustomInput
					control={control}
					name="Username" // rules={{ required: 'Bạn chưa nhập Username' }}
				/>
				<CustomInput
					control={control}
					name="Email"
					rules={{
						// required: 'Bạn chưa nhập Email',
						pattern: {
							value: regexEmail,
							message: 'Không đúng định dạng mail',
						},
					}}
				/>
				<CustomInput
					control={control}
					name="Password"
					// rules={{
					// 	required: 'Bạn chưa nhập Mật khẩu',
					// 	minLength: {
					// 		value: 6,
					// 		message: 'Mật khẩu phải lớn hơn 6 ký tự',
					// 	},
					// }}
					// secureTextExtry
				/>
				<CustomInput
					control={control}
					name="Nhập lại Password"
					// rules={{
					// 	required: 'Bạn chưa nhập Mật khẩu',
					// 	validate: (value) =>
					// 		value === pass || 'Mật khẩu không trùng khớp',
					// }}
					// secureTextExtry
				/>
				{/* <CustomInput
					control={control}
					name="Phone"
					rules={{
						required: 'Vui lòng nhập số điện thoại',
						// valueAsNumber: true,
						pattern: {
							value: regexPhoneNumber,
							message: 'Số điện thoại không hợp lệ',
						},
					}}
				/> */}
				<TouchableOpacity
					onPress={handleSubmit(onSubmit)}
					style={styles.button}
				>
					<Text style={{ color: 'white' }}>Đăng ký tài khoản</Text>
				</TouchableOpacity>
				{/* </KeyboardAvoidingView> */}
			</View>
		</SafeAreaView>
	);
};

export default SignUp;
