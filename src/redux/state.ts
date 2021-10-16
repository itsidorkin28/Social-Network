import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {v1} from "uuid";
import {MessageType} from "../components/Dialogs/Message/Message";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
let rerenderEntireTree = () => {
    console.log('State changed')
}
export type StateType = {
    profilePage: {
        posts: Array<PostType>
        postText: string
    }
    messagesPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), post: 'Hello!', likesCount: 3},
            {id: v1(), post: 'JS!', likesCount: 9}
        ],
        postText: ''
    },
    messagesPage: {
        dialogs: [
            {id: v1(), name: 'Alexander'},
            {id: v1(), name: 'Alena'}
        ],
        messages: [
            {id: v1(), message: 'Hello!'},
            {id: v1(), message: 'How are you?'}
        ]
    }
}

export const addPost = () => {
    const newPost: PostType = {id: v1(), post: state.profilePage.postText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.postText = ''
    rerenderEntireTree()
}

export const changePostText = (postText: string) => {
    state.profilePage.postText = postText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}
