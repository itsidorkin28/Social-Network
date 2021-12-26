import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {useDispatch, useSelector } from 'react-redux';
import {AppErrorType, setAppError} from '../../app/app-reducer';
import {AppStateType} from "../../app/redux-store";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

export function ErrorSnackbar() {
    const dispatch = useDispatch()
    const error = useSelector<AppStateType, AppErrorType>(state => state.app.error)
    const isOpen = error !== null

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppError(null))
    }

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>

    )
}

