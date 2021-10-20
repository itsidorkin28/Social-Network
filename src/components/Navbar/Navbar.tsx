import s from './Navbar.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={s.navbar}>
            <div>
               <NavLink to='/mypage' activeClassName={s.active}>
                   My Page
               </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}>
                    Messages
                </NavLink>
            </div>
        </nav>
    )
}