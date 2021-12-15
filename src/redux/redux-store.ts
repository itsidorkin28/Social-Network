import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile/profile-reducer";
import {dialogsReducer} from "./dialogs/dialogs-reducer";
import {usersReducer} from "./users/users-reducer";
import {authReducer} from "./auth/auth-reducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
console.log(window.store = store)


