import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";

type MapStateToPropsType = {
    usersPage: UsersPageType
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

type MapDispatchToPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: string) => {
            const action = followAC(id)
            dispatch(action)
        },
        unfollow: (id: string) => {
            const action = unfollowAC(id)
            dispatch(action)
        },
        setUsers: (users: Array<UserType>) => {
            const action = setUsersAC(users)
            dispatch(action)
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

