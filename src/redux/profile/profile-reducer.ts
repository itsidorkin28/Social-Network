import {PostType} from "../../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, ProfileType} from "../../api/profile-api";


export type ProfileDomainType = {
    profile: ProfileType | null
    posts: Array<PostType>
    postText: string
    status: string
}

const initialState: ProfileDomainType = {
    posts: [
        {id: v1(), post: 'Hello!', likesCount: 3},
        {id: v1(), post: 'JS!', likesCount: 9}
    ],
    postText: '',
    profile: null,
    status: '',
}


export const profileReducer = (state = initialState, action: ProfileActionsTypes): ProfileDomainType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), post: action.postText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts], postText: ''}
        case 'CHANGE-POST-TEXT':
            return {...state, postText: action.postText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case "SET-STATUS-PROFILE":
            return {...state, status: action.status}
        default:
            return state
    }
}


// AC

export type ProfileActionsTypes = AddPostType | ChangePostType | SetUserProfileType | SetStatusProfileType

type SetStatusProfileType = ReturnType<typeof setStatusProfile>
export const setStatusProfile = (status: string) => {
    return {
        type: 'SET-STATUS-PROFILE',
        status
    } as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

type AddPostType = ReturnType<typeof addPost>
export const addPost = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText
    } as const
}

export type ChangePostType = ReturnType<typeof changePost>
export const changePost = (postText: string) => {
    return {
        type: 'CHANGE-POST-TEXT',
        postText
    } as const
}

// Thunk

export const setUserProfileThunk = (paramsUserID: string | undefined) => (dispatch: Dispatch) => {
    profileAPI.getProfile(paramsUserID)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const setStatusProfileThunk = (paramsUserID: string | undefined) => (dispatch: Dispatch) => {
    profileAPI.getStatus(paramsUserID)
        .then(response => {
            dispatch(setStatusProfile(response.data))
        })
}

export const updateStatusProfileThunk = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        })
}