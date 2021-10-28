import { connect } from "react-redux";
import {AddPostAC, ChangePostAC, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";
import { Dispatch } from 'redux';

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

type MapDispatchToPropsType = {
    changePost: (value: string) => void
    addPost: (value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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

