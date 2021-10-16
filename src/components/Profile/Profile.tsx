import s from './Profile.module.scss'
import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";

type ProfileType = {
    profilePage: {
        posts: Array<PostType>
        postText: string
    }
    addPost: () => void
    changePostText: (postText: string) => void
}

export function Profile(props: ProfileType) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} postText={props.profilePage.postText} addPost={props.addPost}
                     changePostText={props.changePostText}/>
        </div>
    )
}