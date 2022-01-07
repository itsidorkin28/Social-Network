import s from './Profile.module.scss';
import React, {useCallback, useEffect} from 'react';
import {About} from './About/About';
import {ProfileType} from '../../api/profile-api';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../app/redux-store';
import {Params, useParams} from 'react-router-dom';
import {getUserFollowedTC, setStatusProfileTC, setUserProfileTC} from './profile-reducer';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {Avatar} from '@mui/material';
import styled from 'styled-components';
import imag from '../../assets/images/bgnode.jpg';
import {FollowButton} from '../../components/FollowButton/FollowButton';
import {followUserTC, unfollowUserTC} from '../Users/users-reducer';

const HeadImg = styled.div<{ img: string }>`
    border-radius: 15px;
    height: 70%;
    width: 100%;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    overflow: hidden;
`;

export const Profile = React.memo(() => {
	const dispatch = useDispatch();
	const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile);
	const followed = useSelector<AppStateType, boolean>(state => state.profilePage.followed);
	const status = useSelector<AppStateType, string>(state => state.profilePage.status);
	const authUserId = useSelector<AppStateType, number | null>(state => state.auth.data.id);
	let {userId}: Readonly<Params<string>> = useParams();

	if (!userId) {
		userId = String(authUserId);
	}

	useEffect(() => {
		dispatch(getUserFollowedTC(userId));
	}, [dispatch, userId]);

	useEffect(() => {
		dispatch(setUserProfileTC(userId));
		dispatch(setStatusProfileTC(userId));
	}, [dispatch, userId]);

	const followUserHandler = useCallback((userID: number | string) => {
		dispatch(followUserTC(userID));
	}, [dispatch]);

	const unfollowUserHandler = useCallback((userID: number | string) => {
		dispatch(unfollowUserTC(userID));
	}, [dispatch]);

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
								sx={{
									width: 100,
									height: 100,
									border: '4px solid white',
									position: 'absolute',
									top: '-85px',
									left: '25px'
								}}/>
					</div>
					<div className={s.info}>
						<div>
							<h4>{profile?.fullName}</h4>
							<ProfileStatus status={status}/>
						</div>
						<div>
							<FollowButton followed={followed}
										  followUserHandler={followUserHandler}
										  unfollowUserHandler={unfollowUserHandler}
										  userId={userId}
							/>
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
	);
});