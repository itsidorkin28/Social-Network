import React from 'react'
import './App.module.scss'
import s from './App.module.scss'
import {Navbar} from "../components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import {AppRoutes} from "../Routes/AppRoutes";
import {HeaderContainer} from "../components/Header/HeaderContainer";
import { Grid } from '@mui/material';


export const App = () => {

    return (
        <div className={s.app}>
            <HeaderContainer/>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper style={{padding: '15px 15px', margin: '0 25px 0 50px'}}>
                        <Navbar/>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper style={{padding: '15px 15px', margin: '0 50px 0 0'}}>
                        <AppRoutes/>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    );
}


