import s from './Profile.module.scss'
import React from "react";
import UserDescription from './UserDescription/UserDescription';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import {StoreType} from "../../redux/redux-store";

type Profile = {
    store: StoreType
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