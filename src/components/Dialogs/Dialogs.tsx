import React from 'react'
import s from './Dialogs.module.scss'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsType = {
    messagesPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
}

function Dialogs(props: DialogsType) {

    const dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messagesPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs