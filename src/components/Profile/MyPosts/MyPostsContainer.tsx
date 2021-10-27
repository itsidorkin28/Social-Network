import React from 'react'
import { connect } from "react-redux";
import {AddPostAC, ChangePostAC, ProfileActionsTypes} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionsTypes) => void) => {
    return {
        changePost: (value: string) => {
            const action = ChangePostAC(value)
            dispatch(action)
        },
        addPost: (value: string) => {
            const action = AddPostAC(value)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

