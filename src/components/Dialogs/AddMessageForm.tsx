import React from "react";
import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { sendMessage } from "./dialogs-reducer";

const userSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FormType = {
    newMessageBody: string
}

export const AddMessageForm = React.memo(() => {
    const dispatch = useDispatch()

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        const newMessageBody = values.newMessageBody.trim()
        if (newMessageBody) {
            dispatch(sendMessage(newMessageBody))
        }
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{newMessageBody: ''}}
            onSubmit={submit}
            validate={userSearchFormValidate}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                        <Field component={'textarea'} name="newMessageBody" placeholder='Type message'/>
                        <Button type="submit" variant="contained" endIcon={<SendIcon/>} disabled={isSubmitting}>
                            Send
                        </Button>
                    </Form>
                )
            }
        </Formik>


    </div>
})