import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {logoutTC} from "../Login/auth-reducer";

type HeaderType = {
    isAuth: boolean
    login: string | null
}

export const Header = React.memo(({isAuth, login}: HeaderType) => {
    const dispatch = useDispatch()
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
                </AppBar>
            </Box>
        </header>
    )
})