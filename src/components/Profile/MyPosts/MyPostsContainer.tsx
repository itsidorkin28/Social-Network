import { connect } from "react-redux";
import {addPost, changePost, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    changePost,
    addPost,
})(MyPosts)

