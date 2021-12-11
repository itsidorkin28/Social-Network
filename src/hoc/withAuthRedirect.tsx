import React, {ComponentType} from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: T) {
        const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
        if (!isAuth) return <Navigate to={"/login"}/>
        return <Component {...props}/>
    }

    return RedirectComponent
}


