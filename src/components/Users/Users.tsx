import React from 'react';
import {Avatar, Button} from "@mui/material";
import s from "./Users.module.scss";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';

type UsersType = {
    usersList: Array<UserType>
    isFollowing: Array<number>
    followUserHandler: (userID: number) => void
    unfollowUserHandler: (userID: number) => void
}

export const Users = React.memo(({usersList, isFollowing, followUserHandler, unfollowUserHandler}: UsersType) => {
    return <div>
        <div className={s.users}>
            {usersList.map(u => {
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
            })}
        </div>
    </div>
})

