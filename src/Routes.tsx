import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsTypes} from "./redux/state";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {MessageType} from "./components/Dialogs/Message/Message";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import { Error404 } from './Error404';

type RoutesType = {
    profilePage: {
        posts: Array<PostType>
    }
    messagesPage: {
        messages: Array<MessageType>
        dialogs: Array<DialogItemType>
    }
    dispatch: (action: ActionsTypes) => void
}
export const Routes = (props: RoutesType) => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Profile profilePage={props.profilePage}
                                                               dispatch={props.dispatch}/>}/>
                <Route path={'/social-network'} exact render={() => <Profile profilePage={props.profilePage}
                                                               dispatch={props.dispatch}/>}/>
                <Route path='/mypage'
                       render={() => <Profile profilePage={props.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs messagesPage={props.messagesPage}
                                              dispatch={props.dispatch}/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
};

