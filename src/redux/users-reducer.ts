export type UserType = {
    name: string
    id: number
    followed: boolean
    status?: string
    uniqueUrlName?: string
    photos?: {
        small: string
        large: string
    }
    location?: {
        city: string
        country: string
    }
}

export type UsersPageType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UsersPageType = {
    usersList: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
}

export type UsersActionsTypes = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType

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
        default:
            return state
    }
}

type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        id,
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id,
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}

