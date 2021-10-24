import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'

export type ProfilePageType = {
    posts: Array<PostType>
}

const initialState = {
    posts: [
        {id: v1(), post: 'Hello!', likesCount: 3},
        {id: v1(), post: 'JS!', likesCount: 9}
    ]
}

type ActionsTypes = ReturnType<typeof AddPost>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {id: v1(), post: action.postText, likesCount: 0}
            state.posts.push(newPost)
            return state
        default:
            return state
    }
}


export const AddPost = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}