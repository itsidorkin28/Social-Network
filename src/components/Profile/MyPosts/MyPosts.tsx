import Post, {PostType} from "./Post/Post";
import s from './MyPosts.module.scss'
import {useCallback} from "react";
import React from "react";
import {addPost} from "../profile-reducer";
import {useDispatch} from "react-redux";
import {MyPostsForm} from "./MyPostsForm";

type MyPostType = {
    posts: Array<PostType>
}

export const MyPosts = React.memo(({posts}: MyPostType) => {
    const dispatch = useDispatch()
    const postsElements = posts.map(m => <Post key={m.id} id={m.id} post={m.post}
                                                                 likesCount={m.likesCount}/>)

    const addPostHandler = useCallback((value: string) => {
        const newPost = value.trim()
        if (newPost) {
            dispatch(addPost(newPost))
        }
    }, [dispatch])

    return (
        <div className={s.myPosts}>
            <h3>All posts</h3>
            <div className={s.postForm}>
                <MyPostsForm addPostHandler={addPostHandler}/>
            </div>
            {postsElements}
        </div>
    )
})