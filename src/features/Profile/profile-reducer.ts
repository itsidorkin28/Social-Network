import {v1} from 'uuid';
import {profileAPI, ProfileType} from '../../api/profile-api';
import {ThunkType} from '../../app/redux-store';
import {RequestStatusType, setAppStatus} from '../../app/app-reducer';
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils';
import {usersAPI} from '../../api/users-api';

const initialState: ProfileDomainType = {
	posts: [
		{id: v1(), post: 'Hello!', likesCount: 3},
		{id: v1(), post: 'JS!', likesCount: 9},
	],
	profile: null,
	status: '',
	followed: false,
	isFollowing: 'idle',
};

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileDomainType => {
	switch (action.type) {
		case 'PROFILE/ADD-POST':
			const newPost: PostType = {id: action.id, post: action.postText, likesCount: 0};
			return {...state, posts: [newPost, ...state.posts]};
		case 'PROFILE/SET-USER-PROFILE':
			return {...state, profile: action.profile};
		case 'PROFILE/SET-STATUS-PROFILE':
			return {...state, status: action.status};
		case 'PROFILE/SET-FOLLOWED-USER':
			return {...state, followed: action.followed};
		default:
			return state;
	}
};

// AC

export const setStatusProfile = (status: string) => {
	return {type: 'PROFILE/SET-STATUS-PROFILE', status} as const;
};
export const setUserProfile = (profile: ProfileType) => {
	return {type: 'PROFILE/SET-USER-PROFILE', profile} as const;
};
export const addPost = (postText: string) => {
	return {type: 'PROFILE/ADD-POST', postText, id: v1()} as const;
};
export const setFollowedUser = (followed: boolean) => {
	return {type: 'PROFILE/SET-FOLLOWED-USER', followed} as const;
};

// Thunk

export const setUserProfileTC = (paramsUserID: string | undefined): ThunkType => async dispatch => {
	dispatch(setAppStatus('loading'));
	try {
		const res = await profileAPI.getProfile(paramsUserID);
		dispatch(setUserProfile(res.data));
		dispatch(setAppStatus('succeeded'));
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
	}
};
export const setStatusProfileTC = (paramsUserID: string | undefined): ThunkType => async dispatch => {
	dispatch(setAppStatus('loading'));
	try {
		const res = await profileAPI.getStatus(paramsUserID);
		dispatch(setStatusProfile(res.data));
		dispatch(setAppStatus('succeeded'));
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
	}

};
export const updateStatusProfileTC = (status: string): ThunkType => async dispatch => {
	dispatch(setAppStatus('loading'));
	try {
		const res = await profileAPI.updateStatus(status);
		if (res.data.resultCode === 0) {
			dispatch(setStatusProfile(status));
			dispatch(setAppStatus('succeeded'));
		} else {
			handleServerAppError(res.data, dispatch);
		}
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
	}
};

export const getUserFollowedTC = (userId: number | string | undefined): ThunkType => async dispatch => {
	try {
		const res = await usersAPI.getFollowed(userId);
		dispatch(setFollowedUser(res.data));
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
	}
};

// Types

export type PostType = { id: string, post: string, likesCount: number };

export type ProfileDomainType = {
	profile: ProfileType | null
	posts: Array<PostType>
	status: string
	followed: boolean
	isFollowing: RequestStatusType
};

export type ProfileActionsType =
	ReturnType<typeof addPost>
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setStatusProfile>
	| ReturnType<typeof setFollowedUser>;