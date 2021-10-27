import s from './Profile.module.scss'
import React from "react";
import UserDescription from './UserDescription/UserDescription';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


export function Profile() {
    return (
        <div className={s.myPage}>
            <div className={s.userDescription}>
                <UserDescription/>
            </div>
            <div className={s.myPosts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}