import {Avatar, Button, ButtonGroup, Pagination} from '@mui/material';
import React from 'react';
import {UsersPageType, UserType} from "../../redux/users-reducer";
import s from './Users.module.scss'
import axios from 'axios';

type UsersType = {
    usersList: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<UsersType, UsersPageType> {
    constructor(props: UsersType) {
        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    followHandler = (id: number) => this.props.follow(id)
    unFollowHandler = (id: number) => this.props.unfollow(id)
    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        return (
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Pagination count={pagesCount} color="primary" onChange={(e, value) => this.setCurrentPage(value)}/>
                </div>
                <div className={s.users}>
                    {this.props.usersList.map(u => {
                        return (
                            <div key={u.id} className={s.user}>
                                <div>
                                    <Avatar alt={u.name} src={u.photos?.small} sx={{width: 100, height: 100}}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <Button onClick={() => this.unFollowHandler(u.id)} variant="contained"
                                                  color="error"
                                                  size='small'>Unfollow</Button>
                                        : <Button onClick={() => this.followHandler(u.id)} variant="contained"
                                                  color="success"
                                                  size='small'>Follow</Button>}
                                </div>
                                <span>{u.name}</span>
                                <span>{u.status}</span>
                                <span>{'${u.location?.country}, ${u.location?.city}'}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
