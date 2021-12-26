import React from 'react';
import s from "./User.module.scss";
import {NavLink} from 'react-router-dom';
import { UserType } from '../../../api/users-api';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

type UsersType = {
    usersList: Array<UserType>
    isFollowing: Array<number>
    followUserHandler: (userID: number) => void
    unfollowUserHandler: (userID: number) => void
}

export const User = React.memo(({usersList, isFollowing, followUserHandler, unfollowUserHandler}: UsersType) => {
    const mappedUsers = usersList.map(u => {
        return (
            <Grid key={u.id} item xs={3}>

            <div className={s.user}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <Avatar alt={u.name} src={u.photos?.small} sx={{width: 65, height: 65}}/>
                    </NavLink>
                </div>
                <h4>{u.name}</h4>
                <p>ID: {u.id}</p>
                <div>
                    {u.followed
                        ? <button className={s.unfollowBtn} onClick={() => unfollowUserHandler(u.id)}
                                  disabled={isFollowing.some(id => id === u.id)}>UNFOLLOW</button>
                        : <button className={s.followBtn} onClick={() => followUserHandler(u.id)}
                                  disabled={isFollowing.some(id => id === u.id)}>FOLLOW</button>}
                </div>
            </div>
            </Grid>

        )
    })

    return <div className={s.users}>
        <Grid container spacing={2}>
            {mappedUsers}

        </Grid>
    </div>
})

