import React, { useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { videoSliceAction } from '../../redux/slices/videoSlice';
import Input from '../Input';
import styles from './style';

const Card = (props) => {
	const { videoId, title, thumbnails, duration, publishedAt, view } = props;

	const [show, setShow] = useState(false);
	const [text, setText] = useState('');

	const dispatch = useDispatch();
	const handleDeleteVideo = (id) => {
		dispatch(videoSliceAction.removeVideo(id));
	};

	const handleShowEditInput = () => {
		setShow(!show);
	};

	const handleChangeText = (x) => {
		setText(x);
	};

	const handleUpdateVideo = () => {
		dispatch(videoSliceAction.updateVideo({ id: videoId, title: text }));
		setShow(false);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			keyboardVerticalOffset={64}
		>
			<View style={styles.card}>
				<TouchableOpacity>
					<Image
						style={styles.imageCard}
						source={{
							uri: thumbnails,
						}}
					/>
				</TouchableOpacity>
				<View style={styles.content}>
					<View style={styles.timeContainer}>
						<Text style={styles.time}>{duration}</Text>
					</View>
					<Text style={styles.title}>{title}</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View>
							<Text style={styles.viewer}>{view} lượt xem</Text>
							<Text style={styles.viewer}>{publishedAt}</Text>
						</View>
						<TouchableOpacity
							style={{ padding: 8 }}
							onPress={() => handleDeleteVideo(videoId)}
						>
							<Text style={{ color: 'red' }}>Xóa</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={{ padding: 8 }}
							onPress={() => handleShowEditInput()}
						>
							<Text style={{ color: 'green' }}>Sửa</Text>
						</TouchableOpacity>
					</View>
					{show ? (
						<Input
							value={text}
							handleChangeText={handleChangeText}
							handleSubmitEdit={() => handleUpdateVideo(videoId)}
							// bỏ () => khác gì gọi luôn hàm
							/* function() {
									handleUpdateVideo(videoId)
								} 
							*/
							placeholder="Edit..."
							autoFocus={true}
						/>
					) : null}
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Card;
