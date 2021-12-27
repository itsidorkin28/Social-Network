import {usersAPI, UserType} from "../../api/users-api";
import {ThunkType} from "../../app/redux-store";
import {handleServerNetworkError} from "../../utils/error-utils";

export type UsersDomainType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number>
    disableButton: boolean
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
    isFetching: false,
    isFollowing: [],
    disableButton: false,
    filter: {
        term: '',
        friend: null
    }
}

export const usersReducer = (state = initialState, action: UsersActionsType): UsersDomainType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, usersList: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING':
            return {
                ...state,
                isFollowing: action.disableButton
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
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>
    | ReturnType<typeof setFilter>

export const setFilter = (filter: FilterType) => ({type: 'USERS/SET_FILTER', payload: filter} as const)
export const toggleIsFollowing = (disableButton: boolean, userID: number) => ({
    type: 'TOGGLE_IS_FOLLOWING',
    disableButton,
    userID
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)
export const follow = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollow = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const)

// Thunk

export const getUsersTC = (page: number, pageSize: number, filter: FilterType): ThunkType => async dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setFilter(filter))
    dispatch(setCurrentPage(1))
    try {
        const res = await usersAPI.getUsers(page, pageSize, filter)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(res.items))
        dispatch(setTotalUsersCount(res.totalCount))
    } catch (e) {
        handleServerNetworkError((e as Error), dispatch)
    }

}
export const followUserTC = (userID: number): ThunkType => async dispatch => {
    dispatch(toggleIsFollowing(true, userID))
    const res = await usersAPI.followUser(userID)
    if (res.data.resultCode === 0) {
        dispatch(follow(userID))
    }
    dispatch(toggleIsFollowing(false, userID))
}
export const unfollowUserTC = (userID: number): ThunkType => async dispatch => {
    dispatch(toggleIsFollowing(true, userID))
    const res = await usersAPI.unfollowUser(userID)
    if (res.data.resultCode === 0) {
        dispatch(unfollow(userID))
    }
    dispatch(toggleIsFollowing(false, userID))
}

