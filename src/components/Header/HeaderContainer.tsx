import * as React from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth/auth-reducer";


export const HeaderContainer = React.memo(() => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<RootStateType, string>(state => state.auth.data.login)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthUserData)
    }, [dispatch])
    return <Header isAuth={isAuth} login={login}/>
})
