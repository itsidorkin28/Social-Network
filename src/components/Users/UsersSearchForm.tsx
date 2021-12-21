import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "./users-reducer";

type UsersSearchFormType = {
    onFilterChanged: (filter: FilterType) => void

}
type FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}
const userSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

export const UsersSearchForm = React.memo(({onFilterChanged}: UsersSearchFormType) => {
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            onSubmit={submit}
            validate={userSearchFormValidate}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                        <Field name="term" type="text"/>
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>Find</button>
                    </Form>)
            }
        </Formik>
    </div>
})