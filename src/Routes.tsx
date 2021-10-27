import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";
import {Error404} from './Error404';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const path = {
    default: '/',
    socialNetwork: '/social-network',
    myPage: '/mypage',
    dialogs: '/dialogs'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={path.default} exact
                       render={() => <Profile />}/>
                <Route path={path.socialNetwork} exact
                       render={() => <Profile />}/>
                <Route path={path.myPage}
                       render={() => <Profile />}/>
                <Route path={path.dialogs}
                       render={() => <DialogsContainer />}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
};

