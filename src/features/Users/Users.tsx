import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {FilterType, followUserTC, getUsersTC, unfollowUserTC, UsersDomainType} from "./users-reducer";
import React, {useCallback, useEffect} from "react";
import {User} from "./User/User";
import {CircularProgress, Pagination} from "@mui/material";
import {UsersSearchForm} from "./UsersSearchForm";
import { Navigate } from "react-router-dom";


export const Users = React.memo(() => {
    const dispatch = useDispatch()
    const usersPage = useSelector<AppStateType, UsersDomainType>(state => state.usersPage)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersTC(1, usersPage.pageSize, filter))
    }

    useEffect(() => {
        dispatch(getUsersTC(usersPage.currentPage, usersPage.pageSize, usersPage.filter))
    }, [dispatch, usersPage.currentPage, usersPage.pageSize, usersPage.filter])

    const changeCurrentPage = useCallback((currentPage: number) => {
        dispatch(getUsersTC(currentPage, usersPage.pageSize, usersPage.filter))
    }, [dispatch, usersPage.pageSize, usersPage.filter])

    const followUserHandler = useCallback((userID: number) => {
        dispatch(followUserTC(userID))
    }, [dispatch])

    const unfollowUserHandler = useCallback((userID: number) => {
        dispatch(unfollowUserTC(userID))
    }, [dispatch])

    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)

    return (
        !isAuth ?
            <Navigate replace to="/login" />
            :
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        {usersPage.isFetching ? <CircularProgress style={{marginTop: '30px', marginBottom: '20px'}}/> :
            <User usersList={usersPage.usersList}
                  isFollowing={usersPage.isFollowing}
                  followUserHandler={followUserHandler}
                  unfollowUserHandler={unfollowUserHandler}/>}
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Pagination count={pagesCount} color="primary" onChange={(e, value) => changeCurrentPage(value)}/>
        </div>
    </div>)

})



