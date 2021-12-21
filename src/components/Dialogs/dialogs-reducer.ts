import {MessageType} from "./Message/Message";
import {v1} from "uuid";
import {DialogItemType} from "./DialogItem/DialogItem";

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
    ],
   }


export type DialogsActionsTypes = ReturnType<typeof sendMessage>

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {id: action.id, message: action.newMessageBody}
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}


export const sendMessage = (newMessageBody: string) => {
    return {type: 'SEND-MESSAGE', id: v1(), newMessageBody} as const
}
