import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";

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

export type ProfileActionsTypes = AddPostACType | ChangePostACType

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), post: action.postText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts], postText: ''}
        case 'CHANGE-POST-TEXT':
            return {...state, postText: action.postText}
        default:
            return state
    }
}

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText
    } as const
}

export type ChangePostACType = ReturnType<typeof changePostAC>
export const changePostAC = (postText: string) => {
    return {
        type: 'CHANGE-POST-TEXT',
        postText
    } as const
}