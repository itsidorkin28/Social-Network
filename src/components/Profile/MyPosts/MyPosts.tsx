import Post from "./Post/Post";
import s from './MyPosts.module.scss'
import {KeyboardEvent, ChangeEvent, useCallback} from "react";
import TextField from '@mui/material/TextField';
import React from "react";
import {addPost, changePost, ProfilePageType} from "../../../redux/profile-reducer";
import { IconButton } from "@mui/material";
import { PostAdd } from "@mui/icons-material";
import {useDispatch} from "react-redux";

type MyPostType = {
    profilePage: ProfilePageType
}

export const MyPosts = ({profilePage}: MyPostType) => {
    const dispatch = useDispatch()
    const postsElements = profilePage.posts.map(m => <Post key={m.id} id={m.id} post={m.post}
                                                                 likesCount={m.likesCount}/>)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changePost(e.currentTarget.value))
    };

    const addPostHandler = useCallback(() => {
        const newPost = profilePage.postText.trim()
        if (newPost) {
            dispatch(addPost(newPost))
        }
    }, [dispatch, profilePage.postText])
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
                    value={profilePage.postText}
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