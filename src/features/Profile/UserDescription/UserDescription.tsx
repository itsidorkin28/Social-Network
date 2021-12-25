import React, { memo } from "react";
import s from './UserDescription.module.scss'
import {Avatar} from "@mui/material";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import {ProfileType} from "../../../api/profile-api";

type UserDescriptionPropsType = {
    profile: ProfileType | null
    status: string
}

export const UserDescription = memo(({status, profile}: UserDescriptionPropsType) => {
    return (
        <div className={s.userDescription}>
            <h3>{profile?.fullName}</h3>
            <ProfileStatus status={status}/>
            <Avatar alt={profile?.fullName} src={profile?.photos.large} sx={{width: 150, height: 150}} style={{marginBottom: '15px'}}/>
            <span>About me: {profile?.aboutMe}</span>
        </div>
    )
})

