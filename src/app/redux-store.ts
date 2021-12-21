import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "../components/Profile/profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "../components/Dialogs/dialogs-reducer";
import {UsersActionsTypes, usersReducer} from "../components/Users/users-reducer";
import {AuthActionsTypes, authReducer} from "../components/Login/auth-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppActionsType = DialogsActionsTypes | UsersActionsTypes | ProfileActionsTypes | AuthActionsTypes

export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>


//@ts-ignore
console.log(window.store = store)


