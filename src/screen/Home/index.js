import React from 'react';
import {
	Button,
	FlatList,
	KeyboardAvoidingView,
	StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import AppLoader from '../../components/Common/Loading';
import { useVideo } from '../../services/video';

const Home = () => {
	const { popularListVideo, fetchPopularListVideo, isLoading } =
		useVideo(true);

	const handleLoadVideo = () => {
		fetchPopularListVideo();
	};

	const renderListVideo = ({ item }) => {
		return (
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : null}
				keyboardVerticalOffset={64}
			>
				<Card
					videoId={item.id}
					channelId={item.snippet.channelId}
					title={item.snippet.title}
					thumbnails={item.snippet.thumbnails.medium.url}
					duration={item.contentDetails.duration}
					publishedAt={item.snippet.publishedAt}
					view={item.statistics.viewCount}
				/>
			</KeyboardAvoidingView>
		);
	};

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			{isLoading ? (
				<AppLoader />
			) : (
				<FlatList
					data={popularListVideo}
					renderItem={renderListVideo}
					keyExtractor={(item) => item.id}
				/>
			)}
			<Button title="Load" onPress={handleLoadVideo}></Button>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
