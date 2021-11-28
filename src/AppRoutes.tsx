import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={'/profile/:userId?'}
                       element={<ProfileContainer/>}/>
                <Route path={'/dialogs'}
                       element={<DialogsContainer/>}/>
                <Route path={'/users'}
                       element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
};

