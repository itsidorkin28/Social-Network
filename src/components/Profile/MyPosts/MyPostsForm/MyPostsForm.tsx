import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {PostAdd} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import * as Yup from 'yup';

type MyPostsFormType = {
    addPostHandler: (value: string) => void
}

type FormType = {
    postText: string
}

const validationSchema = Yup.object({
    postText: Yup.string()
        .max(300, 'Must be 300 characters or less')
})

export const MyPostsForm = React.memo(({addPostHandler}: MyPostsFormType) => {
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        addPostHandler(values.postText)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{postText: ''}}
            onSubmit={submit}
            validationSchema={validationSchema}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                        <Field component={'textarea'} name="postText" type="text" placeholder={'Type post'}/>
                        <ErrorMessage name="postText" />
                        <IconButton type="submit" disabled={isSubmitting} style={{marginLeft: '5px'}}>
                            <PostAdd color="primary"/>
                        </IconButton>

                    </Form>)
            }
        </Formik>
    </div>
})