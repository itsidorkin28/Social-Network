export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string
    photos?: {
        small?: string
        large?: string
    }
    status?: string
    followed: boolean
}

export type UsersPageType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number>
    disableButton: boolean
}

const initialState: UsersPageType = {
    usersList: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],
    disableButton: false,
}

export const usersReducer = (state = initialState, action: UsersActionsTypes): UsersPageType => {
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
        default:
            return state
    }
}

export type UsersActionsTypes =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleIsFollowingType

type ToggleIsFollowingType = ReturnType<typeof toggleIsFollowing>
export const toggleIsFollowing = (disableButton: boolean, userID: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING',
        disableButton,
        userID,
    } as const
}

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const
}

type FollowType = ReturnType<typeof follow>
export const follow = (id: number) => {
    return {
        type: 'FOLLOW',
        id,
    } as const
}

type UnfollowType = ReturnType<typeof unfollow>
export const unfollow = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id,
    } as const
}

type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}

