import {Avatar, Button, Grid} from '@mui/material';
import React from 'react';
import {UsersPageType, UserType} from "../../redux/users-reducer";
import s from './Users.module.scss'
import {v1} from "uuid";

type UsersType = {
    usersPage: UsersPageType
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersType) => {
    const followHandler = (id: string) => props.follow(id)
    const unFollowHandler = (id: string) => props.unfollow(id)
    if (props.usersPage.usersList.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: true,
                fullName: 'Alexander',
                status: 'React Dev',
                location: {city: 'Tula', county: 'Russia'},
                avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Alena',
                status: 'Lashmaker',
                location: {city: 'Tula', county: 'Russia'},
                avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
            }
        ])
    }

    const usersElements = props.usersPage.usersList.map(u => {
        return (
            <Grid item>
                <div key={u.id} className={s.users}>

                    <div>
                        <Avatar alt={u.fullName} src={u.avatar} sx={{width: 100, height: 100}}/>
                    </div>
                    <div>
                        {u.followed
                            ? <Button onClick={() => unFollowHandler(u.id)} variant="contained" color="error"
                                      size='small'>Unfollow</Button>
                            : <Button onClick={() => followHandler(u.id)} variant="contained" color="success"
                                      size='small'>Follow</Button>}
                    </div>
                    <div>
                        <span>{u.fullName}</span>
                    </div>
                    <div>
                        <span>{u.status}</span>
                    </div>
                    <div>
                        <span>{`${u.location.county}, ${u.location.city}`}</span>
                    </div>
                </div>
            </Grid>
        )
    })
    return (
        <div>
            <Grid container>
                {usersElements}
            </Grid>
        </div>
    );
};

