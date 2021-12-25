import {PostType} from "./MyPosts/Post/Post";
import {v1} from "uuid";
import {profileAPI, ProfileType} from "../../api/profile-api";
import {ThunkType} from "../../app/redux-store";


export type ProfileDomainType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
}

const initialState: ProfileDomainType = {
    posts: [
        {id: v1(), post: 'Hello!', likesCount: 3},
        {id: v1(), post: 'JS!', likesCount: 9}
    ],
    profile: null,
    status: '',
}


export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileDomainType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: action.id, post: action.postText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case "SET-STATUS-PROFILE":
            return {...state, status: action.status}
        default:
            return state
    }
}


// AC

export type ProfileActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>

export const setStatusProfile = (status: string) => {
    return {type: 'SET-STATUS-PROFILE', status} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}
export const addPost = (postText: string) => {
    return {type: 'ADD-POST', postText, id: v1()} as const
}

// Thunk

export const setUserProfileTC = (paramsUserID: string | undefined): ThunkType => async dispatch => {
    const res = await profileAPI.getProfile(paramsUserID)
    dispatch(setUserProfile(res.data))
}
export const setStatusProfileTC = (paramsUserID: string | undefined): ThunkType => async dispatch => {
    const res = await profileAPI.getStatus(paramsUserID)
    dispatch(setStatusProfile(res.data))
}
export const updateStatusProfileTC = (status: string): ThunkType => async dispatch => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusProfile(status))
    }
}