import {useSelector} from "react-redux";
import React from 'react'
import {ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";



export const MyPostsContainer = React.memo(() => {
    const profilePage = useSelector<RootStateType, ProfilePageType>(state => state.profilePage)
    return <MyPosts profilePage={profilePage}/>
})

