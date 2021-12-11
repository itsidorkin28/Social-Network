import React, {ComponentType} from 'react'
import {useSelector} from 'react-redux';
import { RootStateType } from '../../redux/redux-store';
import {Dialogs} from "./Dialogs";
import {DialogItemType} from "./DialogItem/DialogItem";
import {MessageType} from "./Message/Message";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = withAuthRedirect(() => {
    const dialogs = useSelector<RootStateType, Array<DialogItemType>>(state => state.dialogsPage.dialogs)
    const messages = useSelector<RootStateType, Array<MessageType>>(state => state.dialogsPage.messages)
    const messageText = useSelector<RootStateType, string>(state => state.dialogsPage.messageText)
    return <Dialogs dialogs={dialogs} messages={messages} messageText={messageText}/>
})

export default compose<ComponentType>(withAuthRedirect)(DialogsContainer)