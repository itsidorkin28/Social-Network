import s from './Profile.module.scss'
import React from "react";
import UserDescription from './UserDescription/UserDescription';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserDescriptionType} from "../../redux/profile-reducer";

type ProfileType = {
    profile: UserDescriptionType
}

export function Profile({profile}: ProfileType) {
    return <div className={s.profile}>
        <UserDescription profile={profile}/>
        <MyPostsContainer/>
    </div>


}