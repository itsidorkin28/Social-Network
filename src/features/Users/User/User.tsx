import React from 'react';
import s from './User.module.scss';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../../api/users-api';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import {FollowButton} from '../../../components/FollowButton/FollowButton';

type UsersType = {
	usersList: Array<UserType>
	followUserHandler: (userID: number | string) => void
	unfollowUserHandler: (userID: number | string) => void
};

export const User = React.memo(({usersList, followUserHandler, unfollowUserHandler}: UsersType) => {
	const mappedUsers = usersList.map(u => {
		return (
			<Grid key={u.id} item xs>

				<div className={s.user}>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<Avatar alt={u.name} src={u.photos?.small} sx={{width: 65, height: 65}}/>
						</NavLink>
					</div>
					<h4>{u.name}</h4>
					<p>ID: {u.id}</p>
					<div>
						<FollowButton followed={u.followed}
									  userId={u.id}
									  followUserHandler={followUserHandler}
									  unfollowUserHandler={unfollowUserHandler}/>
					</div>
				</div>
			</Grid>

		);
	});

	return <div className={s.users}>
		<Grid spacing={2} container>
			{mappedUsers}
		</Grid>
	</div>;
});

