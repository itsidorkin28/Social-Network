import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Dialogs.module.scss'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {ActionsTypes, AddPostAC, SendMessageAC} from "../../redux/state";

type DialogsType = {
    messagesPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsType) {

    const dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messagesPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const sendMessage = () => {
        if (value.trim()) {
            props.dispatch(SendMessageAC(value.trim()))
            setValue('')
        }
    }
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
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
                            label="What's new?"
                            multiline
                            maxRows={4}
                            value={value}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}/>

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

export default Dialogs