import { connect } from "react-redux";
import {addPost, changePost, ProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    changePost,
    addPost,
})(MyPosts)

