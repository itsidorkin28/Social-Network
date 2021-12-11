import s from './Profile.module.scss'
import React, {useEffect} from "react";
import {Profile} from './Profile';
import {setUserProfileThunk, UserDescriptionType} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from "../../redux/redux-store";
import {useMatch, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export const ProfileContainer = withAuthRedirect(() => {
    const dispatch = useDispatch()
    const profile = useSelector<RootStateType, UserDescriptionType>(state => state.profilePage.profile)
    let {userId} = useParams()

    if(!userId){
        userId = '2';
    }


    useEffect(() => {
       dispatch(setUserProfileThunk(userId))
    }, [dispatch, userId])

    return (
        <div className={s.profile}>
            <Profile profile={profile}/>
        </div>
    )

})


