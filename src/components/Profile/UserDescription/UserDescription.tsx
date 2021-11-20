import React from "react";
import s from './UserDescription.module.scss'
import {UserDescriptionType} from "../../../redux/profile-reducer";
import {Avatar} from "@mui/material";

type UserDescriptionPropsType = {
    profile: UserDescriptionType
}

function UserDescription(props: UserDescriptionPropsType) {
    return (
        <div className={s.userDescription}>
            <h3>{props.profile.fullName}</h3>
            <Avatar alt={props.profile.fullName} src={props.profile.photos?.large} sx={{width: 150, height: 150}} style={{marginBottom: '15px'}}/>
            <span>{props.profile.aboutMe}</span>
        </div>
    )
}

export default UserDescription