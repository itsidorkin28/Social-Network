import React from 'react'
import './App.module.scss'
import s from './App.module.scss'
import Dialogs from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/state";

type AppType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {
    return (
        
        <div className={s.app}>
            <Header/>
            <Navbar/>
            <div className={s.appContent}>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
            </div>
        </div>

    );
}

export default App;
