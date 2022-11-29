const baseURL = 'https://youtube.googleapis.com/youtube/v3/';

export const SERVER_API = {
	login: (data) =>
		`${baseURL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=VN&key=${key}`,
};

export const SERVER_AUTH_API = {};

// tach logic ra trong component để dễ maintain cho vao thu muc util,
