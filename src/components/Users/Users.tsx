import React from 'react';
import {Avatar, Button, Pagination} from "@mui/material";
import s from "./Users.module.scss";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from 'react-router-dom';

type UsersType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
}

export const Users = (props: UsersType) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    return <div>
        {/*<div style={{*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'center'*/}
        {/*}}>*/}
        {/*    <Pagination count={pagesCount} color="primary" onChange={(e, value) => props.setCurrentPage(value)}/>*/}
        {/*</div>*/}
        <div className={s.users}>
            {props.usersList.map(u => {
                return (
                    <div key={u.id} className={s.user}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <Avatar alt={u.name} src={u.photos?.small} sx={{width: 100, height: 100}}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <Button onClick={() => props.unfollow(u.id)} variant="contained"
                                          color="error"
                                          size='small'>Unfollow</Button>
                                : <Button onClick={() => props.follow(u.id)} variant="contained"
                                          color="success"
                                          size='small'>Follow</Button>}
                        </div>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                    </div>
                )
            })}
        </div>
    </div>
};

