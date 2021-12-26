import React from 'react';
import {useSelector} from 'react-redux';
import s from './Login.module.scss'
import {LoginForm} from "./LoginForm/LoginForm";
import {AppStateType} from "../../app/redux-store";
import {RequestStatusType} from "../../app/app-reducer";

export const Login = React.memo(() => {
    const appStatus = useSelector<AppStateType, RequestStatusType>(state => state.app.appStatus)
    return (
        appStatus === 'loading' ? <></>
            :
            <div className={s.login}>
                <h1>Login into your account</h1>
                <LoginForm/>
            </div>
    )
})

