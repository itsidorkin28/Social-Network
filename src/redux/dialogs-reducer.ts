import {MessageType} from "../components/Dialogs/Message/Message";
import {v1} from "uuid";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";



const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_MESSAGE_TEXT: string = 'CHANGE-MESSAGE-TEXT'


export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    messageText: string
}
const initialState = {
    dialogs: [
        {id: v1(), name: 'Alexander'},
        {id: v1(), name: 'Alena'}
    ],
    messages: [
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'How are you?'}
    ],
    messageText: ''
}

export type DialogsActionsTypes = SendMessageACType | ChangeMessageTextACType

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {id: v1(), message: action.messageText}
            return {...state, messages: [...state.messages, newMessage], messageText: ''}
        case CHANGE_MESSAGE_TEXT:
            return {...state, messageText: action.messageText}
        default:
            return state
    }
}

type SendMessageACType = ReturnType<typeof SendMessageAC>
export const SendMessageAC = (messageText: string) => {
    return {
        type: SEND_MESSAGE,
        messageText
    } as const
}

type ChangeMessageTextACType = ReturnType<typeof ChangeMessageAC>
export const ChangeMessageAC = (messageText: string) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        messageText
    } as const
}