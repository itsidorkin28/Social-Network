import React from 'react'
import s from './Dialogs.module.scss'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {AddMessageForm} from "./AddMessageForm";

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>

}

export const Dialogs = ({dialogs, messages}: DialogsType) => {
    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div>
                    <AddMessageForm />
                </div>
            </div>
        </div>
    )
}
