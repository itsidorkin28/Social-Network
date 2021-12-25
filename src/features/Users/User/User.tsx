import React from 'react';
import {Avatar, Button} from "@mui/material";
import s from "./User.module.scss";
import {NavLink} from 'react-router-dom';
import { UserType } from '../../../api/users-api';

type UsersType = {
    usersList: Array<UserType>
    isFollowing: Array<number>
    followUserHandler: (userID: number) => void
    unfollowUserHandler: (userID: number) => void
}

export const User = React.memo(({usersList, isFollowing, followUserHandler, unfollowUserHandler}: UsersType) => {
    const mappedUsers = usersList.map(u => {
        return (
            <div key={u.id} className={s.user}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <Avatar alt={u.name} src={u.photos?.small} sx={{width: 100, height: 100}}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <Button onClick={() => unfollowUserHandler(u.id)}
                                  variant="contained"
                                  color="error"
                                  size='small'
                                  disabled={isFollowing.some(id => id === u.id)}>Unfollow</Button>
                        : <Button onClick={() => followUserHandler(u.id)}
                                  variant="contained"
                                  color="success"
                                  size='small'
                                  disabled={isFollowing.some(id => id === u.id)}>Follow</Button>}
                </div>
                <span>{u.name}</span>
                <span>{u.status}</span>
            </div>
        )
    })



    return <div className={s.users}>
        {mappedUsers}
    </div>
})

