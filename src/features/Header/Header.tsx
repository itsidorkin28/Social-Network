import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../Login/auth-reducer";
import {AppStateType} from "../../app/redux-store";
import {RequestStatusType} from "../../app/app-reducer";
import {LinearProgress} from "@mui/material";

export const Header = React.memo(() => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<AppStateType, string | null>(state => state.auth.data.login)
    const appStatus = useSelector<AppStateType, RequestStatusType>(state => state.app.appStatus)
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <header>
            <Box sx={{ flexGrow: 1, mb: 2 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SOCIAL NETWORK
                        </Typography>
                        {isAuth ? login : <Button color="inherit">Login</Button>}
                        {isAuth ? <Button color="inherit" onClick={() => logoutHandler()}>Logout</Button> : null}
                    </Toolbar>
                    {appStatus === 'loading' && <LinearProgress />}
                </AppBar>
            </Box>
        </header>
    )
})