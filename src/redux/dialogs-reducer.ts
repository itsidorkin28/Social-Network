import {MessageType} from "../components/Dialogs/Message/Message";
import {v1} from "uuid";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";



const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
const initialState = {
    dialogs: [
        {id: v1(), name: 'Alexander'},
        {id: v1(), name: 'Alena'}
    ],
    messages: [
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'How are you?'}
    ]
}

type ActionsTypes = ReturnType<typeof SendMessage>

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {id: v1(), message: action.messageText}
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export const SendMessage = (messageText: string) => {
    return {
        type: SEND_MESSAGE,
        messageText: messageText
    } as const
}