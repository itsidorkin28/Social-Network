import React from "react";
import s from './UserDescription.module.scss'
import {UserDescriptionType} from "../../../redux/profile-reducer";
import {Avatar} from "@mui/material";

type UserDescriptionPropsType = {
    profile: UserDescriptionType
}

export const UserDescription = ({profile}: UserDescriptionPropsType) => {
    return (
        <div className={s.userDescription}>
            <h3>{profile.fullName}</h3>
            <Avatar alt={profile.fullName} src={profile.photos?.large} sx={{width: 150, height: 150}} style={{marginBottom: '15px'}}/>
            <span>{profile.aboutMe}</span>
        </div>
    )
}

