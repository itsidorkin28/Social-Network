import s from './Profile.module.scss'
import React from "react";
import MyPosts from './MyPosts/MyPosts';
import {PostType} from "./MyPosts/Post/Post";
import {ActionsTypes} from "../../redux/state";
import UserDescription from './UserDescription/UserDescription';

type Profile = {
    profilePage: {
        posts: Array<PostType>
    }
    dispatch: (action: ActionsTypes) => void
}

export function Profile(props: Profile) {
    return (
        <div className={s.myPage}>
            <div className={s.userDescription}>
                <UserDescription/>
            </div>
            <div className={s.myPosts}>
                <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}