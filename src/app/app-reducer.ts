export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type AppErrorType = string | null


const initialState = {
    appStatus: "idle" as RequestStatusType,
    error: null as AppErrorType,
    initialization: false as boolean
}

type AppInitialStateType = typeof initialState

export const appReducer = (state = initialState, action: AppReducerActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, appStatus: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZATION':
            return {...state, initialization: action.value}
        default:
            return state
    }
}

// AC

export type AppReducerActionsType = ChangeAppStatusType | SetAppErrorType | ReturnType<typeof setAppInitialization>
export type ChangeAppStatusType = ReturnType<typeof setAppStatus>
export type SetAppErrorType = ReturnType<typeof setAppError>

export const setAppError = (error: AppErrorType) => {
    return {type: 'APP/SET-ERROR', error} as const
}
export const setAppStatus = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}
export const setAppInitialization = (value: boolean) => {
    return {type: 'APP/SET-INITIALIZATION', value} as const
}


