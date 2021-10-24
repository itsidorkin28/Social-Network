import s from './Profile.module.scss'
import React from "react";
import UserDescription from './UserDescription/UserDescription';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

type Profile = {
    store: any
}

export function Profile(props: Profile) {
    return (
        <div className={s.myPage}>
            <div className={s.userDescription}>
                <UserDescription/>
            </div>
            <div className={s.myPosts}>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}