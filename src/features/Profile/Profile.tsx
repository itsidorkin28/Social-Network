import s from './Profile.module.scss'
import React, {useEffect} from "react";
import {About} from './About/About';
import {ProfileType} from "../../api/profile-api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {useParams} from "react-router-dom";
import {setStatusProfileTC, setUserProfileTC} from "./profile-reducer";
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {Avatar} from "@mui/material";
import styled from 'styled-components';
import imag from '../../assets/images/bgnode.jpg'


export const Profile = React.memo(() => {
    const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)
    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const authUserId = useSelector<AppStateType, number | null>(state => state.auth.data.id)
    let {userId}: any = useParams()

    if (!userId) {
        userId = authUserId;
    }


    useEffect(() => {
        dispatch(setUserProfileTC(userId))
        dispatch(setStatusProfileTC(userId))
    }, [dispatch, userId])

    const HeadImg = styled.div<{ img: any }>`
        border-radius: 15px;
        height: 70%;
        width: 100%;
        background-image: url(${props => props.img});
        background-position: center;
        background-size: cover;
        overflow: hidden;
    `
    return (
        <div className={s.profile}>
            <div className={s.profileHeader}>
                {profile?.photos.large
                    ? <HeadImg img={profile?.photos.large}/>
                    : <HeadImg img={imag}/>}
                <div className={s.headInfo}>
                    <div className={s.avatar}>
                        <Avatar alt={profile?.fullName}
                                src={profile?.photos.small}
                                sx={{width: 100, height: 100, border: '4px solid white', position: "absolute", top: '-85px',
                                    left: '25px'}}/>
                    </div>
                    <div className={s.info}>
                        <div>
                            <h4>{profile?.fullName}</h4>
                            <ProfileStatus status={status}/>
                        </div>
                        <div>
                            <button>ssss</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.profileContent}>
                <div className={s.about}>
                    <About aboutMe={profile?.aboutMe}/>
                </div>
                <div className={s.posts}>
                    <MyPosts avatar={profile?.photos.small} name={profile?.fullName}/>
                </div>
            </div>
        </div>
    )
})