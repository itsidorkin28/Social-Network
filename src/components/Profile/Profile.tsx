import s from './Profile.module.scss'
import React from "react";
import {UserDescription} from './UserDescription/UserDescription';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../api/profile-api";
import {CircularProgress} from "@mui/material";


type ProfilePropsType = {
    profile: ProfileType | null
    status: string
}

export const Profile = React.memo(({status, profile}: ProfilePropsType) => {
    return <div className={s.profile}>
        <UserDescription profile={profile} status={status}/>
        <MyPostsContainer/>
    </div>
})