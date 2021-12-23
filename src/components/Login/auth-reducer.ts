import {authAPI, AuthMeData, AuthType} from "../../api/auth-api";
import {ThunkType} from "../../app/redux-store";


export type AuthDomainType = AuthType<AuthMeData> & {
    isAuth: boolean
}

const initialState: AuthDomainType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false,
}


export const authReducer = (state = initialState, action: AuthActionsTypes): AuthDomainType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, data: {...state.data, ...action.payload}, isAuth: action.isAuth}
        default:
            return state
    }
}

// AC

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        payload: {id, login, email},
        isAuth
    } as const
}

// Thunk

export const getAuthUserDataTC = (): ThunkType => async dispatch => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        debugger
        dispatch(getAuthUserDataTC())
    }
}

export const logoutTC = (): ThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
