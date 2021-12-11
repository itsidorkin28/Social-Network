import React from 'react'
import './App.module.scss'
import s from './App.module.scss'
import {Navbar} from "./components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import {AppRoutes} from "./AppRoutes";
import {HeaderContainer} from "./components/Header/HeaderContainer";


export const App = () => {

    return (
        <div className={s.app}>
            <HeaderContainer/>

            <Navbar/>

            <Paper style={{padding: '15px 15px'}}>
                <AppRoutes/>
            </Paper>


        </div>
    );
}


