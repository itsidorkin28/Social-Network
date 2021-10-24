import React from 'react'
import './App.module.scss'
import s from './App.module.scss'
import {Navbar} from "./components/Navbar/Navbar";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import {Routes} from "./Routes";
import { ActionsTypes, StateType } from './redux/redux-store';

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
                                    dialogsPage={props.state.dialogsPage}/>
                        </Item>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}

export default App;
