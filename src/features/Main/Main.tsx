import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Users} from "../Users/Users";
import {Login} from "../Login/Login";
import { Navbar } from '../Navbar/Navbar';
import {Profile} from "../Profile/Profile";

type PropsType = {}

export const Main = React.memo(({}: PropsType) => {
    return (
        <main>
            <Navbar/>

            <Routes>
                <Route path="profile" element={<Profile/>}>
                    <Route path=":userId" element={<Profile/>}/>
                </Route>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path="*" element={<div>404</div>}/>
                <Route path={'social-network'} element={<Users/>}/>
                <Route path={'/'} element={<Users/>}/>
            </Routes>
        </main>
    )
})


