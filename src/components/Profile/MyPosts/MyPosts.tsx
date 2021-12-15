import Post, {PostType} from "./Post/Post";
import s from './MyPosts.module.scss'
import {KeyboardEvent, ChangeEvent, useCallback} from "react";
import TextField from '@mui/material/TextField';
import React from "react";
import {addPost, changePost} from "../../../redux/profile/profile-reducer";
import { IconButton } from "@mui/material";
import { PostAdd } from "@mui/icons-material";
import {useDispatch} from "react-redux";

type MyPostType = {
    postText: string
    posts: Array<PostType>
}

export const MyPosts = ({posts, postText}: MyPostType) => {
    const dispatch = useDispatch()
    const postsElements = posts.map(m => <Post key={m.id} id={m.id} post={m.post}
                                                                 likesCount={m.likesCount}/>)
    const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changePost(e.currentTarget.value))
    }, [dispatch])

    const addPostHandler = useCallback(() => {
        const newPost = postText.trim()
        if (newPost) {
            dispatch(addPost(newPost))
        }
    }, [dispatch, postText])
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            addPostHandler()
        }
    }
    return (
        <div className={s.myPosts}>
            <h3>All posts</h3>
            <div className={s.postForm}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="What's new?"
                    multiline
                    maxRows={4}
                    value={postText}
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}/>
                <IconButton onClick={addPostHandler} style={{marginLeft: '5px'}}>
                    <PostAdd color="primary"/>
                </IconButton>
            </div>
            {postsElements}
        </div>
    )
}