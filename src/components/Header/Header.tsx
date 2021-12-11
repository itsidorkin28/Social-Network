import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type HeaderType = {
    isAuth: boolean
    login: string
}

export const Header = React.memo(({isAuth, login}: HeaderType) => {
    return (
        <header>
            <Box sx={{ flexGrow: 1, mb: 2 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SOCIAL NETWORK
                        </Typography>
                        {isAuth ? login : <Button color="inherit">Login</Button>}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
})