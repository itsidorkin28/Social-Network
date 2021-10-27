import Post, {PostType} from "./Post/Post";
import s from './MyPosts.module.scss'
import {KeyboardEvent, ChangeEvent} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";

type MyPostType = {
    profilePage: {
        posts: Array<PostType>
        postText: string
    }
    addPost: (value: string) => void
    changePostText: (value: string) => void

}

export const MyPosts = (props: MyPostType) => {
    const postsElements = props.profilePage.posts.map(m => <Post key={m.id} id={m.id} post={m.post} likesCount={m.likesCount}/>)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changePostText(e.currentTarget.value)
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
            <div>
                <h3>All posts</h3>
            </div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {mb: 1, width: '100%'},
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="What's new?"
                        multiline
                        maxRows={4}
                        value={props.profilePage.postText}
                        onChange={changeHandler}
                        onKeyPress={keyPressHandler}/>

                </Box>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" onClick={addPost}>
                        Add post
                    </Button>
                </Stack>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}