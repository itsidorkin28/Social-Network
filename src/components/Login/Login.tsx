import React from 'react';
import s from './Login.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

export const Login = React.memo(() => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    if (isAuth) return <Navigate to={"/profile"}/>
    return (
        <div className={s.login}>
            <h1>Login</h1>
        </div>
    )
})


