import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from '../features/Profile/profile-reducer';
import {UsersActionsType, usersReducer} from '../features/Users/users-reducer';
import {AuthActionsType, authReducer} from '../features/Login/auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {appReducer, AppReducerActionsType} from './app-reducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppActionsType = UsersActionsType | ProfileActionsType | AuthActionsType | AppReducerActionsType;

export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>;


//@ts-ignore
window.store = store;


