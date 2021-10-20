import Post, {PostType} from "./Post/Post";
import s from './MyPosts.module.scss'
import {useState, KeyboardEvent, createRef, ChangeEvent} from "react";
import {ActionsTypes, AddPostAC} from "../../../redux/state";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type MyPostType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostType) {
    const postsElements = props.posts.map(m => <Post key={m.id} id={m.id} post={m.post} likesCount={m.likesCount}/>)
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const addPost = () => {
        if(value.trim()) {
            props.dispatch(AddPostAC(value.trim()))
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
            <div className={s.myPostsTitle}>
                <h3>My posts</h3>
            </div>
            <div className={s.myPostsTextArea}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {mb: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="What's new?"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </Box>

                <Stack direction="row" spacing={1}>
                    <Button variant="outlined" startIcon={<DeleteIcon/>}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon/>} onClick={addPost}>
                        Send
                    </Button>
                </Stack>

            </div>
            <div className={s.myPostsElements}>
                {postsElements}
            </div>
        </div>


    )
}

export default MyPosts