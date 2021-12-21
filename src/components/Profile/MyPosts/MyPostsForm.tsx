import {Field, Form, Formik} from "formik";
import React from "react";
import {PostAdd} from "@mui/icons-material";
import {IconButton} from "@mui/material";

type MyPostsFormType = {
    addPostHandler: (value: string) => void
}

type FormType = {
    postText: string
}
const userSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

export const MyPostsForm = React.memo(({addPostHandler}: MyPostsFormType) => {
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        addPostHandler(values.postText)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{postText: ''}}
            onSubmit={submit}
            validate={userSearchFormValidate}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                        <Field component={'textarea'} name="postText" type="text" placeholder={'Type post'}/>
                        <IconButton type="submit" disabled={isSubmitting} style={{marginLeft: '5px'}}>
                            <PostAdd color="primary"/>
                        </IconButton>

                    </Form>)
            }
        </Formik>
    </div>
})