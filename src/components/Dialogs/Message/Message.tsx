import s from "./Message.module.scss";
import React from "react";

export type MessageType = {
    id: string
    message: string
}
export const Message = ({id, message}: MessageType) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}