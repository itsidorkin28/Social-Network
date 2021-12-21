import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {FilterType, followUserTC, getUsersTC, unfollowUserTC} from "./users-reducer";
import React, {ComponentType, memo, useCallback, useEffect} from "react";
import {Users} from "./Users";
import {CircularProgress, Pagination} from "@mui/material";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserType} from "../../api/users-api";
import {UsersSearchForm} from "./UsersSearchForm";


const UsersContainer = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector<AppStateType, boolean>(state => state.usersPage.isFetching)
    const isFollowing = useSelector<AppStateType, Array<number>>(state => state.usersPage.isFollowing)
    const usersList = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const filter = useSelector<AppStateType, FilterType>(state => state.usersPage.filter)


    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter))
    }

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize, filter))
    }, [dispatch, currentPage, pageSize, filter])

    const changeCurrentPage = useCallback((currentPage: number) => {
        dispatch(getUsersTC(currentPage, pageSize, filter))
    }, [dispatch, pageSize, filter])

    const followUserHandler = useCallback((userID: number) => {
        dispatch(followUserTC(userID))
    }, [dispatch])

    const unfollowUserHandler = useCallback((userID: number) => {
        dispatch(unfollowUserTC(userID))
    }, [dispatch])

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    return <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        {isFetching ? <CircularProgress style={{marginTop: '30px', marginBottom: '20px'}}/> :
            <Users usersList={usersList}
                   isFollowing={isFollowing}
                   followUserHandler={followUserHandler}
                   unfollowUserHandler={unfollowUserHandler}/>}
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Pagination count={pagesCount} color="primary" onChange={(e, value) => changeCurrentPage(value)}/>
        </div>
    </div>

}


export default compose<ComponentType>(withAuthRedirect, memo)(UsersContainer)

