import {useSelector} from "react-redux";
import React from 'react'
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";



export const MyPostsContainer = React.memo(() => {
    const posts = useSelector<RootStateType, Array<PostType>>(state => state.profilePage.posts)
    const postText = useSelector<RootStateType, string>(state => state.profilePage.postText)
    return <MyPosts postText={postText} posts={posts}/>
})

