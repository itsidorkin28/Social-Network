import s from './Navbar.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={s.navbar}>
            <div className={s.navbarItem}>
               <NavLink to='/profile' activeClassName={s.navbarItemActive}>Profile</NavLink>
            </div>
            <div className={s.navbarItem}>
                <NavLink to='/dialogs' activeClassName={s.navbarItemActive}>Messages</NavLink>
            </div>
        </nav>
    )
}