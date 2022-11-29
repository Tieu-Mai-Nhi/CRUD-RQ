import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AppLoader from '../../../components/Common/Loading';
import CustomInput from '../../../components/CustomInput';
import { useLogin } from '../../../services/auth/logIn';
import styles from './style';

const LogIn = ({ navigation }) => {
	const { control, handleSubmit } = useForm();
	const { isLoading, login, error } = useLogin();

	// useEffect(() => {
	// 	alert(error);
	// }, [error]);

	const onSubmit = (data) => {
		login(data);
	};

	return (
		<View style={styles.container}>
			<Text
				style={{
					paddingVertical: 20,
					fontSize: 16,
				}}
			>
				Đăng Nhập
			</Text>
			<Text style={{ paddingVertical: 20, fontSize: 16, color: 'red' }}>
				{error}
			</Text>
			<View style={styles.form}>
				<CustomInput
					control={control}
					name="Username"
					rules={{ required: 'Bạn chưa nhập Username' }}
				/>
				<CustomInput
					control={control}
					name="Password"
					secureTextEntry={true}
					rules={{
						required: 'Bạn chưa nhập Mật khẩu',
						minLength: {
							value: 6,
							message: 'Mật khẩu phải lớn hơn 6 ký tự',
						},
					}}
				/>
			</View>

			<TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: '9%' }}>
				<Text>Quên mật khẩu?</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={handleSubmit(onSubmit)}
				style={styles.logIn}
			>
				<Text style={{ color: 'white' }}>Đăng nhập</Text>
			</TouchableOpacity>
			<View style={styles.signIn}>
				<Text style={{}}>Bạn chưa có tài khoản?</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate('SignUp')}
					style={{ paddingHorizontal: 10 }}
				>
					<Text style={{ color: 'red', fontSize: 16 }}>Đăng ký</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.google}>
				<Image
					style={styles.iconGoogle}
					source={{
						uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
					}}
				/>
				<Text style={{ color: 'black' }}>Đăng nhập bằng Google</Text>
			</TouchableOpacity>
			{isLoading ? <AppLoader /> : null}
		</View>
	);
};

export default LogIn;
