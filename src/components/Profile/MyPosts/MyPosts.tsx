import Post, {PostType} from "./Post/Post";
import s from './MyPosts.module.scss'
import {useState, KeyboardEvent, createRef} from "react";
import {ActionsTypes, AddPostAC, ChangeNewTextAC} from "../../../redux/state";

type MyPostType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    postText: string
}

function MyPosts(props: MyPostType) {
    const postsElements = props.posts.map(m => <Post key={m.id} id={m.id} post={m.post} likesCount={m.likesCount}/>)
    const postRef = createRef<HTMLTextAreaElement>()
    const [error, setError] = useState<boolean>(false)
    const textError = error ? s.error : ''
    const onPostChange = () => {

        if (postRef.current) {
            const postText = postRef.current.value
            props.dispatch(ChangeNewTextAC(postText))
            setError(false)
        }
    }
    const addPost = () => {
        if (postRef.current) {
            const postText = postRef.current.value
            if(postText.trim()) {
                props.dispatch(AddPostAC())
            } else {
                setError(true)
            }
        }
    }
    const onKeyPressAddPost = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }
    return (
        <div className={s.myPosts}>
            <div className={s.myPostsTitle}>
                <h3>My posts</h3>
            </div>
            <div className={s.myPostsTextArea}>
                <div>
                    <textarea
                        placeholder={"What's new?"}
                        ref={postRef}
                        value={props.postText}
                        onChange={onPostChange}
                        onKeyPress={onKeyPressAddPost}
                        className={textError}/>
                </div>
                <div>
                    <button onClick={addPost} className={s.addPostButton}>Add post</button>
                </div>
            </div>
            <div className={s.myPostsElements}>
                {postsElements}
            </div>
        </div>


    )
}

export default MyPosts