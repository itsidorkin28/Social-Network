import {Dispatch} from "redux";
import {authAPI, AuthType} from "../../api/auth-api";


type AuthDomainType = AuthType & {
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

export type AuthActionsTypes = SetUserDataType

type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {id, login, email}
    } as const
}

// Thunk

export const getAuthUserData = (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}
