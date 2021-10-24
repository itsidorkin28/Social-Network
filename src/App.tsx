import React from 'react'
import './App.module.scss'
import s from './App.module.scss'
import Dialogs from './components/Dialogs/Dialogs';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {ActionsTypes, StateType} from "./redux/state";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Routes} from "./Routes";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

type AppType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {
    return (
        <div className={s.app}>
            <Header/>
            <Container fixed maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item>
                            <Navbar/>
                        </Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item>
                            <Routes dispatch={props.dispatch}
                                    profilePage={props.state.profilePage}
                                    messagesPage={props.state.messagesPage}/>
                        </Item>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}

export default App;
