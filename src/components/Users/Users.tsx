import React from 'react';
import {Avatar, Button} from "@mui/material";
import s from "./Users.module.scss";
import {follow, toggleIsFollowing, unfollow, UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from "axios";

type UsersType = {
    usersList: Array<UserType>
    isFollowing: Array<number>
}

export const Users = React.memo(({usersList, isFollowing}: UsersType) => {
    const dispatch = useDispatch()

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
                                ? <Button onClick={() => {
                                    dispatch(toggleIsFollowing(true, u.id))
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                dispatch(unfollow(u.id))
                                            }
                                            dispatch(toggleIsFollowing(false, u.id))
                                        })
                                }} variant="contained"
                                          color="error"
                                          size='small'
                                          disabled={isFollowing.some(id => id === u.id)}>Unfollow</Button>
                                : <Button onClick={() => {
                                    dispatch(toggleIsFollowing(true, u.id))
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                dispatch(follow(u.id))
                                            }
                                            dispatch(toggleIsFollowing(false, u.id))
                                        })
                                }}
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

