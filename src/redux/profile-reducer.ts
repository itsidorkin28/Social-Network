import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";

const ADD_POST: string = 'ADD-POST'
const CHANGE_POST_TEXT: string = 'CHANGE-POST-TEXT'

export type ProfilePageType = {
    posts: Array<PostType>,
    postText: string
}

const initialState = {
    posts: [
        {id: v1(), post: 'Hello!', likesCount: 3},
        {id: v1(), post: 'JS!', likesCount: 9}
    ],
    postText: ''
}

type ActionsTypes = AddPostACType | ChangePostACType

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {id: v1(), post: action.postText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts], postText: ''}
        case CHANGE_POST_TEXT:
            return {...state, postText: action.postText}
        default:
            return state
    }
}

type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText
    } as const
}

export type ChangePostACType = ReturnType<typeof ChangePostAC>
export const ChangePostAC = (postText: string) => {
    return {
        type: CHANGE_POST_TEXT,
        postText
    } as const
}