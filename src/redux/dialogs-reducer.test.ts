import {v1} from "uuid";
import {DialogsPageType, dialogsReducer} from "./dialogs-reducer";

let initialState: DialogsPageType = {
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

beforeEach(() => {
    initialState = {
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
})

test('correct send message', () => {
    const endState = dialogsReducer(initialState, {
        type: 'SEND-MESSAGE',
        messageText: 'New Message'
    })

    expect(endState.messages.length).toBe(3)
    expect(endState.dialogs.length).toBe(2)
    expect(endState.messages[2].message).toBe('New Message')
})

test('correct change message text', () => {
    const endState = dialogsReducer(initialState, {
        type: 'CHANGE-MESSAGE-TEXT',
        messageText: 'New Message Text'
    })

    expect(endState.messages.length).toBe(2)
    expect(endState.dialogs.length).toBe(2)
    expect(endState.messageText).toBe('New Message Text')
})
