import * as React from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {AppStateType} from "../../app/redux-store";
import {getAuthUserDataTC} from "../Login/auth-reducer";


export const HeaderContainer = React.memo(() => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<AppStateType, string | null>(state => state.auth.data.login)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [dispatch])
    return <Header isAuth={isAuth} login={login}/>
})
