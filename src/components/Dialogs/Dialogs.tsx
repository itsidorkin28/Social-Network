import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Dialogs.module.scss'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

type DialogsType = {
    dialogsPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
        messageText: string
    }
    sendMessage: (value: string) => void
    changeMessage: (value: string) => void
}

export const Dialogs = (props: DialogsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMessage(e.currentTarget.value);
    };

    const sendMessage = () => {
        const newMessage = props.dialogsPage.messageText.trim()
        if (newMessage) {
            props.sendMessage(newMessage)
        }
    }
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            sendMessage()
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
                            value={props.dialogsPage.messageText}
                            onChange={changeHandler}
                            onKeyPress={keyPressHandler}/>

                    </Box>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" endIcon={<SendIcon/>} onClick={sendMessage}>
                            Send
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
