import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {v1} from "uuid";
import {MessageType} from "../components/Dialogs/Message/Message";
import {PostType} from "../components/Profile/MyPosts/Post/Post";

export type StateType = {
    profilePage: {
        posts: Array<PostType>
    }
    messagesPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof AddPostAC>

export const AddPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: 'Hello!', likesCount: 3},
                {id: v1(), post: 'JS!', likesCount: 9}
            ]
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {id: v1(), post: action.postText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
        }
    }
}
