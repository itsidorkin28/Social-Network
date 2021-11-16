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
}

const initialState = {
    usersList: []
}

export type UsersActionsTypes = FollowACType | UnfollowACType | SetUsersACType

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, usersList: state.usersList.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, usersList: [...state.usersList, ...action.users]}
        default:
            return state
    }
}

type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

