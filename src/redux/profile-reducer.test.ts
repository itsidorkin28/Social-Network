import {v1} from "uuid";
import {ProfilePageType, profileReducer} from "./profile-reducer";

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), post: 'Hello!', likesCount: 3},
        {id: v1(), post: 'JS!', likesCount: 9}
    ],
    postText: ''
}

beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), post: 'Hello!', likesCount: 3},
            {id: v1(), post: 'JS!', likesCount: 9}
        ],
        postText: ''
    }
})

test('correct add post', () => {
    const endState = profileReducer(initialState, {
        type: 'ADD-POST',
        postText: 'New Post'
    })

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].likesCount).toBe(0)
})

test('correct change post text', () => {
    const endState = profileReducer(initialState, {
        type: 'CHANGE-POST-TEXT',
        postText: 'New Text'
    })

    expect(endState.posts.length).toBe(2)
    expect(endState.postText).toBe('New Text')
})