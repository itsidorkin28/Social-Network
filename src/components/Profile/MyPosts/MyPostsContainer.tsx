import {AddPost} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostContainerType = {
    store: any
}

export const MyPostsContainer = (props: MyPostContainerType) => {
    const state = props.store.getState()
    const addPost = (value: string) => {
        const action = AddPost(value)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost} posts={state.profilePage.posts}/>
    )
}

