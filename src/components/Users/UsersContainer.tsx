import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followUser, getUsers, unfollowUser, UserType} from "../../redux/users-reducer";
import React, {useCallback, useEffect} from "react";
import {Users} from "./Users";
import {CircularProgress, Pagination} from "@mui/material";


export const UsersContainer = React.memo(() => {
    const dispatch = useDispatch()
    const isFetching = useSelector<RootStateType, boolean>(state => state.usersPage.isFetching)
    const isFollowing = useSelector<RootStateType, Array<number>>(state => state.usersPage.isFollowing)
    const usersList = useSelector<RootStateType, Array<UserType>>(state => state.usersPage.usersList)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<RootStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<RootStateType, number>(state => state.usersPage.currentPage)

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [])

    const changeCurrentPage = useCallback((currentPage: number) => {
        dispatch(getUsers(currentPage, pageSize))
    }, [dispatch, pageSize])

    const followUserHandler = useCallback((userID: number) => {
        dispatch(followUser(userID))
    }, [dispatch])

    const unfollowUserHandler = useCallback((userID: number) => {
        dispatch(unfollowUser(userID))
    }, [dispatch])

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    return <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Pagination count={pagesCount} color="primary" onChange={(e, value) => changeCurrentPage(value)}/>
        </div>
        {isFetching ? <CircularProgress style={{marginTop: '30px', marginBottom: '20px'}}/> :
            <Users usersList={usersList}
                   isFollowing={isFollowing}
                   followUserHandler={followUserHandler}
                   unfollowUserHandler={unfollowUserHandler}/>}
    </div>

})


