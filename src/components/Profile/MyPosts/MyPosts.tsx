import Post from "./Post/Post";
import s from './MyPosts.module.scss'
import {KeyboardEvent, ChangeEvent} from "react";
import TextField from '@mui/material/TextField';
import React from "react";
import {ProfilePageType} from "../../../redux/profile-reducer";
import { IconButton } from "@mui/material";
import { PostAdd } from "@mui/icons-material";

type MyPostType = {
    profilePage: ProfilePageType
    addPost: (value: string) => void
    changePost: (value: string) => void

}

export const MyPosts = (props: MyPostType) => {
    const postsElements = props.profilePage.posts.map(m => <Post key={m.id} id={m.id} post={m.post}
                                                                 likesCount={m.likesCount}/>)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changePost(e.currentTarget.value)
    };

    const addPost = () => {
        const newPost = props.profilePage.postText.trim()
        if (newPost) {
            props.addPost(newPost)
        }
    }
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            addPost()
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
                    value={props.profilePage.postText}
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}/>
                <IconButton onClick={addPost} style={{marginLeft: '5px'}}>
                    <PostAdd color="primary"/>
                </IconButton>
            </div>
            {postsElements}
        </div>
    )
}