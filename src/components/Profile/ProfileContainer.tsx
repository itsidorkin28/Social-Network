import s from './Profile.module.scss'
import React, {ComponentType, memo, useEffect} from "react";
import {Profile} from './Profile';
import {setStatusProfileTC, setUserProfileTC} from "./profile-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../app/redux-store";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { ProfileType } from '../../api/profile-api';

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)
    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    let {userId} = useParams()

    if(!userId){
        userId = '20566';
    }


    useEffect(() => {
       dispatch(setUserProfileTC(userId))
       dispatch(setStatusProfileTC(userId))
    }, [dispatch, userId])

    return (
        <div className={s.profile}>
            <Profile profile={profile} status={status}/>
        </div>
    )

}

export default compose<ComponentType>(withAuthRedirect, memo)(ProfileContainer)


