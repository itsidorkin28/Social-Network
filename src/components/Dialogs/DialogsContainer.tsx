import React from 'react'
import { SendMessage } from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    store: any
}

export const DialogsContainer = (props: DialogsContainerType) => {
    const state = props.store.getState()

    const sendMessage = (value: string) => {
        const action = SendMessage(value)
        props.store.dispatch(action)

    }

    return (
        <Dialogs dialogsPage={state.dialogsPage} sendMessage={sendMessage}/>
    )
}
