import React from 'react';
import s from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {Navigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {loginTC} from "./auth-reducer";

type LoginFormType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .required('No password provided')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const LoginForm = () => {
    const dispatch = useDispatch()
    const loginHandler = (email: string, password: string, rememberMe: boolean) => {
        dispatch(loginTC(email, password, rememberMe))
    }
    const submit = (values: LoginFormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        loginHandler(values.email, values.password, values.rememberMe)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {
                ({isSubmitting}) => (
                    <Form className={s.loginForm}>
                        <Field name="email" type="email" placeholder={'Email'}/>
                        <ErrorMessage name="email" />

                        <Field name="password" type="password" placeholder={'Password'}/>
                        <ErrorMessage name="password" />

                        <div>
                            <Field name="rememberMe" type="checkbox" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>

                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </Form>)
            }
        </Formik>
    </div>
}

export const Login = React.memo(() => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    if (isAuth) return <Navigate to={"/profile"}/>
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
})

