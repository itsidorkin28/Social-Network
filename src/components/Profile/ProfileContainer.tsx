import s from './Profile.module.scss'
import React from "react";
import {Profile} from './Profile';
import {addPost, changePost, ProfilePageType, setUserProfile, UserDescriptionType} from "../../redux/profile-reducer";
import {connect} from 'react-redux';
import {StateType} from "../../redux/redux-store";
import {PostType} from "./MyPosts/Post/Post";
import axios from "axios";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type OwnProfileContainerType = {
    setUserProfile: (profile: UserDescriptionType) => void
    profile: UserDescriptionType
}

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProfileContainerType

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

type mapStateToPropsType = {
    posts: Array<PostType>
    postText: string
    profile: UserDescriptionType
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    addPost,
    changePost,
    setUserProfile,
})(WithUrlDataContainerComponent)

