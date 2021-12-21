import {authAPI, AuthType} from "../../api/auth-api";
import {ThunkType} from "../../app/redux-store";


export type AuthDomainType = AuthType & {
    isAuth: boolean
}

const initialState: AuthDomainType = {
    data: {
        id: 20566,
        login: "itsidorkin",
        email: "itsidorkin28@gmail.com",
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false,
}


export const authReducer = (state = initialState, action: AuthActionsTypes): AuthDomainType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

// AC

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {id, login, email}
    } as const
}

// Thunk

export const getAuthUserDataTC = (): ThunkType => async dispatch => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, login, email))
    }
}
