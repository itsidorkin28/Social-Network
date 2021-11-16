import {Avatar, Button, Grid} from '@mui/material';
import React from 'react';
import {UsersPageType, UserType} from "../../redux/users-reducer";
import s from './Users.module.scss'
import axios from 'axios';

type UsersType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<UsersType, UsersPageType> {
    constructor(props: UsersType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    followHandler = (id: number) => this.props.follow(id)
    unFollowHandler = (id: number) => this.props.unfollow(id)
    render() {
        return (
            <div>
                <Grid container>
                    {this.props.usersPage.usersList.map(u => {
                        return (
                            <Grid item>
                                <div key={u.id} className={s.users}>

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
                                    <div>
                                        <span>{u.name}</span>
                                    </div>
                                    <div>
                                        <span>{u.status}</span>
                                    </div>
                                    <div>
                                        <span>{'${u.location?.country}, ${u.location?.city}'}</span>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

// export const Users = (props: UsersType) => {
//     const followHandler = (id: number) => props.follow(id)
//     const unFollowHandler = (id: number) => props.unfollow(id)
//     const getUsers = () => {
//         if (props.usersPage.usersList.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//     const usersElements = props.usersPage.usersList.map(u => {
//         return (
//             <Grid item>
//                 <div key={u.id} className={s.users}>
//
//                     <div>
//                         <Avatar alt={u.name} src={u.photos?.small} sx={{width: 100, height: 100}}/>
//                     </div>
//                     <div>
//                         {u.followed
//                             ? <Button onClick={() => unFollowHandler(u.id)} variant="contained" color="error"
//                                       size='small'>Unfollow</Button>
//                             : <Button onClick={() => followHandler(u.id)} variant="contained" color="success"
//                                       size='small'>Follow</Button>}
//                     </div>
//                     <div>
//                         <span>{u.name}</span>
//                     </div>
//                     <div>
//                         <span>{u.status}</span>
//                     </div>
//                     <div>
//                         <span>{'${u.location?.country}, ${u.location?.city}'}</span>
//                     </div>
//                 </div>
//             </Grid>
//         )
//     })
//     return (
//         <div>
//             <Button onClick={getUsers} variant={'outlined'}>Get users</Button>
//             <Grid container>
//                 {usersElements}
//             </Grid>
//         </div>
//     );
// };

