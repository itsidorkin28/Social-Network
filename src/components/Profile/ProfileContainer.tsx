import s from './Profile.module.scss'
import React, {useEffect} from "react";
import {Profile} from './Profile';
import {setUserProfileThunk, UserDescriptionType} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from "../../redux/redux-store";
import {useParams} from 'react-router-dom';

export const ProfileContainer = React.memo(() => {
    const dispatch = useDispatch()
    const profile = useSelector<RootStateType, UserDescriptionType>(state => state.profilePage.profile)
    let {userID} = useParams()
    // if(!userID){
    //     userID = '2'
    // }
    useEffect(() => {
       dispatch(setUserProfileThunk(userID))
    }, [dispatch, userID])


    return (
        <div className={s.profile}>
            <Profile profile={profile}/>
        </div>
    )

})


