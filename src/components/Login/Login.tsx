import React from 'react';
import s from './Login.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {Navigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const Login = React.memo(() => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    // if (isAuth) return <Navigate to={"/profile"}/>
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
})

const LoginForm = () => {
    return <div>
        <Formik
            initialValues={{ login: '', password: '', rememberMe: '' }}

            onSubmit={values => console.log(values)}
        >
            <Form className={s.loginForm}>
                <Field name="login" type="text" placeholder={'Login'}/>
                <ErrorMessage name="login" />

                <Field name="password" type="password" placeholder={'Password'}/>
                <ErrorMessage name="password" />

                <div>
                    <Field name="rememberMe" type="checkbox" />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>

                <button type="submit">Login</button>
            </Form>
        </Formik>
    </div>
}

