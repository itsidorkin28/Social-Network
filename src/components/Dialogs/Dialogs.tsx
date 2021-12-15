import React, {ChangeEvent, KeyboardEvent, useCallback} from 'react'
import s from './Dialogs.module.scss'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch} from "react-redux";
import { changeMessage, sendMessage } from '../../redux/dialogs/dialogs-reducer';

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    messageText: string
}

export const Dialogs = ({dialogs, messages, messageText}: DialogsType) => {
    const dispatch = useDispatch()
    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMessage(e.currentTarget.value))
    };

    const sendMessageHandler = useCallback(() => {
        const newMessage = messageText.trim()
        if (newMessage) {
            dispatch(sendMessage(newMessage))
        }
    }, [dispatch, messageText])
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            sendMessageHandler()
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {mb: 1, width: '100%'},
                        }}
                        noValidate
                        autoComplete="off">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Type message"
                            multiline
                            maxRows={4}
                            value={messageText}
                            onChange={changeHandler}
                            onKeyPress={keyPressHandler}/>

                    </Box>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" endIcon={<SendIcon/>} onClick={sendMessageHandler}>
                            Send
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
