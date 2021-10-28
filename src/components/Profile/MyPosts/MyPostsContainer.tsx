import { connect } from "react-redux";
import {addPostAC, changePostAC, ProfilePageType} from "../../../redux/profile-reducer";
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
            const action = changePostAC(value)
            dispatch(action)
        },
        addPost: (value: string) => {
            const action = addPostAC(value)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

