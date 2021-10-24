import Post, {PostType} from "./Post/Post";
import s from './MyPosts.module.scss'
import {useState, KeyboardEvent, ChangeEvent} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type MyPostType = {
    posts: Array<PostType>
    addPost: (value: string) => void
}

export const MyPosts = (props: MyPostType) => {
    const postsElements = props.posts.map(m => <Post key={m.id} id={m.id} post={m.post} likesCount={m.likesCount}/>)
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const addPost = () => {
        const newPost = value.trim()
        if (newPost) {
            props.addPost(newPost)
            setValue('')
        }
    }
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
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
                        value={value}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}/>

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