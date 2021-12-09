import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import { Dispatch } from "redux";
import { profileAPI } from "../api/profile-api";

export type UserDescriptionType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostType>
    postText: string
    profile: UserDescriptionType
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), post: 'Hello!', likesCount: 3},
        {id: v1(), post: 'JS!', likesCount: 9}
    ],
    postText: '',
    profile: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: 'ffds',
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: 'fdsfds',
            github: "github.com",
            mainLink: 'fdsfds'
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
}



export const profileReducer = (state = initialState, action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), post: action.postText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts], postText: ''}
        case 'CHANGE-POST-TEXT':
            return {...state, postText: action.postText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type ProfileActionsTypes = AddPostType | ChangePostType | SetUserProfileType

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UserDescriptionType) => {
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

export const setUserProfileThunk = (paramsUserID: string | undefined) => (dispatch: Dispatch) => {
    profileAPI.getProfile(paramsUserID)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}