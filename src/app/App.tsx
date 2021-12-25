import React, {useEffect} from 'react'
import './App.module.scss'
import s from './App.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {initializationAppTC, RequestStatusType} from "./app-reducer";
import {AppStateType} from './redux-store';
import {Header} from "../features/Header/Header";
import {Main} from "../features/Main/Main";


export const App = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector<AppStateType, RequestStatusType>(state => state.app.appStatus)

    useEffect(() => {
        dispatch(initializationAppTC())
    }, [dispatch])

    return (
        <div>
            {appStatus === 'loading'
                ? <></>
                : <div className={s.app}>
                    <Header/>
                    <Main/>
                </div>}
        </div>
    );
}


