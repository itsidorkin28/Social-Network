import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from './components/Profile/ProfileContainer';
import { Login } from './components/Login/Login';

export const AppRoutes = () => {

    return (
        <main>
            <Routes>
                <Route path="profile" element={<ProfileContainer />}>
                    <Route path=":userId" element={<ProfileContainer />} />
                </Route>
                <Route path={'dialogs'}
                       element={<DialogsContainer/>}/>
                <Route path={'users'}
                       element={<UsersContainer/>}/>
                <Route path={'login'}
                       element={<Login/>}/>
                <Route
                    path="*"
                    element={
                        <div>
                            <p>404 error</p>
                        </div>
                    }
                />
            </Routes>
        </main>
    );
};

