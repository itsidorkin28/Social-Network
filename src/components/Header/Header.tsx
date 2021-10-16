import s from './Header.module.scss'
import React from "react";

export function Header() {
    const logo: string = 'SOCIAL NETWORK'
    return (
        <header className={s.header}>
            <div className={s.headerItem}>
                <span>{logo}</span>
            </div>
        </header>
    )
}