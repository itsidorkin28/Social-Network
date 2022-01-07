import axios from 'axios';
import { FilterType } from '../features/Users/users-reducer';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
	},
});

export const usersAPI = {
	async getUsers(currentPage: number = 1, pageSize: number = 10, filter: FilterType = {term: '', friend: null}) {
		return instance.get<GetUserType>(`users?page=${currentPage}&count=${pageSize}&term=${filter.term}`
			+ (filter.friend === null ? '' : `&friend=${filter.friend}`))
			.then(response => {
				return response.data;
			});
	},
	async followUser(userID: number | string) {
		return instance.post<PostAndDeleteFollowType>(`follow/${userID}`);
	},
	async unfollowUser(userID: number | string) {
		return instance.delete<PostAndDeleteFollowType>(`follow/${userID}`);
	},
	async getFollowed(userID: number | string | undefined) {
		return instance.get<boolean>(`follow/${userID}`);
	}
};

type PostAndDeleteFollowType = {
	data: {},
	messages: Array<string>
	fieldsErrors: Array<string>
	resultCode: number
};

export type UserType = {
	name: string
	id: number
	uniqueUrlName: string
	photos: {
		small: string
		large: string
	}
	status: string
	followed: boolean
};

type GetUserType = {
	items: Array<UserType>
	totalCount: number
	error: string
};


