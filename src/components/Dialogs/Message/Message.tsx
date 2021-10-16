import s from "../Dialogs.module.scss";
import React from "react";

export type MessageType = {
    id: string
    message: string
}
export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}