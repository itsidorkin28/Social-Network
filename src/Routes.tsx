import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";
import {Error404} from './Error404';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type RoutesType = {
    store: any
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
                       render={() => <Profile store={props.store}/>}/>
                <Route path={path.socialNetwork} exact
                       render={() => <Profile store={props.store}/>}/>
                <Route path={path.myPage}
                       render={() => <Profile store={props.store}/>}/>
                <Route path={path.dialogs}
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
};

