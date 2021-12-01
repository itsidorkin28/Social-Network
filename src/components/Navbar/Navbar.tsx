import s from './Navbar.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={s.navbar}>
            <div>
               <NavLink to='/profile' className={({ isActive }) => isActive ? s.active : ''}>
                   Profile
               </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={({ isActive }) => isActive ? s.active : ''}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='/users' className={({ isActive }) => isActive ? s.active : ''}>
                    Find Users
                </NavLink>
            </div>
        </nav>
    )
}