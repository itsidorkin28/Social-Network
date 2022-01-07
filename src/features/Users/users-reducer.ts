import {usersAPI, UserType} from '../../api/users-api';
import {ThunkType} from '../../app/redux-store';
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils';
import {getUserFollowedTC} from '../Profile/profile-reducer';
import {RequestStatusType} from '../../app/app-reducer';

const initialState: UsersDomainType = {
	usersList: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: 'idle',
	isFollowing: [],
	disableButton: 'idle',
	filter: {
		term: '',
		friend: null
	}
};

export const usersReducer = (state = initialState, action: UsersActionsType): UsersDomainType => {
	switch (action.type) {
		case 'USERS/FOLLOW':
			return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: true} : u)};
		case 'USERS/UNFOLLOW':
			return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: false} : u)};
		case 'USERS/SET-USERS':
			return {...state, usersList: action.users};
		case 'USERS/SET-CURRENT-PAGE':
			return {...state, currentPage: action.currentPage};
		case 'USERS/SET-TOTAL-USERS-COUNT':
			return {...state, totalUsersCount: action.totalUsersCount};
		case 'TOGGLE_IS_FETCHING':
			return {...state, isFetching: action.isFetching};
		case 'USERS/TOGGLE-IS-FOLLOWING':
			return {
				...state,
				isFollowing: action.disableButton === 'loading'
					? [...state.isFollowing, action.userID]
					: [...state.isFollowing.filter(id => id !== action.userID)]
			};
		case 'USERS/SET-FILTER':
			return {...state, filter: action.payload};
		default:
			return state;
	}
};

// AC

export const setFilter = (filter: FilterType) => ({type: 'USERS/SET-FILTER', payload: filter} as const);
export const toggleIsFollowing = (disableButton: RequestStatusType, userID: number | string) => ({
	type: 'USERS/TOGGLE-IS-FOLLOWING',
	disableButton,
	userID
} as const);
export const toggleIsFetching = (isFetching: RequestStatusType) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const);
export const follow = (id: number | string) => ({type: 'USERS/FOLLOW', id} as const);
export const unfollow = (id: number | string) => ({type: 'USERS/UNFOLLOW', id} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'USERS/SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'USERS/SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
	type: 'USERS/SET-TOTAL-USERS-COUNT',
	totalUsersCount
} as const);

// Thunk

export const getUsersTC = (page: number, pageSize: number, filter: FilterType): ThunkType => async dispatch => {
	dispatch(toggleIsFetching('loading'));
	dispatch(setFilter(filter));
	dispatch(setCurrentPage(1));
	try {
		const res = await usersAPI.getUsers(page, pageSize, filter);
		dispatch(setUsers(res.items));
		dispatch(setTotalUsersCount(res.totalCount));
		dispatch(toggleIsFetching('succeeded'));
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
	}

};
export const followUserTC = (userID: number | string): ThunkType => async dispatch => {
	dispatch(toggleIsFollowing('loading', userID));
	try {
		const res = await usersAPI.followUser(userID);
		if (res.data.resultCode === 0) {
			dispatch(follow(userID));
			try {
				await dispatch(getUserFollowedTC(userID));
			} catch (e) {
				handleServerAppError(res.data, dispatch);
			}
			dispatch(toggleIsFollowing('succeeded', userID));
		} else {
			handleServerAppError(res.data, dispatch);
		}
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
		dispatch(toggleIsFollowing('failed', userID));

	}
};
export const unfollowUserTC = (userID: number | string): ThunkType => async dispatch => {
	dispatch(toggleIsFollowing('loading', userID));
	try {
		const res = await usersAPI.unfollowUser(userID);
		if (res.data.resultCode === 0) {
			dispatch(unfollow(userID));
			try {
				await dispatch(getUserFollowedTC(userID));
			} catch (e) {
				handleServerAppError(res.data, dispatch);
			}
			dispatch(toggleIsFollowing('succeeded', userID));
		} else {
			handleServerAppError(res.data, dispatch);
		}
	} catch (e) {
		handleServerNetworkError((e as Error), dispatch);
		dispatch(toggleIsFollowing('failed', userID));

	}
};

// Types

export type UsersDomainType = {
	usersList: Array<UserType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: RequestStatusType
	isFollowing: Array<number | string>
	disableButton: RequestStatusType
	filter: {
		term: string
		friend: null | boolean
	}
};

export type FilterType = typeof initialState.filter;

export type UsersActionsType =
	ReturnType<typeof follow>
	| ReturnType<typeof unfollow>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof toggleIsFollowing>
	| ReturnType<typeof setFilter>;

