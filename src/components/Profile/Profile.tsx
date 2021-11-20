import s from './Profile.module.scss'
import React from "react";
import UserDescription from './UserDescription/UserDescription';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserDescriptionType} from "../../redux/profile-reducer";
import { Error404 } from '../../Error404';

type ProfileType = {
    profile: UserDescriptionType
}
export function Profile(props: ProfileType) {
    if (!props.profile) {
        return <Error404/>
    } else {
        return (
            <div className={s.profile}>
                <UserDescription profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        )
    }
}