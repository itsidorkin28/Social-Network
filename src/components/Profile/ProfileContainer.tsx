import s from './Profile.module.scss'
import React, {ComponentType, memo, useEffect} from "react";
import {Profile} from './Profile';
import {setStatusProfileThunk, setUserProfileThunk} from "../../redux/profile/profile-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from "../../redux/redux-store";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { ProfileType } from '../../api/profile-api';

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useSelector<RootStateType, ProfileType | null>(state => state.profilePage.profile)
    const status = useSelector<RootStateType, string>(state => state.profilePage.status)
    let {userId} = useParams()

    if(!userId){
        userId = '20566';
    }


    useEffect(() => {
       dispatch(setUserProfileThunk(userId))
       dispatch(setStatusProfileThunk(userId))
    }, [dispatch, userId])

    return (
        <div className={s.profile}>
            <Profile profile={profile} status={status}/>
        </div>
    )

}

export default compose<ComponentType>(withAuthRedirect, memo)(ProfileContainer)


