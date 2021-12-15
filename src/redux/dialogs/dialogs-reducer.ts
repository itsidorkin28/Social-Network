import {MessageType} from "../../components/Dialogs/Message/Message";
import {v1} from "uuid";
import {DialogItemType} from "../../components/Dialogs/DialogItem/DialogItem";

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

export type DialogsActionsTypes = SendMessageType | ChangeMessageTextType

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {id: v1(), message: action.messageText}
            return {...state, messages: [...state.messages, newMessage], messageText: ''}
        case 'CHANGE-MESSAGE-TEXT':
            return {...state, messageText: action.messageText}
        default:
            return state
    }
}

type SendMessageType = ReturnType<typeof sendMessage>
export const sendMessage = (messageText: string) => {
    return {
        type: 'SEND-MESSAGE',
        messageText
    } as const
}

type ChangeMessageTextType = ReturnType<typeof changeMessage>
export const changeMessage = (messageText: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        messageText
    } as const
}