import s from './Profile.module.scss'
import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionsTypes} from "../../redux/state";

type ProfileType = {
    profilePage: {
        posts: Array<PostType>
        postText: string
    }
    dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfileType) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} postText={props.profilePage.postText} dispatch={props.dispatch}/>
        </div>
    )
}