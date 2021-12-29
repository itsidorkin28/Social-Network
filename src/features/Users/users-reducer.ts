import {usersAPI, UserType} from "../../api/users-api";
import {ThunkType} from "../../app/redux-store";
import {handleServerNetworkError} from "../../utils/error-utils";
import {getUserFollowedTC} from "../Profile/profile-reducer";
import {RequestStatusType} from "../../app/app-reducer";

export type UsersDomainType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: RequestStatusType
    isFollowing: Array<number>
    disableButton: RequestStatusType
    filter: {
        term: string,
        friend: null | boolean

    }
}

export type FilterType = typeof initialState.filter

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
}

export const usersReducer = (state = initialState, action: UsersActionsType): UsersDomainType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case 'USERS/UNFOLLOW':
            return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, usersList: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/TOGGLE-IS-FOLLOWING':
            return {
                ...state,
                isFollowing: action.disableButton === 'loading'
                    ? [...state.isFollowing, action.userID]
                    : [...state.isFollowing.filter(id => id !== action.userID)]
            }
        case 'USERS/SET_FILTER':
            return {...state, filter: action.payload}
        default:
            return state
    }
}

// AC

export type UsersActionsType =
    FollowType
    | UnfollowType
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>
    | ReturnType<typeof setFilter>
export type UnfollowType = ReturnType<typeof unfollow>
export type FollowType = ReturnType<typeof follow>
export const setFilter = (filter: FilterType) => ({type: 'USERS/SET_FILTER', payload: filter} as const)
export const toggleIsFollowing = (disableButton: RequestStatusType, userID: number) => ({
    type: 'USERS/TOGGLE-IS-FOLLOWING',
    disableButton,
    userID
} as const)
export const toggleIsFetching = (isFetching: RequestStatusType) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)
export const follow = (id: number) => ({type: 'USERS/FOLLOW', id} as const)
export const unfollow = (id: number) => ({type: 'USERS/UNFOLLOW', id} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const)

// Thunk

export const getUsersTC = (page: number, pageSize: number, filter: FilterType): ThunkType => async dispatch => {
    dispatch(toggleIsFetching('loading'))
    dispatch(setFilter(filter))
    dispatch(setCurrentPage(1))
    try {
        const res = await usersAPI.getUsers(page, pageSize, filter)
        dispatch(setUsers(res.items))
        dispatch(setTotalUsersCount(res.totalCount))
        dispatch(toggleIsFetching('succeeded'))
    } catch (e) {
        handleServerNetworkError((e as Error), dispatch)
    }

}
export const followUserTC = (userID: number): ThunkType => async dispatch => {
    dispatch(toggleIsFollowing('loading', userID))
    const res = await usersAPI.followUser(userID)
    if (res.data.resultCode === 0) {
        dispatch(follow(userID))
        await dispatch(getUserFollowedTC(userID))
        dispatch(toggleIsFollowing('succeeded', userID))

    }
}
export const unfollowUserTC = (userID: number): ThunkType => async dispatch => {
    dispatch(toggleIsFollowing('loading', userID))
    const res = await usersAPI.unfollowUser(userID)
    if (res.data.resultCode === 0) {
        dispatch(unfollow(userID))
        await dispatch(getUserFollowedTC(userID))
        dispatch(toggleIsFollowing('succeeded', userID))
    }
}

