import s from './Navbar.module.scss'
import React from "react";
import {NavLink} from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={s.navbar}>
            <NavLink to='/profile' className={({isActive}) => isActive ? s.active : ''}>
                Profile
            </NavLink>
            <NavLink to='/users' className={({isActive}) => isActive ? s.active : ''}>
                Users
            </NavLink>
        </nav>
    )
}