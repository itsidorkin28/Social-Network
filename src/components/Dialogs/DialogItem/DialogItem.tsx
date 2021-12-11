import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType = {
    id: string
    name: string
}
export const DialogItem = ({id, name}: DialogItemType) => {
    let path = `/dialogs/${id}`

    return (
        <div className={s.dialogItem}>
            <NavLink to={path} className={({ isActive }) => isActive ? s.active : ''}>{name}</NavLink>
        </div>
    )
}