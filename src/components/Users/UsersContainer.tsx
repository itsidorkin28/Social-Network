import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {CircularProgress, Pagination} from "@mui/material";

type UsersContainerType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerType, UsersPageType> {
    // constructor(props: UsersContainerType) {
    //     super(props);
    //
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        return <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Pagination count={pagesCount} color="primary" onChange={(e, value) => this.setCurrentPage(value)}/>
            </div>
            {this.props.isFetching ? <CircularProgress style={{marginTop: '30px', marginBottom: '20px'}}/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.setCurrentPage}
                       usersList={this.props.usersList}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />}
        </div>
    }
}

type MapStateToPropsType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)

