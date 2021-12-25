import s from './Profile.module.scss'
import React, {useEffect} from "react";
import {UserDescription} from './UserDescription/UserDescription';
import {ProfileType} from "../../api/profile-api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {Navigate, useParams} from "react-router-dom";
import {setStatusProfileTC, setUserProfileTC} from "./profile-reducer";
import {MyPosts} from './MyPosts/MyPosts';


export const Profile = React.memo(() => {
    const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)
    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const authUserId = useSelector<AppStateType, number | null>(state => state.auth.data.id)
    let {userId}: any = useParams()

    if (!userId) {
        userId = authUserId;
    }


    useEffect(() => {
        dispatch(setUserProfileTC(userId))
        dispatch(setStatusProfileTC(userId))
    }, [dispatch, userId])


    return (
        !isAuth ?
            <Navigate replace to="/login" />
            :
        <div className={s.profile}>
            <UserDescription profile={profile} status={status}/>
            <MyPosts/>
        </div>
    )
})