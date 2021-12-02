import * as React from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

export const HeaderContainer = React.memo(() => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<RootStateType, string>(state => state.auth.data.login)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }, [])
    return <Header isAuth={isAuth} login={login}/>
})
