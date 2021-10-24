import {combineReducers, createStore} from "redux";
import {AddPost, ProfilePageType, profileReducer} from "./profile-reducer";
import {DialogsPageType, dialogsReducer, SendMessage} from "./dialogs-reducer";

export type ActionsTypes = ReturnType<typeof AddPost> | ReturnType<typeof SendMessage>
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers)