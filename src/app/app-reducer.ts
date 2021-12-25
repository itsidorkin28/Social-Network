import {ThunkType} from "./redux-store";
import {getAuthUserDataTC} from "../features/Login/auth-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState = {
    appStatus: "idle" as RequestStatusType,
}

type AppInitialStateType = typeof initialState

export const appReducer = (state = initialState, action: AppReducerActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/CHANGE-APP-STATUS':
            return {...state, appStatus: action.status}
        default:
            return state
    }
}

// AC

export type AppReducerActionsType = ChangeAppStatusType
export type ChangeAppStatusType = ReturnType<typeof changeAppStatus>

export const changeAppStatus = (status: RequestStatusType) => {
    return {type: 'APP/CHANGE-APP-STATUS', status} as const
}

export const initializationAppTC = (): ThunkType => async dispatch => {
    dispatch(changeAppStatus('loading'))
    try {
        await dispatch(getAuthUserDataTC())
        dispatch(changeAppStatus('succeeded'))
    } catch (e) {
        dispatch(changeAppStatus('failed'))
        console.log(e as Error)
    }
}
