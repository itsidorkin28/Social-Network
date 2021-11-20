import React from 'react'
import './App.module.scss'
import s from './App.module.scss'
import {Navbar} from "./components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import {Routes} from "./Routes";

export const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Container fixed maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper style={{padding: '15px 0'}}>
                            <Navbar/>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper style={{padding: '15px 15px'}}>
                            <Routes />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}


