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
import {StoreType} from "./redux/redux-store";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

type AppType = {
    store: StoreType
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
                            <Routes store={props.store}/>
                        </Item>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}

export default App;
