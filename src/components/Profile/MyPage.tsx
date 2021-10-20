import s from './MyPage.module.scss'
import React from "react";
import MyPosts from './MyPosts/MyPosts';
import {PostType} from "./MyPosts/Post/Post";
import {ActionsTypes} from "../../redux/state";
import UserDescription from './UserDescription/UserDescription';

type MyPage = {
    profilePage: {
        posts: Array<PostType>
    }
    dispatch: (action: ActionsTypes) => void
}

export function MyPage(props: MyPage) {
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