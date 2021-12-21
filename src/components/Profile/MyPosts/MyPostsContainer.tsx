import {useSelector} from "react-redux";
import React from 'react'
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../app/redux-store";
import {PostType} from "./Post/Post";



export const MyPostsContainer = React.memo(() => {
    const posts = useSelector<AppStateType, Array<PostType>>(state => state.profilePage.posts)
    return <MyPosts posts={posts}/>
})

