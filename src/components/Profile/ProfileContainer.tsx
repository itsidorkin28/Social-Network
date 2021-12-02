import s from './Profile.module.scss'
import React, {useEffect} from "react";
import {Profile} from './Profile';
import {setUserProfile, UserDescriptionType} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from "../../redux/redux-store";

import axios from "axios";

import {useParams} from 'react-router-dom';


export const ProfileContainer = React.memo(() => {
    const dispatch = useDispatch()
    const profile = useSelector<RootStateType, UserDescriptionType>(state => state.profilePage.profile)
    let {userId} = useParams()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }, [])


    return (
        <div className={s.profile}>
            <Profile profile={profile}/>
        </div>
    )

})


