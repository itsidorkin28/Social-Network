import {AddPostAC, ChangePostAC} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()
                const addPost = (value: string) => {
                    const action = AddPostAC(value)
                    store.dispatch(action)
                }
                const changePost = (value: string) => {
                    const action = ChangePostAC(value)
                    store.dispatch(action)
                }
                return (
                    <MyPosts addPost={addPost}
                             profilePage={state.profilePage}
                             changePostText={changePost}/>
                )
            }}
        </StoreContext.Consumer>

    )
}

