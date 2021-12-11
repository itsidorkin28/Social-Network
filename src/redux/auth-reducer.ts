import {Dispatch} from "redux";
import { authAPI } from "../api/auth-api";

type AuthType = {
    data: DataType
    messages: Array<string>
    fieldsErrors: Array<any>
    resultCode: number
    isAuth: boolean
}

type DataType = {
    id: number
    login: string
    email: string
}
const initialState: AuthType = {
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


export const authReducer = (state = initialState, action: AuthActionsTypes): AuthType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export type AuthActionsTypes = SetUserDataType

type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {id, login, email}
    } as const
}

export const getAuthUserData = (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}
