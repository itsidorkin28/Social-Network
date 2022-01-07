import { Dispatch } from '@reduxjs/toolkit';
import {ChangeAppStatusType, setAppError, SetAppErrorType, setAppStatus} from '../app/app-reducer';
import {ResponseType} from '../api/auth-api';

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
	if (data.messages.length) {
		dispatch(setAppError(data.messages[0]));
	} else {
		dispatch(setAppError('Some error occurred'));
	}
	dispatch(setAppStatus('failed'));
};

export const handleServerNetworkError = (e: {message: string}, dispatch: ErrorUtilsDispatchType) => {
	dispatch(setAppError(e.message));
	dispatch(setAppStatus('failed'));
};

type ErrorUtilsDispatchType = Dispatch<ChangeAppStatusType | SetAppErrorType>;