import s from './Navbar.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={s.navbar}>
            <div>
               <NavLink to='/profile' activeClassName={s.active}>
                   Profile
               </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={s.active}>
                    Find Users
                </NavLink>
            </div>
        </nav>
    )
}