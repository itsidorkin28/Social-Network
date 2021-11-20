import React from 'react';
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';

export const Routes = () => {
    return (
        <div>
            <Route path={'/profile/:userId?'}
                   render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'}
                   render={() => <DialogsContainer/>}/>
            <Route path={'/users'}
                   render={() => <UsersContainer/>}/>

        </div>
    );
};

