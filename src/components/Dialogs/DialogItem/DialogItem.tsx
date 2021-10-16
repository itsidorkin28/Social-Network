import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType = {
    id: string
    name: string
}
export const DialogItem = (props: DialogItemType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.dialogActive}>{props.name}</NavLink>
        </div>
    )
}