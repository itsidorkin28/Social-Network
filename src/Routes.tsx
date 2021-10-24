import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {MessageType} from "./components/Dialogs/Message/Message";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {Error404} from './Error404';
import {ActionsTypes} from "./redux/redux-store";

type RoutesType = {
    profilePage: {
        posts: Array<PostType>
    }
    dialogsPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
    dispatch: (action: ActionsTypes) => void
}

const path = {
    default: '/',
    socialNetwork: '/social-network',
    myPage: '/mypage',
    dialogs: '/dialogs'
}

export const Routes = (props: RoutesType) => {
    return (
        <div>
            <Switch>
                <Route path={path.default} exact
                       render={() => <Profile profilePage={props.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route path={path.socialNetwork} exact
                       render={() => <Profile profilePage={props.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route path={path.myPage}
                       render={() => <Profile profilePage={props.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route path={path.dialogs}
                       render={() => <Dialogs dialogsPage={props.dialogsPage}
                                              dispatch={props.dispatch}/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
};

