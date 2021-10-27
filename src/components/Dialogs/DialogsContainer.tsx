import React from 'react'
import {ChangeMessageAC, SendMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()

                const sendMessage = (value: string) => {
                    const action = SendMessageAC(value)
                    store.dispatch(action)

                }
                const changeMessage = (value: string) => {
                    const action = ChangeMessageAC(value)
                    store.dispatch(action)
                }
                return (
                    <Dialogs dialogsPage={state.dialogsPage}
                             sendMessage={sendMessage}
                             changeMessage={changeMessage}/>
                )
            }}
        </StoreContext.Consumer>

    )
}
