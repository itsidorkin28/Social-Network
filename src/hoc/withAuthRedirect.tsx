import React, {ComponentType} from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../app/redux-store";
import {Navigate} from "react-router-dom";


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: T) {
        const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
        if (!isAuth) return <Navigate to={"/login"}/>
        return <Component {...props}/>
    }

    return RedirectComponent
}


