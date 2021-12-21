import React, {ComponentType, memo} from 'react'
import {useSelector} from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import {Dialogs} from "./Dialogs";
import {DialogItemType} from "./DialogItem/DialogItem";
import {MessageType} from "./Message/Message";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = () => {
    const dialogs = useSelector<AppStateType, Array<DialogItemType>>(state => state.dialogsPage.dialogs)
    const messages = useSelector<AppStateType, Array<MessageType>>(state => state.dialogsPage.messages)
    return <Dialogs dialogs={dialogs} messages={messages} />
}

export default compose<ComponentType>(withAuthRedirect, memo)(DialogsContainer)